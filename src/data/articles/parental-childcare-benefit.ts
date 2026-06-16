import type { Article } from '../types';

export const parentalChildcareBenefit: Article = {
  slug: 'parental-childcare-benefit',
  title: '부모급여·첫만남이용권·아동수당 총정리 (2026년 기준)',
  description:
    '출산 후 챙겨야 할 핵심 육아 지원금 3종. 2026년 기준 부모급여, 첫만남이용권, 아동수당의 금액과 신청 방법을 한 번에 정리했습니다.',
  category: 'living-support',
  tags: ['부모급여', '첫만남이용권', '아동수당'],
  publishedAt: '2026-05-04',
  updatedAt: '2026-05-24',
  readingTime: 5,
  toc: [
    { id: 'overview', title: '육아 지원금 3종 한눈에' },
    { id: 'parental', title: '부모급여' },
    { id: 'firstmeet', title: '첫만남이용권' },
    { id: 'childallowance', title: '아동수당' },
    { id: 'steps', title: '한 번에 신청하는 방법' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '부모급여', value: '0세 월 100만원 / 1세 월 50만원' },
    { label: '첫만남이용권', value: '첫째 200만원 / 둘째 이상 300만원' },
    { label: '아동수당', value: '만 8세 미만 월 10만원' },
    { label: '신청', value: '행복출산 원스톱(정부24)·주민센터·복지로' },
  ],
  content: [
    {
      type: 'h2',
      id: 'overview',
      text: '육아 지원금 3종 한눈에',
    },
    {
      type: 'paragraph',
      text: '출산 후 받을 수 있는 대표 현금성 지원은 부모급여, 첫만남이용권, 아동수당입니다. 세 가지는 성격이 달라 중복으로 받을 수 있으며, 출생신고 시 한 번에 신청하는 것이 가장 편합니다.',
    },
    {
      type: 'table',
      headers: ['지원금', '성격', '대상'],
      rows: [
        ['부모급여', '매월 현금', '만 0~1세'],
        ['첫만남이용권', '출생 1회성 바우처', '출생아'],
        ['아동수당', '매월 현금', '만 8세 미만'],
      ],
    },
    {
      type: 'h2',
      id: 'parental',
      text: '부모급여',
    },
    {
      type: 'paragraph',
      text: '영아기 자녀를 양육하는 가정에 매월 현금을 지원합니다. 소득·재산 기준 없이 해당 연령의 아이를 키우면 누구나 대상입니다.',
    },
    {
      type: 'table',
      headers: ['자녀 연령', '월 지급액'],
      rows: [
        ['만 0세 (0~11개월)', '월 100만원'],
        ['만 1세 (12~23개월)', '월 50만원'],
      ],
    },
    {
      type: 'tip',
      text: '어린이집을 이용해도 자격은 유지됩니다. 다만 보육료가 먼저 차감되고 차액이 현금으로 지급됩니다. 예를 들어 0세가 어린이집을 다니면 100만원에서 보육료를 뺀 차액이 입금됩니다.',
    },
    {
      type: 'h2',
      id: 'firstmeet',
      text: '첫만남이용권',
    },
    {
      type: 'paragraph',
      text: '출생 초기 양육 비용을 돕기 위해 출생아 1명당 한 번 지급하는 국민행복카드 바우처입니다. 출생 순서에 따라 금액이 다릅니다.',
    },
    {
      type: 'table',
      headers: ['출생 순서', '지원 금액'],
      rows: [
        ['첫째', '200만원'],
        ['둘째 이상', '300만원'],
      ],
    },
    {
      type: 'h2',
      id: 'childallowance',
      text: '아동수당',
    },
    {
      type: 'paragraph',
      text: '만 8세 미만(0~95개월) 모든 아동에게 소득·재산과 무관하게 매월 10만원을 지급하는 보편적 수당입니다. 부모급여를 받는 0~1세 아동도 아동수당을 중복으로 받을 수 있습니다.',
    },
    {
      type: 'h2',
      id: 'steps',
      text: '한 번에 신청하는 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '행복출산 원스톱 서비스 이용',
          description: '출생신고와 함께 정부24(gov.kr) "행복출산 원스톱 서비스" 또는 주민센터에서 세 가지 지원금을 한 번에 신청합니다.',
        },
        {
          step: 2,
          title: '온라인 신청',
          description: '복지로(bokjiro.go.kr)에서도 신청할 수 있습니다. 첫만남이용권은 국민행복카드로 지급되므로 카드가 없으면 함께 발급받습니다.',
        },
        {
          step: 3,
          title: '계좌 등록 및 지급 확인',
          description: '부모급여·아동수당은 매월 25일 전후 현금으로, 첫만남이용권은 바우처(포인트)로 지급됩니다.',
        },
      ],
    },
    {
      type: 'warning',
      text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 출생일 포함 일정 기간(통상 60일) 내 신청해야 소급 지급되며, 정확한 금액·기한은 보건복지상담센터(129) 또는 복지로에서 확인하세요.',
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
          question: '세 가지를 모두 동시에 받을 수 있나요?',
          answer:
            '네, 부모급여·첫만남이용권·아동수당은 성격이 달라 중복 수급이 가능합니다. 0~1세 가정은 세 가지를 함께 받는 경우가 일반적입니다.',
        },
        {
          question: '만 2세가 되면 부모급여는 어떻게 되나요?',
          answer:
            '부모급여는 만 24개월이 되면 종료됩니다. 다만 아동수당(만 8세 미만)은 계속 지급되고, 어린이집 이용 시 보육료 지원도 이어집니다.',
        },
        {
          question: '늦게 신청하면 못 받나요?',
          answer:
            '출생일 포함 60일 이내에 신청하면 출생월부터 소급해 지급됩니다. 그 이후에는 신청한 달부터 지급되므로 가급적 빨리 신청하세요.',
        },
      ],
    },
  ],
  relatedSlugs: ['child-tax-credit', 'youth-rent-support', 'emergency-welfare-support'],
};
