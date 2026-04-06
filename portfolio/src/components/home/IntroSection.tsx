import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personal';

export function IntroSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} className="section-container bg-white dark:bg-gray-950">
      <SectionTitle>About Me</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Card variant="elevated" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Specializing in React, TypeScript, and full-stack development, I
                create responsive, performant, and user-friendly applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me contributing to open source,
                writing technical articles, or exploring new technologies.
              </p>
            </div>

            {/* Profile Image Placeholder */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl">
                {personalInfo.imageUrl ? (
                  <img
                    src={personalInfo.imageUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span>Your Photo Here</span>
                )}
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
