import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function TimelineDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to('.box-1', { x: 200, rotation: 360, duration: 0.5 })
        .to('.box-2', { x: 200, scale: 1.5, duration: 0.5 })
        .to('.box-3', { x: 200, borderRadius: '50%', duration: 0.5 })
        .to('.box-1, .box-2, .box-3', {
          x: 0,
          rotation: 0,
          scale: 1,
          borderRadius: '8px',
          duration: 0.5,
        });
    },
    { scope: containerRef }
  );

  const handlePlay = () => {
    if (isPlaying) {
      timelineRef.current?.reverse();
    } else {
      timelineRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div ref={containerRef}>
      <button onClick={handlePlay} style={{ marginBottom: '1rem' }}>
        {isPlaying ? 'Reverse' : 'Play'} Timeline
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div
          className="box-1"
          style={{
            width: '60px',
            height: '60px',
            background: '#84cc16',
            borderRadius: '8px',
          }}
        />
        <div
          className="box-2"
          style={{
            width: '60px',
            height: '60px',
            background: '#22c55e',
            borderRadius: '8px',
          }}
        />
        <div
          className="box-3"
          style={{
            width: '60px',
            height: '60px',
            background: '#10b981',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );
}
