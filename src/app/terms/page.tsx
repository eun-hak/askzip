import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { POLICY_DATE, SITE_EMAIL, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '이용약관',
  description: `${SITE_NAME}(askzip.kr) 서비스 이용에 관한 약관입니다. 콘텐츠 이용 범위, 저작권, 책임의 한계를 안내합니다.`,
  alternates: { canonical: '/terms' },
};

const Divider = () => <div className="w-full h-px bg-border-light" />;

export default function TermsPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-7">
        <Breadcrumb items={[{ label: '이용약관' }]} />

        <div className="flex flex-col gap-1">
          <h1 className="text-primary text-[24px] font-bold">이용약관</h1>
          <p className="text-muted text-[12px]">시행일: {POLICY_DATE}</p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">제1조 (목적)</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 약관은 {SITE_NAME}(이하 &apos;사이트&apos;, 도메인 askzip.kr)가 제공하는 생활 행정
            정보 서비스의 이용 조건과 절차, 사이트와 이용자의 권리·의무 및 책임 사항을 규정함을
            목적으로 합니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">제2조 (서비스의 성격)</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트는 민원서류 발급, 세금 납부, 지원금 신청, 생활 조회 서비스 등 공공 행정 절차에 관한
            안내 정보를 무료로 제공합니다. 사이트는 정부·공공기관과 무관한 개인 운영 정보 사이트이며,
            민원 접수·대행·상담 등 행정 처리 업무를 수행하지 않습니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            회원가입 절차는 없으며, 누구나 별도의 동의 절차 없이 콘텐츠를 열람할 수 있습니다. 사이트
            방문 및 이용은 본 약관에 동의한 것으로 봅니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">제3조 (콘텐츠의 저작권)</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트에 게시된 글, 표, 이미지 등 콘텐츠의 저작권은 사이트 운영자에게 있습니다. 출처를
            표기한 부분 인용은 허용하지만, 콘텐츠 전체 또는 상당 부분을 무단으로 복제·전재·재배포하는
            행위는 금지됩니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            콘텐츠에 인용된 법령, 공공기관 고시·안내 자료의 원저작권은 해당 기관에 있습니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">제4조 (정보의 정확성과 책임의 한계)</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트는 공공기관 공식 자료를 기준으로 정보를 작성하고 주기적으로 갱신하기 위해
            노력하지만, 정책·제도·수수료·절차는 예고 없이 변경될 수 있습니다. 게시된 정보의 완전성과
            최신성을 보증하지 않으며, 정보 이용으로 발생한 결과에 대한 법적 책임은 지지 않습니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            자세한 내용은{' '}
            <Link href="/disclaimer" className="text-accent hover:underline">
              면책조항
            </Link>
            을 확인해 주세요. 중요한 신청·납부 전에는 반드시 해당 기관의 공식 사이트에서 최신 정보를
            확인하시기 바랍니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">제5조 (광고 게재)</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트는 Google AdSense 등 광고 네트워크를 통해 광고를 게재할 수 있으며, 광고 수익은
            사이트 운영과 콘텐츠 개선에 사용됩니다. 광고 상품·서비스의 품질과 거래에 대한 책임은 해당
            광고주에게 있습니다. 광고 쿠키에 관한 내용은{' '}
            <Link href="/privacy" className="text-accent hover:underline">
              개인정보처리방침
            </Link>
            에서 확인할 수 있습니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">제6조 (금지 행위)</h2>
          <ul className="flex flex-col gap-1.5 pl-2">
            {[
              '자동화 수단(크롤러, 스크레이퍼 등)을 이용한 대량 수집 행위',
              '콘텐츠를 무단 복제하여 다른 매체에 게시하는 행위',
              '사이트를 사칭하거나 정부·공공기관 공식 서비스로 오인하게 하는 행위',
              '사이트의 정상적인 운영을 방해하는 행위',
            ].map((item, i) => (
              <li key={i} className="text-secondary text-[14px] leading-[1.7]">
                · {item}
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">제7조 (약관의 변경 및 문의)</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            본 약관은 관련 법령 개정이나 서비스 변경에 따라 수정될 수 있으며, 변경 시 이 페이지에
            게시합니다. 약관에 관한 문의는{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:underline">
              {SITE_EMAIL}
            </a>
            로 보내 주세요. 본 약관에 명시되지 않은 사항은 관련 법령과 일반 상관례를 따르며, 사이트
            주소는 {SITE_URL} 입니다.
          </p>
        </section>
      </div>
    </div>
  );
}
