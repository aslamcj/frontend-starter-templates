import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedListProps {
  items: string[];
  onRemove: (index: number) => void;
}

export function AnimatedList({ items, onRemove }: AnimatedListProps) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.li
            key={item}
            layout
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              padding: '1rem',
              marginBottom: '0.5rem',
              background: '#374151',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => onRemove(index)}
              style={{
                padding: '0.25rem 0.75rem',
                background: '#dc2626',
                fontSize: '0.875rem',
              }}
            >
              Remove
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
