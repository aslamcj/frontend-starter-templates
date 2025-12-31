import { observer } from 'mobx-react-lite';
import { useCounterStore } from './store';

export const App = observer(function App() {
  const counter = useCounterStore();

  return (
    <div className="container">
      <h1 className="title">React + MobX</h1>
      <p style={{ color: '#64748b' }}>Observable state management</p>

      <div className="card">
        <h2>Counter</h2>
        <p className="count">{counter.count}</p>
        <p style={{ color: '#64748b' }}>Double: {counter.doubleCount}</p>
        <div className="buttons">
          <button
            className="btn btn-secondary"
            onClick={() => counter.decrement()}
          >
            -
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => counter.reset()}
          >
            Reset
          </button>
          <button className="btn" onClick={() => counter.increment()}>
            +
          </button>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button
            className="btn"
            onClick={() => counter.incrementAsync()}
            disabled={counter.isLoading}
            style={{ width: '100%' }}
          >
            {counter.isLoading ? 'Loading...' : 'Increment Async'}
          </button>
        </div>
      </div>
    </div>
  );
});
