import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface StaggerListProps {
  items: string[];
}

export function StaggerList({ items }: StaggerListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      gsap.from('.stagger-item', {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
    },
    { scope: listRef }
  );

  return (
    <ul ref={listRef} style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={index}
          className="stagger-item"
          style={{
            padding: '1rem',
            marginBottom: '0.5rem',
            background: '#292524',
            borderRadius: '8px',
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
