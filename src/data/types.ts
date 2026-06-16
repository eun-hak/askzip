export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'steps'; steps: { step: number; title: string; description: string }[] }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'warning'; text: string }
  | { type: 'tip'; text: string }
  | { type: 'notice'; text: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  toc: { id: string; title: string }[];
  summary: { label: string; value: string }[];
  content: ContentBlock[];
  relatedSlugs: string[];
}
