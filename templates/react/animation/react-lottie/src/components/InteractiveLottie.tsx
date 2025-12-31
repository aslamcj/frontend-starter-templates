import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';
import { heartAnimation } from '../animations/heart';

interface InteractiveLottieProps {
  trigger: 'hover' | 'click';
}

export function InteractiveLottie({ trigger }: InteractiveLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      lottieRef.current?.play();
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      lottieRef.current?.stop();
      setIsActive(false);
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      if (isActive) {
        lottieRef.current?.stop();
      } else {
        lottieRef.current?.play();
      }
      setIsActive(!isActive);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={heartAnimation}
        loop={trigger === 'hover'}
        autoplay={false}
        style={{ width: 200, height: 200, margin: '0 auto' }}
      />
      <p style={{ fontSize: '0.875rem', color: '#a78bfa', marginTop: '0.5rem' }}>
        {trigger === 'hover' ? 'Hover over the animation' : 'Click the animation'}
      </p>
    </div>
  );
}
