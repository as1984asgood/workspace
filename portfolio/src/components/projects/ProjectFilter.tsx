type Category = 'all' | 'web' | 'mobile' | 'fullstack' | 'other';

interface ProjectFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'other', label: 'Other' },
];

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`smooth-transition ${
            activeCategory === category.value
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
          } px-4 py-2 rounded-full font-medium`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
