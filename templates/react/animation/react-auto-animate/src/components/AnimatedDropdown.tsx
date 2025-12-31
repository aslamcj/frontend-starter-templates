import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function AnimatedDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [parent] = useAutoAnimate();

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div ref={parent} style={{ maxWidth: '300px' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>Select an option</span>
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
          {options.map((option) => (
            <li
              key={option}
              style={{
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                marginBottom: '0.25rem',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => setIsOpen(false)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
