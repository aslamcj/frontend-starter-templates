import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

const pages = [
  { id: 0, color: '#0ea5e9', text: 'Page 1' },
  { id: 1, color: '#8b5cf6', text: 'Page 2' },
  { id: 2, color: '#10b981', text: 'Page 3' },
];

export function TransitionDemo() {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    config: { tension: 280, friction: 30 },
  });

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        {pages.map((page, i) => (
          <button key={page.id} onClick={() => setIndex(i)}>
            {page.text}
          </button>
        ))}
      </div>
      <div style={{ position: 'relative', height: '150px', overflow: 'hidden' }}>
        {transitions((style, i) => {
          const page = pages[i];
          return page ? (
            <animated.div
              style={{
                ...style,
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                background: page.color,
                borderRadius: '12px',
              }}
            >
              {page.text}
            </animated.div>
          ) : null;
        })}
      </div>
    </div>
  );
}
