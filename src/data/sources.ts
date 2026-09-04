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
  'health-insurance-loss-date-delay': [
    { label: '찾기쉬운 생활법령정보 — 직장가입자 자격 상실 (easylaw.go.kr)', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1063&ccfNo=2&cciNo=1&cnpClsNo=2' },
    { label: '국민연금공단 사업장 가입자 신고 안내 (nps.or.kr)', url: 'https://www.nps.or.kr' },
    { label: '고용24 피보험자격 확인 (work24.go.kr)', url: 'https://www.work24.go.kr' },
  ],
  'foreigner-family-registration-proof': [
    { label: '정부24 외국인 등의 세대별 주민등록표 기록 등 신청 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01010&CappBizCD=17410000015' },
    { label: '하이코리아 증명서 발급 안내 (hikorea.go.kr)', url: 'https://www.hikorea.go.kr' },
    { label: '전자가족관계등록시스템 (efamily.scourt.go.kr)', url: 'https://efamily.scourt.go.kr' },
  ],
  'overseas-korean-authentication': [
    { label: '재외동포청 재외동포인증센터 안내 (oka.go.kr)', url: 'https://www.oka.go.kr' },
    { label: '재외국민 365민원포털 공동인증서 발급 안내 (g4k.go.kr)', url: 'https://www.g4k.go.kr/cms/cntnts/guide01/guide01.html' },
  ],
  'digital-wallet-rejected': [
    { label: '정부 전자문서지갑 전자증명서 안내 (dpaper.kr)', url: 'https://dpaper.kr' },
    { label: '국가법령정보센터 전자문서 및 전자거래 기본법 (law.go.kr)', url: 'https://www.law.go.kr' },
    { label: '전자가족관계등록시스템 전자문서지갑 이용안내 (efamily.scourt.go.kr)', url: 'https://efamily.scourt.go.kr/pt/PtEcertIssGuidePW.do' },
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
  'tax-payment-certificate-delay': [
    { label: '홈택스 납세증명서 발급 (hometax.go.kr)', url: 'https://www.hometax.go.kr' },
    { label: '위택스 납세증명서 발급 (wetax.go.kr)', url: 'https://www.wetax.go.kr' },
    { label: '국가법령정보센터 국세징수법 시행령 (law.go.kr)', url: 'https://www.law.go.kr' },
  ],
  'income-certificate-not-available': [
    { label: '정부24 소득금액증명 발급 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000021' },
    { label: '국세청 종합소득세 신고 안내 (nts.go.kr)', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2225&cntntsId=7665' },
    { label: '정부24 사실증명 발급 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000352' },
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
    { label: '통신요금 정보포털 스마트초이스 (smartchoice.or.kr)', url: 'https://www.smartchoice.or.kr' },
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
  'iros-search-fail': [
    { label: '대법원 인터넷등기소 (iros.go.kr)', url: 'https://www.iros.go.kr' },
    { label: '행정안전부 주소정보누리집 (juso.go.kr)', url: 'https://www.juso.go.kr' },
    { label: '정부24 건축물대장 발급·열람 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000098' },
  ],
  'kiosk-fingerprint-fail': [
    { label: '정책브리핑 무인민원발급기 지문 인식 안내 (korea.kr)', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148909842' },
    { label: '정부24 주민등록증 재발급 신청 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000018' },
  ],
  'nhis-refund-smishing': [
    { label: '국민건강보험 본인부담상한액 초과금 신청 (nhis.or.kr)', url: 'https://www.nhis.or.kr/nhis/minwon/minwonServiceBoard.do?mode=view&articleNo=10945830' },
    { label: '한국인터넷진흥원 118 상담센터 (kisa.or.kr)', url: 'https://www.kisa.or.kr/118' },
  ],
  'gov24-print-refund': [
    { label: '정부24 전자결제 안내 (gov.kr)', url: 'https://www.gov.kr/new_info/customer/AA090_info_customer_elect.jsp' },
    { label: '정부24 자주묻는질문 — 수수료·환불 (gov.kr)', url: 'https://m.gov.kr/portal/faq/500' },
  ],
  'delegation-form-rejected': [
    { label: '국가법령정보센터 주민등록법 시행규칙 (law.go.kr)', url: 'https://www.law.go.kr' },
    { label: '정부24 인감증명서 발급 안내 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000025' },
    { label: '정책브리핑 인감증명서 온라인 발급 (korea.kr)', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148928691' },
  ],
  'moving-report-mistake': [
    { label: '정부24 FAQ — 온라인 전입신고 세대주확인 (gov.kr)', url: 'https://www.gov.kr/portal/faq/869' },
    { label: '찾기쉬운 생활법령정보 — 전입신고 (easylaw.go.kr)', url: 'https://www.easylaw.go.kr/CSP/CnpClsMainBtr.laf?csmSeq=666&ccfNo=4&cciNo=1&cnpClsNo=1' },
    { label: '정부24 전입신고 민원안내 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000016' },
  ],
  'sibling-document-issuance': [
    { label: '전자가족관계등록시스템 (efamily.scourt.go.kr)', url: 'https://efamily.scourt.go.kr' },
    { label: '정부24 주민등록표 등본(초본) 발급 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000015' },
    { label: '국가법령정보센터 주민등록법 (law.go.kr)', url: 'https://www.law.go.kr' },
  ],
  'basic-pension-history-management': [
    { label: '정책브리핑 기초연금 신청간주 제도 시행 (korea.kr)', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148969138' },
    { label: '보건복지부 2026년 기초연금 선정기준액 (mohw.go.kr)', url: 'https://www.mohw.go.kr/board.es?act=view&bid=0027&list_no=1488478&mid=a10503010100' },
    { label: '사회보장정보시스템 수급희망 이력관리제 (ssis.or.kr)', url: 'https://www.ssis.or.kr/lay1/bbs/S1T67C101/B/101/view.do?article_seq=115442' },
  ],
  'seizure-protected-account': [
    { label: '찾기쉬운 생활법령정보 — 압류방지 전용통장 (easylaw.go.kr)', url: 'https://www.easylaw.go.kr/CSP/OnhunqueansInfoRetrieve.laf?onhunqnaAstSeq=97&onhunqueSeq=5742' },
    { label: '법무부 생계비계좌 안내 (moj.go.kr)', url: 'https://www.moj.go.kr/bbs/moj/189/603060/artclView.do' },
    { label: '국민연금공단 안심통장 (nps.or.kr)', url: 'https://www.nps.or.kr' },
  ],
  'deceased-family-affairs': [
    { label: '정부24 안심상속 원스톱 서비스 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/442000000189' },
    { label: '금융감독원 상속인 금융거래조회 (fss.or.kr)', url: 'https://fss.or.kr/fss/cvpl/inhCerEc/main.do?menuNo=200010' },
    { label: '국세청 상속세 신고 안내 (nts.go.kr)', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2328&cntntsId=7722' },
  ],
  'voluntary-continuous-insurance': [
    { label: '국민건강보험 임의계속가입 안내 (nhis.or.kr)', url: 'https://www.nhis.or.kr' },
    { label: '찾기쉬운 생활법령정보 — 실업자의 직장가입자 자격 유지 (easylaw.go.kr)', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1063&ccfNo=2&cciNo=1&cnpClsNo=3' },
  ],
  'minor-child-documents': [
    { label: '전자가족관계등록시스템 발급 안내 (efamily.scourt.go.kr)', url: 'https://efamily.scourt.go.kr' },
    { label: '정부24 주민등록표 등본(초본) 발급 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000015' },
    { label: '찾기쉬운 생활법령정보 — 가족관계등록부 발급·열람 (easylaw.go.kr)', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=707&ccfNo=1&cciNo=1&cnpClsNo=2' },
  ],
  'auto-debit-still-charged': [
    { label: '계좌정보통합관리서비스 페이인포 (payinfo.or.kr)', url: 'https://www.payinfo.or.kr' },
    { label: '금융감독원 (fss.or.kr)', url: 'https://www.fss.or.kr' },
  ],
  'car-transfer-seller-proxy': [
    { label: '찾기쉬운 생활법령정보 자동차 이전등록 (easylaw.go.kr)', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=675&ccfNo=1&cciNo=2&cnpClsNo=3' },
    { label: '정부24 자동차 이전등록 신청 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09006&CappBizCD=15000000370' },
  ],
  'school-entry-notice': [
    { label: '정부24 취학통지서 온라인 신청·발급 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/134200005008' },
    { label: '학구도안내서비스 초등학교 취학 사무 절차 (schoolzone.emac.kr)', url: 'https://schoolzone.emac.kr/institution/procedures.do' },
  ],
  'residence-unknown-registration': [
    { label: '국가법령정보센터 주민등록법 (law.go.kr)', url: 'https://www.law.go.kr/LSW/lsInfoP.do?urlMode=lsInfoP&lsId=001655' },
    { label: '정부24 주민등록 재등록 신고 (gov.kr)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01010&CappBizCD=13100000011' },
  ],
  'unemployment-pension-credit': [
    { label: '국민연금공단 실업크레딧 신청 (nps.or.kr)', url: 'https://www.nps.or.kr/elctcvlcpt/comm/getOHAC0000M5.do?menuId=MN24001073' },
    { label: '정부24 실업크레딧 지원 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/B55201500004' },
  ],
  'energy-voucher-overlap': [
    { label: '에너지바우처 지원 안내 (energyv.or.kr)', url: 'https://www.energyv.or.kr/info/support_info.do' },
    { label: '등유바우처 사용안내 (energyv.or.kr)', url: 'https://www.energyv.or.kr/info/heato_info.do' },
    { label: '정부24 연탄쿠폰 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/145000000111' },
  ],
  'lease-report-fixed-date': [
    { label: '부동산거래관리시스템 주택임대차계약신고 (rtms.molit.go.kr)', url: 'https://rtms.molit.go.kr/main/serviceInfo.do' },
    { label: '찾기쉬운 생활법령정보 주택 임대차 계약 신고제 (easylaw.go.kr)', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=629&ccfNo=2&cciNo=2&cnpClsNo=5' },
  ],
  'utility-discount-reapply': [
    { label: '한국전력공사 복지할인 안내 (kepco.co.kr)', url: 'https://online.kepco.co.kr/MIM021D00' },
    { label: '정부24 요금감면 일괄신청 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/174100000049' },
    { label: '한국가스공사 도시가스요금경감 안내 (kogas.or.kr)', url: 'https://www.kogas.or.kr/site/koGas/1020408010000' },
  ],
  'health-checkup-target-check': [
    { label: '국민건강보험 일반건강검진 실시안내 (nhis.or.kr)', url: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do' },
    { label: '정부24 건강검진 대상 조회 및 출력 (gov.kr)', url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000050336' },
  ],
  'subsidy24-missing-benefits': [
    { label: '정부24 보조금24 맞춤안내 (gov.kr)', url: 'https://www.gov.kr/portal/rcvfvrSvc/main' },
    { label: '행정안전부 보조금24 안내 (mois.go.kr)', url: 'https://www.mois.go.kr' },
  ],
  'car-tax-exemption-clawback': [
    { label: '국가법령정보센터 지방세특례제한법 (law.go.kr)', url: 'https://www.law.go.kr' },
    { label: '찾기쉬운 생활법령정보 다자녀가구 자동차 취득세 감면 (easylaw.go.kr)', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1126&ccfNo=6&cciNo=1&cnpClsNo=1' },
  ],
};
