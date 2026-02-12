import { Badge, Section } from '@/shared/ui';
import type { Project } from '@/entities/resume';

interface ProjectsSectionProps {
  data: Project[];
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <Section title="사이드 프로젝트">
      <ul className="space-y-4 text-sm">
        {data.map((item, idx) => (
          <li key={idx} className="space-y-1.5">
            <div className="flex items-baseline gap-4">
              <span className="font-semibold">{item.title}</span>
              <span className="text-text-muted">{item.period}</span>
            </div>
            <p className="text-text-secondary">{item.description}</p>
            {item.experiences.length > 0 && (
              <ul className="list-disc space-y-0.5 pl-4 text-text-secondary">
                {item.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            )}
            {item.techStack && item.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
