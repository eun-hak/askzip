import { ImageResponse } from 'next/og';
import { BrandMark } from '@/lib/brand-mark';
import { SITE_NAME, SITE_SUBTITLE } from '@/lib/site';

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 45%, #DBEAFE 100%)',
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            display: 'flex',
            marginRight: 56,
            flexShrink: 0,
          }}
        >
          <BrandMark size={160} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            maxWidth: 720,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#111827',
              lineHeight: 1.15,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#2563EB',
              lineHeight: 1.35,
            }}
          >
            {SITE_SUBTITLE}
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#6B7280',
              lineHeight: 1.5,
              marginTop: 8,
            }}
          >
            민원서류 · 세금 · 지원금 · 생활 조회 안내
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
