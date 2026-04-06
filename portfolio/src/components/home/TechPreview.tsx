import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaCss3Alt,
  FaDatabase,
} from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNode, color: 'text-green-600' },
  { name: 'Vite', icon: SiVite, color: 'text-purple-600' },
  { name: 'CSS/Tailwind', icon: FaCss3Alt, color: 'text-cyan-500' },
  { name: 'Database', icon: FaDatabase, color: 'text-orange-600' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-600' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
];

export function TechPreview() {
  const { ref, isVisible } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="section-container bg-gray-50 dark:bg-gray-900">
      <SectionTitle subtitle="Technologies I work with">Tech Stack</SectionTitle>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <motion.div key={tech.name} variants={itemVariants}>
              <Card
                variant="bordered"
                className="flex flex-col items-center justify-center py-8 hover:shadow-lg group cursor-pointer"
              >
                <Icon className={`text-4xl mb-4 group-hover:scale-110 smooth-transition ${tech.color}`} />
                <p className="font-semibold text-gray-900 dark:text-white text-center">
                  {tech.name}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
