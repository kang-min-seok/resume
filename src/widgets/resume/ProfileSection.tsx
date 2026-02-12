import type { PersonalInfo } from '@/entities/resume';

interface ProfileSectionProps {
  data: PersonalInfo;
}

export function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <div className="flex items-center gap-6 border-b border-border pb-5">
      {/* 증명사진 */}
      <div className="h-40 w-32 shrink-0 overflow-hidden rounded border border-border bg-border-light">
        {data.photo ? (
          <img
            src={data.photo}
            alt={`${data.name} 증명사진`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-text-muted">
            사진
          </div>
        )}
      </div>

      {/* 이름 + 한줄 소개 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">{data.name}</h1>
        <p className="text-sm leading-relaxed text-text-secondary">
          {data.introduction}
        </p>
      </div>
    </div>
  );
}
