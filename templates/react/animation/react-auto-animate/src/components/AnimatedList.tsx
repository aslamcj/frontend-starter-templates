import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Item {
  id: number;
  text: string;
}

export function AnimatedList() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: 'First item' },
    { id: 2, text: 'Second item' },
    { id: 3, text: 'Third item' },
  ]);
  const [newItemText, setNewItemText] = useState('');
  const [parent] = useAutoAnimate();

  const addItem = () => {
    if (newItemText.trim()) {
      setItems([...items, { id: Date.now(), text: newItemText }]);
      setNewItemText('');
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Enter item text..."
          onKeyDown={(e) => e.key === 'Enter' && addItem()}
          style={{ flex: 1, marginBottom: 0 }}
        />
        <button onClick={addItem}>Add</button>
        <button onClick={shuffle}>Shuffle</button>
      </div>
      <ul ref={parent} style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '1rem',
              marginBottom: '0.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{item.text}</span>
            <button
              onClick={() => removeItem(item.id)}
              style={{ padding: '0.5rem 1rem', background: '#dc2626' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
