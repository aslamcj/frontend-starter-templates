import { useAppSelector, useAppDispatch } from './store/hooks';
import { increment, decrement, reset } from './store/slices/counterSlice';

export function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <h1 className="title">React + Redux Toolkit</h1>
      <p style={{ color: '#64748b' }}>Predictable state management</p>

      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="btn btn-secondary" onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className="btn btn-secondary" onClick={() => dispatch(reset())}>
            Reset
          </button>
          <button className="btn" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
