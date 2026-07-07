'use client';

import { useState } from 'react';
import { calcEitc, EITC_BRACKETS, type HouseholdType } from '@/lib/calculators';

const HOUSEHOLD_LABELS: Record<HouseholdType, string> = {
  single: '단독 가구',
  singleIncome: '홑벌이 가구',
  dualIncome: '맞벌이 가구',
};

const ZONE_LABELS: Record<string, string> = {
  rise: '점증 구간 (소득이 늘수록 장려금도 증가)',
  flat: '평탄 구간 (최대 지급액 구간)',
  phaseOut: '점감 구간 (소득이 늘수록 장려금 감소)',
  over: '소득 기준 초과 (지급 대상 아님)',
};

export default function EitcCalculator() {
  const [household, setHousehold] = useState<HouseholdType>('single');
  const [salary, setSalary] = useState('1500');
  const [assets, setAssets] = useState('10000');

  const salaryNum = Number(salary.replace(/[^0-9]/g, '')) || 0;
  const assetsNum = Number(assets.replace(/[^0-9]/g, '')) || 0;
  const result = calcEitc({ household, totalSalary: salaryNum, assets: assetsNum });
  const bracket = EITC_BRACKETS[household];

  return (
    <div className="bg-surface border border-site-border rounded-xl p-5 md:p-6 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <span className="text-secondary text-[13px] font-medium">가구 유형</span>
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(HOUSEHOLD_LABELS) as HouseholdType[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setHousehold(k)}
              className={`h-11 rounded-lg border text-[14px] font-medium transition-colors ${
                household === k
                  ? 'border-accent bg-accent-light text-accent-text'
                  : 'border-site-border bg-site-white text-secondary hover:text-primary'
              }`}
            >
              {HOUSEHOLD_LABELS[k]}
            </button>
          ))}
        </div>
        <p className="text-muted text-[12px]">
          최대 {bracket.maxAmount}만원 · 총소득 기준 {bracket.phaseOutEnd.toLocaleString()}만원 미만
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">
            연간 총급여액 등 (만원, 부부 합산)
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="예: 1500"
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">
            가구원 재산 합계 (만원)
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            placeholder="예: 10000 (= 1억원)"
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          />
        </label>
      </div>

      <div className="bg-site-white border border-site-border rounded-lg p-5 flex flex-col gap-2.5">
        <div className="flex items-baseline justify-between">
          <span className="text-secondary text-[14px]">적용 구간</span>
          <span className="text-primary text-[14px] font-medium">{ZONE_LABELS[result.zone]}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-secondary text-[14px]">산정액</span>
          <span className="text-primary text-[15px] font-medium">
            약 {result.baseAmount.toLocaleString()}만원
          </span>
        </div>
        {result.assetHalved && (
          <p className="text-[13px] text-secondary bg-surface rounded px-3 py-2">
            재산 1억 7,000만원 이상 → 산정액의 <strong>50%만</strong> 지급됩니다.
          </p>
        )}
        {result.assetExcluded && (
          <p className="text-[13px] text-secondary bg-surface rounded px-3 py-2">
            재산 2억 4,000만원 이상 → 지급 대상에서 <strong>제외</strong>됩니다.
          </p>
        )}
        <div className="w-full h-px bg-border-light my-1" />
        <div className="flex items-baseline justify-between">
          <span className="text-primary text-[15px] font-semibold">예상 지급액</span>
          <span className="text-accent text-[22px] font-bold">
            약 {result.finalAmount.toLocaleString()}만원
          </span>
        </div>
      </div>

      <p className="text-muted text-[12px] leading-[1.7]">
        조세특례제한법 산식 기준의 참고용 추정치입니다. 실제 지급액은 국세청 심사(소득 종류별 조정,
        산정표 단위 절사, 체납액 충당 등)에 따라 달라지며, 정확한 모의계산은 홈택스 「장려금
        미리보기」에서 확인할 수 있습니다.
      </p>
    </div>
  );
}
