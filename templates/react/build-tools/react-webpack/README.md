# React + Webpack Boilerplate

A production-ready React boilerplate with Webpack 5 for maximum configuration control.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?logo=webpack)](https://webpack.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint)](https://eslint.org/)

## Features

- **React 19** - Latest React with new features
- **Webpack 5** - Full control over bundling
- **TypeScript 5.7** - Strict type checking
- **Hot Module Replacement** - Fast development
- **Code Splitting** - Automatic vendor chunks
- **CSS Extraction** - Optimized for production
- **Path Aliases** - Clean `@/` imports
- **Source Maps** - Easy debugging

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## Project Structure

```
react-webpack/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── hooks/            # Custom hooks
│   ├── styles/           # CSS files
│   ├── types/            # TypeScript types
│   ├── utils/            # Utilities
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── webpack-env.d.ts  # Type declarations
├── index.html            # HTML template
├── webpack.config.js     # Webpack configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev server at http://localhost:5173 |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Type check TypeScript |

---

## Webpack Configuration

### Key Features

```javascript
// webpack.config.js highlights

// Path aliases
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
},

// Code splitting
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
      },
    },
  },
},
```

### Adding Loaders

```javascript
// Add Sass support
{
  test: /\.s[ac]ss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
}

// Add images with optimization
{
  test: /\.(png|jpg|gif)$/i,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 10 * 1024, // 10kb
    },
  },
}
```

---

## When to Use Webpack

Choose Webpack over Vite when you need:

- **Maximum configuration control**
- **Module Federation** for micro-frontends
- **Complex build pipelines**
- **Extensive plugin ecosystem**
- **Legacy browser support**

---

## Resources

- [Webpack Documentation](https://webpack.js.org/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## License

MIT License
