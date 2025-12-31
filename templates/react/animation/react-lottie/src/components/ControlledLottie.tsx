import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';
import { checkAnimation } from '../animations/check';

export function ControlledLottie() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handlePlay = () => {
    lottieRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    lottieRef.current?.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    lottieRef.current?.stop();
    setIsPlaying(false);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    lottieRef.current?.setSpeed(newSpeed);
  };

  const handleDirectionToggle = () => {
    const newDirection = direction === 1 ? -1 : 1;
    setDirection(newDirection);
    lottieRef.current?.setDirection(newDirection);
  };

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={checkAnimation}
        loop={true}
        style={{ width: 200, height: 200, margin: '0 auto' }}
      />
      <div className="controls">
        <button onClick={handlePlay} disabled={isPlaying}>
          Play
        </button>
        <button onClick={handlePause} disabled={!isPlaying}>
          Pause
        </button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div className="controls">
        <button onClick={() => handleSpeedChange(0.5)} disabled={speed === 0.5}>
          0.5x
        </button>
        <button onClick={() => handleSpeedChange(1)} disabled={speed === 1}>
          1x
        </button>
        <button onClick={() => handleSpeedChange(2)} disabled={speed === 2}>
          2x
        </button>
        <button onClick={handleDirectionToggle}>
          Direction: {direction === 1 ? 'Forward' : 'Reverse'}
        </button>
      </div>
    </div>
  );
}
