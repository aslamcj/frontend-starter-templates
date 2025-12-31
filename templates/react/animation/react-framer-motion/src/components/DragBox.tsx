import { motion } from 'framer-motion';

export function DragBox() {
  return (
    <div
      style={{
        height: '200px',
        background: '#1f2937',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 200,
          bottom: 100,
        }}
        dragElastic={0.1}
        whileDrag={{ scale: 1.1, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
        style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
          borderRadius: '12px',
          cursor: 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
        }}
      >
        Drag me
      </motion.div>
    </div>
  );
}
