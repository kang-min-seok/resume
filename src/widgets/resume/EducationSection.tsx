import { Section } from '@/shared/ui';
import type { Education } from '@/entities/resume';

interface EducationSectionProps {
  data: Education[];
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <Section title="학력">
      <ul className="space-y-1.5 text-sm">
        {data.map((item, idx) => (
          <li key={idx} className="flex items-baseline gap-4">
            <span className="w-36 shrink-0 text-text-muted">{item.period}</span>
            <span className="font-medium">{item.school}</span>
            {item.major && (
              <span className="text-text-secondary">{item.major}</span>
            )}
            <span className="ml-auto text-text-muted">{item.status}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
