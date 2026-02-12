import { Section } from '@/shared/ui';
import type { Activity } from '@/entities/resume';

interface ActivitiesSectionProps {
  data: Activity[];
}

export function ActivitiesSection({ data }: ActivitiesSectionProps) {
  return (
    <Section title="교육 및 대외활동">
      <ul className="space-y-4 text-sm">
        {data.map((item, idx) => (
          <li key={idx} className="space-y-1.5">
            <div className="flex items-baseline gap-4">
              <span className="font-semibold">{item.title}</span>
              <span className="text-text-muted">{item.period}</span>
              <span className="text-text-secondary">{item.organization}</span>
            </div>
            <p className="text-text-secondary">{item.description}</p>
            <p className="text-text-secondary italic">{item.experience}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
