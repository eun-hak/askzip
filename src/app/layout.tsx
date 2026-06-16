import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://livingdocs.kr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '생활문서 안내서 | 행정서류·세금·지원금 발급 가이드',
    template: '%s | 생활문서 안내서',
  },
  description:
    '주민등록등본, 건강보험 자격득실확인서, 자동차세 연납, 근로장려금 등 생활에 필요한 행정 서류 발급과 정부 서비스 이용 방법을 단계별로 안내합니다.',
  keywords: [
    '주민등록등본 발급', '건강보험 자격득실확인서', '자동차세 연납', '근로장려금', '재산세 납부',
    '가족관계증명서', '정부24', '홈택스', '위택스', '생활서류 발급', '민원서류',
  ],
  authors: [{ name: '생활문서 안내서' }],
  creator: '생활문서 안내서',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: '생활문서 안내서',
    title: '생활문서 안내서 | 행정서류·세금·지원금 발급 가이드',
    description:
      '생활에 필요한 행정 서류 발급, 세금 납부, 정부 지원금 신청 방법을 쉽게 안내합니다.',
  },
  twitter: {
    card: 'summary',
    title: '생활문서 안내서',
    description: '행정 서류 발급, 세금, 지원금 안내 사이트',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        {/* Google AdSense - 승인 후 아래 주석을 해제하고 실제 코드를 삽입하세요 */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" /> */}
      </head>
      <body className="min-h-screen flex flex-col bg-page">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
