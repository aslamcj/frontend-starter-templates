import { useSpring, animated } from '@react-spring/web';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  const springs = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay,
    config: { tension: 280, friction: 20 },
  });

  return (
    <animated.div
      style={{
        opacity: springs.opacity,
        transform: springs.y.to((y) => `translateY(${y}px)`),
      }}
    >
      {children}
    </animated.div>
  );
}
