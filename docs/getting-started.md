# Getting Started

This guide will help you choose the right boilerplate template and get your project up and running quickly.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Choosing a Template](#choosing-a-template)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Customization](#customization)
- [Next Steps](#next-steps)

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required

| Tool | Version | Check Command |
|------|---------|---------------|
| Node.js | 20.x or higher | `node --version` |
| pnpm | 9.x or higher | `pnpm --version` |

### Installing pnpm

If you don't have pnpm installed:

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using Corepack (Node.js 16.10+)
corepack enable
corepack prepare pnpm@latest --activate
```

### Why pnpm?

- **Faster** - Parallel installation and efficient caching
- **Disk efficient** - Shared dependencies across projects
- **Strict** - Prevents phantom dependencies
- **Modern** - Native workspace support

---

## Choosing a Template

### Decision Tree

```
Are you building a full-stack app with SSR/SSG?
├── YES → Use Next.js templates
│   ├── Need pre-built components? → nextjs-shadcn
│   ├── Just need styling? → nextjs-tailwind
│   └── Need complex state? → nextjs-zustand or nextjs-redux-toolkit
│
└── NO → Use React (SPA) templates
    ├── Which build tool?
    │   ├── Best overall → react-vite
    │   ├── Need maximum config → react-webpack
    │   └── Zero config → react-parcel
    │
    ├── Which styling?
    │   ├── Utility-first → react-tailwind
    │   ├── Component library → react-shadcn
    │   └── CSS-in-JS → react-styled-components or react-emotion
    │
    └── Which state management?
        ├── Simple global state → react-zustand
        ├── Complex with devtools → react-redux-toolkit
        ├── Server state → react-tanstack-query
        └── Atomic state → react-jotai
```

### Quick Recommendations

| Use Case | Recommended Template |
|----------|---------------------|
| Learning React | `react-vite` |
| Modern SPA | `react-vite-tailwind-zustand-vitest` |
| Marketing site | `nextjs-tailwind` |
| Dashboard/Admin | `nextjs-shadcn-tanstack-playwright` |
| Data-heavy app | `react-tanstack-query` or `nextjs-tanstack-query` |
| Large enterprise | `react-redux-toolkit` or `nextjs-redux-toolkit` |

---

## Installation

### Method 1: Clone and Navigate

```bash
# Clone the repository
git clone https://github.com/your-username/react-nextjs-boilerplates.git

# Navigate to your chosen template
cd react-nextjs-boilerplates/templates/react/build-tools/react-vite

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Method 2: Copy Template to New Project

```bash
# Clone the repository
git clone https://github.com/your-username/react-nextjs-boilerplates.git

# Copy template to new location
cp -r react-nextjs-boilerplates/templates/react/build-tools/react-vite ~/projects/my-app

# Navigate and install
cd ~/projects/my-app
pnpm install

# Initialize new git repository
rm -rf .git
git init
git add .
git commit -m "Initial commit from react-vite template"
```

### Method 3: degit (Recommended)

```bash
# Install degit if needed
pnpm add -g degit

# Copy template directly
degit your-username/react-nextjs-boilerplates/templates/react/build-tools/react-vite my-app

# Navigate and install
cd my-app
pnpm install
```

---

## Project Structure

All templates follow a consistent structure:

```
my-app/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/        # React components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   └── Layout/
│   ├── hooks/             # Custom React hooks
│   │   ├── useCounter.ts
│   │   └── useLocalStorage.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/             # Utility functions
│   │   └── helpers.ts
│   ├── App.tsx            # Root component
│   └── main.tsx           # Entry point
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML template (Vite/etc)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Template documentation
```

### Additional Folders by Category

**Styling templates** add:
```
src/
├── styles/
│   ├── globals.css
│   └── variables.css
```

**State management templates** add:
```
src/
├── store/
│   ├── index.ts
│   └── slices/
│       └── counterSlice.ts
```

**Testing templates** add:
```
├── src/
│   └── components/
│       └── Button/
│           └── Button.test.tsx
├── vitest.config.ts      # or jest.config.ts
└── playwright.config.ts  # for E2E tests
```

---

## Development Workflow

### Available Scripts

All templates include these standard scripts:

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Run linter
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check

# Type check without emitting
pnpm typecheck
```

### Testing Scripts (where applicable)

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests (Playwright)
pnpm test:e2e
```

### Recommended Workflow

1. **Start dev server**: `pnpm dev`
2. **Make changes**: Edit files in `src/`
3. **Check types**: `pnpm typecheck`
4. **Lint code**: `pnpm lint:fix`
5. **Format code**: `pnpm format`
6. **Run tests**: `pnpm test`
7. **Build**: `pnpm build`

---

## Customization

### Updating package.json

Change the project name and version:

```json
{
  "name": "your-project-name",
  "version": "0.1.0",
  "description": "Your project description"
}
```

### TypeScript Configuration

The default `tsconfig.json` uses strict settings. Customize as needed:

```json
{
  "compilerOptions": {
    // Add path aliases
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

### ESLint Configuration

Modify `eslint.config.js` to adjust rules:

```javascript
export default [
  // ... existing config
  {
    rules: {
      // Add or override rules
      'no-console': 'warn',
    },
  },
];
```

### Environment Variables

Create `.env` files for environment-specific configuration:

```bash
# .env.development
VITE_API_URL=http://localhost:3001

# .env.production
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Next Steps

### Adding Features

1. **Add routing**: Install `react-router-dom`
2. **Add forms**: Install `react-hook-form` + `zod`
3. **Add animations**: Install `framer-motion`
4. **Add icons**: Install `lucide-react`

### Deployment

| Platform | Command | Guide |
|----------|---------|-------|
| Vercel | `vercel` | [Vercel Docs](https://vercel.com/docs) |
| Netlify | `netlify deploy` | [Netlify Docs](https://docs.netlify.com) |
| AWS Amplify | `amplify publish` | [Amplify Docs](https://docs.amplify.aws) |

### Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Next.js Documentation](https://nextjs.org/docs)

---

## Troubleshooting

### Common Issues

**Node version mismatch**
```bash
# Check version
node --version

# Use nvm to switch
nvm use 20
```

**pnpm not found**
```bash
# Install pnpm
npm install -g pnpm
```

**Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
pnpm dev --port 3000
```

**TypeScript errors after install**
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

---

Need more help? Check the [template-specific README](../templates/) or open an issue!
