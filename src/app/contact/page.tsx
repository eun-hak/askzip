import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '문의 및 운영 안내',
  description:
    '생활문서 안내서에 대한 정보 오류 제보, 콘텐츠 요청, 광고·제휴 문의 방법을 안내합니다.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <Breadcrumb items={[{ label: '문의' }]} />
        </div>

        <h1 className="text-primary text-[24px] font-bold">문의 및 운영 안내</h1>

        {/* 섹션 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">사이트 운영 목적</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 사이트는 생활 속에서 자주 필요한 행정 서류 발급, 세금 납부, 정부 지원금 신청 등의 절차를 쉽게 안내하기 위해 운영되고 있습니다. 공공기관의 공식 정보를 바탕으로 작성하되, 복잡한 절차를 누구나 이해할 수 있도록 단계별로 정리하는 것이 목표입니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">잘못된 정보 제보</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트에 게재된 정보 중 변경되었거나 잘못된 내용을 발견하신 경우, 아래 이메일로 알려주시면 확인 후 수정하겠습니다. 정확한 정보 제공을 위해 이용자분들의 제보는 큰 도움이 됩니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            제보 시 다음 내용을 포함해주시면 빠른 처리가 가능합니다.
          </p>
          <ul className="flex flex-col gap-1.5 pl-2">
            {[
              '해당 페이지 제목 또는 URL',
              '잘못된 내용이 어떤 부분인지',
              '올바른 정보가 무엇인지 (가능한 경우)',
            ].map((item, i) => (
              <li key={i} className="text-secondary text-[14px] leading-[1.7]">· {item}</li>
            ))}
          </ul>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">문의 가능 항목</h2>
          <ul className="flex flex-col gap-1.5 pl-2">
            {[
              '사이트 내 정보 오류 제보',
              '새로운 안내글 요청',
              '사이트 이용 관련 건의사항',
              '광고 및 제휴 관련 문의',
              '개인정보 관련 문의',
            ].map((item, i) => (
              <li key={i} className="text-secondary text-[14px] leading-[1.7]">· {item}</li>
            ))}
          </ul>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">답변이 어려운 항목</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 사이트는 정보 안내를 목적으로 운영되며, 다음과 같은 문의에는 답변이 어렵습니다.
          </p>
          <ul className="flex flex-col gap-1.5 pl-2">
            {[
              '개별 민원 처리 대행 요청',
              '기관별 정책 변경에 대한 사전 안내',
              '법률, 세무, 회계 등 전문 상담',
              '특정 기관에 대한 민원 접수',
            ].map((item, i) => (
              <li key={i} className="text-secondary text-[14px] leading-[1.7]">· {item}</li>
            ))}
          </ul>
          <p className="text-secondary text-[14px] leading-[1.8]">
            해당 사항은 각 기관의 고객센터나 전문 상담 서비스를 이용해주시기 바랍니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 5 - 문의 방법 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-primary text-[17px] font-semibold">문의 방법</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            아래 이메일로 문의해주시면 확인 후 가능한 빨리 회신드리겠습니다.
          </p>
          <div className="flex items-center gap-3 bg-info-bg border border-info-border rounded-lg p-4">
            <Mail size={20} className="text-info-text shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-info-text text-[12px] font-medium">이메일 문의</span>
              <a
                href="mailto:contact@livingdocs.kr"
                className="text-primary text-[15px] font-semibold hover:text-accent transition-colors"
              >
                contact@livingdocs.kr
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
