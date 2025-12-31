import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollTriggerDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.scroll-box').forEach((box) => {
        gsap.from(box, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const colors = ['#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4'];

  return (
    <div ref={containerRef}>
      <p style={{ marginBottom: '1rem', color: '#a3a3a3' }}>Scroll down to see animations</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="scroll-box"
            style={{
              padding: '3rem',
              background: color,
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Scroll Box {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
