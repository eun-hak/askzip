import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug } from '@/data/articles';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumb from '@/components/ui/Breadcrumb';
import InfoSummaryBox from '@/components/article/InfoSummaryBox';
import TableOfContents from '@/components/article/TableOfContents';
import StepList from '@/components/article/StepList';
import FAQBlock from '@/components/article/FAQBlock';
import WarningBox from '@/components/article/WarningBox';
import ArticleTable from '@/components/article/ArticleTable';
import ArticleCard from '@/components/cards/ArticleCard';
import { Clock, Calendar } from 'lucide-react';
import SourcesBox from '@/components/article/SourcesBox';
import { articleSources } from '@/data/sources';

const categoryNameMap: Record<string, string> = {
  'civil-documents': '민원서류 발급',
  'tax-payment': '세금·납부',
  'living-support': '생활지원금',
  'inquiry-service': '조회서비스',
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://livingdocs.kr';

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: `${siteUrl}/articles/${slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      tags: article.tags,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const categoryName = categoryNameMap[article.category] ?? '';

  const relatedArticles = article.relatedSlugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean) as typeof articles;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://livingdocs.kr';

  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    url: `${siteUrl}/articles/${slug}`,
    inLanguage: 'ko-KR',
    publisher: {
      '@type': 'Organization',
      name: '생활문서 안내서',
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* 메인 콘텐츠 */}
          <article className="w-full max-w-[780px]">
            {/* 브레드크럼 */}
            <Breadcrumb
              items={[
                { label: categoryName, href: `/category/${article.category}` },
                { label: article.title },
              ]}
            />

            {/* 제목 블록 */}
            <div className="mt-5 flex flex-col gap-3">
              <span className="self-start px-2.5 py-1 bg-accent-light text-accent-text text-[12px] font-medium rounded">
                {categoryName}
              </span>
              <h1 className="text-primary text-[24px] md:text-[26px] font-bold leading-[1.35]">
                {article.title}
              </h1>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-muted text-[13px]">
                  <Calendar size={13} />
                  {article.updatedAt} 업데이트
                </span>
                <span className="text-muted text-[13px]">·</span>
                <span className="flex items-center gap-1 text-muted text-[13px]">
                  <Clock size={13} />
                  읽는 시간 약 {article.readingTime}분
                </span>
              </div>
            </div>

            {/* 요약 정보 */}
            <div className="mt-6">
              <InfoSummaryBox items={article.summary} />
            </div>

            {/* 목차 */}
            <div className="mt-6">
              <TableOfContents items={article.toc} />
            </div>

            {/* 본문 */}
            <div className="mt-8 flex flex-col gap-6 article-prose">
              {article.content.map((block, i) => {
                switch (block.type) {
                  case 'h2':
                    return (
                      <div key={i} className="flex flex-col gap-3 pt-2">
                        <div className="w-full h-px bg-border-light" />
                        <h2 id={block.id} className="text-primary text-[18px] font-semibold scroll-mt-20">
                          {block.text}
                        </h2>
                      </div>
                    );
                  case 'paragraph':
                    return (
                      <p key={i} className="text-secondary text-[15px] leading-[1.8]">
                        {block.text}
                      </p>
                    );
                  case 'steps':
                    return <StepList key={i} steps={block.steps} />;
                  case 'faq':
                    return <FAQBlock key={i} items={block.items} />;
                  case 'table':
                    return <ArticleTable key={i} headers={block.headers} rows={block.rows} />;
                  case 'warning':
                    return <WarningBox key={i} text={block.text} type="warning" />;
                  case 'tip':
                    return <WarningBox key={i} text={block.text} type="tip" />;
                  case 'notice':
                    return <WarningBox key={i} text={block.text} type="notice" />;
                  default:
                    return null;
                }
              })}
            </div>

            {/* 공식 출처 링크 */}
            {articleSources[article.slug] && (
              <div className="mt-10">
                <SourcesBox
                  sources={articleSources[article.slug]}
                  verifiedAt={article.updatedAt}
                />
              </div>
            )}

            {/* 면책 조항 */}
            <div className="mt-4 p-4 bg-surface rounded-lg border border-site-border">
              <p className="text-muted text-[12px] leading-[1.8]">
                이 페이지에서 제공하는 정보는 공공기관 공식 자료를 바탕으로 작성된 참고용 안내입니다. 정책·제도·절차는 변경될 수 있으므로, 중요한 사항은 반드시 관련 기관의 공식 사이트 또는 전화 상담을 통해 최신 정보를 확인하시기 바랍니다.
              </p>
            </div>

            {/* 관련 글 */}
            {relatedArticles.length > 0 && (
              <section className="mt-10">
                <h2 className="text-secondary text-[15px] font-semibold mb-4">관련 안내글</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedArticles.slice(0, 2).map((related) => (
                    <ArticleCard
                      key={related.slug}
                      article={related}
                      categoryName={categoryNameMap[related.category]}
                    />
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </div>
    </>
  );
}
