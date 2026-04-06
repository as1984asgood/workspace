import { twMerge } from 'tailwind-merge';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return twMerge(
    classes
      .filter((cls): cls is string => typeof cls === 'string')
      .join(' ')
  );
}
