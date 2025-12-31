import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function CustomDuration() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [duration, setDuration] = useState(250);
  const [parent, enable] = useAutoAnimate({ duration });
  const [isEnabled, setIsEnabled] = useState(true);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
    }
  };

  const toggleAnimation = () => {
    enable(!isEnabled);
    setIsEnabled(!isEnabled);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Animation Duration: {duration}ms
        </label>
        <input
          type="range"
          min="100"
          max="1000"
          step="50"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          style={{ width: '100%', maxWidth: '300px' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button onClick={addItem}>Add Item</button>
        <button onClick={removeItem} disabled={items.length === 0}>
          Remove Item
        </button>
        <button onClick={toggleAnimation}>
          {isEnabled ? 'Disable' : 'Enable'} Animation
        </button>
      </div>
      <ul ref={parent} style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={item}
            style={{
              padding: '1rem',
              marginBottom: '0.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {!isEnabled && (
        <p style={{ color: '#fbbf24', marginTop: '1rem' }}>
          Animation is disabled. Changes will be instant.
        </p>
      )}
    </div>
  );
}
