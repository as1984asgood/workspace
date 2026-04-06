import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { once = true, threshold = 0.1, root = null, rootMargin = '0px' } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        setIsVisible(false);
      }
    }, { threshold, root, rootMargin });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [once, threshold, root, rootMargin]);

  return { ref, isVisible };
}
