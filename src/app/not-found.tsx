import Link from 'next/link';
import { FileSearch } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center gap-4">
      <FileSearch size={48} className="text-muted" />
      <h1 className="text-primary text-[24px] font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="text-secondary text-[14px] leading-[1.7] max-w-[400px]">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-2 px-5 py-2.5 bg-accent text-white text-[14px] font-medium rounded-lg hover:bg-accent-text transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
