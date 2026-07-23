import { type ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  animation?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
  delay?: string;
  className?: string;
  threshold?: number;
}

export function Reveal({
  children,
  animation = 'reveal',
  delay = '',
  className = '',
  threshold = 0.15,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(animation, threshold);

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'active' : ''} ${delay} ${className}`}
    >
      {children}
    </div>
  );
}
