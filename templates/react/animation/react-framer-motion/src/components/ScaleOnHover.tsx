import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScaleOnHoverProps {
  children: ReactNode;
  scale?: number;
}

export function ScaleOnHover({ children, scale = 1.05 }: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
}
