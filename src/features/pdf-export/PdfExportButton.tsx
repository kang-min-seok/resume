interface PdfExportButtonProps {
  onClick: () => void;
}

export function PdfExportButton({ onClick }: PdfExportButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
    >
      PDF 다운로드
    </button>
  );
}
