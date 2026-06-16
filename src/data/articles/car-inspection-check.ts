import type { Article } from '../types';

export const carInspectionCheck: Article = {
  slug: 'car-inspection-check',
  title: '자동차 정기검사 대상 조회 및 예약 방법 (사이버검사소)',
  description:
    '한국교통안전공단 사이버검사소에서 자동차 정기검사 대상·유효기간을 조회하고 예약하는 방법을 안내합니다. 과태료와 수검 기간도 정리했습니다.',
  category: 'inquiry-service',
  tags: ['자동차검사', '정기검사', '사이버검사소'],
  publishedAt: '2026-03-21',
  updatedAt: '2026-05-06',
  readingTime: 4,
  toc: [
    { id: 'what', title: '자동차 정기검사란?' },
    { id: 'period', title: '수검 기간과 과태료' },
    { id: 'steps', title: '조회 및 예약 방법' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '조회·예약', value: '한국교통안전공단 사이버검사소 (cyberts.kr)' },
    { label: '수검 기간', value: '유효기간 만료일 전 90일 ~ 후 31일' },
    { label: '미수검 과태료', value: '지연 시 최대 60만원' },
    { label: '운영 방식', value: '공단 검사소 전면 예약제' },
  ],
  content: [
    {
      type: 'h2',
      id: 'what',
      text: '자동차 정기검사란?',
    },
    {
      type: 'paragraph',
      text: '자동차 정기검사는 차량의 안전도와 배출가스 기준을 확인하는 법적 의무 검사입니다. 자동차관리법에 따라 모든 등록 차량은 정해진 주기에 검사를 받아야 하며, 정기검사(안전·배출가스 점검)와 종합검사(배출가스 정밀검사 추가, 주로 대도시 차량)로 나뉩니다.',
    },
    {
      type: 'notice',
      text: '2026년 현재 전국 공단 검사소는 전면 예약제로 운영됩니다. 예약 없이 방문하면 검사를 받지 못할 수 있으니 사전 예약이 필수입니다.',
    },
    {
      type: 'h2',
      id: 'period',
      text: '수검 기간과 과태료',
    },
    {
      type: 'table',
      headers: ['구분', '내용'],
      rows: [
        ['수검 기간', '검사 유효기간 만료일 전 90일 ~ 후 31일'],
        ['미수검 과태료', '지연일수에 따라 증가, 최대 60만원'],
        ['재검사', '불합격 시 일정 기간 내 재검사(수수료 면제 조건 있음)'],
      ],
    },
    {
      type: 'h2',
      id: 'steps',
      text: '조회 및 예약 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '사이버검사소 접속',
          description: '한국교통안전공단(TS) 사이버검사소(cyberts.kr)에 접속합니다. 회원가입 없이도 이용할 수 있습니다.',
        },
        {
          step: 2,
          title: '검사 대상·유효기간 조회',
          description: '차량 등록번호와 소유주 식별 정보(생년월일/사업자번호)를 입력해 검사 대상 여부와 유효기간을 확인합니다.',
        },
        {
          step: 3,
          title: '검사소·일시 예약',
          description: '원하는 검사소와 날짜·시간을 선택해 예약합니다. 사전 예약·결제 시 소액 할인이 적용됩니다.',
        },
        {
          step: 4,
          title: '검사 받기',
          description: '예약일에 차량 등록증과 책임보험 가입 상태를 갖추고 방문해 검사를 받습니다.',
        },
      ],
    },
    {
      type: 'tip',
      text: '사이버검사소에 휴대폰 번호를 등록하면 검사 시기가 다가올 때 무료 안내 문자를 받을 수 있습니다. 깜빡하고 기간을 넘겨 과태료를 무는 일을 막을 수 있습니다.',
    },
    {
      type: 'warning',
      text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 차종별 검사 주기·비용·과태료는 변동될 수 있으므로 한국교통안전공단 사이버검사소(cyberts.kr)에서 확인하세요.',
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
          question: '내 차가 정기검사 대상인지 종합검사 대상인지 어떻게 아나요?',
          answer:
            '차량 등록증 또는 사이버검사소 조회로 확인할 수 있습니다. 일반적으로 대도시 등 일정 지역·차령의 차량은 배출가스 정밀검사가 포함된 종합검사 대상입니다.',
        },
        {
          question: '검사 기간을 깜빡 놓쳤어요. 어떻게 하나요?',
          answer:
            '기간을 넘기면 과태료가 부과되며 지연일수에 따라 늘어납니다. 발견 즉시 사이버검사소에서 예약해 최대한 빨리 검사를 받는 것이 좋습니다.',
        },
        {
          question: '민간 검사소에서 받아도 되나요?',
          answer:
            '네, 지정 민간 검사소에서도 받을 수 있습니다. 다만 비용이 공단 검사소보다 높을 수 있으니 비교해 선택하세요.',
        },
      ],
    },
  ],
  relatedSlugs: ['traffic-fine-check', 'car-tax-annual-prepay', 'driving-record-certificate'],
};
