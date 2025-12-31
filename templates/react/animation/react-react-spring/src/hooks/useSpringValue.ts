import { useSpring } from '@react-spring/web';
import { useEffect, useRef } from 'react';

interface UseSpringValueOptions {
  tension?: number;
  friction?: number;
  mass?: number;
}

export function useSpringValue(targetValue: number, options: UseSpringValueOptions = {}) {
  const { tension = 170, friction = 26, mass = 1 } = options;

  const [springs, api] = useSpring(() => ({
    value: 0,
    config: { tension, friction, mass },
  }));

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      api.set({ value: targetValue });
    } else {
      api.start({ value: targetValue });
    }
  }, [targetValue, api]);

  return springs.value;
}

export function useSpringToggle(isOpen: boolean, options: UseSpringValueOptions = {}) {
  const { tension = 200, friction = 20, mass = 1 } = options;

  const springs = useSpring({
    progress: isOpen ? 1 : 0,
    config: { tension, friction, mass },
  });

  return {
    progress: springs.progress,
    isOpen,
  };
}
