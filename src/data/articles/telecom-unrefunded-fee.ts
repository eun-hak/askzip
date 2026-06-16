import type { Article } from '../types';

export const telecomUnrefundedFee: Article = {
    slug: 'telecom-unrefunded-fee',
    title: '통신비 미환급금 조회 및 환급 신청 방법',
    description:
      '모르고 놓친 통신비 미환급금을 과학기술정보통신부 통신분쟁조정위원회 또는 통신사 앱에서 조회하고 환급받는 방법을 안내합니다.',
    category: 'inquiry-service',
    tags: ['통신비', '미환급금', '환급신청'],
    publishedAt: '2026-03-17',
    updatedAt: '2026-06-14',
    readingTime: 4,
    toc: [
      { id: 'what', title: '통신비 미환급금이란?' },
      { id: 'check', title: '조회 방법' },
      { id: 'claim', title: '환급 신청 방법' },
      { id: 'faq', title: '자주 묻는 질문' },
    ],
    summary: [
      { label: '조회 방법', value: '통신사 고객센터, 앱, 통신분쟁조정위원회' },
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
        text: '통신비 미환급금은 여러 경로를 통해 조회할 수 있습니다.',
      },
      {
        type: 'table',
        headers: ['조회 방법', '접근 경로'],
        rows: [
          ['SKT T다이렉트', 'T다이렉트 앱 또는 t.skt.com 접속'],
          ['KT 고객센터', 'kt.com 로그인 후 미환급금 조회'],
          ['LGU+ 고객센터', 'lguplus.com 로그인 후 미환급금 조회'],
          ['통신분쟁조정위원회', 'kcc.go.kr 민원24 또는 정부24 통합조회'],
          ['정부24', 'gov.kr → 내 정보 → 미환급금 조회'],
        ],
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
            description: '해당 통신사 앱 또는 홈페이지에 로그인하거나, 정부24에서 통합 조회합니다.',
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
            description: '신청 후 통상 2~4주 이내에 등록 계좌로 입금됩니다. 처리 현황은 앱 또는 홈페이지에서 확인할 수 있습니다.',
          },
        ],
      },
      {
        type: 'tip',
        text: '미환급금은 해지 후 일정 기간이 지나면 소멸될 수 있습니다. 오래된 통신 계약이 있다면 빨리 조회해 보세요.',
      },
      {
        type: 'warning',
        text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 조회 방법과 환급 기간은 각 통신사 고객센터에 확인하세요.',
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
    relatedSlugs: ['four-major-insurance-history', 'national-pension-history', 'health-insurance-eligibility-certificate'],};
