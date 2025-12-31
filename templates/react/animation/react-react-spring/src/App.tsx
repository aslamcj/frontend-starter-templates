import { useState } from 'react';
import { FadeIn } from './components/FadeIn';
import { SpringNumber } from './components/SpringNumber';
import { TrailList } from './components/TrailList';
import { TransitionDemo } from './components/TransitionDemo';
import { ParallaxCards } from './components/ParallaxCards';
import { ChainedAnimation } from './components/ChainedAnimation';

export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Spring 1', 'Spring 2', 'Spring 3']);

  return (
    <div className="container">
      <h1>React Spring Demos</h1>

      <div className="demo-section">
        <h2>Fade In Animation</h2>
        <FadeIn>
          <div style={{ padding: '2rem', background: '#334155', borderRadius: '12px' }}>
            This content fades in with spring physics
          </div>
        </FadeIn>
      </div>

      <div className="demo-section">
        <h2>Animated Number</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={() => setCount((c) => c + 100)}>+100</button>
          <button onClick={() => setCount((c) => c - 100)}>-100</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <div style={{ marginTop: '1rem', fontSize: '3rem', fontWeight: 'bold' }}>
          <SpringNumber value={count} />
        </div>
      </div>

      <div className="demo-section">
        <h2>Trail Animation</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <button onClick={() => setItems([...items, `Spring ${items.length + 1}`])}>
            Add Item
          </button>
          <button onClick={() => setItems(items.slice(0, -1))} disabled={items.length === 0}>
            Remove Item
          </button>
        </div>
        <TrailList items={items} />
      </div>

      <div className="demo-section">
        <h2>Transition Animation</h2>
        <TransitionDemo />
      </div>

      <div className="demo-section">
        <h2>Parallax Cards</h2>
        <ParallaxCards />
      </div>

      <div className="demo-section">
        <h2>Chained Animation</h2>
        <ChainedAnimation />
      </div>
    </div>
  );
}
