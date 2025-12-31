# React Context + Reducer

React 19 with built-in Context API and useReducer for state management.

## Features

- ⚛️ React 19 with TypeScript
- 🔄 useReducer for complex state logic
- 📦 Context API for state sharing
- ⚡ Vite 6 for fast development
- 🚀 Zero external dependencies

## Quick Start

```bash
pnpm install
pnpm dev
```

## Core Concepts

### Creating a Context with Reducer

```typescript
import { createContext, useContext, useReducer, type ReactNode } from 'react';

// 1. Define state and action types
interface CounterState {
  count: number;
}

type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET'; payload: number };

// 2. Create reducer function
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
}

// 3. Create context
interface CounterContextType {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}

const CounterContext = createContext<CounterContextType | null>(null);

// 4. Create provider
export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// 5. Create custom hook
export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }
  return context;
}
```

### Using the Context

```typescript
import { useCounter } from './context/CounterContext';

function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
```

### Action Creators

```typescript
// Optional: Create action creators for type safety
export const counterActions = {
  increment: (): CounterAction => ({ type: 'INCREMENT' }),
  decrement: (): CounterAction => ({ type: 'DECREMENT' }),
  set: (value: number): CounterAction => ({ type: 'SET', payload: value }),
};

// Usage
dispatch(counterActions.increment());
dispatch(counterActions.set(10));
```

### Combining Multiple Contexts

```typescript
// AppProviders.tsx
import { CounterProvider } from './CounterContext';
import { ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CounterProvider>
          {children}
        </CounterProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

### Optimized Context with Memoization

```typescript
import { useCallback, useMemo } from 'react';

function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  // Memoize action handlers
  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE' });
  }, []);

  // Memoize context value
  const value = useMemo(
    () => ({ theme: state.theme, toggleTheme }),
    [state.theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Async Actions Pattern

```typescript
function useAsyncCounter() {
  const { dispatch } = useCounter();
  const [isLoading, setIsLoading] = useState(false);

  const incrementAsync = useCallback(async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({ type: 'INCREMENT' });
    setIsLoading(false);
  }, [dispatch]);

  return { incrementAsync, isLoading };
}
```

## Project Structure

```
src/
├── context/
│   ├── CounterContext.tsx   # Counter state
│   ├── ThemeContext.tsx     # Theme state
│   └── index.tsx            # Combined providers
├── App.tsx                  # Main component
├── main.tsx                 # Entry point
└── index.css                # Styles
```

## When to Use Context + Reducer

| Use Case | Context + Reducer | External Library |
|----------|-------------------|------------------|
| Small apps | ✅ Perfect | Overkill |
| Medium apps | ✅ Good | Consider |
| Complex state | Consider | ✅ Recommended |
| Dev tools | ❌ Manual | ✅ Built-in |
| Bundle size | ✅ Zero | Adds weight |

## Best Practices

1. **Split contexts by domain** - Don't put everything in one context
2. **Use action creators** - Improves type safety and refactoring
3. **Memoize handlers** - Prevent unnecessary re-renders
4. **Keep reducers pure** - No side effects in reducers
5. **Type everything** - Full TypeScript coverage

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Learn More

- [React Context](https://react.dev/reference/react/useContext)
- [React useReducer](https://react.dev/reference/react/useReducer)
- [React Documentation](https://react.dev/)

## License

MIT
