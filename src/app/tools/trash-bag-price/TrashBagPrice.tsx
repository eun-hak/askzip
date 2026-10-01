'use client';

import { useEffect, useMemo, useState } from 'react';

interface BagItem {
  type: string;
  method: string;
  purpose: string;
  target: string;
  prices: Record<string, number>;
  baseDate: string;
}
interface TrashIndex {
  updatedAt: string;
  sigunguCount: number;
  sido: { name: string; file: string; sigungu: { name: string; baseDate: string }[] }[];
}
interface SidoData {
  sido: string;
  sigungu: Record<string, { baseDate: string; items: BagItem[] }>;
}

/** 표에 보여줄 대표 규격 */
const LITERS = ['1', '2', '3', '5', '10', '20', '30', '50', '75', '100'];

const won = (n: number) => n.toLocaleString('ko-KR');

export default function TrashBagPrice() {
  const [index, setIndex] = useState<TrashIndex | null>(null);
  const [sidoName, setSidoName] = useState('');
  const [sigunguName, setSigunguName] = useState('');
  const [sidoData, setSidoData] = useState<SidoData | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetch('/data/trash-bags/index.json')
      .then((r) => r.json())
      .then(setIndex)
      .catch(() => setLoadError(true));
  }, []);

  const sido = index?.sido.find((s) => s.name === sidoName) ?? null;

  useEffect(() => {
    if (!sido) return;
    let alive = true;
    fetch(`/data/trash-bags/${sido.file}`)
      .then((r) => r.json())
      .then((d) => alive && setSidoData(d))
      .catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, [sido]);

  const region =
    sidoData && sidoData.sido === sidoName ? (sidoData.sigungu[sigunguName] ?? null) : null;

  /** 용도 → 품목들 */
  const grouped = useMemo(() => {
    if (!region) return [];
    const map = new Map<string, BagItem[]>();
    for (const it of region.items) {
      const key = `${it.purpose || '기타'} · ${it.target || '-'}${it.method ? ` · ${it.method}` : ''}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(it);
    }
    return [...map.entries()];
  }, [region]);

  /** 해당 그룹에서 실제 값이 있는 규격만 */
  const usedLiters = (items: BagItem[]) =>
    LITERS.filter((L) => items.some((it) => it.prices[L] !== undefined));

  if (loadError) {
    return (
      <p className="text-secondary text-[14px]">
        데이터를 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-surface border border-site-border rounded-xl p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="flex flex-col gap-4">
          {grouped.map(([label, items]) => {
            const liters = usedLiters(items);
            return (
              <div
                key={label}
                className="bg-site-white border border-site-border rounded-xl overflow-hidden"
              >
                <p className="px-4 py-2.5 bg-surface text-primary text-[14px] font-semibold">
                  {label}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="text-muted text-left border-b border-border-light">
                        <th className="py-2 px-4 font-medium">종류</th>
                        {liters.map((L) => (
                          <th key={L} className="py-2 px-3 font-medium text-right whitespace-nowrap">
                            {L}ℓ
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((it, i) => (
                        <tr key={i} className="border-t border-border-light">
                          <td className="py-2 px-4 text-secondary">{it.type || '규격봉투'}</td>
                          {liters.map((L) => (
                            <td key={L} className="py-2 px-3 text-right whitespace-nowrap">
                              {it.prices[L] !== undefined ? (
                                <span className="text-primary font-medium">
                                  {won(it.prices[L])}원
                                </span>
                              ) : (
                                <span className="text-muted">-</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
          <p className="text-muted text-[12px] leading-[1.7]">
            {sigunguName} 데이터 기준일 {region.baseDate}
            {region.baseDate < '2025-01-01' &&
              ' — 기준일이 오래돼 현재 가격과 다를 수 있으니 지자체 공지를 함께 확인하세요'}
            . 종량제봉투 가격은 조례로 정해지며, 판매처(마트·편의점)에 따라 실제 판매가가 다를 수
            있습니다. 봉투 종류·용도를 잘못 사면 수거되지 않으니 용도(생활/음식물)와 사용 대상을
            확인하고 구입하세요.
          </p>
        </div>
      )}
    </div>
  );
}
