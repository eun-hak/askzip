import type { Article } from '../types';

export const cardPointCheck: Article = {
  slug: 'card-point-check',
  title: '카드포인트 통합조회 및 현금화 방법 (여신금융협회)',
  description:
    '여러 카드사에 흩어진 카드포인트를 여신금융협회 통합조회 시스템이나 어카운트인포에서 한 번에 조회하고 현금(계좌입금)으로 받는 방법을 안내합니다.',
  category: 'inquiry-service',
  tags: ['카드포인트', '현금화', '통합조회'],
  publishedAt: '2026-05-20',
  updatedAt: '2026-05-26',
  readingTime: 4,
  toc: [
    { id: 'what', title: '카드포인트 통합조회란?' },
    { id: 'steps', title: '조회 및 계좌입금 방법' },
    { id: 'note', title: '현금화 유의사항' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '조회 사이트', value: '여신금융협회 (cardpoint.or.kr)' },
    { label: '대체 경로', value: '어카운트인포(금융결제원) 앱·PC' },
    { label: '현금화', value: '본인 명의 계좌로 1:1 입금' },
    { label: '수수료', value: '무료' },
  ],
  content: [
    {
      type: 'h2',
      id: 'what',
      text: '카드포인트 통합조회란?',
    },
    {
      type: 'paragraph',
      text: '여러 카드사에 흩어져 있는 카드포인트를 한 번에 조회하고, 현금화 가능한 포인트를 본인 계좌로 입금받을 수 있는 서비스입니다. 연말에만 가능한 한시 서비스가 아니라 연중 상시 이용할 수 있습니다.',
    },
    {
      type: 'notice',
      text: '각 카드사의 잔여 포인트와 소멸 예정 포인트, 소멸 예정 월까지 한눈에 표시됩니다. 소멸 예정 포인트가 있다면 사라지기 전에 사용하거나 현금화하세요.',
    },
    {
      type: 'h2',
      id: 'steps',
      text: '조회 및 계좌입금 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '통합조회 시스템 접속',
          description: '여신금융협회 카드포인트 통합조회(cardpoint.or.kr)에 접속하거나, 금융결제원 어카운트인포 앱을 이용합니다.',
        },
        {
          step: 2,
          title: '본인 인증',
          description: '공동인증서, PASS, 카카오페이, 휴대폰 인증 중 하나로 본인 확인을 합니다. 비회원 조회도 가능합니다.',
        },
        {
          step: 3,
          title: '통합조회 / 계좌입금 선택',
          description: '[통합조회/계좌입금] 메뉴를 선택하면 카드사별 잔여·소멸예정·현금화 가능 포인트가 표시됩니다.',
        },
        {
          step: 4,
          title: '계좌입금 신청',
          description: '현금화할 포인트를 선택해 본인 명의 계좌로 입금 신청합니다. 입금은 보통 익영업일에 완료됩니다.',
        },
      ],
    },
    {
      type: 'h2',
      id: 'note',
      text: '현금화 유의사항',
    },
    {
      type: 'table',
      headers: ['항목', '내용'],
      rows: [
        ['입금 계좌', '본인 명의 계좌만 가능 (타인 계좌 불가)'],
        ['신청 제한', '1일 1회 신청, 신청 후 취소 불가'],
        ['대상 포인트', '카드사별 대표 포인트(현금 1:1 교환)만'],
        ['제외 포인트', '항공 마일리지, OK캐시백, L.POINT 등 제휴 포인트'],
      ],
    },
    {
      type: 'warning',
      text: '정부·금융기관은 카드포인트 입금 명목으로 수수료나 카드 비밀번호·CVC를 요구하지 않습니다. 이를 요구하는 곳은 사기이니 주의하고, 반드시 공식 사이트(cardpoint.or.kr)로 접속하세요.',
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
          question: '포인트가 적어도 현금화가 되나요?',
          answer:
            '카드사별 대표 포인트는 1포인트 단위로도 계좌입금이 가능한 경우가 많습니다. 다만 제휴 포인트는 현금화 대상에서 제외됩니다.',
        },
        {
          question: '조회만 하면 자동으로 입금되나요?',
          answer:
            '아니요. 조회 후 [계좌입금]을 직접 신청해야 입금됩니다. 신청한 포인트는 신청 시점에 즉시 차감됩니다.',
        },
        {
          question: '한 번에 모든 카드사 포인트를 입금받을 수 있나요?',
          answer:
            '통합조회 화면에서 카드사별로 선택해 한 번에 신청할 수 있습니다. 다만 하루 1회 신청 제한이 있으니 신중하게 선택하세요.',
        },
      ],
    },
  ],
  relatedSlugs: ['dormant-money-check', 'telecom-unrefunded-fee', 'tax-refund-check'],
};
