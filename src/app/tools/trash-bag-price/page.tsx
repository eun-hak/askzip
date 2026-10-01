import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TrashBagPrice from './TrashBagPrice';

export const metadata: Metadata = {
  title: '종량제봉투 가격 조회 — 전국 207개 지자체',
  description:
    '우리 동네 종량제봉투 가격을 규격별(1ℓ~100ℓ)로 확인하세요. 생활쓰레기·음식물쓰레기, 가정용·사업장용 구분까지 전국 207개 시·군·구의 공공데이터를 한곳에 모았습니다.',
  alternates: { canonical: '/tools/trash-bag-price' },
};

export default function TrashBagPricePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[860px] mx-auto flex flex-col gap-6">
        <Breadcrumb
          items={[{ label: '계산기·도구', href: '/tools' }, { label: '종량제봉투 가격 조회' }]}
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">종량제봉투 가격 조회</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            종량제봉투 가격은 지자체 조례로 정해져서 동네마다 다릅니다. 이사 왔거나 가격이 올랐다는
            이야기를 들었을 때 확인할 곳이 마땅치 않아, 전국 <strong>207개 시·군·구</strong>의
            공공데이터를 모아 규격별로 바로 볼 수 있게 만들었습니다. 생활쓰레기와 음식물쓰레기,
            가정용과 사업장용이 구분되어 있습니다.
          </p>
        </div>

        <TrashBagPrice />

        <div className="bg-surface border border-site-border rounded-lg px-4 py-3 flex flex-col gap-1.5">
          <p className="text-secondary text-[13px] font-semibold">데이터에 대하여</p>
          <ul className="flex flex-col gap-1">
            {[
              '출처: 공공데이터포털 「전국종량제봉투가격표준데이터」 — 지자체가 등록한 공식 가격',
              '수집·병합: 애스크집이 주기적으로 갱신하며, 지역별 데이터 기준일을 함께 표시합니다',
              '226개 기초지자체 중 207곳이 등록돼 있습니다. 미등록 지역은 지자체 홈페이지나 조례에서 확인해야 합니다',
              '같은 규격이라도 봉투 종류(일반·재사용 등)와 처리 방식(소각·매립)에 따라 가격이 나뉘는 지자체가 있습니다',
            ].map((t, i) => (
              <li key={i} className="text-muted text-[12px] leading-[1.7]">
                · {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-secondary text-[15px] font-semibold">함께 보면 좋은 것</h2>
          <div className="flex flex-col gap-1.5">
            <Link href="/tools/waste-fee" className="text-accent text-[14px] hover:underline">
              대형폐기물 수수료 검색 — 소파·매트리스 버리는 값 →
            </Link>
            <Link
              href="/articles/trash-bag-price-analysis"
              className="text-accent text-[14px] hover:underline"
            >
              종량제봉투 값, 동네 따라 6.8배 차이 나는 이유 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
