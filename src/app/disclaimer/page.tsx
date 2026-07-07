import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { POLICY_DATE, SITE_EMAIL, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: '면책조항',
  description: `${SITE_NAME}(askzip.kr)가 제공하는 생활 행정 정보의 성격과 책임 범위를 안내하는 면책조항입니다.`,
  alternates: { canonical: '/disclaimer' },
};

const Divider = () => <div className="w-full h-px bg-border-light" />;

export default function DisclaimerPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-8">
      <div className="max-w-[780px] mx-auto flex flex-col gap-7">
        <Breadcrumb items={[{ label: '면책조항' }]} />

        <div className="flex flex-col gap-1">
          <h1 className="text-primary text-[24px] font-bold">면책조항</h1>
          <p className="text-muted text-[12px]">시행일: {POLICY_DATE}</p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">1. 정보 제공의 성격</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            {SITE_NAME}(askzip.kr)에 게시된 모든 콘텐츠는 일반적인 정보 제공을 목적으로 하며, 법률·세무·행정
            전문가의 자문을 대체하지 않습니다. 사이트는 정부·공공기관과 무관한 개인 운영 안내
            사이트이며, 민원 접수나 행정 처리 권한이 없습니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">2. 정보의 최신성</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            정부 정책, 지원금 요건, 세율, 수수료, 신청 절차는 법령 개정과 기관 방침에 따라 수시로
            변경됩니다. 각 글에는 작성·수정 시점이 표기되어 있으며, 그 이후 변경 사항은 반영되지
            않았을 수 있습니다. 신청·납부·계약 등 중요한 결정 전에는 반드시 각 글에 안내된 공식
            사이트 또는 해당 기관 콜센터에서 최신 정보를 확인하시기 바랍니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">3. 책임의 한계</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트에서 제공한 정보를 근거로 한 판단과 행동의 결과(신청 누락, 기한 경과, 감액, 불이익
            등)에 대하여 사이트 운영자는 법적 책임을 지지 않습니다. 계산기 등 도구가 제공하는 결과는
            공식 산정 결과와 다를 수 있는 참고용 추정치입니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">4. 외부 링크</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트는 공식 출처 확인을 돕기 위해 공공기관 등 외부 사이트 링크를 제공합니다. 링크된
            사이트의 콘텐츠와 운영에 대한 책임은 해당 운영 주체에게 있으며, 링크 제공이 해당 기관과의
            제휴·보증을 의미하지 않습니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">5. 광고</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            사이트에 게재되는 광고는 Google AdSense 등 광고 네트워크가 자동으로 선택하며, 사이트의
            편집 방향과 무관합니다. 광고를 통해 이루어지는 거래의 책임은 광고주와 이용자에게 있습니다.
          </p>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <h2 className="text-primary text-[17px] font-semibold">6. 오류 신고</h2>
          <p className="text-secondary text-[14px] leading-[1.8]">
            잘못된 정보나 변경된 제도를 발견하시면{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:underline">
              {SITE_EMAIL}
            </a>
            로 알려 주세요. 확인 후 신속히 수정하겠습니다. 관련 정책은{' '}
            <Link href="/terms" className="text-accent hover:underline">
              이용약관
            </Link>
            과{' '}
            <Link href="/privacy" className="text-accent hover:underline">
              개인정보처리방침
            </Link>
            에서 확인할 수 있습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
