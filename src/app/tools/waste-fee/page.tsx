import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WasteFeeSearch from './WasteFeeSearch';

export const metadata: Metadata = {
  title: '대형폐기물 수수료 검색 — 전국 142개 지자체',
  description:
    '소파·매트리스·장롱 같은 대형폐기물을 버릴 때 우리 동네 스티커 가격이 얼마인지 검색하세요. 전국 142개 지자체의 공공데이터 18,000여 개 품목 요금을 한곳에서 비교할 수 있습니다.',
  alternates: { canonical: '/tools/waste-fee' },
};

export default function WasteFeePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[860px] mx-auto flex flex-col gap-6">
        <Breadcrumb items={[{ label: '계산기·도구', href: '/tools' }, { label: '대형폐기물 수수료 검색' }]} />

        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-[24px] font-bold">대형폐기물 수수료 검색</h1>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이사나 정리로 소파·매트리스·장롱을 버릴 때, 스티커(배출 수수료) 가격은 지자체마다
            다르고 한곳에서 비교할 방법이 없었습니다. 이 도구는 공공데이터포털의 표준데이터를
            매달 수집·병합해 <strong>전국 142개 시·군·구, 18,000여 개 품목 요금</strong>을 한
            화면에서 검색할 수 있게 만든 것입니다. 동네를 고르고 버릴 물건을 검색하세요.
          </p>
        </div>

        <WasteFeeSearch />

        <div className="bg-info-bg border border-info-border rounded-lg p-4 flex flex-col gap-1.5">
          <p className="text-info-text text-[13px] font-semibold">
            냉장고·세탁기·TV 같은 폐가전은 돈 내지 마세요
          </p>
          <p className="text-secondary text-[13px] leading-[1.7]">
            대형 폐가전제품은 환경부 지정 「폐가전 무상방문수거」 서비스(1599-0903,
            15990903.or.kr)로 예약하면 무료로 가져갑니다. 스티커를 사기 전에 무상수거 대상인지
            먼저 확인하는 것이 순서입니다.
          </p>
        </div>

        <div className="bg-surface border border-site-border rounded-lg px-4 py-3 flex flex-col gap-1.5">
          <p className="text-secondary text-[13px] font-semibold">데이터에 대하여</p>
          <ul className="flex flex-col gap-1">
            {[
              '출처: 공공데이터포털 「전국대형폐기물수거수수료정보표준데이터」 — 지자체가 등록한 공식 요금',
              '수집·병합: 애스크집이 매월 갱신하며, 지역별 데이터 기준일을 화면에 함께 표시합니다',
              '현재 226개 기초지자체 중 142곳이 표준데이터에 등록돼 있습니다. 미등록 지역은 순차적으로 지자체 공고·조례에서 보강할 예정입니다',
              '같은 품목의 요금이 범위로 나오는 것은 크기·재질 세부 기준이 원본 데이터에 생략된 경우로, 원본을 그대로 보존한 것입니다',
            ].map((t, i) => (
              <li key={i} className="text-muted text-[12px] leading-[1.7]">
                · {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-secondary text-[15px] font-semibold">함께 보면 좋은 안내글</h2>
          <div className="flex flex-col gap-1.5">
            <Link href="/articles/moving-report-mistake" className="text-accent text-[14px] hover:underline">
              전입신고 잘못 썼을 때 정정하는 법 →
            </Link>
            <Link href="/articles/utility-discount-reapply" className="text-accent text-[14px] hover:underline">
              이사 후 전기·가스 요금 할인이 끊겼을 때 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
