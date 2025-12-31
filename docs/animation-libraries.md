# Animation Libraries Comparison

A comprehensive comparison of React animation libraries included in this template collection.

## Quick Comparison

| Library | Bundle Size | Learning Curve | Best For |
|---------|-------------|----------------|----------|
| **Framer Motion** | ~50KB | Medium | Complex UI animations, gestures, layout |
| **React Spring** | ~25KB | Medium | Physics-based, natural motion |
| **GSAP** | ~60KB | Medium-High | Professional animations, timelines |
| **Lottie** | ~40KB | Low | After Effects animations |
| **Motion One** | ~3KB | Low | Lightweight, simple animations |
| **Auto Animate** | ~2KB | Very Low | Zero-config DOM animations |

## Detailed Comparison

### Framer Motion

**Best for:** Complex UI animations, gesture interactions, layout animations

**Pros:**
- Native React API with `motion` components
- Built-in gesture support (drag, hover, tap)
- Layout animations with `AnimatePresence`
- Great developer experience
- Active community and documentation

**Cons:**
- Larger bundle size (~50KB)
- Can be overkill for simple animations
- Learning curve for advanced features

**Use when:**
- Building interactive dashboards
- Complex page transitions
- Drag and drop interfaces
- Shared layout animations

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.05 }}
  drag
/>
```

---

### React Spring

**Best for:** Physics-based animations, natural motion

**Pros:**
- Physics-based (feels natural)
- Excellent interpolation
- Works with any numeric value
- Good TypeScript support
- Chainable animations

**Cons:**
- Different mental model (springs vs duration)
- Steeper learning curve
- More verbose than Framer Motion

**Use when:**
- Natural, fluid animations are priority
- Animating numeric values
- Complex spring choreography
- Games or physics simulations

```tsx
const springs = useSpring({
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 },
});
```

---

### GSAP

**Best for:** Professional animations, complex timelines, scroll animations

**Pros:**
- Industry standard (used by major sites)
- Extremely powerful and flexible
- Excellent timeline control
- ScrollTrigger plugin
- Works with any property

**Cons:**
- Largest bundle size
- Not React-native (requires refs)
- Commercial license for some features
- Steeper learning curve

**Use when:**
- Marketing/landing pages
- Complex scroll animations
- Professional-grade motion design
- Animation timelines

```tsx
const tl = gsap.timeline();
tl.to('.box1', { x: 100 })
  .to('.box2', { x: 100 })
  .to('.box3', { x: 100 });
```

---

### Lottie

**Best for:** After Effects animations, icons, illustrations

**Pros:**
- Designer-friendly workflow
- Exports from After Effects
- Small file sizes for complex animations
- Scalable (vector-based)
- Interactive control

**Cons:**
- Requires After Effects or designer
- Limited to pre-made animations
- Can't animate React components
- JSON files can be large

**Use when:**
- Loading animations
- Micro-interactions
- Animated icons
- Complex illustrations
- Designer-developer collaboration

```tsx
<Lottie
  animationData={animationData}
  loop={true}
/>
```

---

### Motion One

**Best for:** Lightweight animations, performance-critical apps

**Pros:**
- Tiny bundle (~3KB)
- Uses Web Animations API (hardware accelerated)
- Simple, familiar API (similar to GSAP)
- Good performance
- Tree-shakeable

**Cons:**
- Less features than GSAP/Framer
- Vanilla JS API (not React-native)
- Smaller community
- Limited ecosystem

**Use when:**
- Bundle size is critical
- Simple to medium animations
- Performance is priority
- Progressive enhancement

```tsx
animate(element, { opacity: [0, 1] }, { duration: 0.5 });
```

---

### Auto Animate

**Best for:** Zero-config DOM animations, lists, forms

**Pros:**
- True zero-config
- Tiny bundle (~2KB)
- Works with any framework
- Automatic FLIP animations
- One line of code

**Cons:**
- Limited customization
- Only animates DOM changes
- No complex choreography
- No gesture support

**Use when:**
- Lists (add/remove/reorder)
- Conditional content
- Form field visibility
- Quick prototyping

```tsx
const [parent] = useAutoAnimate();
return <ul ref={parent}>{items.map(...)}</ul>;
```

## Decision Matrix

### Choose by Use Case

| Use Case | Recommended Library |
|----------|---------------------|
| Dashboard/Admin UI | Framer Motion |
| Marketing/Landing | GSAP |
| E-commerce | Framer Motion or Auto Animate |
| Games | React Spring |
| Icons/Illustrations | Lottie |
| Micro-interactions | Motion One or Auto Animate |
| Lists/Tables | Auto Animate |
| Performance-critical | Motion One |
| Designer workflow | Lottie |
| Physics-based | React Spring |

### Choose by Priority

| Priority | Recommended |
|----------|-------------|
| Smallest bundle | Auto Animate → Motion One |
| Easiest to learn | Auto Animate → Lottie |
| Most powerful | GSAP → Framer Motion |
| Best DX | Framer Motion → React Spring |
| Best performance | Motion One → GSAP |

## Bundle Size Comparison

```
Auto Animate   ████ 2KB
Motion One     ██████ 3KB
React Spring   ██████████████████████████ 25KB
Lottie React   ████████████████████████████████████████ 40KB
Framer Motion  ██████████████████████████████████████████████████ 50KB
GSAP           ████████████████████████████████████████████████████████████ 60KB
```

## Combining Libraries

You can combine libraries for different needs:

```tsx
// Auto Animate for list animations
// Framer Motion for complex interactions
// Lottie for loading states

function Dashboard() {
  const [parent] = useAutoAnimate(); // Lists

  return (
    <motion.div whileHover={{ scale: 1.02 }}> {/* Framer */}
      <Lottie animationData={loading} /> {/* Lottie */}
      <ul ref={parent}>{items.map(...)}</ul> {/* Auto Animate */}
    </motion.div>
  );
}
```

## Performance Tips

1. **Prefer transforms** - All libraries perform better with `x`, `y`, `scale`, `rotate`
2. **Avoid layout animations** - `width`, `height`, `top`, `left` cause reflows
3. **Use `will-change` sparingly** - Let browsers optimize
4. **Lazy load** - Import animation libraries only when needed
5. **Reduce motion** - Respect `prefers-reduced-motion`

## Templates Available

| Template | Library | Path |
|----------|---------|------|
| react-framer-motion | Framer Motion 11 | `templates/react/animation/react-framer-motion` |
| react-react-spring | React Spring 9 | `templates/react/animation/react-react-spring` |
| react-gsap | GSAP 3 | `templates/react/animation/react-gsap` |
| react-lottie | Lottie React 2 | `templates/react/animation/react-lottie` |
| react-motion-one | Motion 11 | `templates/react/animation/react-motion-one` |
| react-auto-animate | Auto Animate 0.8 | `templates/react/animation/react-auto-animate` |

## Resources

- [Framer Motion](https://www.framer.com/motion/)
- [React Spring](https://www.react-spring.dev/)
- [GSAP](https://gsap.com/)
- [LottieFiles](https://lottiefiles.com/)
- [Motion One](https://motion.dev/)
- [Auto Animate](https://auto-animate.formkit.com/)
