'use client';

import { useState } from 'react';
import { calcCarTax, formatKrw, PREPAY_MONTHS } from '@/lib/calculators';

const PREPAY_LABELS: Record<keyof typeof PREPAY_MONTHS, string> = {
  jan: '1월 (2~12월분 공제, 실효 약 4.58%)',
  mar: '3월 (4~12월분 공제)',
  jun: '6월 (7~12월분 공제)',
  sep: '9월 (10~12월분 공제)',
};

export default function CarTaxCalculator() {
  const [cc, setCc] = useState('1598');
  const [isEv, setIsEv] = useState(false);
  const [carAge, setCarAge] = useState('1');
  const [prepayMonth, setPrepayMonth] = useState<keyof typeof PREPAY_MONTHS>('jan');

  const ccNum = Number(cc.replace(/[^0-9]/g, '')) || 0;
  const ageNum = Number(carAge) || 0;
  const valid = isEv || ccNum > 0;

  const result = valid
    ? calcCarTax({ cc: isEv ? 0 : ccNum, carAgeYears: ageNum, prepayMonth })
    : null;

  return (
    <div className="bg-surface border border-site-border rounded-xl p-5 md:p-6 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">배기량 (cc)</span>
          <input
            type="text"
            inputMode="numeric"
            value={isEv ? '' : cc}
            disabled={isEv}
            onChange={(e) => setCc(e.target.value)}
            placeholder="예: 1598"
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent disabled:opacity-40"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">차령 (연식 기준 몇 년째)</span>
          <select
            value={carAge}
            onChange={(e) => setCarAge(e.target.value)}
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          >
            {Array.from({ length: 15 }, (_, i) => i + 1).map((y) => (
              <option key={y} value={y}>
                {y}년차{y >= 3 ? ` (${Math.min(5 * (y - 2), 50)}% 경감)` : ''}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">연납 신청 시기</span>
          <select
            value={prepayMonth}
            onChange={(e) => setPrepayMonth(e.target.value as keyof typeof PREPAY_MONTHS)}
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          >
            {(Object.keys(PREPAY_LABELS) as (keyof typeof PREPAY_MONTHS)[]).map((k) => (
              <option key={k} value={k}>
                {PREPAY_LABELS[k]}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 sm:mt-7">
          <input
            type="checkbox"
            checked={isEv}
            onChange={(e) => setIsEv(e.target.checked)}
            className="w-4 h-4 accent-[var(--color-accent,#2563eb)]"
          />
          <span className="text-secondary text-[14px]">전기차·수소차 (배기량 없음)</span>
        </label>
      </div>

      {result && (
        <div className="bg-site-white border border-site-border rounded-lg p-5 flex flex-col gap-2.5">
          <Row label="자동차세 본세 (차령 경감 반영)" value={`${formatKrw(result.baseTax)}원`} />
          <Row label="지방교육세 (본세의 30%)" value={`${formatKrw(result.educationTax)}원`} />
          <Row label="연세액 합계" value={`${formatKrw(result.yearlyTotal)}원`} />
          <div className="w-full h-px bg-border-light my-1" />
          <Row label="연납 공제액" value={`-${formatKrw(result.prepayDiscount)}원`} accent />
          <div className="flex items-baseline justify-between">
            <span className="text-primary text-[15px] font-semibold">연납 시 납부액</span>
            <span className="text-accent text-[22px] font-bold">
              {formatKrw(result.prepayTotal)}원
            </span>
          </div>
        </div>
      )}

      <p className="text-muted text-[12px] leading-[1.7]">
        비영업용 승용차 기준 참고용 추정치입니다. 실제 고지액은 차종·등록 시점·감면 조건에 따라
        달라질 수 있으며, 정확한 금액은 위택스(wetax.go.kr) 연납 신청 화면에서 확인됩니다.
      </p>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-secondary text-[14px]">{label}</span>
      <span className={`text-[15px] font-medium ${accent ? 'text-accent' : 'text-primary'}`}>
        {value}
      </span>
    </div>
  );
}
