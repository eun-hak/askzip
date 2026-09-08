'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { documents, situations, type ChannelType, type SituationDocRef } from '@/data/document-map';
import { RotateCcw, Clock, AlertCircle } from 'lucide-react';

const CHANNEL_LABELS: Record<ChannelType, string> = {
  online: '온라인',
  app: '모바일 앱',
  kiosk: '무인발급기',
  counter: '창구 방문',
  phone: '전화',
};

const docBySlug = new Map(documents.map((d) => [d.slug, d]));

export default function DocumentFinder() {
  const [situationId, setSituationId] = useState<string | null>(null);
  const [optionId, setOptionId] = useState<string | null>(null);

  const situation = situations.find((s) => s.id === situationId) ?? null;
  const option = situation?.options?.find((o) => o.id === optionId) ?? null;

  const docRefs: SituationDocRef[] = useMemo(() => {
    if (!situation) return [];
    const base = [...situation.documents];
    if (option) {
      for (const extra of option.extraDocuments) {
        if (!base.some((d) => d.slug === extra.slug)) base.push(extra);
      }
    }
    return base;
  }, [situation, option]);

  const onlineCount = docRefs.filter((ref) => {
    const doc = docBySlug.get(ref.slug);
    return doc?.channels.some((c) => c.type === 'online' || c.type === 'app');
  }).length;

  return (
    <div className="flex flex-col gap-5">
      {/* 1단계: 상황 선택 */}
      <div className="bg-surface border border-site-border rounded-xl p-5 md:p-6 flex flex-col gap-3">
        <p className="text-secondary text-[13px] font-medium">
          1. 어떤 일로 서류가 필요하세요?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {situations.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setSituationId(s.id);
                setOptionId(null);
              }}
              className={`text-left rounded-lg border px-4 py-3 transition-colors ${
                situationId === s.id
                  ? 'border-accent bg-accent-light'
                  : 'border-site-border bg-site-white hover:border-accent'
              }`}
            >
              <span
                className={`block text-[14px] font-semibold ${
                  situationId === s.id ? 'text-accent-text' : 'text-primary'
                }`}
              >
                {s.label}
              </span>
              <span className="block text-muted text-[12px] leading-[1.5] mt-0.5">
                {s.description}
              </span>
            </button>
          ))}
        </div>

        {/* 2단계: 세부 옵션 */}
        {situation?.options && situation.options.length > 0 && (
          <div className="flex flex-col gap-2 pt-1">
            <p className="text-secondary text-[13px] font-medium">2. 세부 상황 (해당 시 선택)</p>
            <div className="flex flex-wrap gap-2">
              {situation.options.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setOptionId(optionId === o.id ? null : o.id)}
                  className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    optionId === o.id
                      ? 'border-accent bg-accent text-white'
                      : 'border-site-border bg-site-white text-secondary hover:text-primary'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 결과 */}
      {situation && (
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <p className="text-primary text-[16px] font-semibold">
              필요 서류 {docRefs.length}종
              {onlineCount > 0 && (
                <span className="text-muted text-[13px] font-normal">
                  {' '}
                  — 그중 {onlineCount}종은 온라인·앱 발급 가능
                </span>
              )}
            </p>
            <button
              type="button"
              onClick={() => {
                setSituationId(null);
                setOptionId(null);
              }}
              className="flex items-center gap-1 text-muted text-[13px] hover:text-primary"
            >
              <RotateCcw size={13} /> 다시 선택
            </button>
          </div>

          {docRefs.map((ref) => {
            const doc = docBySlug.get(ref.slug);
            if (!doc) return null;
            return (
              <div
                key={ref.slug}
                className="bg-site-white border border-site-border rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <Link
                    href={`/articles/${doc.slug}`}
                    className="text-primary text-[15px] font-semibold hover:text-accent"
                  >
                    {doc.name} →
                  </Link>
                  {doc.validityNote && (
                    <span className="flex items-center gap-1 text-muted text-[12px]">
                      <Clock size={12} /> {doc.validityNote}
                    </span>
                  )}
                </div>

                {ref.note && (
                  <p className="text-secondary text-[13px] leading-[1.7] bg-surface rounded-lg px-3 py-2">
                    {ref.note}
                  </p>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <tbody>
                      {doc.channels.map((c, i) => (
                        <tr key={i} className="border-t border-border-light first:border-t-0">
                          <td className="py-1.5 pr-3 text-muted whitespace-nowrap w-[90px]">
                            {CHANNEL_LABELS[c.type]}
                          </td>
                          <td className="py-1.5 pr-3 text-secondary">{c.name}</td>
                          <td className="py-1.5 pr-3 text-primary font-medium whitespace-nowrap">
                            {c.fee ?? '기관 확인'}
                          </td>
                          <td className="py-1.5 text-muted hidden md:table-cell">{c.note ?? ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {doc.optionNote && (
                  <p className="flex gap-1.5 text-muted text-[12px] leading-[1.7]">
                    <AlertCircle size={13} className="shrink-0 mt-0.5" />
                    <span>{doc.optionNote}</span>
                  </p>
                )}
              </div>
            );
          })}

          {situation.notes && situation.notes.length > 0 && (
            <div className="bg-surface border border-site-border rounded-xl p-5 flex flex-col gap-2">
              <p className="text-secondary text-[13px] font-semibold">
                서류 외에 챙길 것
              </p>
              {situation.notes.map((n, i) => (
                <p key={i} className="text-secondary text-[13px] leading-[1.7]">
                  · {n.text}
                </p>
              ))}
            </div>
          )}

          <p className="text-muted text-[12px] leading-[1.7]">
            같은 상황이라도 제출처(은행 지점·회사·기관)마다 요구 서류와 옵션이 다를 수 있습니다.
            이 목록은 애스크집 안내글에서 확인된 일반적인 조합이며, 최종 목록은 제출처 안내를
            기준으로 확정하세요. 서류명을 클릭하면 발급 방법 상세 안내로 이동합니다.
          </p>
        </div>
      )}
    </div>
  );
}
