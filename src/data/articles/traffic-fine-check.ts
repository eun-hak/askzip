import type { Article } from '../types';

export const trafficFineCheck: Article = {
  slug: 'traffic-fine-check',
  title: '교통 범칙금·과태료 조회 및 납부 방법 (경찰청 이파인)',
  description:
    '미납 교통 범칙금·과태료를 경찰청 교통민원24(이파인)에서 조회하고 납부하는 방법을 안내합니다. 범칙금과 과태료의 차이도 함께 정리했습니다.',
  category: 'inquiry-service',
  tags: ['교통과태료', '범칙금', '이파인'],
  publishedAt: '2026-06-16',
  updatedAt: '2026-06-16',
  readingTime: 4,
  toc: [
    { id: 'diff', title: '범칙금과 과태료의 차이' },
    { id: 'check', title: '이파인 조회 방법' },
    { id: 'pay', title: '납부 방법' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '조회 사이트', value: '경찰청 교통민원24 (efine.go.kr)' },
    { label: '조회 항목', value: '미납 과태료·범칙금, 운전면허 벌점' },
    { label: '납부 방법', value: '이파인, 카드, 계좌이체, 가상계좌' },
    { label: '수수료', value: '조회 무료' },
  ],
  content: [
    {
      type: 'h2',
      id: 'diff',
      text: '범칙금과 과태료의 차이',
    },
    {
      type: 'paragraph',
      text: '둘 다 교통법규 위반에 따른 금전적 제재이지만 성격이 다릅니다. 어느 쪽으로 처리하느냐에 따라 벌점과 금액이 달라질 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['구분', '범칙금', '과태료'],
      rows: [
        ['부과 대상', '운전자(현장 적발 등)', '차량 명의자(무인 단속 등)'],
        ['벌점', '부과될 수 있음', '없음'],
        ['금액', '상대적으로 낮음', '상대적으로 높음(사전납부 감경 가능)'],
      ],
    },
    {
      type: 'h2',
      id: 'check',
      text: '이파인 조회 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '교통민원24(이파인) 접속',
          description: 'efine.go.kr 에 접속하거나 "교통민원24" 앱을 실행합니다.',
        },
        {
          step: 2,
          title: '본인인증 로그인',
          description: '간편인증, 공동인증서, 금융인증서 중 하나로 로그인합니다.',
        },
        {
          step: 3,
          title: '미납 내역 조회',
          description: '[최근 무인단속내역], [미납 과태료], [미납 범칙금] 메뉴에서 부과 내역과 위반 일시·장소를 확인합니다.',
        },
        {
          step: 4,
          title: '단속 사진 확인',
          description: '무인단속 건은 위반 사진을 함께 확인할 수 있어 본인 차량 여부를 점검할 수 있습니다.',
        },
      ],
    },
    {
      type: 'h2',
      id: 'pay',
      text: '납부 방법',
    },
    {
      type: 'paragraph',
      text: '이파인에서 조회 후 신용카드, 계좌이체, 간편결제로 바로 납부할 수 있습니다. 가상계좌나 고지서의 전자납부번호를 이용한 납부도 가능합니다.',
    },
    {
      type: 'tip',
      text: '과태료는 의견 진술 기간 내 사전 납부하면 일정 비율(통상 20%) 감경되는 경우가 많습니다. 고지서의 납부 기한과 감경 조건을 확인하세요.',
    },
    {
      type: 'warning',
      text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 금액·감경 조건은 경찰청 교통민원24(efine.go.kr) 또는 관할 경찰서·지자체에서 확인하세요.',
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
          question: '과태료를 범칙금으로 전환하면 유리한가요?',
          answer:
            '범칙금은 금액이 낮은 대신 벌점이 부과될 수 있습니다. 벌점이 누적되면 면허 정지로 이어질 수 있으니, 본인 벌점 상황을 고려해 선택하세요.',
        },
        {
          question: '미납하면 어떻게 되나요?',
          answer:
            '납부 기한을 넘기면 가산금이 붙고, 장기 미납 시 차량 압류나 번호판 영치 등의 조치가 취해질 수 있습니다. 미납 내역은 이파인에서 확인해 빨리 납부하는 것이 좋습니다.',
        },
        {
          question: '주정차 위반 과태료도 이파인에서 조회되나요?',
          answer:
            '주정차 위반은 지자체 소관이라 위택스나 지자체 사이트에서 조회·납부하는 경우가 많습니다. 이파인에서는 주로 경찰청 소관 단속(속도·신호 등)을 확인합니다.',
        },
      ],
    },
  ],
  relatedSlugs: ['driving-record-certificate', 'car-inspection-check', 'tax-refund-check'],
};
