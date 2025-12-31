# State Management Comparison

A comprehensive comparison of state management solutions for React applications.

## Table of Contents

- [Overview](#overview)
- [Quick Comparison](#quick-comparison)
- [Detailed Analysis](#detailed-analysis)
  - [Redux Toolkit](#redux-toolkit)
  - [Zustand](#zustand)
  - [Jotai](#jotai)
  - [Recoil](#recoil)
  - [MobX](#mobx)
  - [TanStack Query](#tanstack-query)
  - [Context + useReducer](#context--usereducer)
- [Performance Comparison](#performance-comparison)
- [Decision Guide](#decision-guide)
- [Best Practices](#best-practices)

---

## Overview

State management in React can be categorized into:

| Type | Description | Libraries |
|------|-------------|-----------|
| **Flux-Based** | Centralized store with actions | Redux Toolkit |
| **Proxy-Based** | Observable state with automatic tracking | Zustand, MobX |
| **Atomic** | Bottom-up state composition | Jotai, Recoil |
| **Server State** | Data fetching and caching | TanStack Query |
| **Built-in** | React's native state management | Context + useReducer |

---

## Quick Comparison

| Feature | Redux Toolkit | Zustand | Jotai | Recoil | MobX | TanStack Query | Context |
|---------|---------------|---------|-------|--------|------|----------------|---------|
| **Bundle Size** | ~13 KB | ~2 KB | ~3 KB | ~21 KB | ~16 KB | ~13 KB | 0 KB |
| **Boilerplate** | Low | Minimal | Minimal | Low | Low | Low | Medium |
| **DevTools** | Excellent | Good | Good | Good | Good | Excellent | None |
| **Learning Curve** | Medium | Low | Low | Medium | Medium | Low | Low |
| **TypeScript** | Excellent | Excellent | Excellent | Good | Good | Excellent | Good |
| **SSR Support** | Good | Good | Good | Limited | Good | Excellent | Good |
| **Best For** | Large apps | Simple state | Atomic state | Derived state | Reactive | Server state | Simple apps |

---

## Detailed Analysis

### Redux Toolkit

> **Recommendation**: Best for large applications with complex state and team collaboration

**Overview**

Redux Toolkit (RTK) is the official, opinionated toolset for efficient Redux development. It simplifies store setup, reduces boilerplate, and includes powerful utilities.

**Pros**
- Excellent DevTools for debugging
- Time-travel debugging
- Predictable state updates
- Great for team collaboration
- RTK Query for data fetching
- Strong TypeScript support

**Cons**
- More boilerplate than alternatives
- Learning curve for Redux concepts
- Can be overkill for simple apps
- Requires understanding of immutability

**Example**

```typescript
// store/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

```tsx
// components/Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { increment, decrement } from '@/store/slices/counterSlice';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

---

### Zustand

> **Recommendation**: Best for simple to medium complexity with minimal boilerplate

**Overview**

Zustand is a small, fast, and scalable state management solution with a simple hooks-based API.

**Pros**
- Minimal boilerplate
- Tiny bundle size (~2 KB)
- No providers required
- Simple mental model
- Great TypeScript support
- Middleware support (persist, devtools)

**Cons**
- Less structured than Redux
- No built-in DevTools (middleware needed)
- Less suited for very complex state
- Fewer resources/tutorials

**Example**

```typescript
// store/useStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementBy: (amount: number) => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        incrementBy: (amount) => set((state) => ({ count: state.count + amount })),
        reset: () => set({ count: 0 }),
      }),
      { name: 'counter-storage' }
    )
  )
);
```

```tsx
// components/Counter.tsx
import { useCounterStore } from '@/store/useStore';

export function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// Selecting specific state (prevents unnecessary re-renders)
export function CounterDisplay() {
  const count = useCounterStore((state) => state.count);
  return <span>{count}</span>;
}
```

---

### Jotai

> **Recommendation**: Best for atomic state composition and bottom-up state design

**Overview**

Jotai takes a bottom-up approach with atomic state. It's inspired by Recoil but with a simpler API and smaller bundle.

**Pros**
- Minimal boilerplate
- Small bundle size (~3 KB)
- No providers required (optional)
- Derived atoms are easy
- Suspense support
- React concurrent mode ready

**Cons**
- Different mental model
- Less structured
- Smaller community
- DevTools less mature

**Example**

```typescript
// atoms/counter.ts
import { atom } from 'jotai';

// Primitive atom
export const countAtom = atom(0);

// Derived read-only atom
export const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Derived read-write atom
export const countWithActionsAtom = atom(
  (get) => get(countAtom),
  (get, set, action: 'increment' | 'decrement' | 'reset') => {
    switch (action) {
      case 'increment':
        set(countAtom, get(countAtom) + 1);
        break;
      case 'decrement':
        set(countAtom, get(countAtom) - 1);
        break;
      case 'reset':
        set(countAtom, 0);
        break;
    }
  }
);

// Async atom
export const userAtom = atom(async () => {
  const response = await fetch('/api/user');
  return response.json();
});
```

```tsx
// components/Counter.tsx
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { countAtom, doubleCountAtom } from '@/atoms/counter';

export function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);

  return (
    <div>
      <span>Count: {count}</span>
      <span>Double: {doubleCount}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
}
```

---

### Recoil

> **Recommendation**: Best for complex derived state and data-flow graphs

**Overview**

Recoil is Facebook's state management library using atoms and selectors for fine-grained updates and derived state.

**Pros**
- Fine-grained subscriptions
- Excellent derived state (selectors)
- Async state support
- React Suspense integration
- Great DevTools
- Concurrent mode ready

**Cons**
- Larger bundle (~21 KB)
- Requires RecoilRoot provider
- More complex API
- Still experimental status

**Example**

```typescript
// atoms/todos.ts
import { atom, selector, selectorFamily } from 'recoil';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Atom - base state
export const todosAtom = atom<Todo[]>({
  key: 'todos',
  default: [],
});

export const filterAtom = atom<'all' | 'active' | 'completed'>({
  key: 'filter',
  default: 'all',
});

// Selector - derived state
export const filteredTodosSelector = selector({
  key: 'filteredTodos',
  get: ({ get }) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);

    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed);
      case 'completed':
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  },
});

// Selector family - parameterized selector
export const todoByIdSelector = selectorFamily({
  key: 'todoById',
  get: (id: number) => ({ get }) => {
    return get(todosAtom).find((t) => t.id === id);
  },
});
```

```tsx
// components/TodoList.tsx
import { useRecoilState, useRecoilValue } from 'recoil';
import { todosAtom, filteredTodosSelector } from '@/atoms/todos';

export function TodoList() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const filteredTodos = useRecoilValue(filteredTodosSelector);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

---

### MobX

> **Recommendation**: Best for reactive programming style and OOP patterns

**Overview**

MobX makes state management simple by transparently applying functional reactive programming.

**Pros**
- Minimal boilerplate
- Automatic tracking
- OOP-friendly
- Great performance
- Easy to learn concepts
- Powerful computed values

**Cons**
- Magic can be confusing
- Less predictable updates
- Debugging can be harder
- Proxies may cause issues

**Example**

```typescript
// store/CounterStore.ts
import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get doubleCount() {
    return this.count * 2;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }
}

export const counterStore = new CounterStore();
```

```tsx
// components/Counter.tsx
import { observer } from 'mobx-react-lite';
import { counterStore } from '@/store/CounterStore';

export const Counter = observer(() => {
  return (
    <div>
      <span>Count: {counterStore.count}</span>
      <span>Double: {counterStore.doubleCount}</span>
      <button onClick={() => counterStore.increment()}>+</button>
      <button onClick={() => counterStore.decrement()}>-</button>
    </div>
  );
});
```

---

### TanStack Query

> **Recommendation**: Best for server state management and data fetching

**Overview**

TanStack Query (formerly React Query) handles server state with powerful caching, background updates, and stale-while-revalidate patterns.

**Pros**
- Automatic caching
- Background refetching
- Optimistic updates
- Pagination/infinite queries
- Excellent DevTools
- Framework agnostic

**Cons**
- Not for client state
- Learning curve for advanced features
- Can be complex to configure
- Requires QueryClient setup

**Example**

```typescript
// hooks/useTodos.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Fetch todos
export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      const response = await fetch('/api/todos');
      if (!response.ok) throw new Error('Failed to fetch');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Fetch single todo
export function useTodo(id: number) {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: async (): Promise<Todo> => {
      const response = await fetch(`/api/todos/${id}`);
      return response.json();
    },
    enabled: !!id,
  });
}

// Create todo mutation
export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: Omit<Todo, 'id'>) => {
      const response = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    // Optimistic update
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);
      queryClient.setQueryData(['todos'], (old: Todo[]) => [
        ...old,
        { ...newTodo, id: Date.now() },
      ]);
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context?.previousTodos);
    },
  });
}
```

```tsx
// components/TodoList.tsx
import { useTodos, useCreateTodo } from '@/hooks/useTodos';

export function TodoList() {
  const { data: todos, isLoading, error } = useTodos();
  const createTodo = useCreateTodo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button
        onClick={() => createTodo.mutate({ title: 'New todo', completed: false })}
        disabled={createTodo.isPending}
      >
        Add Todo
      </button>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

### Context + useReducer

> **Recommendation**: Best for simple apps without external dependencies

**Overview**

React's built-in Context API with useReducer provides Redux-like patterns without any dependencies.

**Pros**
- No external dependencies
- Built into React
- Familiar patterns
- Good for simple state
- Easy to understand

**Cons**
- Can cause unnecessary re-renders
- No DevTools
- No middleware
- Doesn't scale well

**Example**

```typescript
// context/CounterContext.tsx
import { createContext, useContext, useReducer, ReactNode } from 'react';

interface State {
  count: number;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'INCREMENT_BY'; payload: number }
  | { type: 'RESET' };

const initialState: State = { count: 0 };

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENT_BY':
      return { count: state.count + action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const CounterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }
  return context;
}
```

```tsx
// components/Counter.tsx
import { useCounter } from '@/context/CounterContext';

export function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
```

---

## Performance Comparison

### Bundle Size

```
Context        ████ 0 KB
Zustand        ████████ 2 KB
Jotai          ████████████ 3 KB
TanStack Query ████████████████████████████████████████████████████ 13 KB
Redux Toolkit  ████████████████████████████████████████████████████ 13 KB
MobX           ████████████████████████████████████████████████████████████████ 16 KB
Recoil         ████████████████████████████████████████████████████████████████████████████████████ 21 KB
```

### Re-render Efficiency

| Library | Granularity | Optimization Needed |
|---------|-------------|---------------------|
| Zustand | Selector-based | Use selectors |
| Jotai | Atom-based | Automatic |
| Recoil | Atom-based | Automatic |
| MobX | Property-based | Automatic |
| Redux | Selector-based | Use selectors |
| Context | Component-based | Manual splitting |

---

## Decision Guide

### Choose Redux Toolkit if:
- Building large, complex applications
- Need time-travel debugging
- Working in large teams
- Need middleware (logging, async)
- Want RTK Query for data fetching

### Choose Zustand if:
- Want minimal boilerplate
- Building small to medium apps
- Need simple mental model
- Want tiny bundle size
- Coming from Redux

### Choose Jotai if:
- Prefer bottom-up state design
- Need fine-grained updates
- Building component-heavy apps
- Want Suspense integration
- Like atomic state model

### Choose Recoil if:
- Need complex derived state
- Building data-flow heavy apps
- Want Facebook's solution
- Need async state
- Have complex state graphs

### Choose MobX if:
- Prefer OOP patterns
- Want automatic tracking
- Coming from Vue/Angular
- Need computed properties
- Like reactive programming

### Choose TanStack Query if:
- Managing server state
- Need caching/refetching
- Building data-driven apps
- Want optimistic updates
- Need pagination

### Choose Context + useReducer if:
- Building simple apps
- Want no dependencies
- Learning state management
- Have prop drilling issues
- State is component-local

---

## Best Practices

### General

1. **Separate concerns** - Client state vs server state
2. **Minimize global state** - Use local state when possible
3. **Use selectors** - Prevent unnecessary re-renders
4. **Normalize data** - Avoid nested state when possible

### Redux Toolkit

```typescript
// Use typed hooks
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### Zustand

```typescript
// Use selectors to prevent re-renders
const count = useStore((state) => state.count);

// Use shallow comparison for objects
import { shallow } from 'zustand/shallow';
const { count, name } = useStore(
  (state) => ({ count: state.count, name: state.name }),
  shallow
);
```

### TanStack Query

```typescript
// Set global defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 3,
    },
  },
});
```

---

## Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Jotai Documentation](https://jotai.org/)
- [Recoil Documentation](https://recoiljs.org/)
- [MobX Documentation](https://mobx.js.org/)
- [TanStack Query Documentation](https://tanstack.com/query)
- [React Context Documentation](https://react.dev/learn/passing-data-deeply-with-context)
