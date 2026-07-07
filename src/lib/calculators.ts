/**
 * 계산기 산식·요율 상수.
 *
 * 요율은 법령·기관 고시로 매년 바뀝니다. 변경 시 이 파일의 상수만 수정하면
 * 계산기 UI와 결과 표기에 함께 반영됩니다. 각 상수 옆 주석의 근거를 갱신하세요.
 */

// ── 자동차세 (비영업용 승용, 지방세법 제127조) ──────────────────────

/** 배기량 cc당 세율 (비영업용 승용) */
export function carTaxPerCc(cc: number): number {
  if (cc <= 1000) return 80;
  if (cc <= 1600) return 140;
  return 200;
}

/** 전기차 등 「그 밖의 승용자동차」 연세액 (비영업용, 지방교육세 제외) */
export const EV_BASE_TAX = 100_000;

/** 지방교육세 = 자동차세의 30% */
export const EDUCATION_TAX_RATE = 0.3;

/**
 * 차령 경감 (비영업용 승용): 차령 3년차부터 매년 5%p씩, 최대 50% 경감.
 * 경감률 = 5% × (차령 - 2)
 */
export function carAgeReductionRate(carAgeYears: number): number {
  if (carAgeYears < 3) return 0;
  return Math.min(0.05 * (carAgeYears - 2), 0.5);
}

/**
 * 연납 공제율 (지방세법 시행령). 2026년 1월 연납 기준 연 5%를
 * 미경과 기간에 비례 적용 (1월 연납 실효 약 4.58% = 5% × 11/12).
 * 매년 시행령 개정으로 변동 가능 — 위택스 1월 공지 확인 필요.
 */
export const ANNUAL_PREPAY_RATE = 0.05;

/** 연납 신청 시기별 공제 대상 개월 수 */
export const PREPAY_MONTHS: Record<string, number> = {
  jan: 11, // 2~12월분
  mar: 9, // 4~12월분
  jun: 6, // 7~12월분
  sep: 3, // 10~12월분
};

export interface CarTaxResult {
  /** 자동차세 본세 (경감 반영, 연간) */
  baseTax: number;
  /** 지방교육세 (연간) */
  educationTax: number;
  /** 연세액 합계 */
  yearlyTotal: number;
  /** 차령 경감률 */
  reductionRate: number;
  /** 연납 공제액 */
  prepayDiscount: number;
  /** 연납 시 납부액 */
  prepayTotal: number;
}

export function calcCarTax(params: {
  cc: number; // 0이면 전기차 등 배기량 없는 차량
  carAgeYears: number;
  prepayMonth: keyof typeof PREPAY_MONTHS;
}): CarTaxResult {
  const { cc, carAgeYears, prepayMonth } = params;
  const reductionRate = cc > 0 ? carAgeReductionRate(carAgeYears) : 0;

  const rawBase = cc > 0 ? cc * carTaxPerCc(cc) : EV_BASE_TAX;
  const baseTax = Math.floor(rawBase * (1 - reductionRate));
  const educationTax = Math.floor(baseTax * EDUCATION_TAX_RATE);
  const yearlyTotal = baseTax + educationTax;

  const months = PREPAY_MONTHS[prepayMonth];
  const prepayDiscount = Math.floor(yearlyTotal * ANNUAL_PREPAY_RATE * (months / 12));
  const prepayTotal = yearlyTotal - prepayDiscount;

  return { baseTax, educationTax, yearlyTotal, reductionRate, prepayDiscount, prepayTotal };
}

// ── 근로장려금 (조세특례제한법 §100의5, 2026년 신청 = 2025년 귀속) ──────

export type HouseholdType = 'single' | 'singleIncome' | 'dualIncome';

/** 가구 유형별 [점증 상한, 평탄 상한, 점감 상한(총소득 기준금액), 최대지급액] (만원) */
export const EITC_BRACKETS: Record<
  HouseholdType,
  { riseEnd: number; flatEnd: number; phaseOutEnd: number; maxAmount: number }
> = {
  single: { riseEnd: 400, flatEnd: 900, phaseOutEnd: 2200, maxAmount: 165 },
  singleIncome: { riseEnd: 700, flatEnd: 1400, phaseOutEnd: 3200, maxAmount: 285 },
  dualIncome: { riseEnd: 800, flatEnd: 1700, phaseOutEnd: 4400, maxAmount: 330 },
};

