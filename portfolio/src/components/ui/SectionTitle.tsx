import { cn } from '../../utils/cn';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subtitle?: string;
}

export function SectionTitle({
  children,
  subtitle,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2
        className={cn(
          'text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4',
          className
        )}
        {...props}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
