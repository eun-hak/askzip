import Link from 'next/link';
import type { Article } from '@/data/articles';
import { Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  categoryName?: string;
}

export default function ArticleCard({ article, categoryName }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col gap-3 p-5 bg-site-white border border-site-border rounded-xl hover:border-accent hover:shadow-sm transition-all"
    >
      {/* 카테고리 뱃지 */}
      {categoryName && (
        <span className="self-start px-2.5 py-1 bg-accent-light text-accent-text text-[12px] font-medium rounded">
          {categoryName}
        </span>
      )}
      {/* 제목 */}
      <p className="text-primary text-[16px] font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
        {article.title}
      </p>
      {/* 설명 */}
      <p className="text-secondary text-[13px] leading-[1.65] line-clamp-2">
        {article.description}
      </p>
      {/* 메타 */}
      <div className="flex items-center gap-3 mt-auto pt-1">
        <span className="flex items-center gap-1 text-muted text-[12px]">
          <Calendar size={12} />
          {article.updatedAt}
        </span>
        <span className="flex items-center gap-1 text-muted text-[12px]">
          <Clock size={12} />
          읽는 시간 {article.readingTime}분
        </span>
      </div>
    </Link>
  );
}
