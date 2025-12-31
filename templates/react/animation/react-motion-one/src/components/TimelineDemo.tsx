import { useRef } from 'react';
import { timeline } from 'motion';

export function TimelineDemo() {
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    if (box1Ref.current && box2Ref.current && box3Ref.current) {
      timeline([
        [box1Ref.current, { x: 200, rotate: 360 }, { duration: 0.5 }],
        [box2Ref.current, { x: 200, scale: 1.5 }, { duration: 0.5 }],
        [box3Ref.current, { x: 200, borderRadius: '50%' }, { duration: 0.5 }],
        [
          [box1Ref.current, box2Ref.current, box3Ref.current],
          { x: 0, rotate: 0, scale: 1, borderRadius: '8px' },
          { duration: 0.5 },
        ],
      ]);
    }
  };

  return (
    <div>
      <button onClick={handlePlay} style={{ marginBottom: '1rem' }}>
        Play Timeline
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div
          ref={box1Ref}
          style={{
            width: '60px',
            height: '60px',
            background: '#0284c7',
            borderRadius: '8px',
          }}
        />
        <div
          ref={box2Ref}
          style={{
            width: '60px',
            height: '60px',
            background: '#0ea5e9',
            borderRadius: '8px',
          }}
        />
        <div
          ref={box3Ref}
          style={{
            width: '60px',
            height: '60px',
            background: '#38bdf8',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );
}
