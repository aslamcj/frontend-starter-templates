# React + Framer Motion

Production-ready React animation template with Framer Motion.

## Stack

- **React 19** - UI library
- **Framer Motion 11** - Animation library
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool

## Quick Start

```bash
pnpm install
pnpm dev
```

## Features Demonstrated

### Basic Animations

```tsx
import { motion } from 'framer-motion';

// Fade in on mount
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Hover & Tap Effects

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Exit Animations

```tsx
import { AnimatePresence } from 'framer-motion';

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

### Drag Gestures

```tsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 200, top: 0, bottom: 200 }}
  whileDrag={{ scale: 1.1 }}
>
  Drag me
</motion.div>
```

### Layout Animations

```tsx
<motion.div layout>
  {/* Content that changes size/position animates automatically */}
</motion.div>
```

### Variants for Orchestration

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => (
    <motion.li key={i} variants={item}>{i}</motion.li>
  ))}
</motion.ul>
```

## Components Included

| Component | Description |
|-----------|-------------|
| `FadeIn` | Fade + slide up animation |
| `ScaleOnHover` | Interactive hover/tap effects |
| `SlideIn` | Directional slide animations |
| `AnimatedList` | List with add/remove animations |
| `DragBox` | Draggable element demo |
| `PageTransition` | Page transition wrapper |

## Hooks Included

| Hook | Description |
|------|-------------|
| `useAnimatedValue` | Spring-animated number value |
| `useAnimatedProgress` | Progress with percentage display |

## Animation Types

### Spring (Physics-based)

```tsx
transition={{ type: 'spring', stiffness: 300, damping: 20 }}
```

### Tween (Duration-based)

```tsx
transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
```

### Inertia

```tsx
transition={{ type: 'inertia', velocity: 200 }}
```

## Performance Tips

1. **Use `layout` prop sparingly** - Only when needed
2. **Prefer `transform` properties** - `x`, `y`, `scale`, `rotate`
3. **Use `will-change`** - For complex animations
4. **Reduce motion** - Respect `prefers-reduced-motion`

```tsx
import { useReducedMotion } from 'framer-motion';

function Component() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ x: shouldReduceMotion ? 0 : 100 }}
    />
  );
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [useAnimate Hook](https://www.framer.com/motion/use-animate/)

## License

MIT
