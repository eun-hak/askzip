import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CarTaxCalculator from './CarTaxCalculator';

export const metadata: Metadata = {
  title: '자동차세 연납 계산기 (2026년 기준)',
  description:
    '배기량·차령·연납 신청 시기를 입력하면 2026년 자동차세 연세액과 연납 공제액, 실제 납부액을 계산합니다. 차령 경감(3년차부터 최대 50%)과 지방교육세까지 반영합니다.',
  alternates: { canonical: '/tools/car-tax-calculator' },
};

export default function CarTaxCalculatorPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-6">
        <Breadcrumb items={[{ label: '계산기', href: '/tools' }, { label: '자동차세 연납 계산기' }]} />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">자동차세 연납 계산기</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            배기량과 차령(차 나이), 연납 신청 시기를 입력하면 1년치 자동차세와 연납 공제액을
            계산합니다. 차령 3년차부터 적용되는 경감(매년 5%p, 최대 50%)과 지방교육세 30%를
            반영합니다.
          </p>
        </div>

        <CarTaxCalculator />

        <div className="bg-surface border border-site-border rounded-lg px-4 py-3 flex flex-col gap-1.5">
          <p className="text-secondary text-[13px] font-semibold">계산 기준 (2026년)</p>
          <ul className="flex flex-col gap-1">
            {[
              '세율: 비영업용 승용 1,000cc 이하 80원/cc · 1,600cc 이하 140원/cc · 1,600cc 초과 200원/cc (지방세법 제127조)',
              '전기·수소차(비영업용): 연 10만원 + 지방교육세 30%',
              '차령 경감: 3년차부터 5%p씩, 최대 50% (비영업용 승용)',
              '연납 공제: 연 5%를 미경과 개월수에 비례 적용 (1월 연납 실효 약 4.58%) — 공제율은 매년 지방세법 시행령으로 바뀔 수 있어 1월 위택스 공지 확인 필요',
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
            <Link href="/articles/car-tax-annual-prepay" className="text-accent text-[14px] hover:underline">
              자동차세 연납 신청 방법과 주의사항 →
            </Link>
            <Link href="/articles/property-tax-payment" className="text-accent text-[14px] hover:underline">
              재산세 납부 기간·방법 안내 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
