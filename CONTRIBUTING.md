# Contributing to React & Next.js Boilerplate Collection

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Template Standards](#template-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please be respectful and inclusive in all interactions.

---

## How Can I Contribute?

### Reporting Bugs

- Check existing issues to avoid duplicates
- Use the bug report template
- Include steps to reproduce
- Specify which template is affected

### Suggesting New Templates

- Open an issue with the "template request" label
- Describe the use case and benefits
- Reference official documentation for the proposed technology

### Improving Documentation

- Fix typos or unclear explanations
- Add examples or clarifications
- Update outdated information

### Adding New Templates

- Follow the [Template Standards](#template-standards)
- Include comprehensive documentation
- Add example components demonstrating the library

---

## Development Setup

### Prerequisites

```bash
# Required
node --version  # v20.x or higher
pnpm --version  # v9.x or higher

# Install pnpm if needed
npm install -g pnpm
```

### Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/react-nextjs-boilerplates.git
cd react-nextjs-boilerplates

# Navigate to a template
cd templates/react/build-tools/react-vite

# Install dependencies
pnpm install

# Start development
pnpm dev
```

---

## Template Standards

Every template must follow these standards to maintain consistency and quality.

### Required Files

```
template-name/
├── README.md           # Comprehensive documentation
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint flat config
├── .prettierrc         # Prettier configuration
├── .gitignore          # Git ignore rules
└── src/
    ├── main.tsx        # Entry point
    ├── App.tsx         # Root component
    ├── components/     # Example components
    ├── hooks/          # Custom hooks
    └── types/          # TypeScript types
```

### package.json Requirements

```json
{
  "name": "template-name",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "...",
    "build": "...",
    "preview": "...",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit"
  }
}
```

### TypeScript Configuration

All templates must use strict TypeScript:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### README Structure

Each template README must include:

1. **Header** - Name, badges, one-line description
2. **Features** - Key features and capabilities
3. **Tech Stack** - Technologies with versions
4. **Quick Start** - Installation and running
5. **Project Structure** - Folder breakdown
6. **Available Scripts** - All npm scripts
7. **Configuration** - How to customize
8. **Library Guide** - Deep dive into the main library
9. **Best Practices** - Recommendations
10. **Common Patterns** - Code examples
11. **Troubleshooting** - Common issues
12. **Resources** - Links to docs

### Code Style

- Use functional components with hooks
- Prefer named exports over default exports
- Use TypeScript strict mode
- Follow ESLint and Prettier rules
- Write meaningful comments for complex logic
- Use descriptive variable and function names

### Component Structure

```tsx
// components/Button/Button.tsx
import type { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

```tsx
// components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

---

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style (formatting, etc.) |
| `refactor` | Code refactoring |
| `test` | Adding tests |
| `chore` | Maintenance tasks |

### Scopes

- `react-vite` - React Vite template
- `react-webpack` - React Webpack template
- `nextjs-tailwind` - Next.js Tailwind template
- `docs` - Documentation
- `root` - Root-level changes

### Examples

```bash
feat(react-vite): add dark mode toggle component

docs(readme): update installation instructions

fix(nextjs-tailwind): resolve SSR hydration mismatch

chore(deps): update dependencies to latest versions
```

---

## Pull Request Process

### Before Submitting

1. **Fork the repository** and create a feature branch
2. **Follow the template standards** outlined above
3. **Test your changes** - ensure build and lint pass
4. **Update documentation** if needed

### PR Checklist

- [ ] Code follows the template standards
- [ ] All scripts work (`dev`, `build`, `lint`, `typecheck`)
- [ ] README is comprehensive and follows the structure
- [ ] No console errors or warnings
- [ ] TypeScript has no errors
- [ ] ESLint passes with no errors
- [ ] Prettier formatting is applied

### Review Process

1. Submit your PR with a clear description
2. Wait for automated checks to pass
3. Address any review feedback
4. Once approved, your PR will be merged

---

## Questions?

If you have questions or need help:

1. Check existing issues and discussions
2. Open a new issue with the "question" label
3. Be specific about your question and provide context

---

Thank you for contributing!
