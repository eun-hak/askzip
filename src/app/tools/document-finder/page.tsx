import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import DocumentFinder from './DocumentFinder';
import { documents, situations } from '@/data/document-map';

export const metadata: Metadata = {
  title: '민원서류 진단기 — 상황별 필요 서류 찾기',
  description:
    '전세대출·이직·비자·임대차 계약·상속 등 상황을 고르면 필요한 민원서류 목록과 서류별 발급 경로(온라인·무인발급기·창구), 수수료, 유효기간 주의사항을 한 화면에 정리해 드립니다.',
  alternates: { canonical: '/tools/document-finder' },
};

export default function DocumentFinderPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[860px] mx-auto flex flex-col gap-6">
        <Breadcrumb items={[{ label: '계산기·도구', href: '/tools' }, { label: '민원서류 진단기' }]} />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">민원서류 진단기</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            서류 준비에서 가장 어려운 건 발급이 아니라 &ldquo;뭘 떼야 하는지&rdquo;를 아는
            일입니다. 상황을 고르면 필요한 서류 목록과 각 서류의 발급 경로·수수료·유효기간
            함정을 한 화면에 모아 보여드립니다. 현재 {situations.length}개 상황 ×{' '}
            {documents.length}종 서류를 다루며, 모든 정보는 애스크집이 공식 출처로 검증한
            안내글에 근거합니다.
          </p>
        </div>

        <DocumentFinder />

        <div className="flex flex-col gap-2">
          <h2 className="text-secondary text-[15px] font-semibold">함께 쓰면 좋은 도구</h2>
          <div className="flex flex-col gap-1.5">
            <Link href="/tools/severance-calculator" className="text-accent text-[14px] hover:underline">
              퇴직금 계산기 →
            </Link>
            <Link href="/tools/insurance-calculator" className="text-accent text-[14px] hover:underline">
              4대보험 계산기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
