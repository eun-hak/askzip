import type { Article } from '../types';

export const landRegister: Article = {
  slug: 'land-register',
  title: '토지대장 무료 발급 방법 (정부24)',
  description:
    '정부24에서 토지대장(토지·임야대장)을 무료로 발급하는 방법을 안내합니다. 등기부등본·토지이용계획확인서와의 차이도 함께 정리했습니다.',
  category: 'civil-documents',
  tags: ['토지대장', '정부24', '부동산'],
  publishedAt: '2026-06-16',
  updatedAt: '2026-06-16',
  readingTime: 4,
  toc: [
    { id: 'what', title: '토지대장이란?' },
    { id: 'compare', title: '등기부등본·토지이용계획확인서와 차이' },
    { id: 'steps', title: '정부24 발급 방법' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '발급 기관', value: '정부24 (gov.kr)' },
    { label: '대상', value: '토지대장 / 임야대장 (등본·초본)' },
    { label: '소요 시간', value: '약 3분 (온라인)' },
    { label: '수수료', value: '인터넷 무료' },
  ],
  content: [
    {
      type: 'h2',
      id: 'what',
      text: '토지대장이란?',
    },
    {
      type: 'paragraph',
      text: '토지대장은 토지의 소재, 지번, 지목, 면적, 소유자 등 토지의 현황 정보를 기록·관리하는 공적 장부입니다. 토지 거래, 대출, 각종 인허가, 재산 확인 등에 사용됩니다. 산지는 임야대장으로 별도 관리됩니다.',
    },
    {
      type: 'h2',
      id: 'compare',
      text: '등기부등본·토지이용계획확인서와 차이',
    },
    {
      type: 'table',
      headers: ['서류', '확인 내용', '발급처'],
      rows: [
        ['토지대장', '지목·면적 등 토지 현황', '정부24'],
        ['등기부등본', '소유권·권리관계(저당 등)', '인터넷등기소'],
        ['토지이용계획확인서', '용도지역·개발 규제', '정부24 / 토지이음(eum.go.kr)'],
      ],
    },
    {
      type: 'tip',
      text: '면적·지목은 토지대장이 기준입니다. 등기부등본과 토지대장의 면적이 다를 경우, 토지의 물리적 현황은 토지대장을 따르는 것이 원칙입니다.',
    },
    {
      type: 'h2',
      id: 'steps',
      text: '정부24 발급 방법',
    },
    {
      type: 'steps',
      steps: [
        {
          step: 1,
          title: '정부24 접속',
          description: 'gov.kr 에 접속해 검색창에 "토지대장"을 입력합니다.',
        },
        {
          step: 2,
          title: '토지(임야)대장 등본 발급 선택',
          description: '[토지(임야)대장 등본 교부] 민원을 선택하고 [발급하기]를 클릭합니다.',
        },
        {
          step: 3,
          title: '주소 및 대장 종류 선택',
          description: '토지 소재지(지번)를 입력하고 토지/임야 여부, 등본/초본을 선택합니다.',
        },
        {
          step: 4,
          title: '발급 및 출력',
          description: '내용을 확인하고 발급합니다. PDF 저장 또는 프린트가 가능합니다.',
        },
      ],
    },
    {
      type: 'warning',
      text: '이 사이트에서 제공하는 정보는 참고 목적입니다. 정확한 절차와 최신 정보는 정부24(gov.kr) 또는 관할 시·군·구청에서 확인하세요.',
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
          question: '타인 소유 토지의 대장도 발급되나요?',
          answer:
            '토지대장은 소유자가 아니어도 지번만 알면 누구나 발급할 수 있습니다. 다만 소유자 개인정보는 제한적으로 표시됩니다.',
        },
        {
          question: '토지 거래 전 어떤 서류를 봐야 하나요?',
          answer:
            '토지대장(현황), 등기부등본(권리관계), 토지이용계획확인서(규제)를 함께 확인하는 것이 안전합니다. 세 서류는 보여주는 정보가 다릅니다.',
        },
        {
          question: '토지대장과 지적도는 같은 서류인가요?',
          answer:
            '아닙니다. 토지대장은 면적·지목 등 문자 정보를, 지적도는 토지의 경계·모양을 도면으로 보여줍니다. 둘 다 정부24에서 발급할 수 있습니다.',
        },
      ],
    },
  ],
  relatedSlugs: ['real-estate-registration-certificate', 'building-register', 'acquisition-tax'],
};
