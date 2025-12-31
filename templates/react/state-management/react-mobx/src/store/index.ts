import { createContext, useContext } from 'react';
import { counterStore } from './CounterStore';

// Root store combining all stores
class RootStore {
  counterStore = counterStore;
}

export const rootStore = new RootStore();

// React context for stores
const StoreContext = createContext(rootStore);

// Hook to use stores
export function useStore() {
  return useContext(StoreContext);
}

// Export individual store hook
export function useCounterStore() {
  return useStore().counterStore;
}

export { StoreContext };
