# React + Styled Components Boilerplate

CSS-in-JS with tagged template literals and full theming support.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6-DB7093?logo=styled-components)](https://styled-components.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## Features

- **Styled Components 6** - Latest CSS-in-JS
- **ThemeProvider** - Consistent theming
- **TypeScript** - Full type safety
- **Dynamic Styling** - Props-based styles

---

## Quick Start

```bash
pnpm install
pnpm dev
```

---

## Usage

### Basic Styled Component

```tsx
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
```

### With Props

```tsx
interface ButtonProps {
  $variant?: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  background: ${({ $variant, theme }) =>
    $variant === 'secondary'
      ? theme.colors.secondary
      : theme.colors.primary};
`;
```

### Extending Styles

```tsx
const PrimaryButton = styled(Button)`
  font-weight: bold;
`;
```

---

## Resources

- [Styled Components Docs](https://styled-components.com/docs)

---

## License

MIT License
