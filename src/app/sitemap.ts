import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { articles } from '@/data/articles';
import { SITE_URL } from '@/lib/site';

const policyLastModified = new Date('2026-05-15');

function latestArticleModified(): Date {
  const timestamps = articles.map((a) => new Date(a.updatedAt).getTime());
  return new Date(Math.max(...timestamps));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestContent = latestArticleModified();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: latestContent,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: policyLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: policyLastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: policyLastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: policyLastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: policyLastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: latestContent,
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    ...['', '/car-tax-calculator', '/eitc-calculator', '/insurance-calculator'].map((path) => ({
      url: `${SITE_URL}/tools${path}`,
      lastModified: latestContent,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => {
    const categoryArticles = articles.filter((a) => a.category === cat.slug);
    const lastModified =
      categoryArticles.length > 0
        ? new Date(
            Math.max(...categoryArticles.map((a) => new Date(a.updatedAt).getTime())),
          )
        : latestContent;

    return {
      url: `${SITE_URL}/category/${cat.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
