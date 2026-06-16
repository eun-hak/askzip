'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  items: FAQItem[];
}

export default function FAQBlock({ items }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-site-border border border-site-border rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="text-primary text-[14px] font-medium leading-snug">
              Q. {item.question}
            </span>
            <ChevronDown
              size={18}
              className={`text-muted shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 pt-0">
              <p className="text-secondary text-[14px] leading-[1.8] pl-4 border-l-2 border-accent-light">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
