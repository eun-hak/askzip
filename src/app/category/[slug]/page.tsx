import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { SITE_NAME } from '@/lib/site';
import { getArticlesByCategory } from '@/data/articles';
import ArticleListItem from '@/components/cards/ArticleListItem';
import Breadcrumb from '@/components/ui/Breadcrumb';
import {
  FileText, Receipt, HandCoins, Search,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'file-text': FileText,
  'receipt': Receipt,
  'hand-coins': HandCoins,
  'search': Search,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} 발급 안내`,
    description: category.description,
    alternates: { canonical: `/category/${slug}` },
    openGraph: {
      title: `${category.name} 발급 안내 | ${SITE_NAME}`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(slug);
  const Icon = iconMap[category.icon] ?? FileText;

  return (
    <>
      {/* 히어로 */}
      <section className="bg-site-white border-b border-site-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8 flex flex-col gap-3">
          <Breadcrumb items={[{ label: category.name }]} />
          <div className="flex items-center gap-3 mt-1">
            <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
              <Icon size={20} className="text-accent" />
            </div>
            <h1 className="text-primary text-[24px] font-bold">{category.name}</h1>
          </div>
          <p className="text-secondary text-[14px] leading-[1.55] max-w-[720px]">
            {category.description}
          </p>
        </div>
      </section>

      {/* 목록 */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
        <div className="flex items-center justify-between mb-5">
          <p className="text-secondary text-[14px]">
            총 <span className="text-primary font-semibold">{articles.length}개</span>의 안내글
          </p>
        </div>
        {articles.length === 0 ? (
          <div className="py-16 text-center text-muted text-[14px]">
            아직 등록된 안내글이 없습니다.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {articles.map((article) => (
              <ArticleListItem key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
