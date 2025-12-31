import { useRef, useEffect, useState } from 'react';
import { stagger, animate } from 'motion';

export function StaggerDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.stagger-item');
      animate(
        items,
        { opacity: [0, 1], x: [-30, 0] },
        { delay: stagger(0.1), duration: 0.4, easing: 'ease-out' }
      );
    }
  }, [key]);

  const replay = () => setKey((k) => k + 1);

  const items = ['Motion One', 'is lightweight', 'and powerful', 'for animations', 'in React'];

  return (
    <div>
      <button onClick={replay} style={{ marginBottom: '1rem' }}>
        Replay Animation
      </button>
      <div ref={containerRef} key={key}>
        {items.map((item, index) => (
          <div
            key={index}
            className="stagger-item"
            style={{
              opacity: 0,
              padding: '1rem',
              marginBottom: '0.5rem',
              background: '#0c4a6e',
              borderRadius: '8px',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
