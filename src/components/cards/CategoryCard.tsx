import Link from 'next/link';
import {
  FileText,
  Receipt,
  HandCoins,
  Search,
} from 'lucide-react';
import type { Category } from '@/data/categories';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'file-text': FileText,
  'receipt': Receipt,
  'hand-coins': HandCoins,
  'search': Search,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? FileText;

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col gap-3 p-5 bg-site-white border border-site-border rounded-xl hover:border-accent hover:shadow-sm transition-all"
    >
      {/* 아이콘 */}
      <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
        <Icon size={20} className="text-accent" />
      </div>
      {/* 제목 */}
      <p className="text-primary text-[16px] font-semibold group-hover:text-accent transition-colors">
        {category.name}
      </p>
      {/* 설명 */}
      <p className="text-secondary text-[13px] leading-[1.65] line-clamp-3">
        {category.description}
      </p>
      {/* 기사 수 */}
      <p className="text-muted text-[12px]">{category.articleCount}개 안내글</p>
    </Link>
  );
}
