import { useRef } from 'react';
import { animate, spring } from 'motion';

export function SpringDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  const handleSpring = (stiffness: number, damping: number) => {
    if (boxRef.current) {
      animate(boxRef.current, { scale: [0.5, 1] }, { easing: spring({ stiffness, damping }) });
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <button onClick={() => handleSpring(100, 10)}>Bouncy (100, 10)</button>
        <button onClick={() => handleSpring(200, 20)}>Normal (200, 20)</button>
        <button onClick={() => handleSpring(300, 30)}>Stiff (300, 30)</button>
        <button onClick={() => handleSpring(500, 50)}>Very Stiff (500, 50)</button>
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
          fontSize: '0.75rem',
          textAlign: 'center',
        }}
      >
        Spring Box
      </div>
    </div>
  );
}
