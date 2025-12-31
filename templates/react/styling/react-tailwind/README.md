# React + Tailwind CSS Boilerplate

A utility-first CSS approach for rapid UI development.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## Features

- **Tailwind CSS 4** - Latest version with Vite plugin
- **Dark Mode** - Built-in dark mode support
- **Prettier Plugin** - Auto-sorts Tailwind classes
- **Custom Theme** - CSS variables for theming
- **Utility Components** - Button, Card examples

---

## Quick Start

```bash
pnpm install
pnpm dev
```

---

## Key Concepts

### Utility Classes

```tsx
<button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Click me
</button>
```

### Responsive Design

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

### Dark Mode

```tsx
<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
  Adapts to system preference
</div>
```

### Component Extraction

```tsx
// When patterns repeat, extract to components
function Button({ children }) {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
      {children}
    </button>
  );
}
```

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Guide](https://tailwindcss.com/docs/v4-beta)

---

## License

MIT License
