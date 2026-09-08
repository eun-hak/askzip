/**
 * 민원서류 진단기 데이터 모델.
 *
 * 사용자가 상황(대출·이직·비자 등)을 고르면 필요한 서류 목록과
 * 서류별 발급 경로·수수료·주의사항을 보여주기 위한 정적 데이터입니다.
 *
 * 모든 정보는 src/data/articles/ 의 글에 명시된 내용만 사용했습니다.
 * 글에 없는 수수료·정보는 null 로 두었습니다(발명 금지 원칙).
 * basedOn / slug 는 근거가 되는 글의 slug 입니다.
 */

/** 발급 경로 유형 */
export type ChannelType = 'online' | 'app' | 'kiosk' | 'counter' | 'phone';

export interface DocumentChannel {
  type: ChannelType;
  /** 채널 이름 (예: '정부24 (gov.kr)', '주민센터 창구') */
  name: string;
  /** 수수료. 글에 명시되지 않았으면 null */
  fee: string | null;
  /** 채널별 참고 사항 */
  note?: string;
  /** 이 채널 정보의 근거가 slug(대표 글) 외의 글일 때 해당 글 slug 목록 */
  basedOn?: string[];
}

export interface DocumentInfo {
  /** 대표 근거 글 slug (src/data/articles) — 서류 상세 안내로 연결 */
  slug: string;
  /** 서류명 */
  name: string;
  /** 발급 채널별 정보 */
  channels: DocumentChannel[];
  /** 유효기간 관행. 글에 명시가 없으면 null */
  validityNote: string | null;
  /** 제출처별 발급 옵션 주의사항. 글에 명시가 없으면 null */
  optionNote: string | null;
}

/** 상황별 필요 서류 참조 */
export interface SituationDocRef {
  /** DocumentInfo.slug 참조 */
  slug: string;
  /** 이 상황에서 이 서류가 필요한 이유·주의점 */
  note?: string;
  /** 근거 글 slug 목록 */
  basedOn: string[];
}

/** 상황 안의 서브옵션 (선택 시 서류가 추가됨) */
export interface SituationOption {
  id: string;
  label: string;
  /** 이 옵션 선택 시 추가로 필요한 서류 */
  extraDocuments: SituationDocRef[];
}

/** 서류가 아닌 절차·기한 등 상황 공통 안내 */
export interface SituationNote {
  text: string;
  basedOn: string[];
}

export interface Situation {
  id: string;
  label: string;
  description: string;
  /** 서브옵션과 무관하게 공통으로 필요한 서류 */
  documents: SituationDocRef[];
  /** 서브옵션 — 선택에 따라 추가되는 서류 */
  options?: SituationOption[];
  /** 서류 외 절차·기한 안내 */
  notes?: SituationNote[];
}

