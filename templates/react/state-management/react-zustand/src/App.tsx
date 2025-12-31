import { useCounterStore } from './store/useStore';

export function App() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="container">
      <h1 className="title">React + Zustand</h1>
      <p style={{ color: '#64748b' }}>Minimal state management</p>

      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="btn btn-secondary" onClick={decrement}>-</button>
          <button className="btn btn-secondary" onClick={reset}>Reset</button>
          <button className="btn" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}
