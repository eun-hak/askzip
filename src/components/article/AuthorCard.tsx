import Link from 'next/link';
import { UserRound } from 'lucide-react';
import { AUTHOR_NAME } from '@/lib/site';

/** 글 하단 공통 저자 카드 (E-E-A-T). 프로필 사진이 준비되면 아이콘 자리를 이미지로 교체 */
export default function AuthorCard() {
  return (
    <div className="mt-8 bg-surface border border-site-border rounded-xl p-5 flex gap-4">
      <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center shrink-0">
        <UserRound size={22} className="text-accent-text" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-primary text-[14px] font-semibold">
          {AUTHOR_NAME} <span className="text-muted text-[12px] font-normal">· 애스크집 운영자</span>
        </p>
        <p className="text-secondary text-[13px] leading-[1.7]">
          민원서류·세금·지원금 절차를 직접 확인하고 정리합니다. 공공기관 공식 안내를 기준으로
          쓰되, 실제로 진행하며 막힌 지점과 화면 캡처를 함께 담는 것을 원칙으로 합니다. 글과
          달라진 제도를 발견하시면 알려주세요 — 확인 후 바로 고칩니다.
        </p>
        <Link href="/about" className="text-accent text-[13px] hover:underline w-fit">
          운영자 소개와 콘텐츠 검증 방식 보기 →
        </Link>
      </div>
    </div>
  );
}
