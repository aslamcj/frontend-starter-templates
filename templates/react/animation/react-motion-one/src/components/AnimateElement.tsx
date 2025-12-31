import { useRef } from 'react';
import { animate } from 'motion';

export function AnimateElement() {
  const boxRef = useRef<HTMLDivElement>(null);

  const handleAnimate = () => {
    if (boxRef.current) {
      animate(
        boxRef.current,
        { rotate: 360, scale: [1, 1.2, 1] },
        { duration: 0.6, easing: 'ease-in-out' }
      );
    }
  };

  const handleBounce = () => {
    if (boxRef.current) {
      animate(boxRef.current, { y: [0, -50, 0] }, { duration: 0.5, easing: 'ease-out' });
    }
  };

  const handleShake = () => {
    if (boxRef.current) {
      animate(boxRef.current, { x: [0, -10, 10, -10, 10, 0] }, { duration: 0.4 });
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={handleAnimate}>Rotate & Scale</button>
        <button onClick={handleBounce}>Bounce</button>
        <button onClick={handleShake}>Shake</button>
      </div>
      <div
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      >
        Click above
      </div>
    </div>
  );
}
