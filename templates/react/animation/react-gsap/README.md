# React + GSAP

Production-ready React animation template with GSAP (GreenSock Animation Platform).

## Stack

- **React 19** - UI library
- **GSAP 3.12** - Professional animation library
- **@gsap/react** - Official React integration
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool

## Quick Start

```bash
pnpm install
pnpm dev
```

## Features Demonstrated

### Basic Animation with useGSAP

```tsx
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function FadeIn({ children }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
```

### Stagger Animations

```tsx
useGSAP(() => {
  gsap.from('.item', {
    opacity: 0,
    x: -50,
    stagger: 0.1,
    duration: 0.6,
    ease: 'back.out(1.7)',
  });
}, { scope: containerRef });
```

### Timeline Animations

```tsx
const tl = gsap.timeline();

tl.to('.box-1', { x: 200, duration: 0.5 })
  .to('.box-2', { x: 200, duration: 0.5 })
  .to('.box-3', { x: 200, duration: 0.5 });

// Control
tl.play();
tl.reverse();
tl.pause();
tl.seek(1.5);
```

### ScrollTrigger

```tsx
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from('.box', {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: '.box',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});
```

### Context-Safe Event Handlers

```tsx
function Component() {
  const { contextSafe } = useGSAP();

  const handleClick = contextSafe(() => {
    gsap.to('.target', { rotation: 360 });
  });

  return <button onClick={handleClick}>Animate</button>;
}
```

## Components Included

| Component | Description |
|-----------|-------------|
| `FadeIn` | Fade + slide animation |
| `StaggerList` | Staggered list animation |
| `TimelineDemo` | Sequential timeline |
| `TextAnimation` | Character-by-character text |
| `MorphingShape` | Shape morphing demo |
| `ScrollTriggerDemo` | Scroll-triggered animations |

## Hooks Included

| Hook | Description |
|------|-------------|
| `useGsapAnimation` | Generic animation controller |
| `useFadeIn` | Pre-configured fade in |
| `useStagger` | Pre-configured stagger |

## Easing Functions

```tsx
// Built-in eases
ease: 'power1.out'    // Subtle
ease: 'power2.out'    // Medium
ease: 'power3.out'    // Strong
ease: 'power4.out'    // Extra strong
ease: 'back.out(1.7)' // Overshoot
ease: 'elastic.out'   // Bouncy
ease: 'bounce.out'    // Bounce
ease: 'expo.out'      // Exponential
```

## GSAP Plugins

GSAP has many plugins available:

```tsx
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin);
```

## Performance Tips

1. **Use transforms** - `x`, `y`, `rotation`, `scale` are GPU-accelerated
2. **Avoid animating layout** - `width`, `height`, `top`, `left` trigger reflows
3. **Use `will-change`** - For complex animations
4. **Clean up** - Always use `useGSAP` for automatic cleanup

```tsx
// Bad - triggers layout
gsap.to('.box', { width: 200, left: 100 });

// Good - GPU accelerated
gsap.to('.box', { scaleX: 2, x: 100 });
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## Resources

- [GSAP Docs](https://gsap.com/docs/)
- [GSAP React Guide](https://gsap.com/resources/React/)
- [Ease Visualizer](https://gsap.com/docs/v3/Eases/)
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## License

MIT
