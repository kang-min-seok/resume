import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { ResumeData } from '@/entities/resume';
import { ProfileSection } from './ProfileSection';
import { PersonalInfoSection } from './PersonalInfoSection';
import { EducationSection } from './EducationSection';
import { AwardsSection } from './AwardsSection';
import { ProjectsSection } from './ProjectsSection';
import { ActivitiesSection } from './ActivitiesSection';

interface ResumeDocumentProps {
  data: ResumeData;
}

export const ResumeDocument = forwardRef(function ResumeDocument(
  { data }: ResumeDocumentProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className="mx-auto w-[210mm] bg-surface px-12 py-10 shadow-lg"
    >
      <ProfileSection data={data.personalInfo} />
      <PersonalInfoSection data={data.personalInfo} />
      <EducationSection data={data.education} />
      <AwardsSection data={data.awards} />
      <ProjectsSection data={data.projects} />
      <ActivitiesSection data={data.activities} />
    </div>
  );
});
