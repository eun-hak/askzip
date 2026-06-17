import type { Article } from '../types';

export const telecomUnrefundedFee: Article = {
  slug: 'telecom-unrefunded-fee',
  title: '통신비 미환급금 조회 및 환급 신청 방법',
  description:
    '모르고 놓친 통신비 미환급금을 스마트초이스 통합조회 또는 통신사 앱에서 조회하고 환급받는 방법을 안내합니다. 미환급금 사칭 스미싱 주의사항도 함께 정리했습니다.',
  category: 'inquiry-service',
  tags: ['통신비', '미환급금', '환급신청'],
  publishedAt: '2026-03-17',
  updatedAt: '2026-06-10',
  readingTime: 4,
  toc: [
    { id: 'what', title: '통신비 미환급금이란?' },
    { id: 'check', title: '조회 방법' },
    { id: 'claim', title: '환급 신청 방법' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '통합 조회', value: '스마트초이스 (smartchoice.or.kr)' },
    { label: '환급 주체', value: '각 통신사(SKT, KT, LGU+)' },
    { label: '소요 기간', value: '신청 후 2~4주' },
    { label: '수수료', value: '무료' },
  ],
  content: [
    {
      type: 'h2',
      id: 'what',
      text: '통신비 미환급금이란?',
    },
    {
      type: 'paragraph',
      text: '통신비 미환급금은 통신사(SKT, KT, LGU+)에 이미 납부했지만 아직 돌려받지 못한 금액입니다. 번호이동, 해지, 요금제 변경, 단말기 반납, 과납 등 다양한 이유로 발생할 수 있습니다.',
    },
    {
      type: 'paragraph',
      text: '많은 사람들이 소액이라 신경쓰지 않고 방치하는 경우가 많지만, 오래된 미환급금이 몇만원에서 몇십만원에 달하는 경우도 있습니다. 지금 바로 조회해 보세요.',
    },
    {
      type: 'h2',
      id: 'check',
      text: '조회 방법',
    },
    {
      type: 'paragraph',
      text: '여러 통신사에 흩어진 미환급금은 통합조회 사이트인 스마트초이스에서 한 번에 확인하는 것이 편합니다. 통신사별 앱·홈페이지에서 개별 조회도 가능합니다.',
    },
    {
      type: 'table',
      headers: ['조회 경로', '접근 방법'],
      rows: [
        ['스마트초이스 (통합)', 'smartchoice.or.kr → 통신 미환급액 조회 (KT·SKT·LGU+·SK브로드밴드 통합)'],
        ['SKT', 'T world(tworld.co.kr) 또는 고객센터 114'],
        ['KT', 'kt.com 로그인 후 미환급금 조회'],
        ['LGU+', 'lguplus.com 로그인 후 미환급금 조회'],
      ],
    },
    {
      type: 'notice',
      text: '스마트초이스는 한국통신사업자연합회가 통신사 위탁을 받아 운영하는 "조회·신청 창구"입니다. 실제 환급 처리와 입금은 각 통신사가 진행하므로, 입금 여부나 진행 상황은 해당 통신사 고객센터에서 확인해야 합니다.',
    },
    {
      type: 'h2',
      id: 'claim',
      text: '환급 신청 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '본인 인증 후 미환급금 조회',
          description: '스마트초이스(smartchoice.or.kr)에서 통합 조회하거나, 해당 통신사 앱·홈페이지에 로그인해 조회합니다.',
        },
        {
          step: 2,
          title: '환급 신청',
          description: '미환급금이 있는 경우 화면의 안내에 따라 환급 신청을 진행합니다.',
        },
        {
          step: 3,
          title: '환급 계좌 등록',
          description: '본인 명의의 환급 계좌를 입력합니다. 처음 등록하는 경우 계좌 인증이 필요할 수 있습니다.',
        },
        {
          step: 4,
          title: '처리 및 입금 확인',
          description: '신청 후 통상 2~4주 이내에 등록 계좌로 입금됩니다. 처리 현황은 통신사 앱 또는 고객센터에서 확인할 수 있습니다.',
        },
      ],
    },
    {
      type: 'tip',
      text: '미환급금은 해지 후 일정 기간(통상 5년)이 지나면 소멸시효가 적용될 수 있습니다. 오래전 해지한 번호가 있다면 미루지 말고 조회해 보세요.',
    },
    {
      type: 'warning',
      text: '"통신 미환급금이 있습니다" 같은 문자의 링크는 절대 누르지 마세요. 환급금 안내를 가장한 스미싱이 매우 많고, 링크로 들어가 앱 설치·계좌·비밀번호를 입력하면 그대로 피해로 이어집니다. 통신사와 정부기관은 미환급금을 이유로 전화·문자로 계좌번호나 비밀번호를 묻지 않습니다. 조회는 반드시 스마트초이스나 통신사 공식 앱·홈페이지에 직접 접속해서 하고, "대신 찾아준다"는 유료 대행은 필요 없습니다.',
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
          question: '조회·신청은 했는데 입금이 안 돼요.',
          answer:
            '스마트초이스나 통합조회는 조회·신청을 받아주는 창구일 뿐, 실제 환급과 입금은 각 통신사가 처리합니다. 신청 후 2~4주가 지나도 입금이 없으면 통합조회가 아니라 해당 통신사 고객센터에 신청 접수 여부와 처리 상황을 직접 확인해야 합니다.',
        },
        {
          question: '해지한 번호의 미환급금도 조회할 수 있나요?',
          answer:
            '네, 해지한 번호의 미환급금도 조회 가능합니다. 다만 해지 후 일정 기간(통상 5년)이 지나면 소멸 기준이 적용될 수 있으니 빨리 조회하세요.',
        },
        {
          question: '미환급금 금액이 너무 소액이면 환급이 안 되나요?',
          answer:
            '최소 환급 기준은 통신사마다 다를 수 있습니다. 일부 통신사는 100원 이상이면 환급 가능합니다.',
        },
        {
          question: '가족 명의 번호의 미환급금도 대리로 받을 수 있나요?',
          answer:
            '원칙적으로 본인 명의 계좌로만 환급됩니다. 가족 대리 환급은 통신사 고객센터에 문의하거나 직접 방문이 필요할 수 있습니다.',
        },
      ],
    },
  ],
  relatedSlugs: ['four-major-insurance-history', 'national-pension-history', 'health-insurance-eligibility-certificate'],
};
