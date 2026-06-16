import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-site-white border-t border-site-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-9">
        {/* 상단 */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary text-[14px] font-semibold">생활문서 안내서</span>
            <p className="text-secondary text-[12px] leading-relaxed max-w-[320px]">
              생활 행정 정보를 쉽게 정리하는 개인 운영 정보 사이트
            </p>
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
            © {currentYear} 생활문서 안내서. All rights reserved.
          </p>
          <p className="text-muted text-[12px] leading-relaxed max-w-[620px]">
            이 사이트의 정보는 공공기관 공식 자료를 바탕으로 작성된 참고용 안내입니다. 정확한 정보는 관련 기관 공식 사이트를 반드시 확인하시기 바랍니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
