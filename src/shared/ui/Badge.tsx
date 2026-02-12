interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block rounded bg-primary-bg px-2 py-1 text-xs leading-none font-medium text-primary">
      {label}
    </span>
  );
}
