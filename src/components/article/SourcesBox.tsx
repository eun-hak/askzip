import { ExternalLink } from 'lucide-react';
import type { ArticleSource } from '@/data/sources';

interface SourcesBoxProps {
  sources: ArticleSource[];
  verifiedAt: string;
}

export default function SourcesBox({ sources, verifiedAt }: SourcesBoxProps) {
  return (
    <div className="rounded-lg border border-site-border bg-surface p-4 flex flex-col gap-3">
      <p className="text-primary text-[13px] font-semibold">공식 참고 링크</p>
      <ul className="flex flex-col gap-2">
        {sources.map((source, i) => (
          <li key={i}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent text-[13px] hover:underline"
            >
              <ExternalLink size={13} className="shrink-0" />
              {source.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-muted text-[12px] border-t border-border-light pt-2.5">
        공식 자료 확인일: {verifiedAt}
      </p>
    </div>
  );
}
