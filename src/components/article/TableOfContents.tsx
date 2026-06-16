'use client';

import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="bg-surface rounded-lg p-5" aria-label="목차">
      <p className="text-primary text-[14px] font-semibold mb-3">목차</p>
      <ol className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-1 text-[13px] transition-colors ${
                active === item.id
                  ? 'text-accent-text font-medium'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
