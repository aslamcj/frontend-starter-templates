# Next.js + Webpack Boilerplate

A production-ready Next.js 15 boilerplate with the standard Webpack bundler.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## Features

- **Next.js 15** - App Router, Server Components
- **Webpack** - Default bundler with full configuration
- **TypeScript** - Strict type checking
- **ESLint** - Next.js recommended config
- **CSS Modules** - Scoped component styles
- **Path Aliases** - Clean `@/` imports

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## Project Structure

```
nextjs-webpack/
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home page
│       ├── page.module.css  # Page styles
│       ├── globals.css      # Global styles
│       └── about/
│           └── page.tsx     # About page
├── public/                  # Static assets
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development at http://localhost:3000 |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Type check TypeScript |

---

## Custom Webpack Configuration

Extend Webpack in `next.config.ts`:

```typescript
webpack: (config, { isServer }) => {
  // Add custom loaders
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  // Modify resolve
  config.resolve.alias['@lib'] = path.resolve('./src/lib');

  return config;
},
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Webpack Documentation](https://webpack.js.org/)

---

## License

MIT License
