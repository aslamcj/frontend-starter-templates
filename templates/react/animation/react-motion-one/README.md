# React + Motion One

Production-ready React animation template with Motion One - a lightweight, high-performance animation library.

## Stack

- **React 19** - UI library
- **Motion 11** - Lightweight animation library
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool

## Quick Start

```bash
pnpm install
pnpm dev
```

## Why Motion One?

- **Tiny bundle** - ~3KB minified + gzipped
- **Hardware accelerated** - Uses Web Animations API
- **Simple API** - Similar to GSAP but lighter
- **Tree-shakeable** - Only imports what you use

## Features Demonstrated

### Basic Animation

```tsx
import { animate } from 'motion';

// Animate an element
animate(
  element,
  { opacity: [0, 1], y: [20, 0] },
  { duration: 0.5, easing: 'ease-out' }
);
```

### Stagger Animation

```tsx
import { stagger, animate } from 'motion';

animate(
  '.item',
  { opacity: [0, 1], x: [-30, 0] },
  { delay: stagger(0.1) }
);
```

### Spring Physics

```tsx
import { animate, spring } from 'motion';

animate(
  element,
  { scale: [0.5, 1] },
  { easing: spring({ stiffness: 200, damping: 20 }) }
);
```

### Timeline

```tsx
import { timeline } from 'motion';

timeline([
  ['.box1', { x: 200 }, { duration: 0.5 }],
  ['.box2', { x: 200 }, { duration: 0.5 }],
  ['.box3', { x: 200 }, { duration: 0.5 }],
]);
```

### Scroll Animations

```tsx
import { scroll, animate } from 'motion';

scroll(
  animate(element, { opacity: [0, 1] }),
  { target: element, offset: ['start end', 'end end'] }
);
```

## Components Included

| Component | Description |
|-----------|-------------|
| `FadeIn` | Fade + slide animation |
| `AnimateElement` | Interactive button triggers |
| `StaggerDemo` | Staggered list animation |
| `SpringDemo` | Spring physics comparison |
| `TimelineDemo` | Sequential timeline |
| `ScrollDemo` | Scroll-triggered animations |

## Hooks Included

| Hook | Description |
|------|-------------|
| `useAnimate` | Generic animation ref |
| `useFadeIn` | Pre-configured fade in |
| `useSpringAnimation` | Spring animation helper |
| `useHoverAnimation` | Hover state animations |

## Easing Functions

```tsx
// Built-in
easing: 'ease'
easing: 'ease-in'
easing: 'ease-out'
easing: 'ease-in-out'
easing: 'linear'

// Cubic bezier
easing: [0.4, 0, 0.2, 1]

// Spring
easing: spring({ stiffness: 200, damping: 20 })
```

## Animation Controls

```tsx
const controls = animate(element, { x: 100 });

// Control methods
controls.pause();
controls.play();
controls.reverse();
controls.cancel();
controls.finish();

// Properties
controls.currentTime;
controls.playbackRate;

// Events
controls.finished.then(() => {
  console.log('Animation complete');
});
```

## Performance Tips

1. **Use transforms** - `x`, `y`, `rotate`, `scale` are GPU-accelerated
2. **Avoid layout properties** - `width`, `height` trigger reflows
3. **Use `will-change` sparingly** - Let the browser optimize
4. **Prefer CSS for simple animations** - Motion shines for complex ones

## Comparison with Other Libraries

| Feature | Motion One | Framer Motion | GSAP |
|---------|------------|---------------|------|
| Size | ~3KB | ~50KB | ~60KB |
| React API | Vanilla | Native | Plugin |
| Performance | Web Animations API | JS | JS |
| Complexity | Simple | Medium | Full |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## Resources

- [Motion One Docs](https://motion.dev/)
- [Motion One Examples](https://motion.dev/docs/examples)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

## License

MIT
