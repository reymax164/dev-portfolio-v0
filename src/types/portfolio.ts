export interface NavItem {
  label: string;
  href: string;
}

export interface HeroData {
  firstName: string;
  lastName: string;
  role: string;
  summary: string;
  avatarUrl: string;
  resumeUrl: string;
  coverLetterUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export interface SkillItem {
  name: string;
  icon: string; // Used for icons (e.g. "java", "python", "react")
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  dateRange: string;
  image: string;
  technologies: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  pdfUrl?: string; // Optional download link for official certificate PDF
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  coursework: string[];
}