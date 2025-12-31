import { useState } from 'react';
import { FadeIn } from './components/FadeIn';
import { ScaleOnHover } from './components/ScaleOnHover';
import { SlideIn } from './components/SlideIn';
import { AnimatedList } from './components/AnimatedList';
import { DragBox } from './components/DragBox';
import { PageTransition } from './components/PageTransition';

const initialItems = ['Item 1', 'Item 2', 'Item 3'];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(0);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Framer Motion Demos</h1>

      <div className="demo-section">
        <h2>Fade In Animation</h2>
        <FadeIn>
          <div style={{ padding: '2rem', background: '#374151', borderRadius: '12px' }}>
            This content fades in smoothly when mounted
          </div>
        </FadeIn>
      </div>

      <div className="demo-section">
        <h2>Hover & Tap Effects</h2>
        <div className="demo-grid">
          <ScaleOnHover>
            <div
              style={{
                padding: '2rem',
                background: '#7c3aed',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              Hover me!
            </div>
          </ScaleOnHover>
          <ScaleOnHover>
            <div
              style={{
                padding: '2rem',
                background: '#2563eb',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              Tap me!
            </div>
          </ScaleOnHover>
        </div>
      </div>

      <div className="demo-section">
        <h2>Slide In Directions</h2>
        <div className="demo-grid">
          <SlideIn direction="left">
            <div style={{ padding: '1rem', background: '#059669', borderRadius: '8px' }}>
              From Left
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.1}>
            <div style={{ padding: '1rem', background: '#0891b2', borderRadius: '8px' }}>
              From Right
            </div>
          </SlideIn>
          <SlideIn direction="top" delay={0.2}>
            <div style={{ padding: '1rem', background: '#d97706', borderRadius: '8px' }}>
              From Top
            </div>
          </SlideIn>
          <SlideIn direction="bottom" delay={0.3}>
            <div style={{ padding: '1rem', background: '#dc2626', borderRadius: '8px' }}>
              From Bottom
            </div>
          </SlideIn>
        </div>
      </div>

      <div className="demo-section">
        <h2>Animated List</h2>
        <button onClick={addItem} style={{ marginBottom: '1rem' }}>
          Add Item
        </button>
        <AnimatedList items={items} onRemove={removeItem} />
      </div>

      <div className="demo-section">
        <h2>Drag & Drop</h2>
        <DragBox />
      </div>

      <div className="demo-section">
        <h2>Page Transitions</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <button onClick={() => setPage(0)}>Page 1</button>
          <button onClick={() => setPage(1)}>Page 2</button>
          <button onClick={() => setPage(2)}>Page 3</button>
        </div>
        <PageTransition pageKey={page}>
          <div
            style={{
              padding: '3rem',
              background: ['#7c3aed', '#2563eb', '#059669'][page],
              borderRadius: '12px',
              textAlign: 'center',
              fontSize: '1.5rem',
            }}
          >
            Page {page + 1} Content
          </div>
        </PageTransition>
      </div>
    </div>
  );
}
