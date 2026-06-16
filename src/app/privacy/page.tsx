import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { POLICY_DATE, SITE_EMAIL, SITE_NAME, SITE_DISCLAIMER } from '@/lib/site';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: `${SITE_NAME}(askzip.kr)의 개인정보 수집·이용·광고 쿠키·보호에 관한 방침을 안내합니다.`,
  alternates: { canonical: '/privacy' },
};

const Divider = () => <div className="w-full h-px bg-border-light" />;

export default function PrivacyPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-7">
        <Breadcrumb items={[{ label: '개인정보처리방침' }]} />

        <div className="flex flex-col gap-1">
          <h1 className="text-primary text-[24px] font-bold">개인정보처리방침</h1>
          <p className="text-muted text-[12px]">시행일: {POLICY_DATE} · 최종 수정: {POLICY_DATE}</p>
        </div>

        {/* 1. 개인정보 수집 여부 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">1. 개인정보 수집 여부</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            &apos;{SITE_NAME}&apos;(이하 &apos;사이트&apos;, 도메인 askzip.kr)는 별도의 회원가입 절차 없이 운영되며,
            이용자로부터 이름, 이메일, 전화번호 등의 개인정보를 직접 수집하지 않습니다.
          </p>
          <p className="text-muted text-[13px] leading-[1.7] bg-surface border border-site-border rounded-lg px-4 py-3">
            {SITE_DISCLAIMER}
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            다만, 문의 이메일을 통해 연락하시는 경우 회신을 위해 이메일 주소가 수집될 수 있으며,
            해당 정보는 문의 처리 완료 후 지체 없이 파기됩니다.
          </p>
        </section>

        <Divider />

        {/* 2. 쿠키 및 광고에 관한 안내 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-primary text-[17px] font-semibold">2. 쿠키 및 광고에 관한 안내</h2>

          <p className="text-secondary text-[14px] leading-[1.8]">
            본 사이트는 서비스 이용 통계 분석과 광고 제공을 위해 쿠키를 사용할 수 있습니다. 쿠키는
            이용자의 브라우저에 저장되는 작은 정보 파일이며, 방문 기록 분석, 서비스 개선, 맞춤형 광고
            제공 등에 활용될 수 있습니다. 쿠키는 개인을 직접 식별하는 정보를 포함하지 않습니다.
          </p>

          <p className="text-secondary text-[14px] leading-[1.8]">
            본 사이트는 Google AdSense를 사용하여 광고를 게재할 수 있습니다. Google 및 제3자 광고
            사업자는 쿠키를 사용하여 사용자의 이전 웹사이트 방문 기록을 바탕으로 광고를 게재할 수
            있습니다. Google의 광고 쿠키 사용으로 Google과 파트너는 사용자의 본 사이트 방문 및
            인터넷상의 다른 사이트 방문 기록을 토대로 광고를 게재할 수 있습니다.
          </p>

          <div className="bg-info-bg border border-info-border rounded-lg p-4 flex flex-col gap-2">
            <p className="text-info-text text-[13px] font-semibold">Google 광고 쿠키 및 맞춤형 광고</p>
            <ul className="flex flex-col gap-2 pl-1">
              {[
                'Google 및 서드파티 광고 사업자가 쿠키를 사용하여 이전 방문 기록을 바탕으로 광고를 게재할 수 있습니다.',
                'Google AdSense는 DoubleClick DART 쿠키를 사용하여 본 사이트 및 다른 사이트 방문 기록에 기반한 광고를 표시할 수 있습니다.',
                '이 쿠키는 중복 광고 방지, 클릭 사기 감지, 관심사에 맞는 맞춤형 광고 제공 등에 활용될 수 있습니다.',
              ].map((text, i) => (
                <li key={i} className="text-info-text text-[13px] leading-[1.7] flex gap-2">
                  <span className="shrink-0">·</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-secondary text-[14px] leading-[1.8]">
            사용자는 브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있습니다. 쿠키를 거부해도
            사이트의 정보 열람에는 지장이 없으나, 일부 광고·통계 기능이 정상적으로 동작하지 않을 수
            있습니다. 또한 Google 광고 설정에서 개인 맞춤 광고를 관리하거나 거부할 수 있습니다.
          </p>

          <div className="flex flex-col gap-1.5 pl-2">
            <p className="text-secondary text-[13px] font-medium">맞춤 광고 관리·거부 및 관련 정책</p>
            {[
              {
                label: 'Google 광고 설정 (g.co/adsettings)',
                href: 'https://g.co/adsettings',
              },
              {
                label: 'Google 광고 개인정보처리방침',
                href: 'https://www.google.com/privacy_ads.html',
              },
              {
                label: 'Google 개인정보처리방침',
                href: 'https://policies.google.com/privacy',
              },
              {
                label: 'NAI 광고 쿠키 거부 (aboutads.info)',
                href: 'https://www.aboutads.info',
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-[13px] hover:underline pl-2"
              >
                · {link.label} →
              </a>
            ))}
          </div>
        </section>

        <Divider />

        {/* 3. Google Analytics */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">3. Google Analytics (방문 통계)</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 사이트는 방문자 행동 분석 및 서비스 개선을 위해 Google Analytics를 사용할 수 있습니다.
            Google Analytics는 쿠키를 통해 익명으로 데이터를 수집하며, 수집된 데이터는 Google의 서버에
            저장됩니다. Google Analytics의 데이터 처리 방식에 대한 자세한 내용은{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google 개인정보처리방침
            </a>
            에서 확인하실 수 있습니다.
          </p>
          <p className="text-secondary text-[14px] leading-[1.8]">
            Google Analytics 추적을 거부하려면{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google Analytics 거부 브라우저 부가기능
            </a>
            을 설치하실 수 있습니다.
          </p>
        </section>

        <Divider />

        {/* 4. 개인정보의 보유 및 파기 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">4. 개인정보의 보유 및 파기</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            문의를 통해 수집된 이메일 주소는 문의 처리 완료 후 즉시 파기됩니다.
            법령에 의해 보관이 의무화된 경우 외에는 이용자의 개인정보를 별도로 보관하지 않습니다.
          </p>
        </section>

        <Divider />

        {/* 5. 이용자의 권리 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">5. 이용자의 권리</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이용자는 언제든지 본인의 개인정보에 대한 열람, 정정, 삭제를 요청할 수 있습니다.
            관련 요청은 아래 문의 이메일로 연락해주세요.
          </p>
        </section>

        <Divider />

        {/* 6. 개인정보 보호책임자 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">6. 개인정보 보호책임자 및 운영자</h2>
          <div className="bg-info-bg border border-info-border rounded-lg p-4 flex flex-col gap-1.5">
            <p className="text-secondary text-[14px] leading-[1.8]">
              개인정보 처리에 관한 문의 및 개인정보 관련 불만·피해구제 요청은 아래로 연락해주세요.
            </p>
            <ul className="flex flex-col gap-1 mt-1 pl-2">
              <li className="text-secondary text-[14px]">· 사이트명: {SITE_NAME}</li>
              <li className="text-secondary text-[14px]">· 이메일: {SITE_EMAIL}</li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* 7. 개인정보처리방침 변경 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">7. 개인정보처리방침 변경</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            이 개인정보처리방침은 법령 또는 사이트 정책 변경에 따라 수정될 수 있습니다.
            변경 시에는 이 페이지에 새로운 내용이 게시되며, 중요한 변경의 경우 상단에 시행일을
            별도 표기합니다. 정기적으로 확인하시기 바랍니다.
          </p>
        </section>
      </div>
    </div>
  );
}
