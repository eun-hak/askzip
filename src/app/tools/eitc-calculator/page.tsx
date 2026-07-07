import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import EitcCalculator from './EitcCalculator';

export const metadata: Metadata = {
  title: '근로장려금 모의계산기 (2026년 기준)',
  description:
    '가구 유형과 연간 총급여, 재산을 입력하면 2026년 근로장려금 예상 지급액을 계산합니다. 점증·평탄·점감 구간과 재산 감액(1.7억 50%, 2.4억 제외)까지 반영합니다.',
  alternates: { canonical: '/tools/eitc-calculator' },
};

export default function EitcCalculatorPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-6">
        <Breadcrumb items={[{ label: '계산기', href: '/tools' }, { label: '근로장려금 모의계산기' }]} />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">근로장려금 모의계산기</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            가구 유형, 연간 총급여액, 가구원 재산 합계를 입력하면 예상 지급액을 계산합니다.
            근로장려금은 소득 구간에 따라 지급액이 늘어나는 점증 구간, 최대 지급액이 유지되는 평탄
            구간, 줄어드는 점감 구간으로 나뉘고, 재산이 많으면 감액되거나 제외됩니다 — 이 계산기가
            그 구조를 그대로 반영합니다.
          </p>
        </div>

        <EitcCalculator />

        <div className="bg-surface border border-site-border rounded-lg px-4 py-3 flex flex-col gap-1.5">
          <p className="text-secondary text-[13px] font-semibold">계산 기준 (2026년 신청 = 2025년 귀속 소득)</p>
          <ul className="flex flex-col gap-1">
            {[
              '단독 가구: 총소득 2,200만원 미만, 최대 165만원 (점증 ~400만 / 평탄 ~900만 / 점감 ~2,200만)',
              '홑벌이 가구: 3,200만원 미만, 최대 285만원 (점증 ~700만 / 평탄 ~1,400만 / 점감 ~3,200만)',
              '맞벌이 가구: 4,400만원 미만, 최대 330만원 (2026년 상향 반영, 점증 ~800만 / 평탄 ~1,700만 / 점감 ~4,400만)',
              '재산: 2025-06-01 기준 1.7억원 이상 50% 감액, 2.4억원 이상 지급 제외 (부채 차감 없음)',
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
            <Link href="/articles/earned-income-credit" className="text-accent text-[14px] hover:underline">
              근로장려금 신청 방법·기간·주의사항 →
            </Link>
            <Link href="/articles/child-tax-credit" className="text-accent text-[14px] hover:underline">
              자녀장려금 신청 안내 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
