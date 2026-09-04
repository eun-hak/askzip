import { healthInsuranceEligibilityCertificate } from './health-insurance-eligibility-certificate';
import { residentRegistrationCopy } from './resident-registration-copy';
import { residentRegistrationAbstract } from './resident-registration-abstract';
import { familyRelationCertificate } from './family-relation-certificate';
import { healthInsurancePaymentProof } from './health-insurance-payment-proof';
import { realEstateRegistrationCertificate } from './real-estate-registration-certificate';
import { buildingRegister } from './building-register';
import { sealCertificate } from './seal-certificate';
import { landRegister } from './land-register';
import { drivingRecordCertificate } from './driving-record-certificate';
import { immigrationFactCertificate } from './immigration-fact-certificate';
import { healthInsuranceLossDateDelay } from './health-insurance-loss-date-delay';
import { foreignerFamilyRegistrationProof } from './foreigner-family-registration-proof';
import { overseasKoreanAuthentication } from './overseas-korean-authentication';
import { digitalWalletRejected } from './digital-wallet-rejected';
import { carTaxAnnualPrepay } from './car-tax-annual-prepay';
import { propertyTaxPayment } from './property-tax-payment';
import { hometaxPaymentStatement } from './hometax-payment-statement';
import { comprehensiveIncomeTax } from './comprehensive-income-tax';
import { incomeAmountCertificate } from './income-amount-certificate';
import { yearEndTaxSettlement } from './year-end-tax-settlement';
import { valueAddedTax } from './value-added-tax';
import { acquisitionTax } from './acquisition-tax';
import { localTaxCertificate } from './local-tax-certificate';
import { cashReceipt } from './cash-receipt';
import { taxRefundCheck } from './tax-refund-check';
import { taxPaymentCertificateDelay } from './tax-payment-certificate-delay';
import { incomeCertificateNotAvailable } from './income-certificate-not-available';
import { youthRentSupport } from './youth-rent-support';
import { earnedIncomeCredit } from './earned-income-credit';
import { childTaxCredit } from './child-tax-credit';
import { unemploymentBenefit } from './unemployment-benefit';
import { basicPension } from './basic-pension';
import { parentalChildcareBenefit } from './parental-childcare-benefit';
import { nationalEmploymentSupport } from './national-employment-support';
import { energyVoucher } from './energy-voucher';
import { youthFutureSavings } from './youth-future-savings';
import { nationalScholarship } from './national-scholarship';
import { emergencyWelfareSupport } from './emergency-welfare-support';
import { telecomUnrefundedFee } from './telecom-unrefunded-fee';
import { fourMajorInsuranceHistory } from './four-major-insurance-history';
import { nationalPensionHistory } from './national-pension-history';
import { dormantMoneyCheck } from './dormant-money-check';
import { trafficFineCheck } from './traffic-fine-check';
import { carInspectionCheck } from './car-inspection-check';
import { irosSearchFail } from './iros-search-fail';
import { kioskFingerprintFail } from './kiosk-fingerprint-fail';
import { nhisRefundSmishing } from './nhis-refund-smishing';
import { gov24PrintRefund } from './gov24-print-refund';
import { delegationFormRejected } from './delegation-form-rejected';
import { movingReportMistake } from './moving-report-mistake';
import { siblingDocumentIssuance } from './sibling-document-issuance';
import { basicPensionHistoryManagement } from './basic-pension-history-management';
import { seizureProtectedAccount } from './seizure-protected-account';
import { deceasedFamilyAffairs } from './deceased-family-affairs';
import { voluntaryContinuousInsurance } from './voluntary-continuous-insurance';
import { minorChildDocuments } from './minor-child-documents';
import { autoDebitStillCharged } from './auto-debit-still-charged';
import { carTransferSellerProxy } from './car-transfer-seller-proxy';
import { schoolEntryNotice } from './school-entry-notice';
import { residenceUnknownRegistration } from './residence-unknown-registration';
import { unemploymentPensionCredit } from './unemployment-pension-credit';
import { energyVoucherOverlap } from './energy-voucher-overlap';
import { leaseReportFixedDate } from './lease-report-fixed-date';
import { utilityDiscountReapply } from './utility-discount-reapply';
import { healthCheckupTargetCheck } from './health-checkup-target-check';
import { subsidy24MissingBenefits } from './subsidy24-missing-benefits';
import { carTaxExemptionClawback } from './car-tax-exemption-clawback';

import type { Article } from '../types';

export type { Article, ContentBlock } from '../types';

const allArticles: Article[] = [
  // 민원서류 발급
  healthInsuranceEligibilityCertificate,
  residentRegistrationCopy,
  residentRegistrationAbstract,
  familyRelationCertificate,
  healthInsurancePaymentProof,
  realEstateRegistrationCertificate,
  buildingRegister,
  sealCertificate,
  landRegister,
  drivingRecordCertificate,
  immigrationFactCertificate,
  healthInsuranceLossDateDelay,
  foreignerFamilyRegistrationProof,
  overseasKoreanAuthentication,
  digitalWalletRejected,
  irosSearchFail,
  kioskFingerprintFail,
  gov24PrintRefund,
  delegationFormRejected,
  movingReportMistake,
  siblingDocumentIssuance,
  deceasedFamilyAffairs,
  voluntaryContinuousInsurance,
  minorChildDocuments,
  carTransferSellerProxy,
  schoolEntryNotice,
  residenceUnknownRegistration,
  leaseReportFixedDate,
  // 세금·납부
  carTaxAnnualPrepay,
  propertyTaxPayment,
  hometaxPaymentStatement,
  comprehensiveIncomeTax,
  incomeAmountCertificate,
  yearEndTaxSettlement,
  valueAddedTax,
  acquisitionTax,
  localTaxCertificate,
  cashReceipt,
  taxRefundCheck,
  taxPaymentCertificateDelay,
  incomeCertificateNotAvailable,
  carTaxExemptionClawback,
  // 생활지원금
  youthRentSupport,
  earnedIncomeCredit,
  childTaxCredit,
  unemploymentBenefit,
  basicPension,
  parentalChildcareBenefit,
  nationalEmploymentSupport,
  energyVoucher,
  youthFutureSavings,
  nationalScholarship,
  emergencyWelfareSupport,
  basicPensionHistoryManagement,
  seizureProtectedAccount,
  unemploymentPensionCredit,
  energyVoucherOverlap,
  utilityDiscountReapply,
  subsidy24MissingBenefits,
  // 조회서비스
  telecomUnrefundedFee,
  fourMajorInsuranceHistory,
  nationalPensionHistory,
  dormantMoneyCheck,
  trafficFineCheck,
  carInspectionCheck,
  nhisRefundSmishing,
  autoDebitStillCharged,
  healthCheckupTargetCheck,
];

/**
 * 예약 발행: publishedAt이 빌드 시점(UTC 날짜) 이후인 글은 사이트 전체에서 제외된다.
 * .github/workflows/daily-publish.yml이 매일 아침 재빌드를 트리거해
 * 그날 발행일이 된 글이 자동 공개된다.
 */
const buildDate = new Date().toISOString().slice(0, 10);
export const articles: Article[] = allArticles.filter((a) => a.publishedAt <= buildDate);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

function sortArticlesByUpdatedAt(list: Article[]): Article[] {
  return [...list].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return sortArticlesByUpdatedAt(articles.filter((a) => a.category === categorySlug));
}

export function getLatestArticles(count: number = 6): Article[] {
  return sortArticlesByUpdatedAt(articles).slice(0, count);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return sortArticlesByUpdatedAt(
    articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    )
  );
}
