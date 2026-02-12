import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="py-5">
      <h2 className="mb-3 border-b-2 border-primary pb-1 text-base font-bold text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}
