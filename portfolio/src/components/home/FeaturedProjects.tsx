import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects';

export function FeaturedProjects() {
  const { ref, isVisible } = useIntersectionObserver();
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section ref={ref} className="section-container bg-white dark:bg-gray-950">
      <SectionTitle subtitle="Featured work">Latest Projects</SectionTitle>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {featured.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card variant="elevated">
              {project.image && (
                <div className="mb-4 h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
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
        ))}
      </motion.div>

      <div className="text-center">
        <Link to="/projects">
          <Button size="lg" variant="primary">
            View All Projects
          </Button>
        </Link>
      </div>
    </section>
  );
}
