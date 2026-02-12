export interface PersonalInfo {
  name: string;
  photo: string;
  introduction: string;
  birthDate: string;
  address: string;
  phone: string;
  email: string;
  hobby: string;
  specialty: string;
  mbti: string;
  religion: string;
  veteranStatus: string;
}

export interface Education {
  period: string;
  school: string;
  major?: string;
  status?: string;
}

export interface Award {
  date: string;
  title: string;
  organization: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  experience: string;
  techStack?: string[];
}

export interface Activity {
  title: string;
  period: string;
  organization: string;
  description: string;
  experience: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  awards?: Award[];
  projects: Project[];
  activities: Activity[];
}
