#!/usr/bin/env node
/**
 * 대형폐기물 수수료 데이터 갱신 스크립트
 *
 * 공공데이터포털 「전국대형폐기물수거수수료정보표준데이터」(15114146)를
 * 공개 JSON 엔드포인트에서 받아 public/data/waste-fees/ 에 생성한다.
 * 인증키 불필요. 표준데이터 병합본은 매월 초 갱신되므로 월 1회 실행 권장:
 *   node scripts/update-waste-data.mjs
 *
 * 산출물:
 *   public/data/waste-fees/index.json          시도·시군구 목록 + 통계
 *   public/data/waste-fees/<sido>.json         시도별 데이터 (품목 튜플 배열)
 *     items: [name, category, spec, feeMin, feeMax, free]
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const PK = '15114146';
const BASE = 'https://www.data.go.kr/download';
const OUT_DIR = path.join(process.cwd(), 'public', 'data', 'waste-fees');

const SIDO_SLUG = {
  서울특별시: 'seoul', 부산광역시: 'busan', 대구광역시: 'daegu', 인천광역시: 'incheon',
  광주광역시: 'gwangju', 대전광역시: 'daejeon', 울산광역시: 'ulsan', 세종특별자치시: 'sejong',
  경기도: 'gyeonggi', 강원특별자치도: 'gangwon', 충청북도: 'chungbuk', 충청남도: 'chungnam',
  전북특별자치도: 'jeonbuk', 전라남도: 'jeonnam', 경상북도: 'gyeongbuk', 경상남도: 'gyeongnam',
  제주특별자치도: 'jeju',
};

// data.go.kr가 비브라우저 fetch를 차단하는 경우가 있어 curl로 요청한다
function fetchJson(url) {
  const out = execFileSync('curl', ['-s', '--max-time', '60', url], {
    maxBuffer: 64 * 1024 * 1024,
  }).toString('utf8');
  if (!out) throw new Error(`empty response for ${url}`);
  return JSON.parse(out);
}

async function main() {
  // 1. 컬럼 정의 + totalCount (유효 컬럼은 tableVO.colNmList 기준)
  const header = fetchJson(`${BASE}/columList.json?pk=${PK}&ext=CSV`);
  const cols = header.tableVO?.colNmList ?? header.columList.map((c) => c.columCode);
  const totalCount = Number(header.totalCount ?? header.tableVO?.totalCount);
  const tableNm = header.tableVO?.svcTableNm ?? 'tn_pubr_public_lar_was_fee_svc';
  if (!totalCount || totalCount < 1000) throw new Error(`totalCount 이상: ${totalCount}`);
  console.log(`columns=${cols.length} totalCount=${totalCount}`);

  // 2. 데이터 페이지 수집
  const perPage = 10000;
  const pages = Math.ceil(totalCount / perPage);
  const rows = [];
  for (let p = 1; p <= pages; p++) {
    const colParams = cols.map((c) => `colNmList=${c}`).join('&');
    const url = `${BASE}/standard.json?publicDataPk=${PK}&${colParams}&totalCount=${totalCount}&svcTableNm=${tableNm}&perPage=${perPage}&page=${p}`;
    const data = fetchJson(url);
    const list = Array.isArray(data) ? data : (data.data ?? data.currentList ?? []);
    rows.push(...list);
    console.log(`page ${p}/${pages}: +${list.length}`);
  }

  // 3. 시도→시군구 그룹핑 + 정규화
  const bySido = new Map();
  for (const r of rows) {
    const sido = (r.CTPV_NM ?? '').trim();
    const sigungu = (r.SGG_NM ?? '').trim();
    if (!sido || !sigungu || !SIDO_SLUG[sido]) continue;
    const name = (r.LAR_WAS_NM ?? '').trim();
    if (!name) continue;
    const fee = Number(String(r.FEE ?? '').replace(/[^0-9]/g, '')) || 0;
    const item = {
      name,
      category: (r.LAR_WAS_SE_NM ?? '').trim(),
      spec: (r.LAR_WAS_SPCFCT ?? '').trim(),
      fee,
      free: (r.PAID_FREE_YN ?? '').includes('무료') || fee === 0,
      baseDate: (r.CRTR_YMD ?? '').trim(),
    };
    if (!bySido.has(sido)) bySido.set(sido, new Map());
    const byGu = bySido.get(sido);
    if (!byGu.has(sigungu)) byGu.set(sigungu, []);
    byGu.get(sigungu).push(item);
  }

  // 4. 중복 제거 + (name,category,spec) 병합(수수료 범위)
  await mkdir(OUT_DIR, { recursive: true });
  const index = { updatedAt: new Date().toISOString().slice(0, 10), source: '공공데이터포털 전국대형폐기물수거수수료정보표준데이터(15114146)', sido: [] };
  let totalItems = 0;

  for (const [sido, byGu] of [...bySido.entries()].sort()) {
    const sigunguOut = {};
    const sigunguIndex = [];
    for (const [gu, items] of [...byGu.entries()].sort()) {
      const merged = new Map();
      let baseDate = '';
      for (const it of items) {
        if (it.baseDate > baseDate) baseDate = it.baseDate;
        const key = `${it.name}|${it.category}|${it.spec}`;
        if (!merged.has(key)) {
          merged.set(key, { ...it, feeMin: it.fee, feeMax: it.fee });
        } else {
          const m = merged.get(key);
          m.feeMin = Math.min(m.feeMin, it.fee);
          m.feeMax = Math.max(m.feeMax, it.fee);
          m.free = m.free && it.free;
        }
      }
      const tuples = [...merged.values()]
        .sort((a, b) => a.name.localeCompare(b.name, 'ko'))
        .map((m) => [m.name, m.category, m.spec, m.feeMin, m.feeMax, m.free ? 1 : 0]);
      sigunguOut[gu] = { baseDate, items: tuples };
      sigunguIndex.push({ name: gu, baseDate, itemCount: tuples.length });
      totalItems += tuples.length;
    }
    const slug = SIDO_SLUG[sido];
    await writeFile(path.join(OUT_DIR, `${slug}.json`), JSON.stringify({ sido, sigungu: sigunguOut }));
    index.sido.push({ name: sido, file: `${slug}.json`, sigungu: sigunguIndex });
  }

  index.totalItems = totalItems;
  index.sigunguCount = index.sido.reduce((s, x) => s + x.sigungu.length, 0);
  await writeFile(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 1));
  console.log(`done: ${index.sigunguCount} 지자체, ${totalItems} 품목(병합 후)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
