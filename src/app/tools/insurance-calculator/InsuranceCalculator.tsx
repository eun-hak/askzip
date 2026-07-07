'use client';

import { useState } from 'react';
import { calcInsurance, formatKrw } from '@/lib/calculators';

export default function InsuranceCalculator() {
  const [salary, setSalary] = useState('3000000');

  const salaryNum = Number(salary.replace(/[^0-9]/g, '')) || 0;
  const result = salaryNum > 0 ? calcInsurance(salaryNum) : null;

  return (
    <div className="bg-surface border border-site-border rounded-xl p-5 md:p-6 flex flex-col gap-5">
      <label className="flex flex-col gap-1.5">
        <span className="text-secondary text-[13px] font-medium">월급 (세전, 원)</span>
        <input
          type="text"
          inputMode="numeric"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="예: 3000000"
          className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
        />
        {salaryNum > 0 && (
          <span className="text-muted text-[12px]">{formatKrw(salaryNum)}원</span>
        )}
      </label>

      {result && (
        <div className="bg-site-white border border-site-border rounded-lg p-5 flex flex-col gap-2.5">
          <Row label="국민연금 (4.75%)" value={result.pension} />
          <Row label="건강보험 (3.595%)" value={result.health} />
          <Row label="장기요양보험 (건보료의 13.14%)" value={result.longTermCare} />
          <Row label="고용보험 (0.9%)" value={result.employment} />
          <div className="w-full h-px bg-border-light my-1" />
          <div className="flex items-baseline justify-between">
            <span className="text-primary text-[15px] font-semibold">공제 합계</span>
            <span className="text-accent text-[22px] font-bold">
              {formatKrw(result.total)}원
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-secondary text-[14px]">4대보험 공제 후 금액</span>
            <span className="text-primary text-[15px] font-medium">
              {formatKrw(result.netPay)}원
            </span>
          </div>
        </div>
      )}

      <p className="text-muted text-[12px] leading-[1.7]">
        근로자 부담분 기준 참고용 추정치입니다. 소득세·지방소득세는 포함되지 않으며, 국민연금은
        기준소득월액 상·하한(40만~637만원)이 적용됩니다. 실제 공제액은 보수월액 산정 방식과 정산에
        따라 달라질 수 있습니다.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-secondary text-[14px]">{label}</span>
      <span className="text-primary text-[15px] font-medium">{formatKrw(value)}원</span>
    </div>
  );
}
