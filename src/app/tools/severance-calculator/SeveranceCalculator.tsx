'use client';

import { useState } from 'react';
import { calcSeverance, formatKrw } from '@/lib/calculators';

export default function SeveranceCalculator() {
  const [joinDate, setJoinDate] = useState('2024-01-02');
  const [leaveDate, setLeaveDate] = useState('2026-08-01');
  const [wages, setWages] = useState('9000000');
  const [bonus, setBonus] = useState('');
  const [leavePay, setLeavePay] = useState('');

  const num = (v: string) => Number(v.replace(/[^0-9]/g, '')) || 0;
  const result = calcSeverance({
    joinDate,
    leaveDate,
    threeMonthWages: num(wages),
    annualBonus: num(bonus),
    annualLeavePay: num(leavePay),
  });

  return (
    <div className="bg-surface border border-site-border rounded-xl p-5 md:p-6 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">입사일</span>
          <input
            type="date"
            value={joinDate}
            onChange={(e) => setJoinDate(e.target.value)}
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">
            퇴직일 (마지막 근무일 다음 날)
          </span>
          <input
            type="date"
            value={leaveDate}
            onChange={(e) => setLeaveDate(e.target.value)}
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-secondary text-[13px] font-medium">
          퇴직 전 3개월 임금 총액 (세전, 원)
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={wages}
          onChange={(e) => setWages(e.target.value)}
          placeholder="예: 9000000 (월 300만원 × 3개월)"
          className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
        />
        {num(wages) > 0 && <span className="text-muted text-[12px]">{formatKrw(num(wages))}원</span>}
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">연간 상여금 총액 (선택)</span>
          <input
            type="text"
            inputMode="numeric"
            value={bonus}
            onChange={(e) => setBonus(e.target.value)}
            placeholder="최근 1년 상여금 합계"
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-secondary text-[13px] font-medium">전년도 연차수당 (선택)</span>
          <input
            type="text"
            inputMode="numeric"
            value={leavePay}
            onChange={(e) => setLeavePay(e.target.value)}
            placeholder="전년도 미사용 연차수당"
            className="h-11 px-3 rounded-lg border border-site-border bg-site-white text-primary text-[15px] focus:outline-none focus:border-accent"
          />
        </label>
      </div>

      {result && (
        <div className="bg-site-white border border-site-border rounded-lg p-5 flex flex-col gap-2.5">
          <Row label="재직일수" value={`${formatKrw(result.serviceDays)}일`} />
          <Row label="평균임금 산정 기간" value={`퇴직 전 3개월 (${result.periodDays}일)`} />
          <Row label="1일 평균임금" value={`${formatKrw(result.avgDailyWage)}원`} />
          <div className="w-full h-px bg-border-light my-1" />
          {result.eligible ? (
            <div className="flex items-baseline justify-between">
              <span className="text-primary text-[15px] font-semibold">예상 퇴직금 (세전)</span>
              <span className="text-accent text-[22px] font-bold">
                {formatKrw(result.severance)}원
              </span>
            </div>
          ) : (
            <p className="text-secondary text-[14px]">
              계속근로기간이 1년 미만이면 법정 퇴직금 지급 대상이 아닙니다. (현재{' '}
              {result.serviceDays}일)
            </p>
          )}
        </div>
      )}
      {!result && (
        <p className="text-secondary text-[13px]">입사일과 퇴직일을 순서에 맞게 입력해 주세요.</p>
      )}

      <p className="text-muted text-[12px] leading-[1.7]">
        세전 기준 참고용 추정치입니다. 평균임금이 통상임금보다 낮으면 통상임금으로 계산하는 규정,
        퇴직소득세 공제, DC형 퇴직연금 가입 여부에 따라 실수령액은 달라질 수 있습니다. 정확한
        금액은 고용노동부 퇴직금 계산기와 회사 급여 담당자를 통해 확인하세요.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-secondary text-[14px]">{label}</span>
      <span className="text-primary text-[15px] font-medium">{value}</span>
    </div>
  );
}
