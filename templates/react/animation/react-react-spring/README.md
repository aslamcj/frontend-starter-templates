# React + React Spring

Production-ready React animation template with React Spring's physics-based animations.

## Stack

- **React 19** - UI library
- **React Spring 9** - Physics-based animations
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool

## Quick Start

```bash
pnpm install
pnpm dev
```

## Features Demonstrated

### Basic Spring Animation

```tsx
import { useSpring, animated } from '@react-spring/web';

function FadeIn({ children }) {
  const springs = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 280, friction: 20 },
  });

  return (
    <animated.div
      style={{
        opacity: springs.opacity,
        transform: springs.y.to(y => `translateY(${y}px)`),
      }}
    >
      {children}
    </animated.div>
  );
}
```

### Animated Numbers

```tsx
import { useSpring, animated } from '@react-spring/web';

function AnimatedNumber({ value }) {
  const { number } = useSpring({
    number: value,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <animated.span>
      {number.to(n => Math.floor(n).toLocaleString())}
    </animated.span>
  );
}
```

### Trail Animations

```tsx
import { useTrail, animated } from '@react-spring/web';

function TrailList({ items }) {
  const trail = useTrail(items.length, {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
  });

  return (
    <ul>
      {trail.map((style, i) => (
        <animated.li key={i} style={style}>
          {items[i]}
        </animated.li>
      ))}
    </ul>
  );
}
```

### Transitions

```tsx
import { useTransition, animated } from '@react-spring/web';

function TransitionDemo({ items }) {
  const transitions = useTransition(items, {
    from: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -100 },
  });

  return transitions((style, item) => (
    <animated.div style={style}>{item}</animated.div>
  ));
}
```

### Chained Animations

```tsx
import { useSpringRef, useSpring, useChain } from '@react-spring/web';

function ChainedAnimation({ open }) {
  const containerRef = useSpringRef();
  const containerSpring = useSpring({ ref: containerRef, ... });

  const contentRef = useSpringRef();
  const contentSpring = useSpring({ ref: contentRef, ... });

  useChain(
    open ? [containerRef, contentRef] : [contentRef, containerRef],
    [0, 0.3]
  );
}
```

## Components Included

| Component | Description |
|-----------|-------------|
| `FadeIn` | Spring-based fade + slide animation |
| `SpringNumber` | Animated number interpolation |
| `TrailList` | Staggered list animation |
| `TransitionDemo` | Page/element transitions |
| `ParallaxCards` | 3D parallax hover effect |
| `ChainedAnimation` | Sequential animations |

## Hooks Included

| Hook | Description |
|------|-------------|
| `useSpringValue` | Animate a single value |
| `useSpringToggle` | Toggle-based spring animation |

## Spring Configuration

### Presets

```tsx
import { config } from '@react-spring/web';

// Available presets
config.default    // { tension: 170, friction: 26 }
config.gentle     // { tension: 120, friction: 14 }
config.wobbly     // { tension: 180, friction: 12 }
config.stiff      // { tension: 210, friction: 20 }
config.slow       // { tension: 280, friction: 60 }
config.molasses   // { tension: 280, friction: 120 }
```

### Custom Config

```tsx
{
  mass: 1,        // Weight of the spring
  tension: 170,   // Stiffness
  friction: 26,   // Damping
  velocity: 0,    // Initial velocity
  precision: 0.01 // Resting threshold
}
```

## Advanced Patterns

### Gesture-based Animation

```tsx
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

function DraggableCard() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [ox, oy] }) => {
    api.start({ x: ox, y: oy });
  });

  return (
    <animated.div {...bind()} style={{ x, y }} />
  );
}
```

### Imperative API

```tsx
const [springs, api] = useSpring(() => ({ x: 0 }));

// Control animations imperatively
api.start({ x: 100 });
api.stop();
api.set({ x: 0 });
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## Resources

- [React Spring Docs](https://www.react-spring.dev/)
- [Common Props](https://www.react-spring.dev/docs/advanced/config)
- [Parallax Examples](https://www.react-spring.dev/examples)

## License

MIT
