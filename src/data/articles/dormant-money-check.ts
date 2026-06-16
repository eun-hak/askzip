import type { Article } from '../types';

export const dormantMoneyCheck: Article = {
  slug: 'dormant-money-check',
  title: '휴면예금·숨은보험금 조회 및 환급 방법 (2026년 기준)',
  description:
    '은행·보험사·서민금융진흥원에 흩어진 잠자는 돈을 어카운트인포, 휴면예금 찾아줌, 내보험찾아줌에서 조회하고 환급받는 방법을 순서대로 안내합니다.',
  category: 'inquiry-service',
  tags: ['휴면예금', '숨은보험금', '미환급금'],
  publishedAt: '2026-06-16',
  updatedAt: '2026-06-16',
  readingTime: 5,
  toc: [
    { id: 'what', title: '휴면예금·숨은보험금이란?' },
    { id: 'order', title: '조회 순서 (3단계)' },
    { id: 'steps', title: '단계별 조회 방법' },
    { id: 'caution', title: '사칭 사이트 주의' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '전 계좌 조회', value: '어카운트인포 (accountinfo.or.kr)' },
    { label: '휴면예금', value: '휴면예금 찾아줌 / 서민금융진흥원 (1397)' },
    { label: '숨은보험금', value: '내보험찾아줌 (cont.insure.or.kr)' },
    { label: '수수료', value: '무료' },
  ],
  content: [
    {
      type: 'h2',
      id: 'what',
      text: '휴면예금·숨은보험금이란?',
    },
    {
      type: 'paragraph',
      text: '오랫동안 거래가 없거나 찾아가지 않아 잠들어 있는 돈을 말합니다. 은행·우체국의 휴면예금, 보험사의 중도·만기·휴면보험금 등 여러 기관에 흩어져 있어, 한 곳만 확인하면 일부를 놓치기 쉽습니다.',
    },
    {
      type: 'notice',
      text: '소멸시효가 지나 서민금융진흥원으로 출연된 휴면예금·휴면보험금은 이자가 붙지 않는 경우가 많습니다. 발견하면 가능한 한 빨리 환급 신청하는 것이 유리합니다.',
    },
    {
      type: 'h2',
      id: 'order',
      text: '조회 순서 (3단계)',
    },
    {
      type: 'paragraph',
      text: '하나의 사이트에서 모두 끝나지 않기 때문에, 다음 순서로 확인하면 빠짐없이 점검할 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['단계', '서비스', '확인 내용'],
      rows: [
        ['1', '어카운트인포 (내 계좌 한눈에)', '전 은행·금융사 계좌 및 잔액'],
        ['2', '휴면예금 찾아줌 / 서민금융진흥원', '실제 환급 가능한 휴면예금'],
        ['3', '내보험찾아줌', '중도·만기·휴면 보험금'],
      ],
    },
    {
      type: 'h2',
      id: 'steps',
      text: '단계별 조회 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '어카운트인포에서 전 계좌 확인',
          description: 'accountinfo.or.kr "내 계좌 한눈에"에 접속해 본인인증 후 모든 금융사의 계좌·잔액을 한 번에 조회합니다. 장기 미사용 소액 계좌는 잔액 이전·해지도 가능합니다.',
        },
        {
          step: 2,
          title: '휴면예금 환급 신청',
          description: '서민금융진흥원의 "휴면예금 찾아줌" 또는 서민금융 잇다 앱, 콜센터(1397)로 휴면예금을 조회하고 환급을 신청합니다. 정부24·어카운트인포를 통해서도 신청할 수 있습니다.',
        },
        {
          step: 3,
          title: '숨은보험금 조회',
          description: 'cont.insure.or.kr "내보험찾아줌"에 접속해 본인인증만 하면 가입 보험과 미청구 보험금을 무료로 조회할 수 있습니다. 회원가입 없이 휴대폰 인증 등으로 바로 결과를 볼 수 있습니다.',
        },
        {
          step: 4,
          title: '환급 신청 및 입금 확인',
          description: '발견된 금액은 각 서비스 안내에 따라 본인 명의 계좌로 환급 신청합니다. 보험금은 보험사 심사 후 보통 며칠 내 입금됩니다.',
        },
      ],
    },
    {
      type: 'h2',
      id: 'caution',
      text: '사칭 사이트 주의',
    },
    {
      type: 'warning',
      text: '"숨은보험금·휴면예금을 찾아준다"며 개인정보를 요구하는 광고·전화·유사 사이트가 많습니다. 이런 곳에 이름·생년월일·전화번호를 입력하면 영업·판매 목적으로 악용될 수 있습니다. 반드시 위에 안내된 공식 사이트(accountinfo.or.kr, cont.insure.or.kr 등) 주소를 직접 확인하고 접속하세요.',
    },
    {
      type: 'warning',
      text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 조회·환급 절차는 각 공식 서비스 또는 서민금융콜센터(1397)에서 확인하세요.',
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
          question: '조회만 하면 자동으로 환급되나요?',
          answer:
            '아니요. 조회 후 본인이 직접 환급(지급) 신청을 해야 합니다. 계좌 등록 등 절차를 완료해야 입금됩니다.',
        },
        {
          question: '돌아가신 가족의 휴면예금·보험금도 찾을 수 있나요?',
          answer:
            '상속인은 사망자의 금융거래를 조회하는 "안심상속 원스톱 서비스"(정부24)를 통해 확인할 수 있습니다. 별도 절차와 서류가 필요합니다.',
        },
        {
          question: '카드 포인트도 비슷하게 찾을 수 있나요?',
          answer:
            '네, 흩어진 카드 포인트는 "카드포인트 통합조회·계좌입금" 서비스로 한 번에 조회하고 현금으로 받을 수 있습니다.',
        },
      ],
    },
  ],
  relatedSlugs: ['telecom-unrefunded-fee', 'four-major-insurance-history', 'national-pension-history'],
};
