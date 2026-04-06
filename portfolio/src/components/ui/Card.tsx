import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
}

export function Card({
  variant = 'default',
  className,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white dark:bg-gray-900',
    bordered: 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900',
    elevated:
      'bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl dark:shadow-xl/20 smooth-transition',
  };

  return (
    <div
      className={cn(
        'rounded-lg p-6 smooth-transition',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
