import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // 2026-09 콘텐츠 정리: 포화 주제 글 삭제 → 카테고리로 영구 이동
    const removed: [string, string][] = [
      ["comprehensive-income-tax", "tax-payment"],
      ["value-added-tax", "tax-payment"],
      ["cash-receipt", "tax-payment"],
      ["tax-refund-check", "tax-payment"],
      ["hometax-payment-statement", "tax-payment"],
      ["dormant-money-check", "inquiry-service"],
      ["parental-childcare-benefit", "living-support"],
      ["youth-rent-support", "living-support"],
      ["youth-future-savings", "living-support"],
    ];
    return removed.map(([slug, category]) => ({
      source: `/articles/${slug}`,
      destination: `/category/${category}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
