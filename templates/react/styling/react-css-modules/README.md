# React + CSS Modules Boilerplate

Scoped CSS with zero runtime overhead - just plain CSS.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-Scoped-blue)](https://github.com/css-modules/css-modules)

## Quick Start

```bash
pnpm install && pnpm dev
```

## Usage

```tsx
import styles from './Button.module.css';

export function Button() {
  return <button className={styles.button}>Click</button>;
}
```

## License

MIT
