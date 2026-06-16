import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '생활문서 안내서의 개인정보 수집·이용·보호에 관한 방침을 안내합니다.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <Breadcrumb items={[{ label: '개인정보처리방침' }]} />
        </div>

        <h1 className="text-primary text-[24px] font-bold">개인정보처리방침</h1>
        <p className="text-muted text-[12px]">시행일: 2025년 1월 1일</p>

        {/* 섹션 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">1. 개인정보 수집 여부</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            &apos;생활문서 안내서&apos;(이하 &apos;사이트&apos;)는 별도의 회원가입 절차 없이 운영되며, 이용자로부터 이름, 이메일, 전화번호 등의 개인정보를 직접 수집하지 않습니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            다만, 문의 이메일을 통해 연락하시는 경우 회신을 위해 이메일 주소가 수집될 수 있으며, 해당 정보는 문의 처리 완료 후 지체 없이 파기됩니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">2. 쿠키 사용 안내</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 사이트는 방문자 통계 분석 및 서비스 개선을 위해 Google Analytics 등의 서비스가 사용하는 쿠키(Cookie)를 사용할 수 있습니다. 쿠키는 개인을 식별하는 정보를 포함하지 않으며, 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            쿠키를 거부해도 사이트의 정보 열람에는 지장이 없습니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">3. 제3자 서비스 이용</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 사이트는 다음과 같은 제3자 서비스를 이용할 수 있으며, 각 서비스의 개인정보처리방침이 별도로 적용됩니다.
          </p>
          <ul className="flex flex-col gap-1.5 pl-2">
            {[
              'Google Analytics: 방문자 행동 분석 및 통계 수집',
              'Google AdSense: 맞춤형 광고 게재',
            ].map((item, i) => (
              <li key={i} className="text-secondary text-[14px] leading-[1.7]">
                · {item}
              </li>
            ))}
          </ul>
          <p className="text-secondary text-[14px] leading-[1.8]">
            Google의 개인정보처리방침은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://policies.google.com/privacy</a>에서 확인하실 수 있습니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">4. 개인정보의 보유 및 파기</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            문의를 통해 수집된 이메일 주소는 문의 처리 완료 후 즉시 파기됩니다. 법령에 의해 보관이 의무화된 경우 외에는 이용자의 개인정보를 별도로 보관하지 않습니다.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">5. 이용자의 권리</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이용자는 언제든지 본인의 개인정보에 대한 열람, 정정, 삭제를 요청할 수 있습니다. 관련 요청은 아래 문의 이메일로 연락해주세요.
          </p>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 6 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">6. 개인정보 보호책임자</h2>
          <div className="bg-info-bg border border-info-border rounded-lg p-4">
            <p className="text-secondary text-[14px] leading-[1.8]">
              개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="flex flex-col gap-1 mt-3 pl-2">
              <li className="text-secondary text-[14px]">· 이메일: contact@livingdocs.kr</li>
            </ul>
          </div>
        </section>

        <div className="w-full h-px bg-border-light" />

        {/* 섹션 7 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">7. 개인정보처리방침 변경</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 개인정보처리방침은 법령 또는 사이트 정책 변경에 따라 수정될 수 있습니다. 변경 시에는 이 페이지에 새로운 내용이 게시됩니다. 정기적으로 확인하시기 바랍니다.
          </p>
        </section>
      </div>
    </div>
  );
}
