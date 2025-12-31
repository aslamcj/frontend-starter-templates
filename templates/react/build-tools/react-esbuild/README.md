# React + esbuild Boilerplate

The fastest JavaScript bundler for React applications.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![esbuild](https://img.shields.io/badge/esbuild-0.24-FFCF00?logo=esbuild)](https://esbuild.github.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## Features

- **React 19** - Latest React features
- **esbuild** - 10-100x faster than alternatives
- **TypeScript** - Full type safety
- **Minimal setup** - Simple build scripts
- **Tiny output** - Optimized bundles

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build for production
pnpm build

# Preview build
pnpm preview
```

---

## Performance

esbuild is written in Go, making it extremely fast:

```
esbuild     ████ 0.5s
Vite        ████████████ 3s
Webpack     ████████████████████████ 6s
```

---

## Project Structure

```
react-esbuild/
├── scripts/
│   ├── dev.js       # Development server
│   └── build.js     # Production build
├── src/
│   ├── components/
│   ├── hooks/
│   └── main.tsx
├── public/
└── package.json
```

---

## When to Use esbuild

- Maximum build speed needed
- Building libraries
- Simple bundling requirements
- Build scripts and tooling

---

## Resources

- [esbuild Documentation](https://esbuild.github.io/)
- [React Documentation](https://react.dev/)

---

## License

MIT License
