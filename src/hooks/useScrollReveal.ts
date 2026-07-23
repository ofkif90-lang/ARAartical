import { useEffect, useRef, useState } from 'react';

type AnimationType = 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  animationType: AnimationType = 'reveal',
  threshold: number = 0.15
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible, animationType };
}
