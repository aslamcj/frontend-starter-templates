import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface TextAnimationProps {
  text: string;
}

export function TextAnimation({ text }: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.char', {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.03,
        duration: 0.5,
        ease: 'back.out(1.7)',
      });
    },
    { scope: containerRef }
  );

  const chars = text.split('');

  return (
    <div
      ref={containerRef}
      style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        display: 'flex',
        flexWrap: 'wrap',
        perspective: '500px',
      }}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
