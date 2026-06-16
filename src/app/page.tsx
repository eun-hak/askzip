import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { getLatestArticles } from '@/data/articles';
import CategoryCard from '@/components/cards/CategoryCard';
import ArticleCard from '@/components/cards/ArticleCard';
import SearchBar from '@/components/ui/SearchBar';
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SUBTITLE,
  SITE_TITLE,
} from '@/lib/site';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

const categoryNameMap: Record<string, string> = {
  'civil-documents': '민원서류 발급',
  'tax-payment': '세금·납부',
  'living-support': '생활지원금',
  'inquiry-service': '조회서비스',
};

export default function HomePage() {
  const latestArticles = getLatestArticles(6);

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="bg-site-white border-b border-site-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-10 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-primary text-[28px] md:text-[32px] font-bold leading-tight">
              {SITE_NAME}
            </h1>
            <p className="text-accent-text text-[15px] md:text-[16px] font-medium">
              {SITE_SUBTITLE}
            </p>
          </div>
          <p className="text-secondary text-[14px] leading-[1.7] max-w-[560px]">
            {SITE_DESCRIPTION}
          </p>
          <div className="mt-2 max-w-[520px] w-full">
            <SearchBar size="large" />
          </div>
        </div>
      </section>

      {/* 주요 카테고리 */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9">
        <h2 className="text-secondary text-[15px] font-semibold mb-5">주요 카테고리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* 최신 안내글 */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9 border-t border-border-light">
        <h2 className="text-secondary text-[15px] font-semibold mb-5">최신 안내글</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              categoryName={categoryNameMap[article.category]}
            />
          ))}
        </div>
      </section>

      {/* 사이트 소개 배너 */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9 border-t border-border-light">
        <div className="bg-info-bg border border-info-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-info-text font-semibold text-[16px]">{SITE_NAME} 소개</p>
            <p className="text-secondary text-[14px] leading-[1.65] max-w-[520px]">
              공공기관 공식 정보를 바탕으로 복잡한 행정 절차를 쉽게 정리합니다. 모든 안내글은 실제 절차를 확인한 뒤 작성됩니다.
            </p>
          </div>
          <a
            href="/about"
            className="shrink-0 px-5 py-2.5 bg-accent text-white text-[14px] font-medium rounded-lg hover:bg-accent-text transition-colors whitespace-nowrap"
          >
            사이트 소개 보기
          </a>
        </div>
      </section>
    </>
  );
}
