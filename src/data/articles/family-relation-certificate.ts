import type { Article } from '../types';

export const familyRelationCertificate: Article = {
    slug: 'family-relation-certificate',
    title: '가족관계증명서 온라인 발급 방법 (대법원 전자가족관계등록시스템)',
    description:
      '대법원 전자가족관계등록시스템을 통해 가족관계증명서를 무료로 인터넷 발급받는 방법을 단계별로 안내합니다.',
    category: 'civil-documents',
    tags: ['가족관계증명서', '대법원', '민원서류'],
    publishedAt: '2026-05-31',
    updatedAt: '2026-06-03',
    readingTime: 4,
    toc: [
      { id: 'what', title: '가족관계증명서란?' },
      { id: 'types', title: '증명서 종류' },
      { id: 'steps', title: '인터넷 발급 방법' },
      { id: 'faq', title: '자주 묻는 질문' },
    ],
    summary: [
      { label: '발급 기관', value: '대법원 전자가족관계등록시스템' },
      { label: '사이트', value: 'efamily.scourt.go.kr' },
      { label: '소요 시간', value: '약 3~5분 (온라인)' },
      { label: '수수료', value: '무료' },
    ],
    content: [
      {
        type: 'h2',
        id: 'what',
        text: '가족관계증명서란?',
      },
      {
        type: 'paragraph',
        text: '가족관계증명서는 2008년 1월부터 시행된 「가족관계의 등록 등에 관한 법률」에 따라 기존 호적등본을 대체하는 공문서입니다. 본인을 기준으로 부모, 배우자, 자녀 등 직계 가족 관계를 증명하는 서류로, 각종 행정 및 법적 업무에 필요합니다.',
      },
      {
        type: 'paragraph',
        text: '주민등록등본과 달리 가족관계증명서는 주민등록상 주소가 달라도 가족 관계를 확인할 수 있습니다. 사망, 이혼, 재혼 등의 가족 변동 사항도 반영됩니다.',
      },
      {
        type: 'h2',
        id: 'types',
        text: '증명서 종류',
      },
      {
        type: 'paragraph',
        text: '가족관계 증명서는 용도에 따라 여러 종류로 구분됩니다. 제출 목적에 맞는 종류를 선택해야 합니다.',
      },
      {
        type: 'table',
        headers: ['종류', '기재 내용', '주요 용도'],
        rows: [
          ['가족관계증명서', '배우자, 부모, 자녀', '일반 행정 업무, 보험 등'],
          ['기본증명서', '본인의 출생·사망·국적 등', '여권 발급, 각종 신청'],
          ['혼인관계증명서', '혼인 및 이혼 이력', '이혼 소송, 혼인 확인'],
          ['입양관계증명서', '입양 및 파양 이력', '입양 관련 업무'],
          ['친양자입양관계증명서', '친양자 관계', '친양자 관련 업무'],
        ],
      },
      {
        type: 'h2',
        id: 'steps',
        text: '인터넷 발급 방법',
      },
      {
        type: 'steps',
        steps: [
          {
            step: 1,
            title: '대법원 전자가족관계등록시스템 접속',
            description: 'efamily.scourt.go.kr 에 접속합니다. 메인 화면에서 [증명서 발급] 메뉴를 선택합니다.',
          },
          {
            step: 2,
            title: '발급받을 증명서 종류 선택',
            description: '가족관계증명서, 기본증명서 등 필요한 증명서 종류를 선택합니다.',
          },
          {
            step: 3,
            title: '본인인증',
            description: '공동인증서, 금융인증서, 간편인증(카카오·네이버·PASS)으로 본인인증합니다.',
          },
          {
            step: 4,
            title: '발급 대상자 확인',
            description: '본인 또는 직계 가족 중 발급 대상자를 선택합니다. 본인이 아닌 직계 가족의 서류는 발급 가능 여부가 제한될 수 있습니다.',
          },
          {
            step: 5,
            title: '주민등록번호 표시 여부 선택',
            description: '주민등록번호 전체 공개, 뒷자리 마스킹, 전체 마스킹 중 선택합니다.',
          },
          {
            step: 6,
            title: '발급 완료 및 저장',
            description: '신청 내용을 확인하고 [발급하기]를 클릭합니다. PDF 형식으로 저장하거나 프린터로 출력합니다.',
          },
        ],
      },
      {
        type: 'tip',
        text: '가족관계증명서 발급 후 문서 하단에 있는 16자리 확인번호로 대법원 진위확인 서비스(efamily.scourt.go.kr)에서 문서 위변조 여부를 확인할 수 있습니다.',
      },
      {
        type: 'warning',
        text: '이 사이트에서 제공하는 정보는 참고 목적으로 작성되었습니다. 정확한 발급 방법 및 최신 정보는 대법원 전자가족관계등록시스템 공식 사이트(efamily.scourt.go.kr) 또는 가까운 주민센터에서 확인하세요.',
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
            question: '부모님의 가족관계증명서를 자녀가 발급받을 수 있나요?',
            answer:
              '직계 가족의 경우 본인인증 후 발급받을 수 있습니다. 다만 일부 상세 정보의 경우 본인만 열람 가능한 경우가 있어, 필요시 해당 가족 본인이 직접 발급하는 것이 좋습니다.',
          },
          {
            question: '외국에 거주 중인 가족도 발급받을 수 있나요?',
            answer:
              '인증 수단이 있다면 해외에서도 발급받을 수 있습니다. 국내 공동인증서나 간편인증서가 있다면 전 세계 어디서나 인터넷 발급이 가능합니다.',
          },
          {
            question: '이혼한 배우자가 서류에 계속 표시되나요?',
            answer:
              '증명서 종류에 따라 다릅니다. 일반증명서에는 과거 혼인 관계가 표시되지 않으나, 상세증명서에는 이혼 이력이 기재될 수 있습니다. 제출 목적에 따라 일반 또는 상세를 선택하세요.',
          },
        ],
      },
    ],
    relatedSlugs: ['resident-registration-copy', 'health-insurance-eligibility-certificate', 'health-insurance-payment-proof'],};
