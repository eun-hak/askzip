import { articles } from './articles';

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  articleCount: number;
  tags: string[];
}

/** 카테고리 기본 정보 (articleCount는 articles에서 자동 계산) */
const categoryDefinitions = [
  {
    slug: 'civil-documents',
    name: '민원서류 발급',
    description:
      '정부24, 국민건강보험, 대법원 전자가족관계등록시스템 등을 통해 각종 민원서류를 온라인으로 발급받는 방법을 안내합니다.',
    icon: 'file-text',
    tags: ['정부24', '건강보험', '가족관계'],
  },
  {
    slug: 'tax-payment',
    name: '세금·납부',
    description:
      '자동차세, 재산세, 홈택스 지급명세서 등 세금 관련 정보를 확인하고 납부하는 방법을 안내합니다.',
    icon: 'receipt',
    tags: ['자동차세', '재산세', '홈택스'],
  },
  {
    slug: 'living-support',
    name: '생활지원금',
    description:
      '청년월세지원, 근로장려금 등 정부 지원금 신청 조건과 방법을 정리합니다.',
    icon: 'hand-coins',
    tags: ['청년지원', '장려금', '복지급여'],
  },
  {
    slug: 'inquiry-service',
    name: '조회서비스',
    description:
      '통신비 미환급금, 4대보험 가입내역 등 각종 온라인 조회 서비스를 안내합니다.',
    icon: 'search',
    tags: ['미환급금', '4대보험', '국민연금'],
  },
];

export type CategorySlug = (typeof categoryDefinitions)[number]['slug'];

export const categories: Category[] = categoryDefinitions.map((cat) => ({
  slug: cat.slug,
  name: cat.name,
  description: cat.description,
  icon: cat.icon,
  tags: [...cat.tags],
  articleCount: articles.filter((a) => a.category === cat.slug).length,
}));

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
