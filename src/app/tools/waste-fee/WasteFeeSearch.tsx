'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';

/** [name, category, spec, feeMin, feeMax, free] */
type ItemTuple = [string, string, string, number, number, number];

interface SigunguIndex {
  name: string;
  baseDate: string;
  itemCount: number;
}
interface WasteIndex {
  updatedAt: string;
  source: string;
  sigunguCount: number;
  totalItems: number;
  sido: { name: string; file: string; sigungu: SigunguIndex[] }[];
}
interface SidoData {
  sido: string;
  sigungu: Record<string, { baseDate: string; items: ItemTuple[] }>;
}

/** 검색 관용 표기 통일 (소파=쇼파 등) */
const SYNONYMS: [RegExp, string][] = [
  [/쇼파/g, '소파'],
  [/티비|텔레비전|텔레비젼/g, 'tv'],
  [/장농/g, '장롱'],
  [/매트리스|메트리스/g, '매트리스'],
];
function fold(s: string): string {
  let out = s.toLowerCase().replace(/\s+/g, '');
  for (const [re, to] of SYNONYMS) out = out.replace(re, to);
  return out;
}

const QUICK_ITEMS = ['소파', '매트리스', '침대', '장롱', '책상', '의자', '책장', '서랍장', '자전거', '항아리'];

const won = (n: number) => n.toLocaleString('ko-KR');

export default function WasteFeeSearch() {
  const [index, setIndex] = useState<WasteIndex | null>(null);
  const [sidoName, setSidoName] = useState('');
  const [sigunguName, setSigunguName] = useState('');
  const [sidoData, setSidoData] = useState<SidoData | null>(null);
  const [query, setQuery] = useState('');
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetch('/data/waste-fees/index.json')
      .then((r) => r.json())
      .then(setIndex)
      .catch(() => setLoadError(true));
  }, []);

  const sido = index?.sido.find((s) => s.name === sidoName) ?? null;

  useEffect(() => {
    if (!sido) return;
    let alive = true;
    fetch(`/data/waste-fees/${sido.file}`)
      .then((r) => r.json())
      .then((d) => alive && setSidoData(d))
      .catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, [sido]);

  // 선택된 시도의 데이터가 로드된 경우에만 사용 (시도 변경 직후 이전 데이터 무시)
  const region =
    sidoData && sidoData.sido === sidoName ? (sidoData.sigungu[sigunguName] ?? null) : null;

  const results = useMemo(() => {
    if (!region) return [];
    const q = fold(query);
    if (!q) return [];
    return region.items.filter((it) => fold(it[0]).includes(q) || fold(it[1]).includes(q));
  }, [region, query]);

  if (loadError) {
    return (
      <p className="text-secondary text-[14px]">
        데이터를 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-surface border border-site-border rounded-xl p-5 md:p-6 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-secondary text-[13px] font-medium">시·도</span>
            <select
              value={sidoName}
              onChange={(e) => {
                setSidoName(e.target.value);
                setSigunguName('');
              }}
              className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
            >
              <option value="">선택하세요</option>
              {index?.sido.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-secondary text-[13px] font-medium">시·군·구</span>
            <select
              value={sigunguName}
              onChange={(e) => setSigunguName(e.target.value)}
              disabled={!sido}
              className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent disabled:opacity-40"
            >
              <option value="">{sido ? '선택하세요' : '시·도부터 선택'}</option>
              {sido?.sigungu.map((g) => (
                <option key={g.name} value={g.name}>
                  {g.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        {region && (
          <>
            <label className="flex flex-col gap-1.5">
              <span className="text-secondary text-[13px] font-medium">버릴 물건 검색</span>
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="예: 소파, 매트리스, 책상"
                  className="w-full h-11 pl-9 pr-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
                />
              </div>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_ITEMS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setQuery(q)}
                  className="rounded-full border border-site-border bg-site-white px-3 py-1 text-[12px] text-secondary hover:text-primary hover:border-accent transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
            <p className="text-muted text-[12px]">
              {sigunguName} 등록 품목 {region.items.length.toLocaleString()}개 · 데이터 기준일{' '}
              {region.baseDate}
              {region.baseDate < '2025-01-01' &&
                ' — 기준일이 오래돼 현재 요금과 다를 수 있으니 지자체 공지를 함께 확인하세요'}
            </p>
          </>
        )}
      </div>

      {region && query && (
        <div className="bg-site-white border border-site-border rounded-xl overflow-hidden">
          {results.length === 0 ? (
            <p className="p-5 text-secondary text-[14px] leading-[1.7]">
              &ldquo;{query}&rdquo; 검색 결과가 없습니다. 다른 이름(예: 옷장↔장롱)으로 검색해
              보거나, 목록에 없는 품목은 {sigunguName} 배출 신고 창구에서 &ldquo;기타&rdquo;
              항목으로 문의하세요.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-surface text-muted text-left">
                    <th className="py-2.5 px-4 font-medium">품목</th>
                    <th className="py-2.5 px-4 font-medium">구분</th>
                    <th className="py-2.5 px-4 font-medium">규격</th>
                    <th className="py-2.5 px-4 font-medium text-right">수수료</th>
                  </tr>
                </thead>
                <tbody>
                  {results.slice(0, 60).map((it, i) => (
                    <tr key={i} className="border-t border-border-light">
                      <td className="py-2 px-4 text-primary font-medium">{it[0]}</td>
                      <td className="py-2 px-4 text-secondary">{it[1] || '-'}</td>
                      <td className="py-2 px-4 text-secondary">{it[2] || '-'}</td>
                      <td className="py-2 px-4 text-right whitespace-nowrap">
                        {it[5] === 1 ? (
                          <span className="text-accent-text font-semibold">무료</span>
                        ) : it[3] === it[4] ? (
                          <span className="text-primary font-medium">{won(it[3])}원</span>
                        ) : (
                          <span className="text-primary font-medium">
                            {won(it[3])}~{won(it[4])}원
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {results.length > 60 && (
                <p className="p-3 text-muted text-[12px]">
                  {results.length}건 중 60건 표시 — 검색어를 더 구체적으로 입력해 보세요.
                </p>
              )}
            </div>
          )}
          <p className="p-4 border-t border-border-light text-muted text-[12px] leading-[1.7]">
            요금이 범위(예: 3,000~10,000원)로 표시되는 품목은 크기·재질에 따라 요금이 갈리는
            경우입니다. 정확한 금액은 배출 신고 시 확정됩니다. 신고 없이 내놓으면 무단투기
            과태료 대상이 되니 반드시 지자체 배출 신고(인터넷·주민센터) 후 스티커를 부착하세요.
          </p>
        </div>
      )}
    </div>
  );
}
