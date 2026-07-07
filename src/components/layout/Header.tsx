'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';

const navLinks = [
  { href: '/category/civil-documents', label: '발급안내' },
  { href: '/category/tax-payment', label: '세금·납부' },
  { href: '/category/living-support', label: '지원금' },
  { href: '/category/inquiry-service', label: '조회서비스' },
  { href: '/tools', label: '계산기' },
  { href: '/about', label: '사이트 소개' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-site-white border-b border-site-border sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] h-[56px] flex items-center justify-between">
        <Link href="/" className="text-primary font-bold text-[18px] shrink-0">
          {SITE_NAME}
        </Link>

        {/* 데스크톱 nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium transition-colors ${
                pathname === link.href || pathname.startsWith(link.href)
                  ? 'text-accent'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-2 text-secondary hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="md:hidden bg-site-white border-t border-site-border">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 text-[15px] font-medium border-b border-border-light last:border-0 transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href)
                    ? 'text-accent'
                    : 'text-secondary hover:text-primary'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
