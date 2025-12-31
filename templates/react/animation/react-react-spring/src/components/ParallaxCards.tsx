import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 20,
  (x - rect.left - rect.width / 2) / 20,
  1.05,
];

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface CardProps {
  color: string;
  children: React.ReactNode;
}

function Card({ color, children }: CardProps) {
  const [springs, api] = useSpring(() => ({
    xys: [0, 0, 1] as [number, number, number],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  return (
    <animated.div
      ref={setRef}
      onMouseMove={(e) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        api.start({ xys: calc(e.clientX, e.clientY, rect) as [number, number, number] });
      }}
      onMouseLeave={() => api.start({ xys: [0, 0, 1] })}
      style={{
        transform: springs.xys.to(trans),
        background: color,
        padding: '2rem',
        borderRadius: '12px',
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {children}
    </animated.div>
  );
}

export function ParallaxCards() {
  return (
    <div className="demo-grid">
      <Card color="#0ea5e9">Hover me!</Card>
      <Card color="#8b5cf6">3D Effect</Card>
      <Card color="#10b981">Parallax</Card>
    </div>
  );
}
