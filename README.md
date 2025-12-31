# React & Next.js Boilerplate Collection

A comprehensive, well-documented collection of production-ready boilerplate projects for React.js and Next.js applications.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Overview

This repository contains **43 boilerplate templates** organized by category, each featuring:

- **TypeScript** with strict mode enabled
- **ESLint & Prettier** pre-configured
- **Comprehensive documentation** with best practices
- **Example components** demonstrating library usage
- **Production-ready** project structure

## Quick Navigation

| Category | Templates | Description |
|----------|-----------|-------------|
| [React Build Tools](#react--build-tools) | 5 | Vite, Webpack, Parcel, esbuild, Rspack |
| [Next.js Build Tools](#nextjs--build-tools) | 2 | Webpack, Turbopack |
| [React Styling](#react--styling) | 7 | Tailwind, Styled Components, Emotion, CSS Modules, Sass, Vanilla Extract, shadcn/ui |
| [Next.js Styling](#nextjs--styling) | 3 | Tailwind, Styled Components, shadcn/ui |
| [React State Management](#react--state-management) | 7 | Redux Toolkit, Zustand, Jotai, Recoil, MobX, TanStack Query, Context+Reducer |
| [Next.js State Management](#nextjs--state-management) | 3 | Redux Toolkit, Zustand, TanStack Query |
| [React Testing](#react--testing) | 3 | Jest, Vitest, Playwright |
| [Next.js Testing](#nextjs--testing) | 3 | Jest, Vitest, Playwright |
| [React Animation](#react--animation) | 6 | Framer Motion, React Spring, GSAP, Lottie, Motion One, Auto Animate |
| [Full-Stack Combos](#full-stack-combos) | 4 | Production-ready complete stacks |

---

## React + Build Tools

Modern build tools for React applications with different trade-offs in speed, configuration, and features.

| Template | Build Tool | Dev Server | HMR | Bundle Size |
|----------|------------|------------|-----|-------------|
| [react-vite](./templates/react/build-tools/react-vite/) | Vite 6 | Lightning fast | Instant | Optimized |
| [react-webpack](./templates/react/build-tools/react-webpack/) | Webpack 5 | Moderate | Fast | Configurable |
| [react-parcel](./templates/react/build-tools/react-parcel/) | Parcel 2 | Fast | Fast | Zero-config |
| [react-esbuild](./templates/react/build-tools/react-esbuild/) | esbuild | Fastest | Instant | Minimal |
| [react-rspack](./templates/react/build-tools/react-rspack/) | Rspack | Very fast | Fast | Optimized |

> **Recommendation**: Use **Vite** for most projects. It offers the best balance of speed and features.

---

## Next.js + Build Tools

| Template | Build Tool | Description |
|----------|------------|-------------|
| [nextjs-webpack](./templates/nextjs/build-tools/nextjs-webpack/) | Webpack 5 | Default Next.js bundler |
| [nextjs-turbopack](./templates/nextjs/build-tools/nextjs-turbopack/) | Turbopack | Next-gen Rust bundler (experimental) |

---

## React + Styling

| Template | Library | Approach | Runtime |
|----------|---------|----------|---------|
| [react-tailwind](./templates/react/styling/react-tailwind/) | Tailwind CSS 4 | Utility-first | Zero |
| [react-styled-components](./templates/react/styling/react-styled-components/) | Styled Components | CSS-in-JS | Yes |
| [react-emotion](./templates/react/styling/react-emotion/) | Emotion | CSS-in-JS | Yes |
| [react-css-modules](./templates/react/styling/react-css-modules/) | CSS Modules | Scoped CSS | Zero |
| [react-sass](./templates/react/styling/react-sass/) | Sass/SCSS | Preprocessor | Zero |
| [react-vanilla-extract](./templates/react/styling/react-vanilla-extract/) | Vanilla Extract | CSS-in-TS | Zero |
| [react-shadcn](./templates/react/styling/react-shadcn/) | shadcn/ui | Component library | Zero |

> **Recommendation**: Use **Tailwind CSS** for utility-first styling or **shadcn/ui** for pre-built accessible components.

---

## Next.js + Styling

| Template | Library | SSR Support |
|----------|---------|-------------|
| [nextjs-tailwind](./templates/nextjs/styling/nextjs-tailwind/) | Tailwind CSS 4 | Full |
| [nextjs-styled-components](./templates/nextjs/styling/nextjs-styled-components/) | Styled Components | With config |
| [nextjs-shadcn](./templates/nextjs/styling/nextjs-shadcn/) | shadcn/ui | Full |

---

## React + State Management

| Template | Library | Type | Best For |
|----------|---------|------|----------|
| [react-redux-toolkit](./templates/react/state-management/react-redux-toolkit/) | Redux Toolkit | Flux | Complex apps, time-travel debugging |
| [react-zustand](./templates/react/state-management/react-zustand/) | Zustand | Minimal | Simple global state |
| [react-jotai](./templates/react/state-management/react-jotai/) | Jotai | Atomic | Bottom-up state composition |
| [react-recoil](./templates/react/state-management/react-recoil/) | Recoil | Atomic | Complex derived state |
| [react-mobx](./templates/react/state-management/react-mobx/) | MobX | Observable | Reactive programming |
| [react-tanstack-query](./templates/react/state-management/react-tanstack-query/) | TanStack Query | Server | Data fetching & caching |
| [react-context-reducer](./templates/react/state-management/react-context-reducer/) | Context + useReducer | Built-in | Simple apps, no deps |

> **Recommendation**: Use **Zustand** for simplicity, **Redux Toolkit** for complex apps, **TanStack Query** for server state.

---

## Next.js + State Management

| Template | Library | SSR Support |
|----------|---------|-------------|
| [nextjs-redux-toolkit](./templates/nextjs/state-management/nextjs-redux-toolkit/) | Redux Toolkit | With hydration |
| [nextjs-zustand](./templates/nextjs/state-management/nextjs-zustand/) | Zustand | With persist |
| [nextjs-tanstack-query](./templates/nextjs/state-management/nextjs-tanstack-query/) | TanStack Query | Full |

---

## React + Testing

| Template | Framework | Type | Speed |
|----------|-----------|------|-------|
| [react-jest](./templates/react/testing/react-jest/) | Jest + RTL | Unit/Integration | Moderate |
| [react-vitest](./templates/react/testing/react-vitest/) | Vitest + RTL | Unit/Integration | Fast |
| [react-playwright](./templates/react/testing/react-playwright/) | Playwright | E2E + Component | Moderate |

> **Recommendation**: Use **Vitest** for unit tests (especially with Vite), **Playwright** for E2E.

---

## Next.js + Testing

| Template | Framework | SSR Testing |
|----------|-----------|-------------|
| [nextjs-jest](./templates/nextjs/testing/nextjs-jest/) | Jest + RTL | Supported |
| [nextjs-vitest](./templates/nextjs/testing/nextjs-vitest/) | Vitest + RTL | Supported |
| [nextjs-playwright](./templates/nextjs/testing/nextjs-playwright/) | Playwright | Full |

---

## React + Animation

Modern animation libraries for React applications with different capabilities and trade-offs.

| Template | Library | Bundle Size | Best For |
|----------|---------|-------------|----------|
| [react-framer-motion](./templates/react/animation/react-framer-motion/) | Framer Motion 11 | ~50KB | Complex UI, gestures, layout |
| [react-react-spring](./templates/react/animation/react-react-spring/) | React Spring 9 | ~25KB | Physics-based, natural motion |
| [react-gsap](./templates/react/animation/react-gsap/) | GSAP 3 | ~60KB | Professional, timelines, scroll |
| [react-lottie](./templates/react/animation/react-lottie/) | Lottie React 2 | ~40KB | After Effects animations |
| [react-motion-one](./templates/react/animation/react-motion-one/) | Motion 11 | ~3KB | Lightweight, performance |
| [react-auto-animate](./templates/react/animation/react-auto-animate/) | Auto Animate 0.8 | ~2KB | Zero-config, DOM changes |

> **Recommendation**: Use **Auto Animate** for simple list animations, **Framer Motion** for complex UI, **GSAP** for professional motion design, **Lottie** for designer-created animations.

---

## Full-Stack Combos

Production-ready templates combining the best tools:

| Template | Stack | Use Case |
|----------|-------|----------|
| [react-vite-tailwind-zustand-vitest](./templates/full-stack/react-vite-tailwind-zustand-vitest/) | Vite + Tailwind + Zustand + Vitest | Modern SPA |
| [react-vite-shadcn-tanstack-vitest](./templates/full-stack/react-vite-shadcn-tanstack-vitest/) | Vite + shadcn + TanStack Query + Vitest | Data-driven SPA |
| [nextjs-tailwind-zustand-jest](./templates/full-stack/nextjs-tailwind-zustand-jest/) | Next.js + Tailwind + Zustand + Jest | Full-stack app |
| [nextjs-shadcn-tanstack-playwright](./templates/full-stack/nextjs-shadcn-tanstack-playwright/) | Next.js + shadcn + TanStack + Playwright | Enterprise app |

---

## Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **pnpm** 9.x (recommended) or npm/yarn

### Using a Template

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-nextjs-boilerplates.git
   cd react-nextjs-boilerplates
   ```

2. **Navigate to desired template**:
   ```bash
   cd templates/react/build-tools/react-vite
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Start development server**:
   ```bash
   pnpm dev
   ```

### Copy Template to New Project

```bash
# Copy a template to start a new project
cp -r templates/react/build-tools/react-vite ../my-new-project
cd ../my-new-project
pnpm install
```

---

## Documentation

Comprehensive guides comparing different approaches:

- [Getting Started Guide](./docs/getting-started.md)
- [Build Tools Comparison](./docs/build-tools-comparison.md)
- [Styling Libraries Comparison](./docs/styling-comparison.md)
- [State Management Comparison](./docs/state-management-comparison.md)
- [Testing Frameworks Comparison](./docs/testing-comparison.md)
- [Animation Libraries Comparison](./docs/animation-libraries.md)

---

## Project Structure

```
AslamProjects/
├── README.md                 # This file
├── CONTRIBUTING.md           # Contribution guidelines
├── .gitignore               # Git ignore rules
├── docs/                    # Comparison documentation
│   ├── getting-started.md
│   ├── build-tools-comparison.md
│   ├── styling-comparison.md
│   ├── state-management-comparison.md
│   └── testing-comparison.md
└── templates/
    ├── react/
    │   ├── build-tools/     # 5 templates
    │   ├── styling/         # 7 templates
    │   ├── state-management/ # 7 templates
    │   ├── testing/         # 3 templates
    │   └── animation/       # 6 templates
    ├── nextjs/
    │   ├── build-tools/     # 2 templates
    │   ├── styling/         # 3 templates
    │   ├── state-management/ # 3 templates
    │   └── testing/         # 3 templates
    └── full-stack/          # 4 templates
```

---

## Tech Stack

All templates share these foundational technologies:

| Technology | Version | Purpose |
|------------|---------|---------|
| TypeScript | 5.x | Type safety |
| React | 19 | UI library |
| Next.js | 15 | React framework (where applicable) |
| ESLint | 9.x | Linting |
| Prettier | 3.x | Code formatting |

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- [React](https://react.dev/) - The library for web and native user interfaces
- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- All the amazing open-source libraries featured in these templates
