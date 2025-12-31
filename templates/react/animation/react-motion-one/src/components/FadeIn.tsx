import { useRef, useEffect } from 'react';
import { animate } from 'motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export function FadeIn({ children, duration = 0.5, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      animate(
        ref.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration, delay, easing: 'ease-out' }
      );
    }
  }, [duration, delay]);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
