import { AlertTriangle } from 'lucide-react';

interface WarningBoxProps {
  text: string;
  type?: 'warning' | 'tip' | 'notice';
}

const styles = {
  warning: {
    wrapper: 'bg-warning-bg border-warning-border',
    icon: 'text-warning-text',
    text: 'text-warning-text',
    IconComponent: AlertTriangle,
  },
  tip: {
    wrapper: 'bg-info-bg border-info-border',
    icon: 'text-info-text',
    text: 'text-info-text',
    IconComponent: null,
  },
  notice: {
    wrapper: 'bg-surface border-site-border',
    icon: 'text-secondary',
    text: 'text-secondary',
    IconComponent: null,
  },
};

export default function WarningBox({ text, type = 'warning' }: WarningBoxProps) {
  const s = styles[type];

  return (
    <div className={`flex gap-3 p-4 rounded-lg border ${s.wrapper}`}>
      {type === 'warning' && <AlertTriangle size={18} className={`${s.icon} shrink-0 mt-0.5`} />}
      <p className={`text-[13px] leading-[1.8] ${s.text}`}>{text}</p>
    </div>
  );
}
