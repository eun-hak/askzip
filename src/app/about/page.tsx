import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import {
  AUTHOR_BIO,
  AUTHOR_NAME,
  POLICY_DATE,
  SITE_DESCRIPTION,
  SITE_DISCLAIMER,
  SITE_EMAIL,
  SITE_NAME,
} from '@/lib/site';

export const metadata: Metadata = {
  title: '사이트 소개',
  description: SITE_DESCRIPTION,
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
        <p className="text-muted text-[12px]">마지막 업데이트: {POLICY_DATE}</p>

        {/* 섹션 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">이 사이트가 하는 일</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            {SITE_DESCRIPTION}
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            공공기관 홈페이지에 흩어져 있는 정보를 한곳에 모아 단계별로 안내하여, 누구나 어렵지 않게 필요한 업무를 처리할 수 있도록 돕는 것이 {SITE_NAME}의 목적입니다.
          </p>
          <p className="text-muted text-[13px] leading-[1.7] bg-surface border border-site-border rounded-lg px-4 py-3">
            {SITE_DISCLAIMER}
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

        {/* 운영자 소개 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">운영자 소개</h2>
          <div className="bg-surface border border-site-border rounded-lg px-5 py-4 flex flex-col gap-3">
            <p className="text-primary text-[15px] font-semibold">{AUTHOR_NAME}</p>
            <p className="text-secondary text-[14px] leading-[1.8]">{AUTHOR_BIO}</p>
            <p className="text-secondary text-[14px] leading-[1.8]">
              이 사이트를 시작한 계기는 단순합니다. 등본 한 통, 지원금 신청 하나를 할 때마다
              공공기관 사이트, 블로그, 뉴스가 제각각 다른 이야기를 해서 매번 처음부터 검색해야
              했습니다. 그래서 흩어진 절차를 한곳에 모으되, &ldquo;어느 메뉴를 누르라&rdquo;는
              나열이 아니라 <strong>어떤 상황에서 무엇을 골라야 하는지</strong>를 기준으로
              정리하기로 했습니다. 계산기 도구를 함께 만드는 것도 같은 이유입니다 — 절차를 읽기
              전에 금액부터 확인하고 싶은 게 실제 마음이니까요.
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="text-primary text-[14px] font-semibold">콘텐츠 검증 방식</p>
              <ul className="flex flex-col gap-1 pl-1">
                {[
                  '① 각 기관의 공식 안내·법령을 기준으로 초안을 잡습니다. 초안 정리에는 AI 도구를 활용하되, 사실 확인과 최종 검수는 운영자가 직접 합니다.',
                  '② 온라인으로 직접 발급·신청할 수 있는 절차는 직접 수행하고, 그 화면을 캡처해(개인정보 마스킹) 글에 싣습니다.',
                  '③ 글마다 공식 출처 링크와 확인일을 표기하고, 확인하지 못한 정보는 수치 없이 "기관 확인 필요"로 적습니다.',
                ].map((item, i) => (
                  <li key={i} className="text-secondary text-[13px] leading-[1.8]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted text-[13px] leading-[1.7]">
              <strong>정정 정책</strong>: 제도가 바뀌었거나 잘못 적힌 부분을 발견하시면{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:underline">
                {SITE_EMAIL}
              </a>
              로 알려주세요. 확인 후 수정하고, 글의 업데이트 날짜를 갱신합니다.
            </p>
          </div>
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
              '직접 진행하며 확인한 화면 캡처(개인정보 마스킹 처리)를 순차적으로 추가하고 있습니다.',
              '절차만 나열하지 않고, 실제로 막히기 쉬운 지점과 실패 사례를 함께 담습니다.',
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
            정부 정책과 행정 절차는 수시로 변경됩니다. {SITE_NAME}의 모든 정보는 작성 시점을 기준으로 하며, 실제 상황과 차이가 있을 수 있습니다.
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
            {SITE_NAME}은 Google AdSense 등의 광고 네트워크를 통한 광고를 게재할 수 있습니다. 광고 수익은 사이트 운영 및 콘텐츠 유지·개선에 사용됩니다. 광고 내용은 이 사이트의 편집 방향에 영향을 주지 않습니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            광고·쿠키 이용에 관한 자세한 내용은{' '}
            <a href="/privacy" className="text-accent hover:underline">
              개인정보처리방침
            </a>
            을 참고해 주세요.
          </p>
        </section>
      </div>
    </div>
  );
}
