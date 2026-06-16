/** ImageResponse(OG·아이콘)용 공통 브랜드 마크 — 집 + 문서 (애스크집) */
export function BrandMark({ size }: { size: number }) {
  const radius = Math.round(size * 0.22);
  const iconSize = Math.round(size * 0.52);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #3B82F6 0%, #2563EB 52%, #1D4ED8 100%)',
        borderRadius: radius,
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 10.2 12 4l8 6.2V19a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 19V10.2Z"
          fill="white"
        />
        <rect x="9" y="12" width="6" height="5.5" rx="0.6" fill="#2563EB" />
        <path
          d="M10 13.5h4M10 15.5h2.5"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
