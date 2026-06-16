interface SummaryItem {
  label: string;
  value: string;
}

interface InfoSummaryBoxProps {
  items: SummaryItem[];
}

export default function InfoSummaryBox({ items }: InfoSummaryBoxProps) {
  return (
    <div
      className="w-full bg-info-bg border border-info-border rounded-lg p-5"
      aria-label="요약 정보"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="text-muted text-[13px] shrink-0 min-w-[80px]">{item.label}</span>
            <span className="text-primary text-[13px] font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
