import { useRef, useCallback, useState } from 'react';
import type { LottieRefCurrentProps } from 'lottie-react';

export function useLottieControls() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const play = useCallback(() => {
    lottieRef.current?.play();
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    lottieRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const stop = useCallback(() => {
    lottieRef.current?.stop();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const setPlaybackSpeed = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
    lottieRef.current?.setSpeed(newSpeed);
  }, []);

  const toggleDirection = useCallback(() => {
    const newDirection = direction === 1 ? -1 : 1;
    setDirection(newDirection);
    lottieRef.current?.setDirection(newDirection);
  }, [direction]);

  const goToFrame = useCallback((frame: number, isFrame = true) => {
    lottieRef.current?.goToAndStop(frame, isFrame);
    setIsPlaying(false);
  }, []);

  const playSegments = useCallback((segments: [number, number], forceFlag = true) => {
    lottieRef.current?.playSegments(segments, forceFlag);
    setIsPlaying(true);
  }, []);

  return {
    lottieRef,
    isPlaying,
    speed,
    direction,
    play,
    pause,
    stop,
    togglePlay,
    setPlaybackSpeed,
    toggleDirection,
    goToFrame,
    playSegments,
  };
}

export function useLottieInteraction(trigger: 'hover' | 'click' | 'scroll') {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isActive, setIsActive] = useState(false);

  const handlers = {
    hover: {
      onMouseEnter: () => {
        lottieRef.current?.play();
        setIsActive(true);
      },
      onMouseLeave: () => {
        lottieRef.current?.stop();
        setIsActive(false);
      },
    },
    click: {
      onClick: () => {
        if (isActive) {
          lottieRef.current?.stop();
        } else {
          lottieRef.current?.play();
        }
        setIsActive(!isActive);
      },
    },
    scroll: {},
  };

  return {
    lottieRef,
    isActive,
    handlers: handlers[trigger],
  };
}
