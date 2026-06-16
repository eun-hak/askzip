import type { Metadata } from 'next';
import { searchArticles } from '@/data/articles';
import ArticleListItem from '@/components/cards/ArticleListItem';
import SearchBar from '@/components/ui/SearchBar';
import { Search } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" 검색 결과` : '검색',
    description: q ? `"${q}"에 대한 ${SITE_NAME} 검색 결과입니다.` : `${SITE_NAME} 검색`,
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? '';
  const results = query ? searchArticles(query) : [];

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[720px]">
        <h1 className="text-primary text-[22px] font-bold mb-5">
          {query ? `"${query}" 검색 결과` : '검색'}
        </h1>
        <SearchBar initialValue={query} size="large" />

        <div className="mt-7">
          {!query ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <Search size={36} className="text-muted" />
              <p className="text-secondary text-[15px]">검색어를 입력하세요</p>
              <p className="text-muted text-[13px]">
                주민등록등본, 건강보험, 자동차세, 근로장려금 등을 검색해보세요
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <Search size={36} className="text-muted" />
              <p className="text-secondary text-[15px]">
                &quot;{query}&quot;에 대한 검색 결과가 없습니다
              </p>
              <p className="text-muted text-[13px]">다른 검색어로 시도해보세요</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-secondary text-[14px] mb-3">
                총 <span className="text-primary font-semibold">{results.length}개</span>의 결과
              </p>
              {results.map((article) => (
                <ArticleListItem key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
