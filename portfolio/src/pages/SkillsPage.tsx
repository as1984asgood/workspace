import { SectionTitle } from '../components/ui/SectionTitle';
import { SkillCategory } from '../components/skills/SkillCategory';
import { skillsData } from '../data/skills';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="section-container pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-950 dark:to-blue-900/20">
        <SectionTitle>My Skills</SectionTitle>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Here's a comprehensive overview of the technical skills and expertise I've
          developed throughout my career.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
