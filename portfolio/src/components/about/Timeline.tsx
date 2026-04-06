import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { timelineData } from '../../data/experience';
import { FiBriefcase, FiAward } from 'react-icons/fi';

export function Timeline() {
  const { ref, isVisible } = useIntersectionObserver();

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="section-container bg-gray-50 dark:bg-gray-900">
      <SectionTitle subtitle="My professional journey">Experience & Education</SectionTitle>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {timelineData.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="mb-6 relative">
            <div className="flex gap-6">
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    item.type === 'work'
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : 'bg-purple-600 dark:bg-purple-500'
                  }`}
                >
                  {item.type === 'work' ? (
                    <FiBriefcase size={20} />
                  ) : (
                    <FiAward size={20} />
                  )}
                </div>
                {index !== timelineData.length - 1 && (
                  <div className="w-1 h-20 bg-gray-300 dark:bg-gray-700 mt-2" />
                )}
              </div>

              {/* Timeline content */}
              <Card variant="bordered" className="flex-1 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {item.date}
                  </p>
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
