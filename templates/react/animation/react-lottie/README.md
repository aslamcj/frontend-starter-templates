# React + Lottie

Production-ready React template with Lottie animations for stunning, lightweight vector animations.

## Stack

- **React 19** - UI library
- **lottie-react 2** - React wrapper for Lottie
- **@lottiefiles/dotlottie-react** - DotLottie format support
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool

## Quick Start

```bash
pnpm install
pnpm dev
```

## What is Lottie?

Lottie is an animation format that renders After Effects animations in real-time. Animations are exported as JSON and are small, scalable, and interactive.

## Features Demonstrated

### Basic Lottie Animation

```tsx
import Lottie from 'lottie-react';
import animationData from './animation.json';

function BasicAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: 200, height: 200 }}
    />
  );
}
```

### Controlled Animation

```tsx
import { useRef } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';

function ControlledAnimation() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handlePlay = () => lottieRef.current?.play();
  const handlePause = () => lottieRef.current?.pause();
  const handleStop = () => lottieRef.current?.stop();

  return (
    <>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
      />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
```

### Interactive Animations

```tsx
function HoverAnimation() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
      />
    </div>
  );
}
```

### Segment Playback

```tsx
function SegmentPlayback() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const playIntro = () => {
    lottieRef.current?.playSegments([0, 30], true);
  };

  const playOutro = () => {
    lottieRef.current?.playSegments([30, 60], true);
  };

  return (
    <>
      <Lottie lottieRef={lottieRef} animationData={data} />
      <button onClick={playIntro}>Play Intro</button>
      <button onClick={playOutro}>Play Outro</button>
    </>
  );
}
```

### DotLottie Format

```tsx
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function DotLottieAnimation() {
  return (
    <DotLottieReact
      src="https://example.com/animation.lottie"
      loop
      autoplay
    />
  );
}
```

## Components Included

| Component | Description |
|-----------|-------------|
| `BasicLottie` | Simple auto-playing animation |
| `ControlledLottie` | Full playback controls |
| `InteractiveLottie` | Hover/click triggered |
| `LottieWithSegments` | Segment playback demo |
| `LottieLoader` | Loading state animation |
| `DotLottieDemo` | Optimized .lottie format |

## Hooks Included

| Hook | Description |
|------|-------------|
| `useLottieControls` | Full animation control API |
| `useLottieInteraction` | Interaction-based triggers |

## API Reference

### Lottie Props

```tsx
interface LottieProps {
  animationData: object;      // JSON animation data
  loop?: boolean | number;    // Loop animation
  autoplay?: boolean;         // Auto-start
  speed?: number;             // Playback speed
  direction?: 1 | -1;         // Forward/reverse
  segments?: [number, number]; // Frame range
  onComplete?: () => void;    // Completion callback
  onLoopComplete?: () => void;
  onEnterFrame?: () => void;
  onSegmentStart?: () => void;
}
```

### LottieRef Methods

```tsx
interface LottieRefCurrentProps {
  play(): void;
  pause(): void;
  stop(): void;
  setSpeed(speed: number): void;
  setDirection(direction: 1 | -1): void;
  goToAndStop(frame: number, isFrame?: boolean): void;
  goToAndPlay(frame: number, isFrame?: boolean): void;
  playSegments(segments: [number, number], forceFlag?: boolean): void;
  getDuration(inFrames?: boolean): number;
}
```

## Getting Animations

1. **LottieFiles** - [lottiefiles.com](https://lottiefiles.com) - Free animations
2. **After Effects** - Export with Bodymovin plugin
3. **Create your own** - Use LottieFiles editor

## Performance Tips

1. **Use .lottie format** - Smaller file size
2. **Lazy load animations** - Only load when needed
3. **Limit concurrent** - Don't run too many at once
4. **Reduce complexity** - Simpler animations = better performance

```tsx
// Lazy loading
const animationData = await import('./animation.json');

// Load from URL
<DotLottieReact src="/animations/loading.lottie" />
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## Resources

- [LottieFiles](https://lottiefiles.com/)
- [lottie-react Docs](https://lottiereact.com/)
- [Bodymovin Plugin](https://aescripts.com/bodymovin/)
- [DotLottie](https://dotlottie.io/)

## License

MIT
