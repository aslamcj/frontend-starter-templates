# Styling Libraries Comparison

A comprehensive comparison of styling approaches and libraries for React applications.

## Table of Contents

- [Overview](#overview)
- [Quick Comparison](#quick-comparison)
- [Detailed Analysis](#detailed-analysis)
  - [Tailwind CSS](#tailwind-css)
  - [Styled Components](#styled-components)
  - [Emotion](#emotion)
  - [CSS Modules](#css-modules)
  - [Sass/SCSS](#sassscss)
  - [Vanilla Extract](#vanilla-extract)
  - [shadcn/ui](#shadcnui)
- [Performance Comparison](#performance-comparison)
- [Decision Guide](#decision-guide)
- [Best Practices](#best-practices)

---

## Overview

Styling in React has evolved from traditional CSS to various modern approaches:

| Approach | Description |
|----------|-------------|
| **Utility-First** | Predefined utility classes (Tailwind) |
| **CSS-in-JS** | Write CSS in JavaScript (Styled Components, Emotion) |
| **Scoped CSS** | Component-scoped styles (CSS Modules) |
| **Preprocessors** | Enhanced CSS syntax (Sass) |
| **Zero-Runtime** | Build-time CSS extraction (Vanilla Extract) |
| **Component Libraries** | Pre-built components (shadcn/ui) |

---

## Quick Comparison

| Feature | Tailwind | Styled Components | Emotion | CSS Modules | Sass | Vanilla Extract | shadcn/ui |
|---------|----------|-------------------|---------|-------------|------|-----------------|-----------|
| **Runtime** | None | Yes | Yes | None | None | None | None |
| **Bundle Impact** | Low | Medium | Medium | None | None | None | Low |
| **TypeScript** | Good | Good | Excellent | Manual | Manual | Excellent | Excellent |
| **Learning Curve** | Medium | Low | Low | Low | Low | Medium | Low |
| **Theming** | Config | Props | Props | Variables | Variables | Themes | Variants |
| **SSR** | Full | Config needed | Config needed | Full | Full | Full | Full |
| **Dev Experience** | Great | Great | Great | Good | Good | Great | Excellent |

---

## Detailed Analysis

### Tailwind CSS

> **Recommendation**: Best for rapid development and consistent design systems

**Overview**

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS.

**Pros**
- Rapid development with utility classes
- Consistent design system out of the box
- Excellent documentation
- PurgeCSS for tiny production builds
- Great IDE support with IntelliSense
- No context switching between files

**Cons**
- HTML can become verbose
- Learning class names takes time
- Custom designs may need config
- Can be hard to read for newcomers

**Example**

```tsx
// Button.tsx
export function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}
```

**Configuration**

```javascript
// tailwind.config.js
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
};
```

---

### Styled Components

> **Recommendation**: Best for component-scoped styling with dynamic theming

**Overview**

Styled Components uses tagged template literals to style components, keeping styles and logic together with full JavaScript power.

**Pros**
- Automatic critical CSS
- Scoped styles by default
- Dynamic styling with props
- Full CSS support
- Great theming capabilities
- Active community

**Cons**
- Runtime overhead
- Larger bundle size
- SSR requires configuration
- Can cause hydration issues

**Example**

```tsx
// Button.tsx
import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;

  ${({ variant }) =>
    variant === 'primary'
      ? `
        background-color: #2563eb;
        color: white;
        &:hover {
          background-color: #1d4ed8;
        }
      `
      : `
        background-color: #e5e7eb;
        color: #1f2937;
        &:hover {
          background-color: #d1d5db;
        }
      `}
`;

export function Button({ variant = 'primary', children }) {
  return <StyledButton variant={variant}>{children}</StyledButton>;
}
```

**Theming**

```tsx
// theme.ts
export const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
  },
};

// App.tsx
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

---

### Emotion

> **Recommendation**: Best for CSS-in-JS with excellent TypeScript support

**Overview**

Emotion is a performant CSS-in-JS library with both styled components and css prop approaches.

**Pros**
- Multiple styling approaches (css prop, styled)
- Excellent TypeScript support
- Smaller bundle than styled-components
- Great performance
- Source maps support

**Cons**
- Runtime overhead (though smaller)
- SSR configuration needed
- Two APIs can be confusing
- Babel plugin recommended

**Example**

```tsx
// Button.tsx - css prop approach
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyles = css`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background-color: #2563eb;
  color: white;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export function Button({ children }) {
  return <button css={buttonStyles}>{children}</button>;
}
```

```tsx
// Button.tsx - styled approach
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #2563eb;
  color: white;
`;

export function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
```

---

### CSS Modules

> **Recommendation**: Best for zero-runtime styling with scoped CSS

**Overview**

CSS Modules automatically scope CSS class names to components, preventing style conflicts without any runtime overhead.

**Pros**
- Zero runtime overhead
- Familiar CSS syntax
- Automatic scoping
- Works with any CSS preprocessor
- No learning curve for CSS developers

**Cons**
- Requires build configuration
- No dynamic styling
- Separate files for styles
- TypeScript support needs setup

**Example**

```css
/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
}

.primary {
  background-color: #2563eb;
  color: white;
}

.primary:hover {
  background-color: #1d4ed8;
}

.secondary {
  background-color: #e5e7eb;
  color: #1f2937;
}
```

```tsx
// Button.tsx
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
```

**TypeScript Support**

```typescript
// global.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
```

---

### Sass/SCSS

> **Recommendation**: Best for complex stylesheets with variables and mixins

**Overview**

Sass is a CSS preprocessor that adds variables, nesting, mixins, and more to standard CSS.

**Pros**
- Powerful features (mixins, functions)
- Mature and stable
- Great tooling support
- Easy to learn
- No runtime overhead

**Cons**
- Build step required
- Separate files from components
- Global scope by default
- Can lead to complex stylesheets

**Example**

```scss
// _variables.scss
$primary-color: #2563eb;
$secondary-color: #64748b;
$border-radius: 0.5rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;

// _mixins.scss
@mixin button-base {
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius;
  font-weight: 500;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;
}

// Button.scss
@import 'variables';
@import 'mixins';

.button {
  @include button-base;

  &--primary {
    background-color: $primary-color;
    color: white;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }

  &--secondary {
    background-color: lighten($secondary-color, 40%);
    color: $secondary-color;
  }
}
```

---

### Vanilla Extract

> **Recommendation**: Best for type-safe CSS with zero runtime

**Overview**

Vanilla Extract generates static CSS at build time while providing full TypeScript support and theming capabilities.

**Pros**
- Zero runtime CSS
- Full TypeScript support
- Type-safe themes
- Co-located with components
- Excellent performance

**Cons**
- Learning curve
- Requires build setup
- Less flexible than CSS-in-JS
- Smaller community

**Example**

```typescript
// Button.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  fontWeight: 500,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
});

export const button = styleVariants({
  primary: [base, {
    backgroundColor: '#2563eb',
    color: 'white',
    ':hover': {
      backgroundColor: '#1d4ed8',
    },
  }],
  secondary: [base, {
    backgroundColor: '#e5e7eb',
    color: '#1f2937',
    ':hover': {
      backgroundColor: '#d1d5db',
    },
  }],
});
```

```tsx
// Button.tsx
import { button } from './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return <button className={button[variant]}>{children}</button>;
}
```

---

### shadcn/ui

> **Recommendation**: Best for production-ready accessible components

**Overview**

shadcn/ui provides beautifully designed, accessible components built on Radix UI and styled with Tailwind CSS. Components are copied into your project for full customization.

**Pros**
- Accessible by default (Radix UI)
- Fully customizable (you own the code)
- Beautiful default styling
- TypeScript support
- No runtime overhead
- Dark mode support

**Cons**
- Requires Tailwind CSS
- Components copied to project
- Updates require manual sync
- Limited to provided components

**Example**

```tsx
// components/ui/button.tsx (generated by shadcn CLI)
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

---

## Performance Comparison

### Bundle Size Impact

```
CSS Modules    ████ 0 KB runtime
Sass/SCSS      ████ 0 KB runtime
Vanilla Extract████ 0 KB runtime
Tailwind       ████████ ~10 KB (full) / ~3 KB (purged)
Emotion        ████████████████ ~11 KB
Styled Comp.   ████████████████████ ~16 KB
```

### First Contentful Paint (FCP)

```
CSS Modules    ████ Fastest
Vanilla Extract████ Fastest
Tailwind       ████████ Fast
Sass           ████████ Fast
Emotion        ████████████ Moderate
Styled Comp.   ████████████████ Slower (FOUC risk)
```

---

## Decision Guide

### Choose Tailwind CSS if:
- Want rapid development
- Need consistent design system
- Building marketing sites or apps
- Team knows utility-first approach

### Choose Styled Components if:
- Prefer component-scoped styles
- Need dynamic theming
- Building component library
- Want full CSS power in JS

### Choose Emotion if:
- Want CSS-in-JS with flexibility
- Need excellent TypeScript support
- Prefer css prop syntax
- Need smaller bundle than styled-components

### Choose CSS Modules if:
- Want zero runtime overhead
- Team knows CSS well
- Building performance-critical apps
- Prefer separation of concerns

### Choose Sass/SCSS if:
- Have existing Sass codebase
- Need advanced CSS features
- Team knows Sass
- Building large applications

### Choose Vanilla Extract if:
- Need type-safe styling
- Want zero runtime
- Building design systems
- Need themeable components

### Choose shadcn/ui if:
- Want accessible components
- Need production-ready UI
- Using Tailwind CSS
- Want full control over code

---

## Best Practices

### General

1. **Be consistent** - Pick one approach per project
2. **Use design tokens** - Colors, spacing, typography
3. **Think mobile-first** - Start with small screens
4. **Optimize for performance** - Monitor bundle size

### Tailwind

```tsx
// Use cn() utility for conditional classes
import { cn } from '@/lib/utils';

function Button({ disabled, className }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    />
  );
}
```

### CSS-in-JS

```tsx
// Separate styled components from logic
// Button.styles.ts
export const StyledButton = styled.button`...`;

// Button.tsx
import { StyledButton } from './Button.styles';
```

### CSS Modules

```tsx
// Use classnames library for complex conditionals
import cn from 'classnames';
import styles from './Button.module.css';

function Button({ variant, disabled }) {
  return (
    <button
      className={cn(styles.button, styles[variant], {
        [styles.disabled]: disabled,
      })}
    />
  );
}
```

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Styled Components Documentation](https://styled-components.com/)
- [Emotion Documentation](https://emotion.sh/)
- [CSS Modules GitHub](https://github.com/css-modules/css-modules)
- [Sass Documentation](https://sass-lang.com/)
- [Vanilla Extract Documentation](https://vanilla-extract.style/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
