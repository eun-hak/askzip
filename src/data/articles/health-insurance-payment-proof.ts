import type { Article } from '../types';

export const healthInsurancePaymentProof: Article = {
    slug: 'health-insurance-payment-proof',
    title: '건강보험료 납부확인서 발급 방법',
    description:
      '국민건강보험공단 사이트에서 건강보험료 납부확인서를 온라인으로 무료 발급받는 방법을 안내합니다. 청약, 대출, 각종 신청 시 자주 필요한 서류입니다.',
    category: 'civil-documents',
    tags: ['건강보험료', '납부확인서', '민원서류'],
    publishedAt: '2025-04-20',
    updatedAt: '2025-05-01',
    readingTime: 3,
    toc: [
      { id: 'what', title: '납부확인서가 필요한 경우' },
      { id: 'steps', title: '온라인 발급 방법' },
      { id: 'period', title: '발급 기간 설정 방법' },
      { id: 'faq', title: '자주 묻는 질문' },
    ],
    summary: [
      { label: '발급 기관', value: '국민건강보험공단' },
      { label: '사이트', value: 'nhis.or.kr' },
      { label: '소요 시간', value: '약 3분 (온라인)' },
      { label: '수수료', value: '무료' },
    ],
    content: [
      {
        type: 'h2',
        id: 'what',
        text: '납부확인서가 필요한 경우',
      },
      {
        type: 'paragraph',
        text: '건강보험료 납부확인서는 실제로 건강보험료를 납부했음을 증명하는 서류입니다. 금융기관 대출 신청, 주택 청약 소득 증빙, 국가장학금 신청, 건강보험료 환급 신청 등 다양한 상황에서 요구됩니다.',
      },
      {
        type: 'paragraph',
        text: '특히 지역가입자의 경우 소득 증빙 자료 대신 건강보험료 납부 금액을 소득 추정 근거로 활용하는 경우가 많아 자주 필요한 서류입니다.',
      },
      {
        type: 'h2',
        id: 'steps',
        text: '온라인 발급 방법',
      },
      {
        type: 'steps',
        steps: [
          {
            step: 1,
            title: '국민건강보험공단 홈페이지 접속',
            description: 'nhis.or.kr 에 접속합니다.',
          },
          {
            step: 2,
            title: '민원여기요 → 개인민원 → 증명서 발급',
            description: '상단 [민원여기요] → [개인민원] → [증명서 발급·확인] 메뉴로 이동합니다.',
          },
          {
            step: 3,
            title: '보험료 납부확인서 선택',
            description: '증명서 목록에서 [보험료 납부확인서]를 클릭합니다.',
          },
          {
            step: 4,
            title: '본인인증 후 기간 설정',
            description: '인증 후 발급받을 기간(연도, 월)을 설정합니다. 최근 3년 내의 납부 내역을 선택할 수 있습니다.',
          },
          {
            step: 5,
            title: '발급 및 저장',
            description: '내용을 확인하고 PDF로 저장하거나 프린트합니다.',
          },
        ],
      },
      {
        type: 'h2',
        id: 'period',
        text: '발급 기간 설정 방법',
      },
      {
        type: 'paragraph',
        text: '납부확인서 발급 시 기간을 정확히 설정하는 것이 중요합니다. 제출처에서 요구하는 기간을 미리 확인하고 발급하세요.',
      },
      {
        type: 'table',
        headers: ['제출 목적', '일반적으로 요구되는 기간'],
        rows: [
          ['국가장학금 신청', '전년도 1월~12월 (1년 치)'],
          ['금융기관 대출', '최근 3~6개월'],
          ['주택 청약 소득 증빙', '전년도 전체 또는 최근 1년'],
          ['건강보험료 환급', '해당 납부월'],
        ],
      },
      {
        type: 'warning',
        text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 정보는 국민건강보험공단(nhis.or.kr) 또는 콜센터(1577-1000)에서 확인하세요.',
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
            question: '직장가입자의 경우 회사에서 납부한 보험료도 확인서에 나오나요?',
            answer:
              '네, 직장가입자는 본인 부담분과 사용자(회사) 부담분이 모두 기재됩니다. 단, 본인 부담분과 전체 납부액이 구분되어 표시됩니다.',
          },
          {
            question: '전년도 납부확인서를 올해 발급받을 수 있나요?',
            answer:
              '네, 최근 3년 이내의 납부 내역은 언제든지 발급받을 수 있습니다.',
          },
          {
            question: '보험료를 체납한 경우에도 발급받을 수 있나요?',
            answer:
              '발급은 가능하지만, 납부 내역에 체납 사실이 반영됩니다. 체납 분이 있는 경우 제출처에서 추가 서류를 요구할 수 있습니다.',
          },
        ],
      },
    ],
    relatedSlugs: ['health-insurance-eligibility-certificate', 'resident-registration-copy', 'family-relation-certificate'],};
