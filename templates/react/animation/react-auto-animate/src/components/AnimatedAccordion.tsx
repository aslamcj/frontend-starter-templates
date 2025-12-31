import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    id: 1,
    title: 'What is Auto Animate?',
    content:
      'Auto Animate is a zero-config animation library that automatically animates DOM changes. Just add one line of code to enable smooth animations.',
  },
  {
    id: 2,
    title: 'How does it work?',
    content:
      'It uses a MutationObserver to watch for DOM changes and applies FLIP animations automatically. No keyframes or complex configuration needed.',
  },
  {
    id: 3,
    title: 'Is it performant?',
    content:
      "Yes! Auto Animate uses CSS transforms for animations which are GPU-accelerated. It's also tiny at ~2KB minified and gzipped.",
  },
];

export function AnimatedAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: '500px' }}>
      {items.map((item) => (
        <AccordionSection
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

interface AccordionSectionProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionSection({ item, isOpen, onToggle }: AccordionSectionProps) {
  const [parent] = useAutoAnimate();

  return (
    <div
      ref={parent}
      style={{
        marginBottom: '0.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'transparent',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{item.title}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 1.5rem 1.5rem', color: '#c4b5fd' }}>{item.content}</div>
      )}
    </div>
  );
}
