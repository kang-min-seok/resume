import { usePDF } from 'react-to-pdf';
import { resumeData } from '@/entities/resume';
import { ResumeDocument } from '@/widgets/resume';
import { PdfExportButton } from '@/features/pdf-export';

export function ResumePage() {
  const { toPDF, targetRef } = usePDF({
    filename: `이력서_${resumeData.personalInfo.name}.pdf`,
  });

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="mb-6 flex justify-center">
        <PdfExportButton onClick={() => toPDF()} />
      </div>
      <ResumeDocument ref={targetRef} data={resumeData} />
    </div>
  );
}
