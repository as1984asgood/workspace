import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { Project } from '../../types';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card variant="elevated" className="h-full flex flex-col">
        {/* Image */}
        {project.image && (
          <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-4 flex items-center justify-center text-white overflow-hidden -mx-6 -mt-6 mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Category Badge */}
        <div className="mb-3">
          <Badge variant="primary" className="capitalize">
            {project.category}
          </Badge>
        </div>

        {/* Title & Date */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        {project.date && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {project.date}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
          {project.longDescription || project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Tech Stack:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full" size="sm">
                <FiGithub className="mr-2" /> Code
              </Button>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="primary" className="w-full" size="sm">
                <FiExternalLink className="mr-2" /> Demo
              </Button>
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
