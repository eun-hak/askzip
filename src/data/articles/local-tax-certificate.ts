import type { Article } from '../types';

export const localTaxCertificate: Article = {
  slug: 'local-tax-certificate',
  title: '지방세 세목별 과세증명서 발급 방법 (위택스·정부24)',
  description:
    '대출, 입찰, 인허가, 복지 신청 등에 필요한 지방세 세목별 과세증명서를 위택스 또는 정부24에서 무료로 발급받는 방법을 안내합니다.',
  category: 'tax-payment',
  tags: ['지방세', '과세증명서', '위택스'],
  publishedAt: '2026-06-16',
  updatedAt: '2026-06-16',
  readingTime: 4,
  toc: [
    { id: 'what', title: '세목별 과세증명서란?' },
    { id: 'when', title: '언제 필요한가?' },
    { id: 'steps', title: '위택스 발급 방법' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '발급 기관', value: '위택스(wetax.go.kr), 정부24, 주민센터' },
    { label: '대상 세목', value: '재산세, 자동차세, 주민세, 지방소득세 등' },
    { label: '소요 시간', value: '약 3분 (온라인)' },
    { label: '수수료', value: '온라인 무료' },
  ],
  content: [
    {
      type: 'h2',
      id: 'what',
      text: '세목별 과세증명서란?',
    },
    {
      type: 'paragraph',
      text: '지방세 세목별 과세증명서는 특정 지방세(재산세·자동차세·주민세·지방소득세 등)가 본인에게 부과·납부되었음을 증명하는 서류입니다. 보유 재산이나 소득 수준을 간접적으로 증빙할 때 사용됩니다.',
    },
    {
      type: 'notice',
      text: '"과세증명서"는 세금이 부과된 내역을 보여주는 서류이고, "납세증명서"는 체납 없이 완납했음을 증명하는 서류입니다. 제출처가 요구하는 것이 어느 쪽인지 먼저 확인하세요.',
    },
    {
      type: 'h2',
      id: 'when',
      text: '언제 필요한가?',
    },
    {
      type: 'table',
      headers: ['용도', '설명'],
      rows: [
        ['금융기관 대출', '재산·소득 수준 간접 증빙'],
        ['관급 입찰·계약', '제출 서류 요건'],
        ['인허가 신청', '세금 부과·납부 확인'],
        ['복지·지원금 신청', '재산 보유 현황 확인'],
      ],
    },
    {
      type: 'h2',
      id: 'steps',
      text: '위택스 발급 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '위택스 접속 및 로그인',
          description: 'wetax.go.kr 에 접속해 공동인증서·간편인증으로 로그인합니다.',
        },
        {
          step: 2,
          title: '발급 → 지방세 세목별 과세증명 선택',
          description: '[발급] 메뉴에서 [지방세 세목별 과세증명]을 선택합니다.',
        },
        {
          step: 3,
          title: '세목·과세연도 선택',
          description: '필요한 세목(재산세 등)과 과세 연도, 증명 기간을 선택합니다.',
        },
        {
          step: 4,
          title: '발급 및 출력',
          description: '내용을 확인하고 발급합니다. PDF 저장 또는 프린트가 가능하며, 발급번호로 진위 확인이 됩니다.',
        },
      ],
    },
    {
      type: 'tip',
      text: '정부24(gov.kr)에서도 "지방세 세목별 과세증명"을 검색해 발급할 수 있습니다. 온라인 이용이 어려우면 주민센터·구청에서도 발급받을 수 있습니다.',
    },
    {
      type: 'warning',
      text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 발급 절차는 위택스(wetax.go.kr) 또는 관할 지자체에서 확인하세요.',
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
          question: '과세증명서와 납세증명서 중 무엇을 떼야 하나요?',
          answer:
            '세금이 얼마 부과·납부되었는지 보여줘야 하면 과세증명서, 체납 없이 완납했음을 증명해야 하면 납세증명서입니다. 제출처 안내를 확인하세요.',
        },
        {
          question: '여러 해의 증명서를 한 번에 발급할 수 있나요?',
          answer:
            '네, 발급 시 과세 연도와 기간을 선택할 수 있습니다. 제출처에서 요구하는 기간을 미리 확인하고 발급하세요.',
        },
        {
          question: '온라인 발급본도 공식 문서로 인정되나요?',
          answer:
            '네, 위택스·정부24에서 발급한 문서에는 진위확인 코드가 포함되어 있어 제출처에서 검증할 수 있습니다.',
        },
      ],
    },
  ],
  relatedSlugs: ['property-tax-payment', 'acquisition-tax', 'income-amount-certificate'],
};
