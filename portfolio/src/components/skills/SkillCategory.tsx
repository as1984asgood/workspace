import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Card } from '../ui/Card';
import { SkillBar } from './SkillBar';
import type { SkillCategory as SkillCategoryType } from '../../types';

interface SkillCategoryProps {
  category: SkillCategoryType;
  index?: number;
}

export function SkillCategory({ category, index = 0 }: SkillCategoryProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card variant="bordered">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {category.name}
        </h3>
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
