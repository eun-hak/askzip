import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SeveranceCalculator from './SeveranceCalculator';

export const metadata: Metadata = {
  title: '퇴직금 계산기 (평균임금·상여금·연차수당 반영)',
  description:
    '입사일·퇴직일과 최근 3개월 임금을 입력하면 법정 퇴직금을 계산합니다. 연간 상여금과 연차수당의 3/12 반영, 1일 평균임금 산출 과정까지 근로기준법 산식 그대로 보여줍니다.',
  alternates: { canonical: '/tools/severance-calculator' },
};

export default function SeveranceCalculatorPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-6">
        <Breadcrumb items={[{ label: '계산기', href: '/tools' }, { label: '퇴직금 계산기' }]} />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">퇴직금 계산기</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            법정 퇴직금은 &ldquo;1일 평균임금 × 30일 × (재직일수 ÷ 365)&rdquo;로 계산됩니다. 핵심은 평균임금인데,
            기본급만이 아니라 퇴직 전 3개월의 수당·연장근로수당과 연간 상여금·연차수당의 3/12까지
            들어간다는 점에서 어림짐작과 실제 금액이 자주 어긋납니다. 이 계산기는 그 산식을 그대로
            따라가며 중간 값(1일 평균임금)까지 보여줍니다.
          </p>
        </div>

        <SeveranceCalculator />

        <div className="bg-surface border border-site-border rounded-lg px-4 py-3 flex flex-col gap-1.5">
          <p className="text-secondary text-[13px] font-semibold">계산 기준 (근로자퇴직급여 보장법)</p>
          <ul className="flex flex-col gap-1">
            {[
              '1일 평균임금 = (퇴직 전 3개월 임금총액 + 연간 상여금 × 3/12 + 전년도 연차수당 × 3/12) ÷ 3개월 총일수',
              '퇴직금 = 1일 평균임금 × 30일 × (재직일수 ÷ 365) — 계속근로 1년 이상부터 지급',
              '퇴직일은 마지막 근무일의 다음 날 기준 (고용노동부 방식과 동일)',
              '3개월 임금총액에는 기본급·고정수당·연장수당 포함, 출장비 등 실비변상·경조사비는 제외',
            ].map((t, i) => (
              <li key={i} className="text-muted text-[12px] leading-[1.7]">
                · {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-secondary text-[15px] font-semibold">함께 보면 좋은 안내글</h2>
          <div className="flex flex-col gap-1.5">
            <Link href="/articles/unemployment-benefit" className="text-accent text-[14px] hover:underline">
              실업급여 신청 방법과 수급 조건 →
            </Link>
            <Link href="/articles/health-insurance-loss-date-delay" className="text-accent text-[14px] hover:underline">
              퇴사 후 건강보험 상실일이 안 뜰 때 →
            </Link>
            <Link href="/articles/four-major-insurance-history" className="text-accent text-[14px] hover:underline">
              4대보험 가입내역 확인서 발급 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
