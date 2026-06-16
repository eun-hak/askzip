export interface ArticleSource {
  label: string;
  url: string;
}

/**
 * 슬러그별 공식 참고 링크 목록.
 * article 데이터 파일을 수정하지 않고 여기서 중앙 관리합니다.
 */
export const articleSources: Record<string, ArticleSource[]> = {
  // ── 민원서류 발급 ──────────────────────────────────────────────
  'health-insurance-eligibility-certificate': [
    { label: '국민건강보험 자격득실확인서 발급 (nhis.or.kr)', url: 'https://www.nhis.or.kr' },
  ],
  'resident-registration-copy': [
    { label: '정부24 주민등록등본 발급 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000051017' },
  ],
  'resident-registration-abstract': [
    { label: '정부24 주민등록초본 발급 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000051018' },
  ],
  'family-relation-certificate': [
    { label: '전자가족관계등록시스템 증명서 발급 (efamily.scourt.go.kr)', url: 'https://efamily.scourt.go.kr' },
  ],
  'health-insurance-payment-proof': [
    { label: '국민건강보험 납부확인서 발급 (nhis.or.kr)', url: 'https://www.nhis.or.kr' },
  ],
  'real-estate-registration-certificate': [
    { label: '인터넷등기소 등기부등본 발급 (iros.go.kr)', url: 'https://www.iros.go.kr' },
  ],
  'building-register': [
    { label: '정부24 건축물대장 발급 (gov.kr)', url: 'https://www.gov.kr' },
    { label: '세움터 건축물대장 조회 (eais.go.kr)', url: 'https://cloud.eais.go.kr' },
  ],
  'seal-certificate': [
    { label: '정부24 인감증명서 발급 (gov.kr)', url: 'https://www.gov.kr' },
  ],
  'land-register': [
    { label: '정부24 토지·임야대장 발급 (gov.kr)', url: 'https://www.gov.kr' },
    { label: '토지이음 토지이용계획확인 (eum.go.kr)', url: 'https://www.eum.go.kr' },
  ],
  'driving-record-certificate': [
    { label: '도로교통공단 안전운전통합민원 (safedriving.or.kr)', url: 'https://www.safedriving.or.kr' },
  ],
  'immigration-fact-certificate': [
    { label: '정부24 출입국사실증명 발급 (gov.kr)', url: 'https://www.gov.kr' },
    { label: '출입국·외국인정책본부 민원신청 (immigration.go.kr)', url: 'https://www.immigration.go.kr' },
  ],

  // ── 세금·납부 ───────────────────────────────────────────────────
  'car-tax-annual-prepay': [
    { label: '위택스 자동차세 연납 신청 (wetax.go.kr)', url: 'https://www.wetax.go.kr' },
  ],
  'property-tax-payment': [
    { label: '위택스 재산세 납부 (wetax.go.kr)', url: 'https://www.wetax.go.kr' },
  ],
  'hometax-payment-statement': [
    { label: '국세청 홈택스 지급명세서 조회 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'comprehensive-income-tax': [
    { label: '국세청 홈택스 종합소득세 신고 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'income-amount-certificate': [
    { label: '국세청 홈택스 소득금액증명 발급 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'year-end-tax-settlement': [
    { label: '국세청 홈택스 연말정산 간소화 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'value-added-tax': [
    { label: '국세청 홈택스 부가가치세 신고 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'acquisition-tax': [
    { label: '위택스 취득세 신고·납부 (wetax.go.kr)', url: 'https://www.wetax.go.kr' },
  ],
  'local-tax-certificate': [
    { label: '위택스 지방세 납세증명 발급 (wetax.go.kr)', url: 'https://www.wetax.go.kr' },
  ],
  'cash-receipt': [
    { label: '국세청 홈택스 현금영수증 조회·발급 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'tax-refund-check': [
    { label: '국세청 홈택스 환급금 조회 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],

  // ── 생활지원금 ──────────────────────────────────────────────────
  'youth-rent-support': [
    { label: '복지로 청년월세지원 신청 (bokjiro.go.kr)', url: 'https://www.bokjiro.go.kr' },
    { label: '마이홈 청년주거 안내 (myhome.go.kr)', url: 'https://www.myhome.go.kr' },
  ],
  'earned-income-credit': [
    { label: '국세청 홈택스 근로장려금 신청 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'child-tax-credit': [
    { label: '국세청 홈택스 자녀장려금 신청 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
  ],
  'unemployment-benefit': [
    { label: '고용24 실업급여 신청 (work24.go.kr)', url: 'https://www.work24.go.kr' },
    { label: '고용보험 수급 안내 (ei.go.kr)', url: 'https://www.ei.go.kr' },
  ],
  'basic-pension': [
    { label: '복지로 기초연금 신청 (bokjiro.go.kr)', url: 'https://www.bokjiro.go.kr' },
    { label: '국민연금공단 기초연금 안내 (nps.or.kr)', url: 'https://www.nps.or.kr' },
  ],
  'parental-childcare-benefit': [
    { label: '복지로 부모급여 신청 (bokjiro.go.kr)', url: 'https://www.bokjiro.go.kr' },
    { label: '아이사랑 보육포털 (childcare.go.kr)', url: 'https://www.childcare.go.kr' },
  ],
  'national-employment-support': [
    { label: '고용24 국민취업지원제도 신청 (work24.go.kr)', url: 'https://www.work24.go.kr' },
  ],
  'energy-voucher': [
    { label: '에너지바우처 공식 사이트 (energyvoucher.go.kr)', url: 'https://www.energyvoucher.go.kr' },
    { label: '복지로 에너지바우처 신청 (bokjiro.go.kr)', url: 'https://www.bokjiro.go.kr' },
  ],
  'youth-future-savings': [
    { label: '서민금융진흥원 청년도약계좌 (kinfa.or.kr)', url: 'https://www.kinfa.or.kr' },
  ],
  'national-scholarship': [
    { label: '한국장학재단 국가장학금 신청 (kosaf.go.kr)', url: 'https://www.kosaf.go.kr' },
  ],
  'emergency-welfare-support': [
    { label: '복지로 긴급복지지원 안내 (bokjiro.go.kr)', url: 'https://www.bokjiro.go.kr' },
    { label: '보건복지상담센터 129 (129.go.kr)', url: 'https://www.129.go.kr' },
  ],

  // ── 조회서비스 ──────────────────────────────────────────────────
  'telecom-unrefunded-fee': [
    { label: '통신미환급금 조회 (ktoa.or.kr)', url: 'https://www.ktoa.or.kr' },
  ],
  'four-major-insurance-history': [
    { label: '4대사회보험 정보연계센터 (4insure.or.kr)', url: 'https://www.4insure.or.kr' },
    { label: '국민건강보험 가입내역 조회 (nhis.or.kr)', url: 'https://www.nhis.or.kr' },
  ],
  'national-pension-history': [
    { label: '국민연금공단 가입내역 조회 (nps.or.kr)', url: 'https://www.nps.or.kr' },
  ],
  'dormant-money-check': [
    { label: '잠자는 내 돈 찾기 (sleepmoney.or.kr)', url: 'https://www.sleepmoney.or.kr' },
    { label: '금융감독원 파인 (fine.fss.or.kr)', url: 'https://fine.fss.or.kr' },
  ],
  'traffic-fine-check': [
    { label: '경찰청 교통민원24 과태료 조회 (efine.go.kr)', url: 'https://www.efine.go.kr' },
  ],
  'car-inspection-check': [
    { label: '한국교통안전공단 자동차검사 안내 (kotsa.or.kr)', url: 'https://www.kotsa.or.kr' },
  ],
  'card-point-check': [
    { label: '여신금융협회 카드포인트 통합조회 (cardpoint.or.kr)', url: 'https://www.cardpoint.or.kr' },
  ],
};
