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
import { cardPointCheck } from './card-point-check';

import type { Article } from '../types';

export type { Article, ContentBlock } from '../types';

export const articles: Article[] = [
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
  // 조회서비스
  telecomUnrefundedFee,
  fourMajorInsuranceHistory,
  nationalPensionHistory,
  dormantMoneyCheck,
  trafficFineCheck,
  carInspectionCheck,
  cardPointCheck,
];

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
