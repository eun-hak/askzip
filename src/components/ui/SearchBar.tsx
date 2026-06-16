'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  initialValue?: string;
  size?: 'default' | 'large';
}

export default function SearchBar({
  placeholder = '어떤 서류나 서비스를 찾고 계신가요?',
  initialValue = '',
  size = 'default',
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const inputClass =
    size === 'large'
      ? 'w-full pl-4 pr-12 py-3.5 text-[15px] text-primary placeholder:text-muted border border-site-border rounded-lg bg-site-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition'
      : 'w-full pl-4 pr-12 py-2.5 text-[14px] text-primary placeholder:text-muted border border-site-border rounded-lg bg-site-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition';

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
        aria-label="검색"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-accent transition-colors"
        aria-label="검색 실행"
      >
        <Search size={18} />
      </button>
    </form>
  );
}
