# React + Vite + Tailwind + Zustand + Vitest

Full-stack React template with the best modern tools.

## Stack

- ⚛️ **React 19** - UI library
- ⚡ **Vite 6** - Fast build tool
- 🎨 **Tailwind CSS 4** - Utility-first styling
- 🐻 **Zustand 5** - State management
- 🧪 **Vitest** - Unit testing
- 📝 **TypeScript 5.7** - Type safety

## Quick Start

```bash
pnpm install
pnpm dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests (watch mode) |
| `pnpm test:ui` | Run tests with UI |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── Counter.tsx
│   └── __tests__/
│       └── Counter.test.tsx
├── store/
│   └── useCounterStore.ts
├── hooks/
│   └── __tests__/
├── App.tsx
├── main.tsx
├── index.css
└── setupTests.ts
```

## Why This Stack?

| Tool | Why |
|------|-----|
| Vite | Fastest dev server, instant HMR |
| Tailwind | Rapid styling, small bundle |
| Zustand | Simple, minimal, fast |
| Vitest | Native Vite integration, fast tests |

## License

MIT
