import type { Article } from '../types';

export const hometaxPaymentStatement: Article = {
    slug: 'hometax-payment-statement',
    title: '홈택스 지급명세서 조회 및 출력 방법',
    description:
      '국세청 홈택스에서 근로소득 지급명세서, 사업소득 지급명세서, 기타소득 지급명세서를 조회하고 출력하는 방법을 안내합니다.',
    category: 'tax-payment',
    tags: ['홈택스', '지급명세서', '소득조회'],
    publishedAt: '2025-02-10',
    updatedAt: '2025-03-01',
    readingTime: 4,
    toc: [
      { id: 'what', title: '지급명세서란?' },
      { id: 'types', title: '지급명세서 종류' },
      { id: 'steps', title: '홈택스 조회 방법' },
      { id: 'faq', title: '자주 묻는 질문' },
    ],
    summary: [
      { label: '조회 기관', value: '국세청 홈택스' },
      { label: '사이트', value: 'hometax.go.kr' },
      { label: '조회 가능 기간', value: '과거 5년치' },
      { label: '수수료', value: '무료' },
    ],
    content: [
      {
        type: 'h2',
        id: 'what',
        text: '지급명세서란?',
      },
      {
        type: 'paragraph',
        text: '지급명세서는 소득을 지급한 회사(원천징수 의무자)가 국세청에 제출하는 서류로, 근로자 또는 소득 수령자의 소득과 세금 납부 내역이 기재되어 있습니다. 금융기관 대출 신청, 국가장학금 신청, 각종 소득 증빙 목적으로 활용됩니다.',
      },
      {
        type: 'paragraph',
        text: '근로소득 지급명세서가 가장 일반적이며, 이를 통해 연간 근로소득, 납부세액, 환급세액 등을 확인할 수 있습니다.',
      },
      {
        type: 'h2',
        id: 'types',
        text: '지급명세서 종류',
      },
      {
        type: 'table',
        headers: ['종류', '해당 소득', '제출 시기'],
        rows: [
          ['근로소득 지급명세서', '급여, 상여금 등 근로소득', '다음 해 3월 10일까지'],
          ['사업소득 지급명세서', '프리랜서 등 사업소득', '다음 해 3월 10일까지'],
          ['기타소득 지급명세서', '강의료, 원고료 등', '다음 해 3월 10일까지'],
          ['퇴직소득 지급명세서', '퇴직금', '퇴직한 달의 다음 달 말일'],
        ],
      },
      {
        type: 'h2',
        id: 'steps',
        text: '홈택스 조회 방법',
      },
      {
        type: 'steps',
        steps: [
          {
            step: 1,
            title: '홈택스 접속 및 로그인',
            description: 'hometax.go.kr 에 접속하여 공동인증서, 금융인증서, 간편인증으로 로그인합니다.',
          },
          {
            step: 2,
            title: '세금 신고 → 지급명세서 조회',
            description: '상단 메뉴 [My홈택스] → [지급명세서·지급명세서조회] → [지급명세서 조회]를 선택합니다.',
          },
          {
            step: 3,
            title: '조회 연도 선택',
            description: '조회할 귀속 연도를 선택합니다. 최근 5년치 조회가 가능합니다.',
          },
          {
            step: 4,
            title: '지급명세서 내역 확인 및 출력',
            description: '조회된 지급명세서 목록에서 확인할 항목을 선택합니다. [출력] 버튼으로 PDF 저장 또는 프린트가 가능합니다.',
          },
        ],
      },
      {
        type: 'tip',
        text: '지급명세서는 회사에서 국세청에 제출한 이후에만 조회됩니다. 일반적으로 전년도 지급명세서는 3월 이후 조회 가능합니다.',
      },
      {
        type: 'warning',
        text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 조회 방법 및 최신 정보는 홈택스(hometax.go.kr) 또는 국세청 상담센터(126)에서 확인하세요.',
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
            question: '지급명세서가 조회되지 않는 이유는 무엇인가요?',
            answer:
              '회사에서 아직 지급명세서를 제출하지 않았거나, 제출 기한이 지나지 않은 경우 조회되지 않을 수 있습니다. 회사에 문의하거나 제출 기한 이후 재조회해보세요.',
          },
          {
            question: '홈택스 지급명세서와 실제 받은 금액이 다를 수 있나요?',
            answer:
              '중도 퇴사, 연말정산 등으로 차이가 날 수 있습니다. 정확한 내역은 회사의 급여 담당자에게 확인하는 것이 좋습니다.',
          },
          {
            question: '소득확인증명서와 지급명세서의 차이는 무엇인가요?',
            answer:
              '지급명세서는 원천징수 의무자(회사)가 제출한 소득 정보이며, 소득확인증명서는 국세청이 납세자의 신청에 의해 발급하는 공식 증명서입니다. 금융기관 등에 소득을 증빙할 때는 소득확인증명서를 사용하는 경우가 많습니다.',
          },
        ],
      },
    ],
    relatedSlugs: ['comprehensive-income-tax', 'car-tax-annual-prepay', 'property-tax-payment'],};
