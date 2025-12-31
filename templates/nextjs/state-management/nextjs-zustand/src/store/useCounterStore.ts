import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  isLoading: boolean;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementAsync: () => Promise<void>;
}

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        isLoading: false,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
        incrementAsync: async () => {
          set({ isLoading: true });
          await new Promise((resolve) => setTimeout(resolve, 1000));
          set((state) => ({ count: state.count + 1, isLoading: false }));
        },
      }),
      { name: 'counter-storage' }
    ),
    { name: 'counter-store' }
  )
);
