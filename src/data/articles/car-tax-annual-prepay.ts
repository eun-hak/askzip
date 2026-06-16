import type { Article } from '../types';

export const carTaxAnnualPrepay: Article = {
    slug: 'car-tax-annual-prepay',
    title: '자동차세 연납 신청 방법 및 할인 혜택',
    description:
      '자동차세를 1월에 연납하면 최대 5% 할인받을 수 있습니다. 위택스(WeTax) 또는 스마트위택스 앱에서 신청하는 방법을 안내합니다.',
    category: 'tax-payment',
    tags: ['자동차세', '연납', '위택스'],
    publishedAt: '2025-01-03',
    updatedAt: '2025-01-05',
    readingTime: 4,
    toc: [
      { id: 'what', title: '자동차세 연납이란?' },
      { id: 'discount', title: '연납 할인율' },
      { id: 'period', title: '신청 가능 기간' },
      { id: 'steps', title: '위택스 연납 신청 방법' },
      { id: 'faq', title: '자주 묻는 질문' },
    ],
    summary: [
      { label: '신청 기관', value: '위택스 (wetax.go.kr)' },
      { label: '신청 방법', value: '위택스 인터넷, 앱, 지자체 방문' },
      { label: '1월 연납 할인율', value: '약 4.6% (연간 변동)' },
      { label: '납부 기한', value: '연납 신청 후 선택 기간 내' },
    ],
    content: [
      {
        type: 'h2',
        id: 'what',
        text: '자동차세 연납이란?',
      },
      {
        type: 'paragraph',
        text: '자동차세는 원래 6월과 12월에 두 번 납부합니다. 연납은 연초에 한 번에 1년 치를 미리 납부하고 할인을 받는 제도입니다. 분기별로 신청 기간이 나뉘며, 가장 할인율이 높은 1월에 신청하는 것이 가장 유리합니다.',
      },
      {
        type: 'paragraph',
        text: '자동차를 소유하고 있다면 연납 신청을 통해 매년 일정 금액을 절약할 수 있습니다. 자동차 배기량에 따라 세금 규모가 다르지만, 큰 차량일수록 절약 금액도 커집니다.',
      },
      {
        type: 'h2',
        id: 'discount',
        text: '연납 할인율',
      },
      {
        type: 'paragraph',
        text: '연납 할인율은 신청 월에 따라 달라집니다. 1월에 신청할수록 할인율이 높습니다.',
      },
      {
        type: 'table',
        headers: ['신청 월', '할인율 (2025년 기준)', '비고'],
        rows: [
          ['1월', '약 4.6%', '1년 중 가장 높은 할인율'],
          ['3월', '약 3.75%', '2월 납부 기한 포함 3월 신청 가능'],
          ['6월', '약 2.5%', '하반기분만 연납'],
          ['9월', '약 1.25%', '4분기분만 연납'],
        ],
      },
      {
        type: 'tip',
        text: '1월 연납 신청 기간은 보통 1월 16일부터 1월 31일까지입니다. 해마다 기간이 조금씩 다를 수 있으므로 위택스 공지사항을 확인하세요.',
      },
      {
        type: 'h2',
        id: 'period',
        text: '신청 가능 기간',
      },
      {
        type: 'table',
        headers: ['신청 기간', '납부 기한'],
        rows: [
          ['1월 16일 ~ 1월 31일', '1월 31일까지'],
          ['3월 16일 ~ 3월 31일', '3월 31일까지'],
          ['6월 16일 ~ 6월 30일', '6월 30일까지'],
          ['9월 16일 ~ 9월 30일', '9월 30일까지'],
        ],
      },
      {
        type: 'h2',
        id: 'steps',
        text: '위택스(WeTax) 연납 신청 방법',
      },
      {
        type: 'steps',
        steps: [
          {
            step: 1,
            title: '위택스 홈페이지 접속',
            description: 'wetax.go.kr 에 접속합니다. 공동인증서, 간편인증 등으로 로그인합니다.',
          },
          {
            step: 2,
            title: '자동차세 연납 신청 메뉴 선택',
            description: '메인 화면에서 [납부하기] → [지방세] → [자동차세(연납)] 또는 상단 검색창에 "자동차세 연납"을 검색합니다.',
          },
          {
            step: 3,
            title: '차량 정보 확인',
            description: '본인 명의의 차량 목록이 자동으로 조회됩니다. 연납 신청할 차량을 선택합니다.',
          },
          {
            step: 4,
            title: '세액 확인 및 신청',
            description: '연납 세액과 할인 금액을 확인한 후 [연납 신청] 버튼을 클릭합니다.',
          },
          {
            step: 5,
            title: '결제 수단 선택 및 납부',
            description: '신용카드, 계좌이체, 간편결제 중 원하는 수단을 선택하여 납부합니다.',
          },
        ],
      },
      {
        type: 'warning',
        text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 연납 할인율 및 신청 기간은 매년 변동될 수 있으므로 위택스(wetax.go.kr) 또는 해당 지자체에서 최신 정보를 확인하세요.',
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
            question: '연납 후 차를 팔면 환급받을 수 있나요?',
            answer:
              '네, 연납 납부 후 차량을 매도하거나 폐차하면 남은 기간에 해당하는 세액을 환급받을 수 있습니다. 매도 후 지자체에 환급 신청을 하거나, 위택스를 통해 환급 신청이 가능합니다.',
          },
          {
            question: '연납 신청을 안 하면 어떻게 납부하나요?',
            answer:
              '연납 신청을 하지 않으면 6월과 12월에 정기 고지서가 발송됩니다. 고지서에 있는 가상계좌, 인터넷뱅킹, 위택스를 통해 납부하면 됩니다.',
          },
          {
            question: '신용카드로 납부해도 할인 혜택이 적용되나요?',
            answer:
              '네, 신용카드로 연납 납부해도 동일하게 연납 할인이 적용됩니다. 다만 일부 카드사의 무이자 할부 혜택과 중복 적용 여부는 카드사에 확인이 필요합니다.',
          },
        ],
      },
    ],
    relatedSlugs: ['property-tax-payment', 'hometax-payment-statement', 'comprehensive-income-tax'],};
