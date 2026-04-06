import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { Button } from './Button';
import { cn } from '../../utils/cn';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 rounded-full p-3 z-40',
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible',
        'smooth-transition'
      )}
      variant="primary"
      aria-label="Scroll to top"
    >
      <FiArrowUp size={20} />
    </Button>
  );
}
