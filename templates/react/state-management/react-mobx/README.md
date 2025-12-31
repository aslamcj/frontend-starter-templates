# React + MobX

React 19 with MobX for reactive state management.

## Features

- ⚛️ React 19 with TypeScript
- 📊 MobX 6 for observable state
- 🔄 Automatic reactivity
- ⚡ Vite 6 for fast development
- 🧩 Class-based stores

## Quick Start

```bash
pnpm install
pnpm dev
```

## MobX Concepts

### Observable State

```typescript
import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    // Makes all properties observable and methods actions
    makeAutoObservable(this);
  }

  // Computed values (derived state)
  get doubleCount() {
    return this.count * 2;
  }

  // Actions (state modifiers)
  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

export const counterStore = new CounterStore();
```

### Observer Components

```typescript
import { observer } from 'mobx-react-lite';
import { counterStore } from './store';

// Wrap component with observer to react to state changes
export const Counter = observer(function Counter() {
  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <p>Double: {counterStore.doubleCount}</p>
      <button onClick={() => counterStore.increment()}>+</button>
    </div>
  );
});
```

### Async Actions

```typescript
import { makeAutoObservable, runInAction } from 'mobx';

class UserStore {
  user: User | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser(id: string) {
    this.isLoading = true;
    try {
      const response = await fetch(`/api/users/${id}`);
      const user = await response.json();
      // Must wrap state updates after await in runInAction
      runInAction(() => {
        this.user = user;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}
```

### Multiple Stores

```typescript
// stores/RootStore.ts
import { CounterStore } from './CounterStore';
import { UserStore } from './UserStore';

class RootStore {
  counterStore: CounterStore;
  userStore: UserStore;

  constructor() {
    this.counterStore = new CounterStore(this);
    this.userStore = new UserStore(this);
  }
}

export const rootStore = new RootStore();

// React Context for stores
import { createContext, useContext } from 'react';

const StoreContext = createContext(rootStore);

export function useStore() {
  return useContext(StoreContext);
}
```

### Reactions

```typescript
import { autorun, reaction, when } from 'mobx';

// Run whenever any observed value changes
autorun(() => {
  console.log('Count is:', counterStore.count);
});

// Run only when specific value changes
reaction(
  () => counterStore.count,
  (count, previousCount) => {
    console.log(`Count changed from ${previousCount} to ${count}`);
  }
);

// Run once when condition is met
when(
  () => counterStore.count > 10,
  () => console.log('Count exceeded 10!')
);
```

## Project Structure

```
src/
├── store/
│   ├── CounterStore.ts  # Counter store class
│   └── index.ts         # Root store and hooks
├── App.tsx              # Main component
├── main.tsx             # Entry point
└── index.css            # Styles
```

## MobX vs Other Libraries

| Feature | MobX | Redux | Zustand |
|---------|------|-------|---------|
| Pattern | OOP/Reactive | Functional | Functional |
| Boilerplate | Low | High | Low |
| Learning Curve | Medium | Steep | Easy |
| Performance | Auto-optimized | Manual selectors | Manual selectors |
| DevTools | Yes | Yes | Yes |
| Best For | Complex domains | Large teams | Simple apps |

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Learn More

- [MobX Documentation](https://mobx.js.org/)
- [MobX React Lite](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite)
- [React Documentation](https://react.dev/)

## License

MIT
