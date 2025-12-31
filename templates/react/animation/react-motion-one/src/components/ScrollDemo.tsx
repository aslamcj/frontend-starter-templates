import { useRef, useEffect } from 'react';
import { scroll, animate } from 'motion';

export function ScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const boxes = containerRef.current.querySelectorAll('.scroll-box');

    boxes.forEach((box) => {
      scroll(
        animate(box, { opacity: [0, 1], x: [-100, 0] }, { duration: 0.5, easing: 'ease-out' }),
        {
          target: box,
          offset: ['start end', 'end end'],
        }
      );
    });
  }, []);

  const colors = ['#0284c7', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'];

  return (
    <div ref={containerRef}>
      <p style={{ marginBottom: '1rem', color: '#7dd3fc' }}>Scroll down to see animations</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="scroll-box"
            style={{
              opacity: 0,
              padding: '3rem',
              background: color,
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: index < 2 ? '#fff' : '#0c4a6e',
            }}
          >
            Scroll Box {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
