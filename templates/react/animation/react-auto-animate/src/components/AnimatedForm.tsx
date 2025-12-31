import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function AnimatedForm() {
  const [showOptional, setShowOptional] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [parent] = useAutoAnimate();

  return (
    <form
      ref={parent}
      onSubmit={(e) => e.preventDefault()}
      style={{ maxWidth: '400px' }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name *</label>
        <input type="text" placeholder="Enter your name" />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email *</label>
        <input type="text" placeholder="Enter your email" />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showOptional}
            onChange={(e) => setShowOptional(e.target.checked)}
          />
          Show optional fields
        </label>
      </div>

      {showOptional && (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Phone</label>
            <input type="text" placeholder="Enter your phone" />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Company</label>
            <input type="text" placeholder="Enter your company" />
          </div>
        </>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showAddress}
            onChange={(e) => setShowAddress(e.target.checked)}
          />
          Add shipping address
        </label>
      </div>

      {showAddress && (
        <div
          style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Street</label>
            <input type="text" placeholder="Enter street address" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>City</label>
            <input type="text" placeholder="Enter city" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>ZIP Code</label>
            <input type="text" placeholder="Enter ZIP code" />
          </div>
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
