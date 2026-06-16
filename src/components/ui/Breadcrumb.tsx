import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5" aria-label="breadcrumb">
      <Link href="/" className="text-muted text-[13px] hover:text-secondary transition-colors">
        홈
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="text-muted text-[13px]">›</span>
          {item.href ? (
            <Link href={item.href} className="text-muted text-[13px] hover:text-secondary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-secondary text-[13px]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
