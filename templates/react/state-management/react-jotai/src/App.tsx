import { useAtom, useAtomValue } from 'jotai';
import { countAtom, doubleCountAtom } from './store/atoms';

export function App() {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);

  return (
    <div className="container">
      <h1 className="title">React + Jotai</h1>
      <p style={{ color: '#64748b' }}>Atomic state management</p>

      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <p style={{ color: '#64748b' }}>Double: {doubleCount}</p>
        <div className="buttons">
          <button className="btn btn-secondary" onClick={() => setCount((c) => c - 1)}>-</button>
          <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
          <button className="btn" onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}
