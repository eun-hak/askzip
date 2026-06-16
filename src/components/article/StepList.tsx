interface Step {
  step: number;
  title: string;
  description: string;
}

interface StepListProps {
  steps: Step[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((item) => (
        <li key={item.step} className="flex gap-4 items-start">
          {/* 번호 뱃지 */}
          <span className="shrink-0 w-7 h-7 rounded-full bg-accent text-white text-[13px] font-semibold flex items-center justify-center mt-0.5">
            {item.step}
          </span>
          {/* 내용 */}
          <div className="flex flex-col gap-1">
            <span className="text-primary text-[15px] font-semibold">{item.title}</span>
            <p className="text-secondary text-[14px] leading-[1.75]">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
