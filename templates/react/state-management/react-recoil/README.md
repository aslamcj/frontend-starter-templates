# React + Recoil

React 19 with Recoil for state management.

## Features

- ⚛️ React 19 with TypeScript
- 🔮 Recoil for atomic state management
- 📊 Selectors for derived state
- ⚡ Vite 6 for fast development
- 🔧 Concurrent mode ready

## Quick Start

```bash
pnpm install
pnpm dev
```

## Recoil Concepts

### Atoms

Atoms are units of state that components can subscribe to:

```typescript
import { atom } from 'recoil';

export const countState = atom<number>({
  key: 'countState', // Unique ID
  default: 0,        // Default value
});

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
```

### Selectors (Derived State)

Selectors compute derived data based on atoms or other selectors:

```typescript
import { selector } from 'recoil';

export const doubleCountState = selector<number>({
  key: 'doubleCountState',
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
});
```

### Writable Selectors

Selectors can also be writable:

```typescript
export const fahrenheitState = selector<number>({
  key: 'fahrenheitState',
  get: ({ get }) => (get(celsiusState) * 9) / 5 + 32,
  set: ({ set }, newValue) => {
    set(celsiusState, ((newValue as number) - 32) * 5 / 9);
  },
});
```

### Using in Components

```typescript
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

function Counter() {
  // Read and write
  const [count, setCount] = useRecoilState(countState);

  // Read-only
  const doubleCount = useRecoilValue(doubleCountState);

  // Write-only
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
```

### Async Selectors

```typescript
export const userDataState = selector({
  key: 'userDataState',
  get: async ({ get }) => {
    const userId = get(currentUserIdState);
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  },
});

// In component with Suspense
function UserProfile() {
  const userData = useRecoilValue(userDataState);
  return <div>{userData.name}</div>;
}

// Wrap in Suspense
<Suspense fallback={<Loading />}>
  <UserProfile />
</Suspense>
```

### Atom Families

Create parameterized atoms:

```typescript
import { atomFamily } from 'recoil';

export const todoItemState = atomFamily<Todo, number>({
  key: 'todoItemState',
  default: (id) => ({
    id,
    text: '',
    completed: false,
  }),
});

// Usage
const [todo, setTodo] = useRecoilState(todoItemState(1));
```

## Project Structure

```
src/
├── store/
│   └── atoms.ts      # Atom and selector definitions
├── App.tsx           # Main component
├── main.tsx          # Entry point with RecoilRoot
└── index.css         # Styles
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Learn More

- [Recoil Documentation](https://recoiljs.org/)
- [Recoil GitHub](https://github.com/facebookexperimental/Recoil)
- [React Documentation](https://react.dev/)

## License

MIT
