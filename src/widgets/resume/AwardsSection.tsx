import { Section } from '@/shared/ui';
import type { Award } from '@/entities/resume';

interface AwardsSectionProps {
  data: Award[];
}

export function AwardsSection({ data }: AwardsSectionProps) {
  return (
    <Section title="수상">
      <ul className="space-y-2 text-sm">
        {data.map((item, idx) => (
          <li key={idx} className="flex items-baseline gap-4">
            <span className="w-36 shrink-0 text-text-muted">{item.date}</span>
            <span className="font-medium">{item.title}</span>
            <span className="text-text-secondary">{item.organization}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
