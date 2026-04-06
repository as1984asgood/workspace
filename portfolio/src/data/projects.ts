import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bucket-list',
    title: 'Bucket List',
    description: 'A productivity app for tracking life goals and bucket list items',
    longDescription:
      'A vanilla JavaScript project that helps users create and track their bucket list items. Features include adding/removing goals, marking items as completed, and persistent localStorage storage.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/yourname/bucket-list-main',
    category: 'web',
    featured: true,
    date: '2024-Q1',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    description: 'Modern, responsive portfolio website with dark mode support',
    longDescription:
      'A showcase website built with Vite, React, TypeScript, and Tailwind CSS. Features include smooth animations, dark/light mode toggle, contact form with EmailJS, and optimized performance.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/yourname/portfolio',
    demo: 'https://yourportfolio.com',
    category: 'web',
    featured: true,
    date: '2024-Q2',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    longDescription:
      'A complete e-commerce platform with product catalog, shopping cart, user authentication, and Stripe payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourname/ecommerce',
    category: 'fullstack',
    featured: true,
    date: '2024-Q3',
  },
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    description: 'Real-time messaging app with WebSocket support',
    longDescription:
      'A chat application featuring real-time messaging, user authentication, and message history using WebSockets and Firebase.',
    technologies: ['React', 'Firebase', 'WebSocket', 'Tailwind CSS'],
    github: 'https://github.com/yourname/chat-app',
    demo: 'https://yourname-chat.vercel.app',
    category: 'web',
    date: '2024-Q2',
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with charts',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'TypeScript'],
    github: 'https://github.com/yourname/weather-app',
    demo: 'https://yourname-weather.vercel.app',
    category: 'web',
    date: '2024-Q1',
  },
  {
    id: 'task-manager',
    title: 'Task Management System',
    description: 'Collaborative task manager with real-time updates',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourname/task-manager',
    category: 'fullstack',
    date: '2024-Q4',
  },
];
