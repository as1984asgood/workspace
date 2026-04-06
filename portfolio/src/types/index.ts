export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'other';
  featured?: boolean;
  date?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  description?: string;
  type: 'work' | 'education';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  imageUrl?: string;
  resume?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    email?: string;
  };
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
