import type { ResumeData } from './types';
import profilePhoto from '@/assets/profile.jpeg';

export const resumeData: ResumeData = {
  personalInfo: {
    name: '강민석',
    photo: profilePhoto,
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
      description: '방탈출 플레이 내용을 기록하는 크로스플랫폼 앱 개발',
      experiences: [
        '마켓 정식 출시 및 누적 다운로드 300+ 기록',
        '실제 사용자 리뷰 및 업데이트까지의 전체 서비스 생명주기 경험',
      ],
      techStack: ['Flutter'],
    },
    {
      title: '게임테스트',
      period: '2023.12 - 2025.04',
      description: '게임 재능을 테스트할 수 있는 간단 게임을 제공하는 웹 개발',
      experiences: [
        'canvas 기반의 인터랙티브 게임 개발 및 실시간 클릭 판정 알고리즘 최적화',
        'SEO 최적화를 통한 구글 검색 상위 노출',
        'React Helmet을 활용한 동적 메타데이터 설정',
      ],
      techStack: ['React'],
    },
  ],

  activities: [
    {
      title: '네이버 부스트캠프 웹 풀스택 10기',
      period: '2025.08 - 2026.02',
      experiences: [
        'CS, 도메인 지식 학습 및 프로젝트 적용',
        '문서화 기술과 백로그 관리를 통한 효율적인 협업 실천',
        'CRDT기반 실시간 화이트보드 서비스 개발',
        'Throttling 기법을 통한 고빈도 소켓 이벤트 최적화',
      ],
    },
    {
      title: '백석대학교 산학협력단',
      period: '2022.09 - 2024.01',
      experiences: [
        'openCV를 활용한 불량칩 감지 프로그램 개발',
        '차량 관제 프로그램 개발',
        '농지 면적 계산 프로그램 개발',
      ],
    },
  ],
};
