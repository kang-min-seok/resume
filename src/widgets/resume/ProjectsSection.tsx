import { Badge, Section } from '@/shared/ui';
import type { Project } from '@/entities/resume';

interface ProjectsSectionProps {
  data: Project[];
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <Section title="사이드 프로젝트">
      <ul className="space-y-3 text-sm">
        {data.map((item, idx) => (
          <li key={idx} className="space-y-1.5">
            <div className="flex items-baseline gap-4">
              <span className="font-semibold">{item.title}</span>
              <span className="text-text-muted">{item.period}</span>
            </div>
            <p className="text-text-secondary">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
                </svg>
                <span>{item.link}</span>
              </a>
            )}
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
