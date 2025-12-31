import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
}

const directionOffsets: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -100 },
  right: { x: 100 },
  top: { y: -100 },
  bottom: { y: 100 },
};

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.5,
}: SlideInProps) {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
