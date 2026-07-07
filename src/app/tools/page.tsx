import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { Car, HandCoins, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: '생활 행정 계산기',
  description:
    '자동차세 연납 공제액, 근로장려금 예상 지급액, 4대보험 공제액을 바로 계산해 볼 수 있는 무료 계산기 모음입니다. 2026년 요율 기준.',
  alternates: { canonical: '/tools' },
};

const tools = [
  {
    href: '/tools/car-tax-calculator',
    icon: Car,
    title: '자동차세 연납 계산기',
    description: '배기량·차령·신청 시기 입력 → 연세액과 연납 공제액 계산 (차령 경감·교육세 반영)',
  },
  {
    href: '/tools/eitc-calculator',
    icon: HandCoins,
    title: '근로장려금 모의계산기',
    description: '가구 유형·총급여·재산 입력 → 점증·평탄·점감 구간 반영한 예상 지급액 계산',
  },
  {
    href: '/tools/insurance-calculator',
    icon: ShieldCheck,
    title: '4대보험 계산기',
    description: '월급 입력 → 2026년 요율(국민연금 9.5% 인상 반영) 기준 공제액 계산',
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-6">
        <Breadcrumb items={[{ label: '계산기' }]} />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">생활 행정 계산기</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            신청 전에 금액부터 확인하고 싶을 때 쓰는 계산기 모음입니다. 모든 계산기는 2026년
            요율·산식 기준이며, 각 페이지에 계산 근거를 함께 표기합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="bg-site-white border border-site-border rounded-xl p-5 flex items-start gap-4 hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                <tool.icon size={20} className="text-accent-text" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary text-[16px] font-semibold">{tool.title}</span>
                <span className="text-secondary text-[13px] leading-[1.7]">{tool.description}</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-muted text-[12px] leading-[1.7]">
          계산 결과는 참고용 추정치이며 실제 고지·지급액과 다를 수 있습니다. 자세한 내용은{' '}
          <Link href="/disclaimer" className="text-accent hover:underline">
            면책조항
          </Link>
          을 확인해 주세요.
        </p>
      </div>
    </div>
  );
}
