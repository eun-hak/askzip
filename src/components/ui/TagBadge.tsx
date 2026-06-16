interface TagBadgeProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function TagBadge({ label, active, onClick }: TagBadgeProps) {
  const base =
    'inline-flex items-center px-3 py-1.5 rounded text-[13px] font-medium transition-colors';

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${base} cursor-pointer ${
          active
            ? 'bg-accent text-white'
            : 'bg-surface text-secondary hover:bg-accent-light hover:text-accent-text'
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <span
      className={`${base} ${
        active ? 'bg-accent text-white' : 'bg-surface text-secondary'
      }`}
    >
      {label}
    </span>
  );
}
