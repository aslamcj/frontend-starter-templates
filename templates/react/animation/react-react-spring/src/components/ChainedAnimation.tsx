import { useSpringRef, useSpring, useChain, animated } from '@react-spring/web';
import { useState } from 'react';

export function ChainedAnimation() {
  const [open, setOpen] = useState(false);

  const containerRef = useSpringRef();
  const containerSpring = useSpring({
    ref: containerRef,
    from: { width: '100px', height: '100px', background: '#0ea5e9' },
    to: {
      width: open ? '300px' : '100px',
      height: open ? '200px' : '100px',
      background: open ? '#8b5cf6' : '#0ea5e9',
    },
    config: { tension: 200, friction: 20 },
  });

  const contentRef = useSpringRef();
  const contentSpring = useSpring({
    ref: contentRef,
    from: { opacity: 0, scale: 0 },
    to: {
      opacity: open ? 1 : 0,
      scale: open ? 1 : 0,
    },
    config: { tension: 300, friction: 20 },
  });

  useChain(open ? [containerRef, contentRef] : [contentRef, containerRef], [0, 0.3]);

  return (
    <div>
      <button onClick={() => setOpen((o) => !o)} style={{ marginBottom: '1rem' }}>
        {open ? 'Close' : 'Open'} Animation
      </button>
      <animated.div
        style={{
          ...containerSpring,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={() => setOpen((o) => !o)}
      >
        <animated.div
          style={{
            opacity: contentSpring.opacity,
            transform: contentSpring.scale.to((s) => `scale(${s})`),
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          Chained animations appear in sequence!
        </animated.div>
      </animated.div>
    </div>
  );
}
