import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { AutoAnimateOptions, AutoAnimationPlugin } from '@formkit/auto-animate';

interface UseAutoAnimateConfig {
  duration?: number;
  easing?: string;
  disrespectUserMotionPreference?: boolean;
}

export function useAutoAnimateWithConfig(config: UseAutoAnimateConfig = {}) {
  const { duration = 250, easing = 'ease-in-out', disrespectUserMotionPreference = false } = config;

  return useAutoAnimate({
    duration,
    easing,
    disrespectUserMotionPreference,
  });
}

// Custom animation plugin for more control
export const customPlugin: AutoAnimationPlugin = (el, action, oldCoords, newCoords) => {
  let keyframes: Keyframe[] = [];

  if (action === 'add') {
    keyframes = [
      { opacity: 0, transform: 'scale(0.8) translateY(-10px)' },
      { opacity: 1, transform: 'scale(1) translateY(0)' },
    ];
  } else if (action === 'remove') {
    keyframes = [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.8)' },
    ];
  } else if (action === 'remain' && oldCoords && newCoords) {
    const deltaX = oldCoords.left - newCoords.left;
    const deltaY = oldCoords.top - newCoords.top;

    keyframes = [
      { transform: `translate(${deltaX}px, ${deltaY}px)` },
      { transform: 'translate(0, 0)' },
    ];
  }

  return new KeyframeEffect(el, keyframes, {
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  });
};

export function useCustomAutoAnimate() {
  return useAutoAnimate(customPlugin);
}
