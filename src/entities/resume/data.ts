import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: '홍길동',
    photo: '',
    introduction: '사용자 경험을 고민하며 성장하는 프론트엔드 개발자입니다.',
    birthDate: '2000.01.01',
    address: '서울특별시 강남구',
    phone: '010-1234-5678',
    email: 'example@email.com',
    hobby: '독서, 러닝',
    specialty: '웹 개발',
    mbti: 'INTJ',
    religion: '무교',
    veteranStatus: '해당없음',
  },

  education: [
    {
      period: '2019.03 - 2023.02',
      school: 'OO대학교',
      major: '컴퓨터공학과',
      status: '졸업',
    },
    {
      period: '2016.03 - 2019.02',
      school: 'OO고등학교',
      status: '졸업',
    },
  ],

  awards: [
    {
      date: '2023.11',
      title: 'OO 해커톤 대상',
      organization: 'OO기관',
    },
  ],

  projects: [
    {
      title: '프로젝트명',
      period: '2023.06 - 2023.08',
      description: '프로젝트에 대한 간단한 설명을 작성합니다.',
      experience:
        '이 프로젝트를 통해 느낀 점과 배운 점을 서술합니다.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    },
  ],

  activities: [
    {
      title: '활동명',
      period: '2023.01 - 2023.06',
      organization: 'OO기관',
      description: '활동에 대한 간단한 설명을 작성합니다.',
      experience:
        '이 활동을 통해 느낀 점과 배운 점을 서술합니다.',
    },
  ],
};
