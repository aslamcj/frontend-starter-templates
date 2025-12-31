import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface UseAnimatedValueOptions {
  stiffness?: number;
  damping?: number;
}

export function useAnimatedValue(targetValue: number, options: UseAnimatedValueOptions = {}) {
  const { stiffness = 100, damping = 30 } = options;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness, damping });

  useEffect(() => {
    motionValue.set(targetValue);
  }, [targetValue, motionValue]);

  return springValue;
}

export function useAnimatedProgress(progress: number) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const percentage = useTransform(springValue, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    motionValue.set(progress);
  }, [progress, motionValue]);

  return { value: springValue, percentage };
}
