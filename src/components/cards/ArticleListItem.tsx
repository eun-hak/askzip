import Link from 'next/link';
import type { Article } from '@/data/articles';
import { Clock, Calendar, ChevronRight } from 'lucide-react';

interface ArticleListItemProps {
  article: Article;
}

export default function ArticleListItem({ article }: ArticleListItemProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex items-start justify-between gap-4 p-5 bg-site-white border border-site-border rounded-xl hover:border-accent hover:shadow-sm transition-all"
    >
      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-primary text-[15px] font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {article.title}
        </p>
        <p className="text-secondary text-[13px] leading-[1.65] line-clamp-2">
          {article.description}
        </p>
        <div className="flex items-center gap-3 mt-1">
          <span className="flex items-center gap-1 text-muted text-[12px]">
            <Calendar size={11} />
            {article.updatedAt}
          </span>
          <span className="flex items-center gap-1 text-muted text-[12px]">
            <Clock size={11} />
            읽는 시간 {article.readingTime}분
          </span>
        </div>
      </div>
      <ChevronRight size={18} className="text-muted shrink-0 mt-1 group-hover:text-accent transition-colors" />
    </Link>
  );
}
