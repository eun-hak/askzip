interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  items: FAQItem[];
}

/**
 * FAQ 답변은 항상 초기 HTML에 포함됩니다 (details/summary — JS 없이 접기/펼치기).
 * 크롤러·심사용 텍스트 추출 시 질문과 답변이 함께 노출됩니다.
 */
export default function FAQBlock({ items }: FAQBlockProps) {
  return (
    <div className="flex flex-col divide-y divide-site-border border border-site-border rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-surface transition-colors list-none [&::-webkit-details-marker]:hidden"
          >
            <span className="text-primary text-[14px] font-medium leading-snug">
              Q. {item.question}
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted shrink-0 transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="px-5 pb-4 pt-0">
            <p className="text-secondary text-[14px] leading-[1.8] pl-4 border-l-2 border-accent-light">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
