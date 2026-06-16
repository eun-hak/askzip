import type { Article } from '../types';

/**
 * 새 안내글 작성 템플릿
 * 1. 이 파일을 복사해 slug.ts 로 저장
 * 2. articles/index.ts 에 import + articles 배열에 추가
 */
export const yourArticleSlug: Article = {
  slug: 'your-article-slug',
  title: '글 제목',
  description: '검색·목록에 표시될 한 줄 설명 (120자 내외)',
  category: 'civil-documents', // civil-documents | tax-payment | living-support | inquiry-service
  tags: ['태그1', '태그2'],
  publishedAt: '2025-06-16',
  updatedAt: '2025-06-16',
  readingTime: 5,
  toc: [
    { id: 'section-1', title: '첫 번째 섹션' },
  ],
  summary: [
    { label: '발급 기관', value: '기관명' },
    { label: '수수료', value: '무료' },
  ],
  content: [
    { type: 'h2', id: 'section-1', text: '첫 번째 섹션' },
    { type: 'paragraph', text: '본문 내용을 작성합니다.' },
    { type: 'warning', text: '참고용 안내입니다. 공식 사이트에서 최신 정보를 확인하세요.' },
    {
      type: 'faq',
      items: [{ question: '질문?', answer: '답변.' }],
    },
  ],
  relatedSlugs: [],
};
