import Link from 'next/link';
import { SITE_EMAIL, SITE_NAME, SITE_SUBTITLE, SITE_DISCLAIMER } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-site-white border-t border-site-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9">
        {/* 상단 */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary text-[14px] font-semibold">{SITE_NAME}</span>
            <p className="text-secondary text-[12px] leading-relaxed max-w-[320px]">
              {SITE_SUBTITLE}
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-muted text-[12px] hover:text-primary transition-colors w-fit"
            >
              운영자 문의: {SITE_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-secondary text-[13px] hover:text-primary transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/about" className="text-secondary text-[13px] hover:text-primary transition-colors">
              사이트 소개
            </Link>
            <Link href="/contact" className="text-secondary text-[13px] hover:text-primary transition-colors">
              문의
            </Link>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-border-light mb-5" />

        {/* 하단 */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2">
          <p className="text-muted text-[12px]">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-muted text-[12px] leading-relaxed max-w-[620px]">
            {SITE_DISCLAIMER}
          </p>
        </div>
      </div>
    </footer>
  );
}
