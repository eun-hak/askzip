import type { Article } from '../types';

export const fourMajorInsuranceHistory: Article = {
    slug: 'four-major-insurance-history',
    title: '4대보험 가입내역 조회 방법 (4대사회보험 정보연계센터)',
    description:
      '4대사회보험 정보연계센터(4insure.or.kr)에서 국민연금, 건강보험, 고용보험, 산재보험 가입 이력을 한 번에 조회하는 방법을 안내합니다.',
    category: 'inquiry-service',
    tags: ['4대보험', '가입내역', '국민연금'],
    publishedAt: '2026-04-10',
    updatedAt: '2026-06-03',
    readingTime: 4,
    toc: [
      { id: 'what', title: '4대보험 가입내역 조회가 필요한 경우' },
      { id: 'steps', title: '조회 방법' },
      { id: 'individual', title: '개별 기관 조회 방법' },
      { id: 'faq', title: '자주 묻는 질문' },
    ],
    summary: [
      { label: '조회 사이트', value: '4대사회보험 정보연계센터 (4insure.or.kr)' },
      { label: '조회 항목', value: '국민연금, 건강보험, 고용보험, 산재보험' },
      { label: '소요 시간', value: '약 5분' },
      { label: '수수료', value: '무료' },
    ],
    content: [
      {
        type: 'h2',
        id: 'what',
        text: '4대보험 가입내역 조회가 필요한 경우',
      },
      {
        type: 'paragraph',
        text: '4대보험(국민연금, 건강보험, 고용보험, 산재보험) 가입내역 확인서는 다음과 같은 상황에서 필요합니다.',
      },
      {
        type: 'table',
        headers: ['용도', '설명'],
        rows: [
          ['취업·이직', '과거 직장 이력 및 보험 가입 기간 확인'],
          ['실업급여 신청', '고용보험 가입 이력 및 이직 확인'],
          ['금융기관 대출', '고용 상태 증명 자료로 활용'],
          ['국민연금 예상 수령액 확인', '납부 이력으로 수령액 계산'],
          ['각종 지원금 신청', '소득 및 고용 상태 증빙'],
        ],
      },
      {
        type: 'h2',
        id: 'steps',
        text: '4대사회보험 정보연계센터 조회 방법',
      },
      {
        type: 'steps',
        steps: [
          {
            step: 1,
            title: '4대사회보험 정보연계센터 접속',
            description: '4insure.or.kr 에 접속합니다.',
          },
          {
            step: 2,
            title: '개인 서비스 → 가입내역 조회 선택',
            description: '메인 화면 [개인민원] 또는 [가입내역 조회] 메뉴를 선택합니다.',
          },
          {
            step: 3,
            title: '공동인증서 또는 간편인증으로 로그인',
            description: '공동인증서, 금융인증서, 카카오·네이버·PASS 중 하나로 인증합니다.',
          },
          {
            step: 4,
            title: '가입내역 확인',
            description: '4대보험 종류별 가입 기간, 사업장명, 취득·상실 날짜 등의 이력이 표시됩니다.',
          },
          {
            step: 5,
            title: '증명서 발급',
            description: '필요한 경우 [증명서 발급] 버튼을 클릭하여 PDF로 저장합니다.',
          },
        ],
      },
      {
        type: 'h2',
        id: 'individual',
        text: '개별 기관 조회 방법',
      },
      {
        type: 'table',
        headers: ['보험 종류', '조회 기관', '사이트'],
        rows: [
          ['국민연금', '국민연금공단', 'nps.or.kr → 내 연금 알아보기'],
          ['건강보험', '국민건강보험공단', 'nhis.or.kr → 민원여기요'],
          ['고용보험', '근로복지공단', 'ei.go.kr → 개인서비스'],
          ['산재보험', '근로복지공단', 'comwel.or.kr → 개인서비스'],
        ],
      },
      {
        type: 'warning',
        text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 조회 방법은 4대사회보험 정보연계센터(4insure.or.kr) 또는 각 보험 기관에 문의하세요.',
      },
      {
        type: 'h2',
        id: 'faq',
        text: '자주 묻는 질문',
      },
      {
        type: 'faq',
        items: [
          {
            question: '프리랜서도 4대보험 가입내역이 있나요?',
            answer:
              '프리랜서는 일반적으로 사업소득자로 분류되어 고용보험·산재보험 가입 대상이 아닙니다. 다만 일부 플랫폼 종사자는 고용보험 가입이 의무화되었을 수 있으니 확인이 필요합니다.',
          },
          {
            question: '과거 직장이 폐업한 경우에도 가입 이력이 조회되나요?',
            answer:
              '네, 사업장이 폐업하더라도 본인의 가입 이력 기록은 국민연금공단, 건강보험공단 등에 보존됩니다. 정상적으로 조회됩니다.',
          },
          {
            question: '가입내역 확인서를 직접 출력해서 제출할 수 있나요?',
            answer:
              '4대사회보험 정보연계센터에서 발급한 확인서는 공식 문서로 인정받습니다. 위변조 방지 코드가 포함되어 있어 제출처에서 진위 확인이 가능합니다.',
          },
        ],
      },
    ],
    relatedSlugs: ['national-pension-history', 'telecom-unrefunded-fee', 'health-insurance-eligibility-certificate'],};
