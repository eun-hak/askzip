export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://askzip.kr';

export const SITE_NAME = '애스크집';

export const SITE_SUBTITLE = '민원서류·세금·지원금 생활 가이드';

export const SITE_TITLE = `${SITE_NAME} | ${SITE_SUBTITLE}`;

export const SITE_DESCRIPTION =
  '애스크집은 민원서류 발급, 세금 납부, 지원금 신청, 생활 조회 서비스를 쉽게 정리하는 생활 행정 가이드입니다.';

export const SITE_EMAIL = 'contact@askzip.kr';

// 저자 필명. 다른 이름을 원하면 이 상수 하나만 바꾸면 글 상단 저자 표기,
// JSON-LD author, 사이트 소개 프로필에 모두 반영됩니다.
// 주의: 글마다 다른 가짜 저자를 배정하지 말 것 — 실체 없는 복수 저자 페르소나는
// Google이 기만 신호로 판정하는 대표 패턴. 필명은 1개를 일관되게 사용합니다.
export const AUTHOR_NAME = '집지기';

export const AUTHOR_BIO =
  '애스크집을 만들고 운영하는 집지기입니다. 등본 한 통, 지원금 신청 하나에도 매번 검색부터 다시 시작하는 게 답답해서, 민원서류·세금·지원금 절차를 직접 확인하고 한곳에 정리하기 시작했습니다. 모든 글은 각 기관의 공식 안내를 기준으로 작성하고, 실제로 진행할 때 막히는 지점과 선택이 갈리는 옵션을 함께 담는 것을 원칙으로 합니다. 제도가 바뀌어 글과 달라진 부분을 발견하면 메일로 알려 주세요 — 확인 후 바로 고칩니다.';

/** 개인정보처리방침·소개 등 정책 페이지 공통 기준일 */
export const POLICY_DATE = '2026년 5월 15일';

/** 정부·공공기관 비연계 고지 (AdSense·신뢰도) */
export const SITE_DISCLAIMER =
  '본 사이트는 공공기관 공식 자료를 바탕으로 생활 행정 정보를 쉽게 정리한 개인 운영 안내 사이트입니다. 정책과 절차는 변경될 수 있으므로 주요 신청 전에는 해당 기관의 최신 공지를 함께 확인해 주세요.';
