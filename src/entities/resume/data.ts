import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: '강민석',
    photo: '',
    introduction: '사용자 경험을 고민하며 성장하는 프론트엔드 개발자입니다.',
    birthDate: '2001.12.29',
    address: '경기도 화성시 동탄반석로 232',
    phone: '010-5340-5628',
    email: 'min1042004444@gmail.com',
    hobby: '독서, 헬스',
    specialty: '사이드프로젝트',
    mbti: 'INFP',
    religion: '무교',
    veteranStatus: '해당없음',
  },

  education: [
    {
      period: '2020.03 ~',
      school: '백석대학교',
      major: '소프트웨어학과',
    },
    {
      period: '2017.03 - 2019.02',
      school: '예당고등학교',
      status: '졸업',
    },
  ],

  // awards: [
  //   {
  //     date: '2022.11',
  //     title: '경진대회',
  //     organization: '백석대학교',
  //   },
  // ],

  projects: [
    {
      title: '방탈기억',
      period: '2024.09 - 2025.06',
      description: '방탈출 플레이 내용을 기록하는 크로스플랫폼 앱 개발 프로젝트',
      experience:
        '이 프로젝트를 통해 느낀 점과 배운 점을 서술합니다.',
      techStack: ['Flutter'],
    },
    {
      title: '게임테스트',
      period: '2023.12 - 2025.04',
      description: '프로젝트에 대한 간단한 설명을 작성합니다.',
      experience:
        '이 프로젝트를 통해 느낀 점과 배운 점을 서술합니다.',
      techStack: ['React'],
    },
  ],

  activities: [
    {
      title: '네이버 부스트캠프 웹 풀스택 10기',
      period: '2025.08 - 2026.02',
      organization: '네이버커넥트',
      description: '활동에 대한 간단한 설명을 작성합니다.',
      experience:
        '이 활동을 통해 느낀 점과 배운 점을 서술합니다.',
    },
    {
      title: '백석대학교 산학협력단',
      period: '2022.09 - 2024.01',
      organization: '백석대학교',
      description: '활동에 대한 간단한 설명을 작성합니다.',
      experience:
        '이 활동을 통해 느낀 점과 배운 점을 서술합니다.',
    },
  ],
};
