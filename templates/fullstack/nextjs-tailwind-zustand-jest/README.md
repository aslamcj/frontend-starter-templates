# Next.js + Tailwind + Zustand + Jest

Full-stack Next.js template with modern tooling.

## Stack

- ⚛️ **Next.js 15** - React framework
- 🎨 **Tailwind CSS 4** - Utility styling
- 🐻 **Zustand 5** - State management
- 🧪 **Jest** - Unit testing
- ⚡ **Turbopack** - Fast development

## Quick Start

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Counter.tsx
│   └── __tests__/
└── store/
    └── useCounterStore.ts
```

## License

MIT
