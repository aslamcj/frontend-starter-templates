import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function MorphingShape() {
  const shapeRef = useRef<HTMLDivElement>(null);
  const [isCircle, setIsCircle] = useState(false);

  const { contextSafe } = useGSAP({ scope: shapeRef });

  const handleMorph = contextSafe(() => {
    if (isCircle) {
      gsap.to(shapeRef.current, {
        borderRadius: '12px',
        rotation: 0,
        scale: 1,
        background: '#84cc16',
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    } else {
      gsap.to(shapeRef.current, {
        borderRadius: '50%',
        rotation: 180,
        scale: 1.2,
        background: '#22c55e',
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    }
    setIsCircle(!isCircle);
  });

  return (
    <div>
      <button onClick={handleMorph} style={{ marginBottom: '1rem' }}>
        Morph Shape
      </button>
      <div
        ref={shapeRef}
        style={{
          width: '100px',
          height: '100px',
          background: '#84cc16',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={handleMorph}
      >
        Click me
      </div>
    </div>
  );
}
