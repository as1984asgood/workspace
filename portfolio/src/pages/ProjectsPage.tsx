import { useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

type Category = 'all' | 'web' | 'mobile' | 'fullstack' | 'other';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="section-container pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-950 dark:to-blue-900/20">
        <SectionTitle>My Projects</SectionTitle>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A selection of projects I've worked on, showcasing my skills in web
          development, full-stack engineering, and problem-solving.
        </p>
      </section>

      {/* Projects Section */}
      <section className="section-container py-20">
        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
