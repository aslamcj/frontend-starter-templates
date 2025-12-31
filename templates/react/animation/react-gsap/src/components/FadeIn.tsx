import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export function FadeIn({ children, duration = 0.8, delay = 0 }: FadeInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 30,
        duration,
        delay,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}
