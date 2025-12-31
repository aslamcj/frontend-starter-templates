# Next.js + shadcn/ui + TanStack Query + Playwright

Full-stack Next.js template with E2E testing.

## Stack

- ⚛️ **Next.js 15** - React framework
- 🎨 **shadcn/ui** - Accessible components
- 🔄 **TanStack Query 5** - Server state
- 🎭 **Playwright** - E2E testing
- ⚡ **Turbopack** - Fast development

## Quick Start

```bash
pnpm install
npx playwright install
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development |
| `pnpm build` | Build for production |
| `pnpm test` | Run E2E tests |
| `pnpm test:ui` | Run tests with UI |
| `pnpm test:headed` | Run tests visually |
| `pnpm lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── PostsList.tsx
│   └── QueryProvider.tsx
├── api/
│   └── posts.ts
├── hooks/
│   └── usePosts.ts
└── lib/
    └── utils.ts
e2e/
└── posts.spec.ts
```

## License

MIT
