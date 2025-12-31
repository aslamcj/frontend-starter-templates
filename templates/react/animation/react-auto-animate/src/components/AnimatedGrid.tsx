import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const colors = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

export function AnimatedGrid() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);
  const [parent] = useAutoAnimate();

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  const addItem = () => {
    setItems([...items, Math.max(...items) + 1]);
  };

  const removeItem = () => {
    if (items.length > 1) {
      setItems(items.slice(0, -1));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={addItem}>Add</button>
        <button onClick={removeItem} disabled={items.length <= 1}>
          Remove
        </button>
      </div>
      <div
        ref={parent}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: '1rem',
        }}
      >
        {items.map((item, index) => (
          <div
            key={item}
            style={{
              background: colors[index % colors.length],
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
