# React + Rspack Boilerplate

A Rust-powered Webpack-compatible bundler for blazing fast builds.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Rspack](https://img.shields.io/badge/Rspack-1.1-FF6600)](https://rspack.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## Features

- **React 19** - Latest React features
- **Rspack** - 5-10x faster than Webpack
- **Webpack-compatible** - Use existing loaders/plugins
- **TypeScript** - Full type safety
- **SWC** - Fast TypeScript/JSX transforms
- **HMR** - Hot Module Replacement

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

## Why Rspack?

Rspack offers Webpack compatibility with Rust performance:

| Feature | Rspack | Webpack |
|---------|--------|---------|
| Cold Start | ~500ms | ~2-5s |
| HMR | <100ms | ~200ms |
| Build | ~2s | ~6s |
| Config | Same as Webpack | - |

---

## Migration from Webpack

1. Replace `webpack` with `@rspack/core`
2. Replace `ts-loader` with `builtin:swc-loader`
3. Rename `webpack.config.js` to `rspack.config.js`

```javascript
// Before (Webpack)
{
  test: /\.tsx?$/,
  use: 'ts-loader',
}

// After (Rspack)
{
  test: /\.tsx?$/,
  use: {
    loader: 'builtin:swc-loader',
    options: {
      jsc: {
        parser: { syntax: 'typescript', tsx: true },
        transform: { react: { runtime: 'automatic' } },
      },
    },
  },
}
```

---

## Resources

- [Rspack Documentation](https://rspack.dev/)
- [React Documentation](https://react.dev/)

---

## License

MIT License