/** 서류별 발급 정보 */
export const documents: DocumentInfo[] = [
  {
    slug: 'resident-registration-copy',
    name: '주민등록등본',
    channels: [
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: '무료',
        note: '인증서 필요(간편인증 가능), PDF 저장·바로 인쇄 가능',
      },
      {
        type: 'app',
        name: '정부24 앱',
        fee: '무료',
        note: '간편인증 지원, 전자문서지갑 수령 가능 — 제출처의 전자문서 수신 가능 여부 먼저 확인',
      },
      {
        type: 'kiosk',
        name: '무인발급기',
        fee: '1통 200원',
        note: '지문 인증 필요 — 인증 반복 실패 시 주민센터 창구가 확실',
        basedOn: ['sibling-document-issuance', 'kiosk-fingerprint-fail'],
      },
      {
        type: 'counter',
        name: '주민센터 창구',
        fee: '1통 400원',
        note: '신분증 필요, 옵션 선택을 창구에서 상담 가능. 타인 등본은 위임장·대리인 신분증 지참',
        basedOn: ['sibling-document-issuance'],
      },
    ],
    validityNote:
      '법적 유효기간은 없으나 제출처에 따라 발급 후 1~3개월 이내 서류만 인정하는 경우가 많음 — 제출 직전 발급 권장',
    optionNote:
      '주민등록번호 뒷자리·세대원 전원 기재·변동 사유·병역 사항 포함 여부를 선택. 제출처가 명시한 항목은 빠짐없이 포함하고, 명시되지 않은 민감 항목은 비표시 권장. 은행 대출은 세대원 전원 기재에 뒷자리 표시까지 요구하기도 함. 온라인 발급은 본인·세대원 서류만 가능',
  },
  {
    slug: 'resident-registration-abstract',
    name: '주민등록초본',
    channels: [
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: '무료',
        note: '본인 것만 인터넷 발급 가능',
      },
      {
        type: 'kiosk',
        name: '무인발급기',
        fee: null,
      },
      {
        type: 'counter',
        name: '주민센터 창구',
        fee: null,
        note: '타인 초본은 위임장과 신분증을 갖춰 방문',
      },
    ],
    validityNote: null,
    optionNote:
      '주소 변동 이력 포함 범위(미포함·최근·전체), 병역 사항, 주민등록번호 뒷자리 표시를 선택. 제출처가 확인하려는 기간을 덮는 최소 범위 선택이 원칙이며, 병적사항은 명시된 경우에만 포함. 전입신고 직후에는 새 주소 반영 여부 확인',
  },
  {
    slug: 'family-relation-certificate',
    name: '가족관계증명서 (기본·혼인관계 등 5종)',
    channels: [
      {
        type: 'online',
        name: '대법원 전자가족관계등록시스템 (efamily.scourt.go.kr)',
        fee: '무료',
        note: '정부24에서도 같은 증명서를 무료로 발급 가능. 재외국민은 재외국민 가족관계등록사무소 이용',
      },
      {
        type: 'counter',
        name: '창구 방문',
        fee: null,
        note: '형제자매 등 온라인 발급 범위 밖의 서류는 위임장과 양쪽 신분증을 갖춰 창구에서 발급',
        basedOn: ['sibling-document-issuance'],
      },
    ],
    validityNote: null,
    optionNote:
      '일반(현재 유효 관계만)·상세(과거 이력 포함)·특정(선택 항목만) 중 선택 — 제출처가 상세를 명시하지 않았다면 일반으로 시작. 상속 절차에서는 사망자 기준 "폐쇄" 증명서를 요구받을 수 있음. 형제 관계 증명은 본인 기준이 아닌 부모 기준 증명서로 발급. 온라인 발급 범위는 본인·배우자·직계혈족',
  },
  {
    slug: 'seal-certificate',
    name: '인감증명서',
    channels: [
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: null,
        note: '일반용 일부만 온라인 발급 가능(2024.10~). 본인 한정, 온라인 대리 발급 불가. 위변조 방지로 PDF 저장이 제한될 수 있어 프린터 필요',
      },
      {
        type: 'counter',
        name: '주민센터 창구',
        fee: null,
        note: '부동산·자동차 매도용, 법원·금융기관 제출용은 방문 발급만 가능. 대리 발급은 위임장·인감도장 날인·양쪽 신분증 필요. 최초 인감 신고도 방문 필수',
      },
      {
        type: 'kiosk',
        name: '무인발급기',
        fee: null,
        note: '프린터가 없을 때의 대안 경로로 안내됨',
      },
    ],
    validityNote: null,
    optionNote:
      '용도가 구분된 인감증명서는 그 용도로만 효력 인정 — 매도용이 필요한 거래에 일반용을 내면 재발급. 제출처가 본인서명사실확인서로 대체를 인정하는지 먼저 확인하면 인감 신고 없이 처리 가능한 경우도 있음',
  },
  {
    slug: 'real-estate-registration-certificate',
    name: '등기부등본 (등기사항전부증명서)',
    channels: [
      {
        type: 'online',
        name: '대법원 인터넷등기소 (iros.go.kr)',
        fee: '열람 700원 / 발급(출력) 1,000원',
        note: '열람본은 법적 효력이 없어 제출 시 거부될 수 있음 — 제출용은 반드시 발급(출력) 선택. 재출력은 결제 후 1시간 이내만 무료. 주소만 알면 누구나 발급 가능',
      },
      {
        type: 'kiosk',
        name: '법원·행정안전부 무인발급기',
        fee: null,
      },
      {
        type: 'counter',
        name: '등기소 창구',
        fee: null,
        note: '주민센터·정부24에서는 발급되지 않음',
      },
    ],
    validityNote:
      '유효기간 언급 없음 — 발급 후에도 근저당이 새로 설정될 수 있어 계약 당일과 잔금(입주) 당일에 각각 최신본을 다시 확인하는 것이 실무 요령',
    optionNote:
      '말소사항 포함(과거 이력)/유효사항만, 주민등록번호 공개 범위를 선택 — 전세 계약 전 확인이라면 말소사항 포함본 권장. 단독주택은 건물·토지 등기가 별개라 둘 다 확인. 은행 등 제출처가 정해져 있으면 요구 형식을 먼저 확인',
  },
  {
    slug: 'building-register',
    name: '건축물대장',
    channels: [
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: '무료',
        note: '소유자가 아니어도 주소만 알면 발급 가능. 평면도 등 현황도는 정부24 발급 불가',
      },
      {
        type: 'online',
        name: '세움터 (cloud.eais.go.kr)',
        fee: null,
        note: '건축물 현황도(평면도 등)는 세움터에서 신청 — 소유자 등 자격 제한 있음',
      },
    ],
    validityNote: null,
    optionNote:
      '일반/집합, 표제부/전유부/총괄표제부 중 선택 — 아파트·오피스텔 호실 확인은 반드시 전유부. 상단 "위반건축물" 표기와 전유부 용도가 "주택"인지 확인(근린생활시설 개조 물건은 대출·보증보험이 막힐 수 있음)',
  },
  {
    slug: 'land-register',
    name: '토지대장 (임야대장)',
    channels: [
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: '무료',
        note: '지번만 알면 누구나 발급 가능 (소유자 개인정보는 제한 표시)',
      },
      {
        type: 'kiosk',
        name: '무인민원발급기',
        fee: '소액 수수료',
      },
      {
        type: 'counter',
        name: '시·군·구청, 주민센터 창구',
        fee: '소액 수수료',
        note: '지번이 불확실해 직원과 확인하며 뗄 때 유리',
      },
    ],
    validityNote: null,
    optionNote:
      '일반 지번은 토지대장, 산 지번(산 12-3 등)은 임야대장으로 구분 선택. 등본/초본 선택. 아파트 등 집합건물의 토지 지분은 토지대장이 아니라 "대지권등록부"로 발급',
  },
  {
    slug: 'health-insurance-eligibility-certificate',
    name: '건강보험 자격득실확인서',
    channels: [
      {
        type: 'online',
        name: '국민건강보험공단 (nhis.or.kr)',
        fee: '무료',
        note: '본인인증 후 즉시 PDF 저장·출력, 위변조 방지 마크 포함',
      },
      {
        type: 'app',
        name: 'The건강보험 앱',
        fee: '무료',
        note: 'PDF 저장·이메일 전송 가능',
      },
      {
        type: 'phone',
        name: '공단 고객센터 전화',
        fee: null,
        note: '상담원 통해 팩스·우편 수령 — 인증 수단이 전혀 없을 때',
      },
      {
        type: 'kiosk',
        name: '무인민원발급기',
        fee: null,
        note: '행정복지센터 등에서 지문 인증 후 출력',
      },
      {
        type: 'counter',
        name: '공단 지사 방문',
        fee: null,
        note: '수수료가 부과될 수 있음. 이력 정정 상담을 겸할 때 유리',
      },
    ],
    validityNote:
      '법적 유효기간은 없지만 제출처에 따라 발급일로부터 1~3개월 이내만 인정하는 경우가 많고, 특히 대출 심사는 최근 발급분 요구 경향 — 제출 직전 발급 권장',
    optionNote:
      '주민등록번호 전체 표시 출력은 제출처가 요구할 때만 체크. 퇴사 직후에는 상실신고(퇴사 다음 날부터 14일 이내) 미반영으로 상실일이 비어 나올 수 있음 — 이직 서류 마감이 임박했다면 반영 여부 먼저 확인',
  },
  {
    slug: 'health-insurance-payment-proof',
    name: '건강보험료 납부확인서',
    channels: [
      {
        type: 'online',
        name: '국민건강보험공단 (nhis.or.kr)',
        fee: '무료',
        note: '제출용 기본 경로. 최근 3년 내 납부 내역 발급 가능',
      },
      {
        type: 'app',
        name: 'The건강보험 앱',
        fee: null,
        note: '모바일로 제출용 파일이 필요할 때',
      },
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: null,
        note: '정부24 발급본은 "확인용" — 금융기관 등 정식 제출용으로는 반려될 수 있음',
      },
      {
        type: 'counter',
        name: '공단 지사 방문',
        fee: null,
        note: '인증 수단이 없거나 온라인 발급이 막혔을 때',
      },
    ],
    validityNote: null,
    optionNote:
      '발급 기간 설정이 핵심 — 국가장학금은 전년도 1년 치, 금융기관 대출은 최근 3~6개월 등 제출처 요구 기간을 그대로 옮길 것. 지역가입자는 세대주 기준으로 부과되므로 세대원 명의 발급 시 내역이 비어 보일 수 있음. 지역가입자는 최근 월이 아직 부과 전이면 조회되지 않을 수 있음',
  },
  {
    slug: 'income-amount-certificate',
    name: '소득금액증명원',
    channels: [
      {
        type: 'online',
        name: '국세청 홈택스 (hometax.go.kr)',
        fee: '무료',
        note: '제출용 기본 경로. 정부24에서도 신청 가능(발급 주체 동일)',
      },
      {
        type: 'app',
        name: '손택스 앱',
        fee: null,
        note: '전자문서 제출이 허용될 때, 종이 제출 기관에는 불편',
      },
      {
        type: 'kiosk',
        name: '무인발급기',
        fee: null,
        note: '기기별로 국세 증명 지원 여부가 달라 방문 전 확인 필요',
      },
      {
        type: 'counter',
        name: '세무서 민원실',
        fee: null,
        note: '신분증만으로 발급 — 발급 오류·소득 누락 상담을 겸할 때',
      },
    ],
    validityNote: null,
    optionNote:
      '제출처가 지정한 귀속 연도·용도를 그대로 선택(잘못 고르면 반려). 신고·확정 전 소득은 조회되지 않음 — 연초~5월 종소세 신고 전에는 직전 연도가 안 잡히는 것이 정상. 무소득 증빙은 "사실증명(신고사실 없음)"으로. 청년 정책용 "소득확인증명서"는 별도 서류이니 명칭 확인',
  },
  {
    slug: 'local-tax-certificate',
    name: '지방세 세목별 과세증명서',
    channels: [
      {
        type: 'online',
        name: '위택스 (wetax.go.kr)',
        fee: '무료',
        note: '여러 연도·세목을 한 번에 발급할 때 유리',
      },
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: '무료',
        note: '다른 민원서류와 같이 발급할 때. 서울 재산은 "서울" 메뉴(서울시 ETAX)로 별도 신청',
      },
      {
        type: 'counter',
        name: '주민센터·구청 창구',
        fee: null,
        note: '지자체·서류 종류에 따라 수수료가 다를 수 있음',
      },
      {
        type: 'kiosk',
        name: '무인발급기',
        fee: null,
        note: '지문 인증 필요. 기기에 따라 지방세 증명 메뉴가 없는 경우도 있음',
      },
    ],
    validityNote:
      '발급일이 찍히고 제출처마다 인정하는 발급 경과 기간이 다름 — 제출 일정이 잡힌 뒤 접수 직전에 발급 권장',
    optionNote:
      '세목(재산세 등)·과세연도·증명 기간을 제출처 요구 범위에 맞춰 선택. "납세증명서(완납증명)"와는 다른 서류이니 안내문의 서류명 확인. 서울과 서울 외 지역은 통합 발급되지 않고 관할별 별도 신청. 체납이 있으면 내역에 그대로 표시됨',
  },
  {
    slug: 'tax-payment-certificate-delay',
    name: '납세증명서 (국세·지방세 완납증명)',
    channels: [
      {
        type: 'online',
        name: '국세: 홈택스 / 지방세: 위택스·정부24',
        fee: null,
        note: '국세용과 지방세용은 완전히 별개 서류 — "국세 및 지방세 납세증명서" 요구 시 두 장 준비. 체납분 납부 직후에는 전산 반영 전이라 발급이 막힐 수 있음(홈택스 체납 납부는 3~4일 이상 걸리기도)',
      },
      {
        type: 'counter',
        name: '국세: 세무서 민원실 / 지방세: 시·군·구청, 주민센터',
        fee: null,
        note: '납부 직후 전산 미반영 상태면 납부 영수증·이체확인증을 지참해 창구에서 즉시 발급 요청 가능',
      },
    ],
    validityNote:
      '유효기간은 발급일부터 30일(국세징수법·지방세징수법 시행령). 고지분이 걸려 있으면 해당 납부기한까지로 단축될 수 있음 — 잔금일·입찰일에서 역산해 제출 직전 2~3일 안쪽 발급 권장',
    optionNote:
      '발급 시점 기준 체납이 없어야 나오는 서류 — 납부 사실을 보여주는 "납부내역증명"과 다름. 증명서가 급하면 은행 창구·ATM보다 홈택스·위택스 안에서 납부하는 편이 반영이 빠름',
  },
  {
    slug: 'driving-record-certificate',
    name: '운전경력증명서',
    channels: [
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: '무료',
        note: '간편인증 발급, 영문본 지원 — 해외 제출용은 정부24에서 영문 선택',
      },
      {
        type: 'online',
        name: '경찰청 교통민원24 이파인 (efine.go.kr)',
        fee: '무료',
        note: '면허 취득일자·위반 내역을 같이 확인할 때',
      },
      {
        type: 'counter',
        name: '경찰서 교통민원실',
        fee: null,
        note: '신분증만으로 발급 — 온라인 인증이 안 되거나 프린터가 없을 때',
      },
      {
        type: 'kiosk',
        name: '무인민원발급기',
        fee: null,
      },
    ],
    validityNote:
      '법적 유효기간은 없지만 대부분의 기관은 최근 3개월 이내 발급본을 요구 — 제출 직전 발급 권장',
    optionNote:
      '기재 기간과 사고·위반 기록 포함 여부를 선택 — 제출처 요구 조건을 문서로 받아 두고 맞출 것(별도 지정이 없으면 전체 기간 권장). 온라인 발급은 본인만 가능(대리 불가). 해외 제출용은 영문 선택, 국가에 따라 아포스티유·영사 확인이 추가로 필요할 수 있음',
  },
  {
    slug: 'immigration-fact-certificate',
    name: '출입국에 관한 사실증명',
    channels: [
      {
        type: 'online',
        name: '정부24 (gov.kr)',
        fee: '무료',
        note: '내국인용. 외국인은 하이코리아(hikorea.go.kr)에서 "외국인등록 사실증명" 발급',
      },
      {
        type: 'counter',
        name: '출입국·외국인청',
        fee: null,
        note: '기록 확인·정정 상담을 겸해야 할 때 — 기록 정정은 담당 기관을 거쳐야 함',
      },
      {
        type: 'counter',
        name: '시·군·구청, 주민센터 창구',
        fee: null,
      },
    ],
    validityNote: null,
    optionNote:
      '증명 기간(출생일~신청 전날 중 지정)이 핵심 옵션 — 제출처 요구 기간이 빠짐없이 들어가게 지정(기간 밖 기록은 아예 표시되지 않음). 해외 제출용은 영문 여부를 신청 전에 확인. 우리나라 출입국 기록만 증명되며 상대국 기록은 해당국 이민당국에서 별도 발급',
  },
  {
    slug: 'four-major-insurance-history',
    name: '4대사회보험 가입내역 확인서',
    channels: [
      {
        type: 'online',
        name: '4대사회보험 정보연계센터 (4insure.or.kr)',
        fee: '무료',
        note: '국민연금·건강보험·고용·산재 가입 상태를 한 장에 정리. 위변조 방지 코드 포함 공식 문서',
      },
    ],
    validityNote: null,
    optionNote:
      '현재 가입 중인 상태 중심으로 표시 — 퇴사·이직 직후에는 자격 변동 신고 반영 전일 수 있고 일용직 가입분은 빠져 보일 수 있음. 제출처가 "자격득실확인서" 등 다른 서류명을 지정했다면 그 명칭의 서류를 발급해야 함. 과거 이력의 시간 흐름이 필요하면 건강보험 자격득실확인서 쪽',
  },
];

