# React + Auto Animate

Production-ready React template with FormKit's Auto Animate - a zero-config animation library.

## Stack

- **React 19** - UI library
- **@formkit/auto-animate** - Zero-config animations
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool

## Quick Start

```bash
pnpm install
pnpm dev
```

## Why Auto Animate?

- **Zero config** - Add one line, get animations
- **Tiny** - ~2KB minified + gzipped
- **Framework agnostic** - Works with React, Vue, Svelte
- **Automatic** - Animates add, remove, and move

## Features Demonstrated

### Basic Usage

```tsx
import { useAutoAnimate } from '@formkit/auto-animate/react';

function List() {
  const [items, setItems] = useState(['a', 'b', 'c']);
  const [parent] = useAutoAnimate();

  return (
    <ul ref={parent}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

### Custom Duration

```tsx
const [parent] = useAutoAnimate({ duration: 500 });
```

### Toggle Animation

```tsx
const [parent, enable] = useAutoAnimate();

// Disable animations
enable(false);

// Re-enable
enable(true);
```

### Custom Easing

```tsx
const [parent] = useAutoAnimate({
  duration: 250,
  easing: 'ease-in-out',
});
```

### Custom Animation Plugin

```tsx
import { useAutoAnimate } from '@formkit/auto-animate/react';

const customPlugin = (el, action, oldCoords, newCoords) => {
  let keyframes = [];

  if (action === 'add') {
    keyframes = [
      { opacity: 0, transform: 'scale(0.8)' },
      { opacity: 1, transform: 'scale(1)' },
    ];
  }
  // ... handle 'remove' and 'remain'

  return new KeyframeEffect(el, keyframes, {
    duration: 300,
    easing: 'ease-out',
  });
};

const [parent] = useAutoAnimate(customPlugin);
```

## Components Included

| Component | Description |
|-----------|-------------|
| `AnimatedList` | Add/remove/shuffle items |
| `AnimatedDropdown` | Expanding dropdown menu |
| `AnimatedGrid` | Grid with shuffle/add/remove |
| `AnimatedForm` | Conditional form fields |
| `AnimatedAccordion` | Expandable sections |
| `CustomDuration` | Duration slider demo |

## Hooks Included

| Hook | Description |
|------|-------------|
| `useAutoAnimateWithConfig` | Pre-configured hook |
| `useCustomAutoAnimate` | Custom animation plugin |

## Configuration Options

```tsx
interface AutoAnimateOptions {
  // Animation duration in milliseconds
  duration?: number; // default: 250

  // CSS easing function
  easing?: string; // default: 'ease-in-out'

  // Ignore prefers-reduced-motion
  disrespectUserMotionPreference?: boolean; // default: false
}
```

## Use Cases

### Lists & Tables
```tsx
<ul ref={parent}>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>
```

### Dropdowns & Menus
```tsx
<div ref={parent}>
  <button onClick={toggle}>Menu</button>
  {isOpen && <MenuItems />}
</div>
```

### Form Fields
```tsx
<form ref={parent}>
  <Input label="Name" />
  {showMore && <Input label="Phone" />}
</form>
```

### Notifications
```tsx
<div ref={parent}>
  {notifications.map(n => <Toast key={n.id} {...n} />)}
</div>
```

## Performance

Auto Animate uses:
- **MutationObserver** - Efficient DOM monitoring
- **FLIP animations** - GPU-accelerated transforms
- **requestAnimationFrame** - Smooth 60fps animations

## Accessibility

By default, Auto Animate respects `prefers-reduced-motion`:

```tsx
// Override if needed (not recommended)
const [parent] = useAutoAnimate({
  disrespectUserMotionPreference: true,
});
```

## Comparison

| Feature | Auto Animate | Framer Motion | React Spring |
|---------|--------------|---------------|--------------|
| Bundle size | ~2KB | ~50KB | ~25KB |
| Config needed | Zero | Some | Some |
| Animation types | DOM changes | All | All |
| Learning curve | Minimal | Medium | Medium |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## Resources

- [Auto Animate Docs](https://auto-animate.formkit.com/)
- [FormKit GitHub](https://github.com/formkit/auto-animate)
- [Examples](https://auto-animate.formkit.com/#examples)

## License

MIT
