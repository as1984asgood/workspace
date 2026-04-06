import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  index?: number;
}

export function SkillBar({ skill, index = 0 }: SkillBarProps) {
  const { ref, isVisible } = useIntersectionObserver();
  const percentage = (skill.level / 5) * 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h4>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}/5
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
