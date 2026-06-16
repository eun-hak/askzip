import type { Article } from '../types';

export const healthInsuranceEligibilityCertificate: Article = {
    slug: 'health-insurance-eligibility-certificate',
    title: '건강보험 자격득실확인서 인터넷 발급 방법',
    description:
      '국민건강보험 사이트 또는 The건강보험 앱을 통해 건강보험 자격득실확인서를 무료로 발급받는 방법을 단계별로 안내합니다.',
    category: 'civil-documents',
    tags: ['건강보험', '자격득실확인서', '민원서류'],
    publishedAt: '2026-03-31',
    updatedAt: '2026-06-02',
    readingTime: 4,
    toc: [
      { id: 'what', title: '자격득실확인서란?' },
      { id: 'prep', title: '발급 전 준비물' },
      { id: 'steps', title: '인터넷 발급 방법' },
      { id: 'app', title: '모바일 앱 발급 방법' },
      { id: 'faq', title: '자주 묻는 질문' },
    ],
    summary: [
      { label: '발급 기관', value: '국민건강보험공단' },
      { label: '발급 방법', value: '인터넷, 모바일 앱, 지사 방문' },
      { label: '소요 시간', value: '약 3~5분 (온라인)' },
      { label: '수수료', value: '무료' },
    ],
    content: [
      {
        type: 'h2',
        id: 'what',
        text: '자격득실확인서란?',
      },
      {
        type: 'paragraph',
        text: '건강보험 자격득실확인서는 국민건강보험의 가입과 상실(탈퇴) 이력을 확인할 수 있는 공식 증명서입니다. 직장가입자, 지역가입자, 피부양자 등 건강보험 자격 변동 내역이 기재되어 있어 취업, 퇴직, 대출, 보험 관련 업무에서 자주 요청되는 서류입니다.',
      },
      {
        type: 'paragraph',
        text: '회사에 입사할 때, 대출을 받을 때, 보험 가입이나 해지 시 제출하는 경우가 많습니다. 온라인으로 간편하게 발급할 수 있어 직접 방문할 필요가 없습니다.',
      },
      {
        type: 'h2',
        id: 'prep',
        text: '발급 전 준비물',
      },
      {
        type: 'paragraph',
        text: '온라인으로 자격득실확인서를 발급받기 위해서는 다음 중 하나의 인증 수단이 필요합니다.',
      },
      {
        type: 'table',
        headers: ['인증 수단', '설명'],
        rows: [
          ['공동인증서', '구 공인인증서, 은행에서 발급 가능'],
          ['금융인증서', '금융결제원에서 발급, 클라우드 저장 방식'],
          ['카카오페이 인증', '카카오페이 앱 설치 필요'],
          ['PASS 인증', 'SKT·KT·LGU+ 이용 고객 사용 가능'],
          ['네이버 인증서', '네이버 앱에서 발급 후 사용'],
        ],
      },
      {
        type: 'h2',
        id: 'steps',
        text: '인터넷 발급 방법',
      },
      {
        type: 'paragraph',
        text: '국민건강보험공단 홈페이지(nhis.or.kr)를 통해 자격득실확인서를 발급받는 방법입니다. PC 환경에서 이용하시면 더 편리합니다.',
      },
      {
        type: 'steps',
        steps: [
          {
            step: 1,
            title: '국민건강보험공단 홈페이지 접속',
            description:
              '인터넷 브라우저에서 nhis.or.kr 에 접속합니다. 크롬, 엣지, 파이어폭스 모두 사용 가능합니다.',
          },
          {
            step: 2,
            title: '민원여기요 → 개인민원 선택',
            description:
              '상단 메뉴에서 [민원여기요]를 클릭한 뒤 [개인민원] 항목을 선택합니다.',
          },
          {
            step: 3,
            title: '자격득실확인서 검색',
            description:
              '민원 검색창에 "자격득실확인서"를 입력하거나, 개인민원 → 증명서 발급·확인 → 자격득실확인서 경로로 이동합니다.',
          },
          {
            step: 4,
            title: '본인인증',
            description:
              '공동인증서, 금융인증서, 카카오페이 인증, PASS 인증 중 하나를 선택하여 본인인증을 완료합니다.',
          },
          {
            step: 5,
            title: '발급 신청 및 출력',
            description:
              '발급 정보를 확인한 뒤 [발급] 버튼을 클릭합니다. PDF 파일로 저장하거나 바로 출력할 수 있습니다. 발급일자가 자동으로 기재됩니다.',
          },
        ],
      },
      {
        type: 'tip',
        text: 'PDF로 발급한 경우 파일 내 위변조 방지 마크가 포함되어 있어 제출 시 별도 확인 도장 없이 사용할 수 있습니다.',
      },
      {
        type: 'h2',
        id: 'app',
        text: '모바일 앱 발급 방법',
      },
      {
        type: 'paragraph',
        text: '스마트폰에서는 "The건강보험" 앱을 설치하여 발급받을 수 있습니다. 앱스토어 또는 플레이스토어에서 "The건강보험"을 검색하여 설치하세요.',
      },
      {
        type: 'steps',
        steps: [
          {
            step: 1,
            title: 'The건강보험 앱 설치 후 로그인',
            description: '앱을 설치한 뒤 본인인증(공동인증서, 카카오, PASS 등)으로 로그인합니다.',
          },
          {
            step: 2,
            title: '증명서 발급 메뉴 선택',
            description: '하단 메뉴 또는 홈 화면에서 [증명서 발급]을 선택합니다.',
          },
          {
            step: 3,
            title: '자격득실확인서 발급',
            description:
              '자격득실확인서를 선택하고 [발급] 버튼을 탭합니다. PDF 형식으로 저장하거나 이메일로 전송할 수 있습니다.',
          },
        ],
      },
      {
        type: 'warning',
        text: '이 사이트에서 제공하는 정보는 참고 목적으로 작성되었습니다. 정확한 발급 절차 및 최신 정보는 국민건강보험공단 공식 사이트(nhis.or.kr) 또는 콜센터(1577-1000)에서 확인하시기 바랍니다.',
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
            question: '발급 수수료가 있나요?',
            answer:
              '인터넷 및 모바일 앱을 통한 발급은 무료입니다. 지사 방문 발급 시에는 수수료가 부과될 수 있습니다.',
          },
          {
            question: '피부양자도 본인이 직접 발급받을 수 있나요?',
            answer:
              '네, 피부양자 본인도 본인인증 후 직접 발급받을 수 있습니다. 다만 만 14세 미만 미성년자는 법정대리인을 통해 발급해야 합니다.',
          },
          {
            question: '발급받은 자격득실확인서의 유효기간은 얼마나 되나요?',
            answer:
              '법적으로 정해진 유효기간은 없지만, 제출처에 따라 발급일로부터 1~3개월 이내의 서류만 인정하는 경우가 많습니다. 제출 전에 해당 기관에 문의하시기 바랍니다.',
          },
          {
            question: '가족이나 대리인이 대신 발급받을 수 있나요?',
            answer:
              '가족 구성원도 본인 인증 후 본인의 자격득실확인서를 발급받아야 합니다. 대리인 발급의 경우 지사를 방문하여 위임장 및 관련 서류를 제출해야 합니다.',
          },
        ],
      },
    ],
    relatedSlugs: ['resident-registration-copy', 'family-relation-certificate', 'health-insurance-payment-proof'],};
