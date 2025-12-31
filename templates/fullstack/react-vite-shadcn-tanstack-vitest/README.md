# React + Vite + shadcn/ui + TanStack Query + Vitest

Full-stack React with accessible UI and server state.

## Stack

- ⚛️ **React 19** - UI library
- ⚡ **Vite 6** - Fast build tool
- 🎨 **shadcn/ui** - Accessible components
- 🔄 **TanStack Query 5** - Server state
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
| `pnpm test` | Run tests |
| `pnpm test:ui` | Run tests with UI |
| `pnpm lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── PostsList.tsx
├── api/
│   └── posts.ts      # API functions
├── hooks/
│   └── usePosts.ts   # TanStack Query hooks
├── lib/
│   └── utils.ts      # Utilities
├── App.tsx
└── main.tsx
```

## License

MIT
