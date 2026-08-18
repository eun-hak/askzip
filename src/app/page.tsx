import type { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { articles, getLatestArticles } from '@/data/articles';
import CategoryCard from '@/components/cards/CategoryCard';
import ArticleCard from '@/components/cards/ArticleCard';
import SearchBar from '@/components/ui/SearchBar';
import { TOOLS } from '@/lib/tools-list';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from '@/lib/site';
import { BadgeCheck, Camera, Calculator, FileCheck } from 'lucide-react';

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
  const guideCount = articles.length;

  const trustItems = [
    { icon: FileCheck, text: `안내 가이드 ${guideCount}편` },
    { icon: Calculator, text: `계산기 ${TOOLS.length}종` },
    { icon: Camera, text: '실제 발급 화면 캡처' },
    { icon: BadgeCheck, text: '공식 출처·확인일 표기' },
  ];

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="bg-site-white border-b border-site-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-10 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-primary text-[26px] md:text-[30px] font-bold leading-[1.35]">
              민원서류 발급부터 세금·지원금 계산까지,
              <br className="hidden sm:block" /> 생활 행정을 한곳에서
            </h1>
            <p className="text-secondary text-[14px] md:text-[15px] leading-[1.7] max-w-[620px]">
              주민등록등본·가족관계증명서 발급, 자동차세·재산세 납부, 근로장려금·실업급여 신청 —
              {SITE_NAME}은 공공기관 공식 안내를 기준으로 절차를 확인하고, 실제로 막히는 지점과
              선택 기준까지 함께 정리하는 생활 행정 가이드입니다.
            </p>
          </div>
          <div className="max-w-[520px] w-full">
            <SearchBar size="large" />
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-muted text-[13px]">
                <item.icon size={14} className="text-accent-text" />
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 계산기 도구 */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-secondary text-[15px] font-semibold">
            바로 계산해 보기 <span className="text-muted font-normal">— 2026년 기준 요율</span>
          </h2>
          <Link href="/tools" className="text-accent text-[13px] hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="bg-site-white border border-site-border rounded-xl p-4 flex flex-col gap-2.5 hover:border-accent transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center">
                <tool.icon size={18} className="text-accent-text" />
              </div>
              <span className="text-primary text-[15px] font-semibold">{tool.title}</span>
              <span className="text-secondary text-[12px] leading-[1.6]">{tool.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 주요 카테고리 */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9 border-t border-border-light">
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

      {/* 운영자·검증 방식 배너 */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9 border-t border-border-light">
        <div className="bg-info-bg border border-info-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-info-text font-semibold text-[16px]">
              {AUTHOR_NAME}가 직접 확인하고 씁니다
            </p>
            <p className="text-secondary text-[14px] leading-[1.65] max-w-[560px]">
              모든 안내글은 공공기관 공식 자료를 기준으로 작성하고, 직접 발급·신청하며 확인한
              화면 캡처와 실제로 막힌 지점을 함께 담습니다. 잘못된 정보를 발견하면 제보를 받아
              바로 고칩니다.
            </p>
          </div>
          <a
            href="/about"
            className="shrink-0 px-5 py-2.5 bg-accent text-white text-[14px] font-medium rounded-lg hover:bg-accent-text transition-colors whitespace-nowrap"
          >
            운영자 소개 보기
          </a>
        </div>
      </section>
    </>
  );
}
