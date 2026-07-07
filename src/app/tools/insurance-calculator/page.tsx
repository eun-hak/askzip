import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import InsuranceCalculator from './InsuranceCalculator';

export const metadata: Metadata = {
  title: '4대보험 계산기 (2026년 요율)',
  description:
    '월급을 입력하면 2026년 요율 기준 국민연금(9.5% 인상 반영)·건강보험·장기요양·고용보험 근로자 부담분을 계산합니다.',
  alternates: { canonical: '/tools/insurance-calculator' },
};

export default function InsuranceCalculatorPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-6">
        <Breadcrumb items={[{ label: '계산기', href: '/tools' }, { label: '4대보험 계산기' }]} />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">4대보험 계산기</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            세전 월급을 입력하면 매달 급여에서 공제되는 4대보험 근로자 부담분을 계산합니다. 2026년은
            연금개혁으로 국민연금 보험료율이 28년 만에 처음 인상(9% → 9.5%)된 해라, 작년과 같은
            월급이어도 공제액이 달라집니다.
          </p>
        </div>

        <InsuranceCalculator />

        <div className="bg-surface border border-site-border rounded-lg px-4 py-3 flex flex-col gap-1.5">
          <p className="text-secondary text-[13px] font-semibold">계산 기준 (2026년 요율, 근로자 부담분)</p>
          <ul className="flex flex-col gap-1">
            {[
              '국민연금: 총 9.5% 중 근로자 4.75% — 2026년부터 매년 0.5%p씩 2033년 13%까지 단계 인상',
              '건강보험: 총 7.19% 중 근로자 3.595%',
              '장기요양보험: 건강보험료의 13.14%',
              '고용보험(실업급여): 근로자 0.9% — 산재보험은 전액 사업주 부담',
              '국민연금 기준소득월액 상한 637만원·하한 40만원 (매년 7월 조정)',
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
            <Link href="/articles/four-major-insurance-history" className="text-accent text-[14px] hover:underline">
              4대보험 가입내역 확인서 발급 방법 →
            </Link>
            <Link href="/articles/national-pension-history" className="text-accent text-[14px] hover:underline">
              국민연금 가입·납부 내역 조회 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
