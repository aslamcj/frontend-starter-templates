import { useState, useCallback } from 'react';

/**
 * Return type for the useCounter hook
 */
interface UseCounterReturn {
  /** Current count value */
  count: number;
  /** Increment the count by 1 */
  increment: () => void;
  /** Decrement the count by 1 */
  decrement: () => void;
  /** Reset count to initial value */
  reset: () => void;
  /** Set count to a specific value */
  setCount: (value: number) => void;
}

/**
 * A custom hook for managing counter state.
 *
 * @param initialValue - The initial count value (default: 0)
 * @returns Object containing count and control functions
 *
 * @example
 * ```tsx
 * function Counter() {
 *   const { count, increment, decrement, reset } = useCounter(0);
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={increment}>+</button>
 *       <button onClick={decrement}>-</button>
 *       <button onClick={reset}>Reset</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useCounter(initialValue = 0): UseCounterReturn {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}