/** 상황 → 필요 서류 매핑 */
export const situations: Situation[] = [
  {
    id: 'bank-loan',
    label: '은행 대출',
    description: '전세자금대출·주택담보대출 등 금융기관 대출 심사에 제출하는 서류',
    documents: [
      {
        slug: 'resident-registration-copy',
        note: '세대원 전원 기재를 요구하는 경우가 많고 뒷자리 표시까지 요구하기도 — 대출 담당자에게 필수 표시 항목을 문자 등으로 받아 둘 것',
        basedOn: ['resident-registration-copy'],
      },
      {
        slug: 'health-insurance-eligibility-certificate',
        note: '재직 여부를 공단 전산으로 교차 확인하는 용도 — 발급일이 최근인지 중요',
        basedOn: ['health-insurance-eligibility-certificate'],
      },
      {
        slug: 'income-amount-certificate',
        note: '소득 수준 증빙 — 제출처가 지정한 귀속 연도 확인',
        basedOn: ['income-amount-certificate'],
      },
      {
        slug: 'health-insurance-payment-proof',
        note: '금융기관 대출은 최근 3~6개월 치 요구가 일반적. 정부24 확인용본이 아닌 공단 발급본으로',
        basedOn: ['health-insurance-payment-proof'],
      },
      {
        slug: 'local-tax-certificate',
        note: '과세증명서 또는 납세증명서 형태로 재산·소득 수준과 체납 여부 확인 — 요구 서류명 확인',
        basedOn: ['local-tax-certificate'],
      },
      {
        slug: 'four-major-insurance-history',
        note: '고용 상태 증명 자료로 활용 — 은행마다 요구 서류명이 다르므로 안내받은 명칭 그대로 발급',
        basedOn: ['four-major-insurance-history'],
      },
    ],
    options: [
      {
        id: 'jeonse-loan',
        label: '전세자금대출',
        extraDocuments: [
          {
            slug: 'real-estate-registration-certificate',
            note: '제출용은 열람(700원)이 아닌 발급(1,000원)본. 은행 요구 형식(말소사항 포함 여부 등)을 먼저 확인',
            basedOn: ['real-estate-registration-certificate'],
          },
          {
            slug: 'building-register',
            note: '위반건축물·근린생활시설 개조 물건은 전세대출이 막힐 수 있어 계약 전 확인',
            basedOn: ['building-register'],
          },
        ],
      },
      {
        id: 'mortgage-loan',
        label: '주택담보대출',
        extraDocuments: [
          {
            slug: 'building-register',
            note: '주택담보대출 심사 때 은행이 요구하는 기본 서류',
            basedOn: ['building-register'],
          },
          {
            slug: 'real-estate-registration-certificate',
            note: '단독주택은 건물·토지 등기를 모두 발급해야 하는 경우가 많음',
            basedOn: ['real-estate-registration-certificate'],
          },
        ],
      },
    ],
  },
  {
    id: 'job-change',
    label: '이직·입사',
    description: '새 회사 제출용 경력·신원 증빙 서류',
    documents: [
      {
        slug: 'health-insurance-eligibility-certificate',
        note: '사업장명·취득일·상실일로 경력 증빙 — 이전 회사가 폐업했어도 발급 가능. 퇴사 직후엔 상실신고(14일 이내) 반영 여부부터 확인',
        basedOn: ['health-insurance-eligibility-certificate'],
      },
      {
        slug: 'four-major-insurance-history',
        note: '과거 직장 이력·보험 가입 기간 확인. 이력서의 재직 기간과 취득·상실일이 다르면 소명 요구받을 수 있으니 제출 전 대조',
        basedOn: ['four-major-insurance-history'],
      },
      {
        slug: 'resident-registration-copy',
        note: '부양가족 확인 목적이면 세대원 전원 기재 — 인사팀 제출 안내문의 옵션 조건 확인',
        basedOn: ['resident-registration-copy'],
      },
    ],
    options: [
      {
        id: 'military-record',
        label: '병역 증빙이 필요한 경우',
        extraDocuments: [
          {
            slug: 'resident-registration-abstract',
            note: '병적사항 포함 발급 — 등본이 아니라 초본에 담기는 항목',
            basedOn: ['resident-registration-abstract'],
          },
        ],
      },
      {
        id: 'driving-job',
        label: '운전직 채용',
        extraDocuments: [
          {
            slug: 'driving-record-certificate',
            note: '버스·화물 등 운수업, 운전직 공무원 지원 시 이력 확인 — 기록 포함 범위는 공고 기준으로',
            basedOn: ['driving-record-certificate'],
          },
        ],
      },
    ],
  },
  {
    id: 'visa-overseas',
    label: '비자·해외 제출',
    description: '비자·영주권 신청, 체류 자격 연장 등 해외·출입국 기관 제출 서류',
    documents: [
      {
        slug: 'immigration-fact-certificate',
        note: '한국 출입국 이력 제출 — 요구 기간이 빠짐없이 들어가게 기간 지정, 영문 여부 확인',
        basedOn: ['immigration-fact-certificate'],
      },
      {
        slug: 'resident-registration-copy',
        note: '번역·공증과 함께 요구되거나 전체 표시를 요구하기도 — 대사관·해당 기관 안내문 기준으로 준비',
        basedOn: ['resident-registration-copy'],
      },
      {
        slug: 'health-insurance-payment-proof',
        note: '체류 자격 연장·비자 신청에서 국내 소득 활동을 뒷받침하는 자료로 사용',
        basedOn: ['health-insurance-payment-proof'],
      },
      {
        slug: 'tax-payment-certificate-delay',
        note: '체류 연장·비자 관련 신청에서 납세 의무 이행 확인용 — 국세·지방세를 요구하면 두 장 준비',
        basedOn: ['local-tax-certificate', 'tax-payment-certificate-delay'],
      },
    ],
    options: [
      {
        id: 'license-transfer',
        label: '해외 면허 전환·현지 보험 가입',
        extraDocuments: [
          {
            slug: 'driving-record-certificate',
            note: '대부분 영문 증명서 요구 — 정부24에서 영문 선택. 국가에 따라 아포스티유·영사 확인 추가',
            basedOn: ['driving-record-certificate'],
          },
        ],
      },
    ],
  },
  {
    id: 'lease-contract',
    label: '임대차 계약 (전·월세)',
    description: '전·월세 계약 전 확인과 계약 진행에 필요한 서류',
    documents: [],
    options: [
      {
        id: 'tenant',
        label: '임차인 (계약 전 확인)',
        extraDocuments: [
          {
            slug: 'real-estate-registration-certificate',
            note: '갑구 소유자·을구 근저당 확인. 계약 당일과 잔금 당일에 각각 최신본 재확인(확인용은 열람 700원으로 충분)',
            basedOn: ['real-estate-registration-certificate'],
          },
          {
            slug: 'building-register',
            note: '위반건축물 표기와 계약 호실(전유부) 용도가 "주택"인지 확인 — 근생 개조 물건은 전세대출·보증보험이 막힐 수 있음',
            basedOn: ['building-register'],
          },
          {
            slug: 'resident-registration-copy',
            note: '임대차 계약 시 가장 많이 제출하는 서류 중 하나',
            basedOn: ['resident-registration-copy'],
          },
        ],
      },
      {
        id: 'landlord-proxy',
        label: '임대인 대리 계약',
        extraDocuments: [
          {
            slug: 'seal-certificate',
            note: '대리인 계약이라면 임차인이 위임장·인감증명서를 요구하고 소유자 본인에게 직접 의사 확인하는 것이 정석',
            basedOn: ['real-estate-registration-certificate', 'seal-certificate'],
          },
        ],
      },
    ],
    notes: [
      {
        text: '계약 체결일부터 30일 이내 임대차 신고 — 임대차계약서를 첨부해 신고해야 확정일자가 자동 부여됨(계약서 없이 신고하면 확정일자를 따로 신청해야 함). 보증금 보호는 확정일자만으로 부족하고 주택 인도 + 전입신고까지 갖춰야 우선변제권 성립',
        basedOn: ['lease-report-fixed-date'],
      },
    ],
  },
  {
    id: 'subsidy-application',
    label: '지원금·복지 신청',
    description: '청년월세지원·국가장학금 등 정부 지원 사업의 소득·가구 증빙 서류',
    documents: [
      {
        slug: 'resident-registration-copy',
        note: '각종 지원금 신청의 기본 제출 서류 — 계약서 주소·등본 주소 일치 여부가 심사 포인트인 사업도 있음',
        basedOn: ['resident-registration-copy', 'youth-rent-support'],
      },
      {
        slug: 'family-relation-certificate',
        note: '가구 구성 확인용 — 청년월세지원 등에서 등본과 함께 요구',
        basedOn: ['youth-rent-support', 'family-relation-certificate'],
      },
      {
        slug: 'income-amount-certificate',
        note: '소득 요건 확인 — 국가장학금은 가구 소득 산정 자료로 사용',
        basedOn: ['income-amount-certificate'],
      },
      {
        slug: 'health-insurance-payment-proof',
        note: '국가장학금은 전년도 1월~12월 1년 치처럼 용도별 요구 기간이 다름 — 기간 설정 확인',
        basedOn: ['health-insurance-payment-proof'],
      },
      {
        slug: 'health-insurance-eligibility-certificate',
        note: '가구원의 직장/지역 가입 구분이 자격 판정 기준이 되는 사업이 있음 — 피부양자 기간 포함 발급',
        basedOn: ['health-insurance-eligibility-certificate'],
      },
      {
        slug: 'local-tax-certificate',
        note: '재산 보유 현황 확인용 과세증명서',
        basedOn: ['local-tax-certificate'],
      },
      {
        slug: 'four-major-insurance-history',
        note: '소득·고용 상태 증빙',
        basedOn: ['four-major-insurance-history'],
      },
    ],
    notes: [
      {
        text: '청년월세지원은 임대차계약서 사본·월세 이체 증빙·통장 사본도 함께 요구 — 계약서 주소·주민등록상 주소·실거주지가 모두 일치해야 함',
        basedOn: ['youth-rent-support'],
      },
    ],
  },
  {
    id: 'inheritance',
    label: '상속·사망 후 처리',
    description: '가족 사망 후 재산 조회·상속 절차·명의 정리에 필요한 서류',
    documents: [
      {
        slug: 'family-relation-certificate',
        note: '상속 절차에서는 사망자 기준 "폐쇄" 증명서를 요구받을 수 있고, 여러 종류(가족관계·기본증명서 등)를 동시에 요구하기도 함. 형제 관계 증명은 부모 기준 증명서로',
        basedOn: ['family-relation-certificate', 'sibling-document-issuance'],
      },
      {
        slug: 'land-register',
        note: '사망자 명의 토지 현황 파악, 세무 신고 면적 자료 첨부 — 소유자 변동 연혁으로 과거 소유 관계 확인 가능',
        basedOn: ['land-register'],
      },
    ],
    notes: [
      {
        text: '사망신고(사망 사실을 안 날부터 1개월)와 함께 안심상속 원스톱 서비스를 신청하면 금융·부동산·자동차·세금·연금을 한 번에 조회(기한: 사망일이 속한 달의 말일부터 1년, 온라인은 1·2순위 상속인만). 사망신고 후 따로 신청할 때는 가족관계증명서 등 상속관계 확인 서류가 추가됨',
        basedOn: ['deceased-family-affairs'],
      },
      {
        text: '상속포기·한정승인은 상속개시 있음을 안 날부터 3개월, 상속세·상속 부동산 취득세는 사망일이 속한 달의 말일부터 6개월 이내',
        basedOn: ['deceased-family-affairs'],
      },
      {
        text: '사망자 명의 휴대폰 해지에는 사망진단서 등 사망 확인 서류, 가족관계 확인 서류, 신청인 신분증 필요 — 인정 서류는 통신사마다 달라 방문 전 확인',
        basedOn: ['deceased-family-affairs'],
      },
    ],
  },
  {
    id: 'car-trade',
    label: '자동차 매매·이전등록',
    description: '자동차를 사고팔 때의 명의 이전 관련 서류',
    documents: [
      {
        slug: 'seal-certificate',
        note: '자동차 매도용 인감증명서는 온라인 발급 불가 — 주민센터 방문 발급. 용도 구분이 있는 서류라 매도용을 정확히 지정',
        basedOn: ['seal-certificate'],
      },
      {
        slug: 'resident-registration-abstract',
        note: '차량 등록·이전 시 본인 확인용',
        basedOn: ['resident-registration-abstract'],
      },
    ],
    notes: [
      {
        text: '이전등록 신청 기간: 매매 15일 / 증여 20일 / 상속 6개월(자동차등록령). 양수인이 이전등록을 안 하면 양도인 대위등록 검토 — 양도증명서에 양수인 인적사항이 남아 있어야 절차가 수월하므로 계약 시 인적사항 기재를 확인',
        basedOn: ['car-transfer-seller-proxy'],
      },
    ],
  },
  {
    id: 'real-estate-trade',
    label: '부동산 매매',
    description: '부동산을 사고팔 때 확인·제출하는 서류',
    documents: [
      {
        slug: 'real-estate-registration-certificate',
        note: '소유자·권리관계 확인 — 단독주택은 건물·토지 등기를 모두 발급',
        basedOn: ['real-estate-registration-certificate'],
      },
      {
        slug: 'building-register',
        note: '불법 증축분이 있는지 매수 전 대장으로 확인',
        basedOn: ['building-register'],
      },
      {
        slug: 'land-register',
        note: '계약서 면적과 대장 면적 대조 — 토지 거래는 토지대장(현황)·등기부(권리)·토지이용계획확인서(규제)를 함께 확인',
        basedOn: ['land-register'],
      },
      {
        slug: 'seal-certificate',
        note: '매도인은 부동산 매도용 인감증명서 필요 — 온라인 불가, 방문 발급. 정확한 용도 명칭을 법무사·상대방에게 확인',
        basedOn: ['seal-certificate'],
      },
      {
        slug: 'tax-payment-certificate-delay',
        note: '부동산 잔금에서 국세·지방세 납세증명서 두 장을 요구하는 경우가 많음 — 유효기간 30일이므로 잔금일에서 역산해 제출 직전 2~3일 안쪽 발급',
        basedOn: ['tax-payment-certificate-delay'],
      },
    ],
  },
  {
    id: 'court-legal',
    label: '법원·행정 제출',
    description: '소송·행정 절차에서 요구되는 본인·재산·이력 증빙 서류',
    documents: [
      {
        slug: 'resident-registration-abstract',
        note: '본인 인적사항·주소 이력 확인용',
        basedOn: ['resident-registration-abstract'],
      },
      {
        slug: 'seal-certificate',
        note: '법원 제출용은 온라인 발급 불가 — 주민센터 방문 발급',
        basedOn: ['seal-certificate'],
      },
      {
        slug: 'income-amount-certificate',
        note: '소득 관련 입증 자료',
        basedOn: ['income-amount-certificate'],
      },
      {
        slug: 'immigration-fact-certificate',
        note: '특정 시점의 국내외 체류 사실을 증거로 제출 — 다투는 시점이 포함되도록 기간을 정확히 지정',
        basedOn: ['immigration-fact-certificate'],
      },
      {
        slug: 'driving-record-certificate',
        note: '소송·행정 절차에서 운전 경력과 사고 이력 확인',
        basedOn: ['driving-record-certificate'],
      },
      {
        slug: 'real-estate-registration-certificate',
        note: '법원 제출용은 열람(700원)이 아닌 발급(출력, 1,000원)을 선택해야 함',
        basedOn: ['real-estate-registration-certificate'],
      },
    ],
  },
];

/** slug 로 서류 정보 조회 */
export function getDocumentBySlug(slug: string): DocumentInfo | undefined {
  return documents.find((d) => d.slug === slug);
}

/** id 로 상황 조회 */
export function getSituationById(id: string): Situation | undefined {
  return situations.find((s) => s.id === id);
}
