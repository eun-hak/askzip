import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: '사이트 소개',
  description:
    '생활문서 안내서는 일상에서 자주 필요한 행정 서류 발급, 세금 납부, 정부 지원금 신청 방법을 쉽게 정리하는 정보 사이트입니다.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <Breadcrumb items={[{ label: '사이트 소개' }]} />
        </div>

        <h1 className="text-primary text-[24px] font-bold">사이트 소개</h1>
        <p className="text-muted text-[12px]">마지막 업데이트: 2025년 6월 1일</p>

        {/* 섹션 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">이 사이트가 하는 일</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            &apos;생활문서 안내서&apos;는 일상에서 자주 필요하지만 절차가 복잡하게 느껴지는 각종 행정 서류 발급, 세금 납부, 정부 지원금 신청 방법을 쉽게 정리하는 정보 사이트입니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            공공기관 홈페이지에 흩어져 있는 정보를 한곳에 모아 단계별로 안내하여, 누구나 어렵지 않게 필요한 업무를 처리할 수 있도록 돕는 것이 이 사이트의 목적입니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">어떤 정보를 다루나요?</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            현재 다음과 같은 분야의 정보를 다루고 있으며, 지속적으로 내용을 추가하고 있습니다.
          </p>
          <ul className="flex flex-col gap-1.5 pl-2">
            {[
              '민원서류 발급: 주민등록등본, 가족관계증명서, 건강보험 자격득실확인서 등',
              '세금·납부: 자동차세, 재산세, 홈택스 지급명세서 확인 등',
              '생활지원금: 청년월세지원, 근로장려금 등 정부 지원제도 안내',
              '조회서비스: 통신비 미환급금, 4대보험 가입내역 조회 등',
            ].map((item, i) => (
              <li key={i} className="text-secondary text-[14px] leading-[1.7]">
                · {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">콘텐츠 작성 기준</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            모든 안내글은 다음 기준에 따라 작성됩니다.
          </p>
          <ul className="flex flex-col gap-1.5 pl-2">
            {[
              '각 기관의 공식 홈페이지 안내를 기반으로 작성합니다.',
              '실제 발급·신청 절차를 직접 확인한 후 단계별로 정리합니다.',
              '전문 용어는 가능한 쉬운 표현으로 풀어서 설명합니다.',
              '스크린샷이나 첨부 이미지 없이 텍스트만으로 이해할 수 있도록 상세하게 안내합니다.',
            ].map((item, i) => (
              <li key={i} className="text-secondary text-[14px] leading-[1.7]">
                · {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">정보의 정확성에 대하여</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            정부 정책과 행정 절차는 수시로 변경됩니다. 이 사이트의 모든 정보는 작성 시점을 기준으로 하며, 실제 상황과 차이가 있을 수 있습니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            중요한 사안에 대해서는 반드시 관련 기관의 공식 사이트 또는 담당 부서를 통해 최신 정보를 직접 확인하시기 바랍니다. 이 사이트에서 제공하는 정보를 활용한 결과에 대해서는 책임을 지지 않습니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">광고 운영에 대하여</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 사이트는 Google AdSense 등의 광고 네트워크를 통한 광고를 게재할 수 있습니다. 광고 수익은 사이트 운영 및 콘텐츠 유지·개선에 사용됩니다. 광고 내용은 이 사이트의 편집 방향에 영향을 주지 않습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