/** 재산 구간: 1.7억 이상 ~ 2.4억 미만이면 50% 감액, 2.4억 이상이면 지급 제외 */
export const EITC_ASSET_HALF = 17_000; // 만원
export const EITC_ASSET_LIMIT = 24_000; // 만원

export interface EitcResult {
  /** 산정액 (만원, 재산 감액 반영 전) */
  baseAmount: number;
  /** 재산 감액 반영 후 예상액 (만원) */
  finalAmount: number;
  /** 어떤 구간인지: rise | flat | phaseOut | over */
  zone: 'rise' | 'flat' | 'phaseOut' | 'over';
  /** 재산 50% 감액 적용 여부 */
  assetHalved: boolean;
  /** 재산 초과로 지급 제외 여부 */
  assetExcluded: boolean;
}

export function calcEitc(params: {
  household: HouseholdType;
  totalSalary: number; // 총급여액 등 (만원)
  assets: number; // 가구원 재산 합계 (만원)
}): EitcResult {
  const { household, totalSalary, assets } = params;
  const b = EITC_BRACKETS[household];

  let baseAmount = 0;
  let zone: EitcResult['zone'];
  if (totalSalary >= b.phaseOutEnd) {
    zone = 'over';
    baseAmount = 0;
  } else if (totalSalary < b.riseEnd) {
    zone = 'rise';
    baseAmount = (totalSalary / b.riseEnd) * b.maxAmount;
  } else if (totalSalary < b.flatEnd) {
    zone = 'flat';
    baseAmount = b.maxAmount;
  } else {
    zone = 'phaseOut';
    baseAmount =
      ((b.phaseOutEnd - totalSalary) / (b.phaseOutEnd - b.flatEnd)) * b.maxAmount;
  }

  const assetExcluded = assets >= EITC_ASSET_LIMIT;
  const assetHalved = !assetExcluded && assets >= EITC_ASSET_HALF;

  let finalAmount = baseAmount;
  if (assetExcluded) finalAmount = 0;
  else if (assetHalved) finalAmount = baseAmount * 0.5;

  return {
    baseAmount: Math.round(baseAmount * 10) / 10,
    finalAmount: Math.round(finalAmount * 10) / 10,
    zone,
    assetHalved,
    assetExcluded,
  };
}

// ── 4대보험 (2026년 요율, 근로자 부담분) ────────────────────────────

/** 국민연금: 2026년 총 9.5% (연금개혁으로 9%→9.5%), 근로자 부담 절반 */
export const PENSION_RATE_EMPLOYEE = 0.0475;
/** 국민연금 기준소득월액 상한/하한 (원) — 매년 7월 조정 */
export const PENSION_MAX_BASE = 6_370_000;
export const PENSION_MIN_BASE = 400_000;

/** 건강보험: 2026년 총 7.19%, 근로자 부담 절반 */
export const HEALTH_RATE_EMPLOYEE = 0.03595;

/** 장기요양보험: 건강보험료의 13.14% (2026년) */
export const LTC_RATE_ON_HEALTH = 0.1314;

/** 고용보험(실업급여): 근로자 0.9% */
export const EMPLOYMENT_RATE_EMPLOYEE = 0.009;

export interface InsuranceResult {
  pension: number;
  health: number;
  longTermCare: number;
  employment: number;
  total: number;
  netPay: number;
}

export function calcInsurance(monthlySalary: number): InsuranceResult {
  const pensionBase = Math.min(Math.max(monthlySalary, PENSION_MIN_BASE), PENSION_MAX_BASE);
  const pension = Math.floor((pensionBase * PENSION_RATE_EMPLOYEE) / 10) * 10;
  const health = Math.floor((monthlySalary * HEALTH_RATE_EMPLOYEE) / 10) * 10;
  const longTermCare = Math.floor((health * LTC_RATE_ON_HEALTH) / 10) * 10;
  const employment = Math.floor((monthlySalary * EMPLOYMENT_RATE_EMPLOYEE) / 10) * 10;
  const total = pension + health + longTermCare + employment;

  return { pension, health, longTermCare, employment, total, netPay: monthlySalary - total };
}

export function formatKrw(value: number): string {
  return value.toLocaleString('ko-KR');
}
