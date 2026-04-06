import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', category: 'Frontend', level: 5 },
      { name: 'TypeScript', category: 'Frontend', level: 5 },
      { name: 'Tailwind CSS', category: 'Frontend', level: 5 },
      { name: 'Next.js', category: 'Frontend', level: 4 },
      { name: 'HTML/CSS', category: 'Frontend', level: 5 },
      { name: 'JavaScript', category: 'Frontend', level: 5 },
      { name: 'Framer Motion', category: 'Frontend', level: 4 },
      { name: 'Redux', category: 'Frontend', level: 4 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', category: 'Backend', level: 4 },
      { name: 'Express', category: 'Backend', level: 4 },
      { name: 'PostgreSQL', category: 'Backend', level: 4 },
      { name: 'MongoDB', category: 'Backend', level: 4 },
      { name: 'REST APIs', category: 'Backend', level: 5 },
      { name: 'Firebase', category: 'Backend', level: 4 },
      { name: 'GraphQL', category: 'Backend', level: 3 },
      { name: 'Docker', category: 'Backend', level: 3 },
    ],
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git', category: 'Tools', level: 5 },
      { name: 'GitHub', category: 'Tools', level: 5 },
      { name: 'VS Code', category: 'Tools', level: 5 },
      { name: 'Webpack', category: 'Tools', level: 4 },
      { name: 'Vite', category: 'Tools', level: 5 },
      { name: 'npm/yarn', category: 'Tools', level: 5 },
      { name: 'CI/CD', category: 'Tools', level: 3 },
      { name: 'AWS', category: 'Tools', level: 2 },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', category: 'Soft', level: 5 },
      { name: 'Communication', category: 'Soft', level: 4 },
      { name: 'Team Collaboration', category: 'Soft', level: 5 },
      { name: 'Project Management', category: 'Soft', level: 4 },
      { name: 'Teaching/Mentoring', category: 'Soft', level: 4 },
      { name: 'Attention to Detail', category: 'Soft', level: 5 },
    ],
  },
];
