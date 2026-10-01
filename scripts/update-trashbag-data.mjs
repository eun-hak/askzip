#!/usr/bin/env node
/**
 * 종량제봉투 가격 데이터 갱신 스크립트
 *
 * 공공데이터포털 「전국종량제봉투가격표준데이터」(15025538)를 공개 JSON 엔드포인트에서
 * 받아 public/data/trash-bags/ 에 생성한다. 인증키 불필요. 월 1회 실행 권장:
 *   node scripts/update-trashbag-data.mjs
 *
 * 산출물:
 *   public/data/trash-bags/index.json   시도·시군구 목록 + 통계
 *   public/data/trash-bags/<sido>.json  시도별 데이터
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const PK = '15025538';
const BASE = 'https://www.data.go.kr/download';
const OUT_DIR = path.join(process.cwd(), 'public', 'data', 'trash-bags');

const SIDO_SLUG = {
  서울특별시: 'seoul', 부산광역시: 'busan', 대구광역시: 'daegu', 인천광역시: 'incheon',
  광주광역시: 'gwangju', 대전광역시: 'daejeon', 울산광역시: 'ulsan', 세종특별자치시: 'sejong',
  경기도: 'gyeonggi', 강원특별자치도: 'gangwon', 충청북도: 'chungbuk', 충청남도: 'chungnam',
  전북특별자치도: 'jeonbuk', 전라남도: 'jeonnam', 경상북도: 'gyeongbuk', 경상남도: 'gyeongnam',
  제주특별자치도: 'jeju',
};

/** 가격 컬럼 → 리터 */
const PRICE_COLS = [
  ['PRICE_1', 1], ['PRICE_1_HALF', 1.5], ['PRICE_2', 2], ['PRICE_2_HALF', 2.5],
  ['PRICE_3', 3], ['PRICE_5', 5], ['PRICE_10', 10], ['PRICE_20', 20],
  ['PRICE_30', 30], ['PRICE_50', 50], ['PRICE_60', 60], ['PRICE_75', 75],
  ['PRICE_100', 100], ['PRICE_120', 120], ['PRICE_125', 125],
];

function fetchJson(url) {
  const out = execFileSync('curl', ['-s', '--max-time', '60', url], {
    maxBuffer: 64 * 1024 * 1024,
  }).toString('utf8');
  if (!out) throw new Error(`empty response for ${url}`);
  return JSON.parse(out);
}

async function main() {
  const header = fetchJson(`${BASE}/columList.json?pk=${PK}&ext=CSV`);
  const cols = header.tableVO?.colNmList ?? header.columList.map((c) => c.columCode);
  const totalCount = Number(header.totalCount ?? header.tableVO?.totalCount);
  const tableNm = header.tableVO?.svcTableNm ?? 'tn_pubr_public_weighted_envlp_svc';
  if (!totalCount || totalCount < 100) throw new Error(`totalCount 이상: ${totalCount}`);

  const perPage = 10000;
  const pages = Math.ceil(totalCount / perPage);
  const rows = [];
  for (let p = 1; p <= pages; p++) {
    const colParams = cols.map((c) => `colNmList=${c}`).join('&');
    const url = `${BASE}/standard.json?publicDataPk=${PK}&${colParams}&totalCount=${totalCount}&svcTableNm=${tableNm}&perPage=${perPage}&page=${p}`;
    const data = fetchJson(url);
    rows.push(...(Array.isArray(data) ? data : (data.data ?? data.currentList ?? [])));
  }
  console.log(`rows=${rows.length}`);

  const bySido = new Map();
  for (const r of rows) {
    const sido = (r.CTPRVN_NM ?? '').trim();
    const sigungu = (r.SIGNGU_NM ?? '').trim();
    if (!sido || !sigungu || !SIDO_SLUG[sido]) continue;
    const prices = {};
    for (const [col, liter] of PRICE_COLS) {
      const v = Number(String(r[col] ?? '').replace(/[^0-9]/g, ''));
      if (v > 0) prices[liter] = v;
    }
    if (Object.keys(prices).length === 0) continue;
    const item = {
      type: (r.WEIGHTED_ENVLP_TYPE ?? '').trim(),      // 봉투 종류(규격봉투 등)
      method: (r.WEIGHTED_ENVLP_MTHD ?? '').trim(),    // 처리방식(매립/소각)
      purpose: (r.WEIGHTED_ENVLP_PRPOS ?? '').trim(),  // 용도(생활쓰레기/음식물 등)
      target: (r.WEIGHTED_ENVLP_TRGET ?? '').trim(),   // 사용대상(가정용/사업장용)
      prices,
      baseDate: (r.REFERENCE_DATE ?? '').trim(),
    };
    if (!bySido.has(sido)) bySido.set(sido, new Map());
    const byGu = bySido.get(sido);
    if (!byGu.has(sigungu)) byGu.set(sigungu, []);
    byGu.get(sigungu).push(item);
  }

  await mkdir(OUT_DIR, { recursive: true });
  const index = {
    updatedAt: new Date().toISOString().slice(0, 10),
    source: '공공데이터포털 전국종량제봉투가격표준데이터(15025538)',
    sido: [],
  };
  let totalRows = 0;

  for (const [sido, byGu] of [...bySido.entries()].sort()) {
    const out = {};
    const idx = [];
    for (const [gu, items] of [...byGu.entries()].sort()) {
      const baseDate = items.reduce((a, b) => (b.baseDate > a ? b.baseDate : a), '');
      out[gu] = { baseDate, items };
      idx.push({ name: gu, baseDate, itemCount: items.length });
      totalRows += items.length;
    }
    await writeFile(path.join(OUT_DIR, `${SIDO_SLUG[sido]}.json`), JSON.stringify({ sido, sigungu: out }));
    index.sido.push({ name: sido, file: `${SIDO_SLUG[sido]}.json`, sigungu: idx });
  }

  index.totalRows = totalRows;
  index.sigunguCount = index.sido.reduce((s, x) => s + x.sigungu.length, 0);
  await writeFile(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 1));
  console.log(`done: ${index.sigunguCount} 지자체, ${totalRows} 행`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
