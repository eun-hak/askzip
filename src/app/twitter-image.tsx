import { ImageResponse } from 'next/og';
import { BrandMark } from '@/lib/brand-mark';
import { SITE_NAME } from '@/lib/site';

export const size = { width: 600, height: 600 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          background: 'linear-gradient(145deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
        }}
      >
        <div style={{ width: 220, height: 220, display: 'flex' }}>
          <BrandMark size={220} />
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            letterSpacing: -1,
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    ),
    { ...size },
  );
}
