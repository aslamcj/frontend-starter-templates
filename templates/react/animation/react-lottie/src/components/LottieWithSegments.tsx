import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';
import { checkAnimation } from '../animations/check';

type Segment = [number, number];

const segments: Record<string, Segment> = {
  start: [0, 15],
  middle: [15, 35],
  end: [35, 50],
  full: [0, 50],
};

export function LottieWithSegments() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [currentSegment, setCurrentSegment] = useState<string>('full');

  const playSegment = (segmentName: string) => {
    const segment = segments[segmentName];
    if (segment && lottieRef.current) {
      lottieRef.current.playSegments(segment, true);
      setCurrentSegment(segmentName);
    }
  };

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={checkAnimation}
        loop={false}
        autoplay={false}
        style={{ width: 200, height: 200, margin: '0 auto' }}
      />
      <div className="controls">
        {Object.keys(segments).map((name) => (
          <button
            key={name}
            onClick={() => playSegment(name)}
            style={{
              background: currentSegment === name ? '#5b21b6' : undefined,
            }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
