import type { Article } from '../types';

export const immigrationFactCertificate: Article = {
  slug: 'immigration-fact-certificate',
  title: '출입국에 관한 사실증명 발급 방법 (정부24·하이코리아)',
  description:
    '본인의 출국·입국 기록을 증명하는 출입국에 관한 사실증명을 정부24 또는 하이코리아에서 무료로 발급하는 방법을 안내합니다.',
  category: 'civil-documents',
  tags: ['출입국사실증명', '정부24', '하이코리아'],
  publishedAt: '2026-06-10',
  updatedAt: '2026-06-09',
  readingTime: 4,
  toc: [
    { id: 'what', title: '출입국 사실증명이란?' },
    { id: 'when', title: '언제 필요한가?' },
    { id: 'steps', title: '정부24 발급 방법' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '발급 기관', value: '법무부 / 정부24·하이코리아' },
    { label: '사이트', value: 'gov.kr / hikorea.go.kr' },
    { label: '발급 항목', value: '출국·입국 일자 및 국가 기록' },
    { label: '수수료', value: '온라인 무료' },
  ],
  content: [
    {
      type: 'h2',
      id: 'what',
      text: '출입국 사실증명이란?',
    },
    {
      type: 'paragraph',
      text: '출입국에 관한 사실증명은 본인의 출국·입국 일자와 국가 등 출입국 기록을 법무부가 공식적으로 증명하는 서류입니다. 해외 체류 기간이나 국내 거주 사실을 입증해야 할 때 사용됩니다.',
    },
    {
      type: 'notice',
      text: '증명되는 것은 우리나라를 드나든 "출입국 사실(날짜·국가)"뿐입니다. 행선지·여행 목적·현지 체류지는 나오지 않으며, 해당 기간에 출입국 기록이 없으면 "기록 없음"으로 발급됩니다. 발급 기간은 출생일부터 신청 전날까지 지정할 수 있습니다.',
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
        ['병역·국적 관련', '해외 체류 기간 확인'],
        ['금융·보험', '거주 사실, 해외 체류 증빙'],
        ['각종 자격·면제 신청', '국내 거주 요건 확인'],
        ['해외 체류 증명', '유학·근무 기간 입증'],
      ],
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
          description: 'gov.kr 에 접속해 검색창에 "출입국에 관한 사실증명"을 입력합니다. (외국인은 하이코리아 hikorea.go.kr 이용)',
        },
        {
          step: 2,
          title: '본인인증',
          description: '공동인증서, 금융인증서, 간편인증(카카오·네이버·PASS)으로 본인 확인을 합니다.',
        },
        {
          step: 3,
          title: '증명 기간 및 내용 선택',
          description: '발급받을 출입국 기간과 표시 항목을 선택합니다. 제출처가 요구하는 기간을 확인하세요.',
        },
        {
          step: 4,
          title: '발급 및 출력',
          description: '내용을 확인하고 발급합니다. PDF 저장 또는 프린트가 가능하며, 진위확인 코드가 포함됩니다.',
        },
      ],
    },
    {
      type: 'tip',
      text: '본인 외에 미성년 자녀 등 일정 범위의 가족 출입국 사실증명은 가족관계를 확인할 수 있는 경우 대리 발급이 가능할 수 있습니다. 자세한 범위는 하이코리아 또는 출입국·외국인청에 문의하세요.',
    },
    {
      type: 'warning',
      text: '이 증명서는 우리나라 출입국 사실만 보여줄 뿐, 상대 국가의 입·출국 기록이나 현지 체류 사실은 증명하지 못합니다. 그 나라 기록이 필요하면 해당국 이민당국에서 따로 받아야 합니다. 또 외국인은 이 서류가 아닌 "외국인등록 사실증명"을 하이코리아에서 발급해야 합니다.',
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
          question: '아주 오래된 출입국 기록도 조회되나요?',
          answer:
            '전산화 이후의 기록은 대부분 조회됩니다. 다만 매우 오래된 기록은 표시되지 않을 수 있으며, 이 경우 출입국·외국인청에 직접 문의해야 합니다.',
        },
        {
          question: '해외에 사는데 그 나라 입국·출국 기록까지 나오나요?',
          answer:
            '아니요. 이 증명서에는 우리나라를 드나든 기록만 나옵니다. 거주 중인 국가의 입·출국 기록은 그 나라 이민당국에서 별도로 발급받아야 합니다.',
        },
        {
          question: '외국인도 발급받을 수 있나요?',
          answer:
            '네, 외국인은 하이코리아(hikorea.go.kr)에서 "외국인등록 사실증명"을 발급받을 수 있습니다. 내국인용 출입국 사실증명과는 서류가 다릅니다.',
        },
        {
          question: '영문으로도 발급되나요?',
          answer:
            '제출처가 영문본을 요구하는 경우, 발급 시 영문 여부를 선택하거나 출입국·외국인청에 문의해 영문 증명을 받을 수 있습니다.',
        },
      ],
    },
  ],
  relatedSlugs: ['family-relation-certificate', 'resident-registration-copy', 'resident-registration-abstract'],
};
