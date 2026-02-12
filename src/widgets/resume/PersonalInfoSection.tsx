import type { PersonalInfo } from '@/entities/resume';

interface PersonalInfoSectionProps {
  data: PersonalInfo;
}

const INFO_FIELDS: { label: string; key: keyof PersonalInfo }[] = [
  { label: '생년월일', key: 'birthDate' },
  { label: '연락처', key: 'phone' },
  { label: '주소', key: 'address' },
  { label: '이메일', key: 'email' },
  { label: '취미', key: 'hobby' },
  { label: '특기', key: 'specialty' },
  { label: 'MBTI', key: 'mbti' },
  { label: '종교', key: 'religion' },
  { label: '보훈여부', key: 'veteranStatus' },
];

export function PersonalInfoSection({ data }: PersonalInfoSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 border-b border-border py-4 text-sm">
      {INFO_FIELDS.map(({ label, key }) => (
        <div key={key} className="flex">
          <span className="w-20 shrink-0 font-medium text-text-secondary">
            {label}
          </span>
          <span className="text-text-primary">{data[key]}</span>
        </div>
      ))}
    </div>
  );
}
