import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
  onCountChange?: (count: number) => void;
}

export function Counter({
  initialValue = 0,
  step = 1,
  onCountChange,
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    onCountChange?.(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    onCountChange?.(newCount);
  };

  const handleReset = () => {
    setCount(initialValue);
    onCountChange?.(initialValue);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p className="count" data-testid="count">
        {count}
      </p>
      <div className="buttons">
        <button onClick={handleDecrement} aria-label="Decrement">
          -
        </button>
        <button onClick={handleReset} aria-label="Reset">
          Reset
        </button>
        <button onClick={handleIncrement} aria-label="Increment">
          +
        </button>
      </div>
    </div>
  );
}
