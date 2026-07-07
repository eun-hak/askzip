import type { Article } from '../types';

/**
 * 새 안내글 작성 템플릿
 * 1. 이 파일을 복사해 slug.ts 로 저장
 * 2. articles/index.ts 에 import + articles 배열에 추가
 *
 * 품질 기준 (docs/adsense-content-originality.md · docs/adsense-approval-checklist.md):
 * - 본문 실질 2,500자 이상 (패딩 금지), h2 5개 이상
 * - table 2개 이상 (발급 경로 비교, 옵션/요건 비교 등)
 * - FAQ 5개 이상, 그중 실패·막힘 케이스("~가 안 돼요") 2개 이상
 * - warning은 이 글에서만 의미 있는 내용 (다른 글과 동일 문구 금지)
 * - 직접 수행한 스크린샷 2~4장 (docs/screenshot-guide.md 규약)
 * - publishedAt = 실제 발행일. 소급·분산 입력 금지
 */
export const yourArticleSlug: Article = {
  slug: 'your-article-slug',
  title: '글 제목',
  description: '검색·목록에 표시될 한 줄 설명 (120자 내외)',
  category: 'civil-documents', // civil-documents | tax-payment | living-support | inquiry-service
  tags: ['태그1', '태그2'],
  publishedAt: '2026-07-06', // 실제 발행일
  updatedAt: '2026-07-06', // 마지막 실제 수정일
  readingTime: 6, // 본문 글자수 ÷ 500 (분)
  toc: [
    { id: 'section-1', title: '첫 번째 섹션' },
    { id: 'faq', title: '자주 묻는 질문' },
  ],
  summary: [
    { label: '발급 기관', value: '기관명' },
    { label: '수수료', value: '무료' },
  ],
  content: [
    { type: 'h2', id: 'section-1', text: '첫 번째 섹션' },
    { type: 'paragraph', text: '본문 내용을 작성합니다.' },
    // 직접 수행 화면 캡처 (마스킹 필수, docs/screenshot-guide.md)
    {
      type: 'image',
      src: '/images/articles/your-article-slug/01-menu.png',
      alt: '화면 내용을 문장으로 설명',
      caption: '캡처 설명 (2026년 7월 기준 화면)',
      width: 1600,
      height: 1000,
    },
    // 관청 페이지에 없는 실무 판단 기준
    { type: 'tip', text: '어떤 상황에 어떤 옵션을 선택해야 하는지 판단 기준을 적습니다.' },
    // 이 글 주제에서만 의미 있는 주의사항 (전 글 공통 면책 문구 금지)
    { type: 'warning', text: '이 주제에서 실제로 실수하기 쉬운 지점을 적습니다.' },
    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        { question: '일반 질문?', answer: '답변.' },
        { question: '○○이 안 될 때는? (실패 케이스 필수)', answer: '원인별 대처.' },
      ],
    },
  ],
  relatedSlugs: [],
};
