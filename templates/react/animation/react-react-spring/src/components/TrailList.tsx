import { useTrail, animated } from '@react-spring/web';

interface TrailListProps {
  items: string[];
}

export function TrailList({ items }: TrailListProps) {
  const trail = useTrail(items.length, {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    config: { tension: 300, friction: 20 },
  });

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {trail.map((style, index) => (
        <animated.li
          key={items[index]}
          style={{
            ...style,
            padding: '1rem',
            marginBottom: '0.5rem',
            background: '#334155',
            borderRadius: '8px',
            transform: style.x.to((x) => `translateX(${x}px)`),
          }}
        >
          {items[index]}
        </animated.li>
      ))}
    </ul>
  );
}
