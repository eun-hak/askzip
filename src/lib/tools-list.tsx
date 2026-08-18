import { Car, HandCoins, ShieldCheck, Wallet, type LucideIcon } from 'lucide-react';

export interface ToolInfo {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** 계산기 도구 목록 — 홈·/tools 인덱스에서 공용 */
export const TOOLS: ToolInfo[] = [
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
  {
    href: '/tools/severance-calculator',
    icon: Wallet,
    title: '퇴직금 계산기',
    description: '입사일·퇴직일·3개월 임금 입력 → 상여금·연차수당 3/12 반영한 법정 퇴직금 계산',
  },
];
