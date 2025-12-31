import { useCounter, counterActions, useTheme } from './context';

export function App() {
  const { state, dispatch } = useCounter();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <h1 className="title">React Context + Reducer</h1>
      <p style={{ color: theme === 'light' ? '#64748b' : '#94a3b8' }}>
        Built-in state management
      </p>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Theme</h2>
          <button className="btn btn-secondary" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>

      <div className="card">
        <h2>Counter</h2>
        <p className="count">{state.count}</p>
        <div className="buttons">
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(counterActions.decrement())}
          >
            -
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(counterActions.reset())}
          >
            Reset
          </button>
          <button
            className="btn"
            onClick={() => dispatch(counterActions.increment())}
          >
            +
          </button>
        </div>
      </div>

      <div className="card">
        <h2>History</h2>
        <p style={{ color: theme === 'light' ? '#64748b' : '#94a3b8' }}>
          {state.history.join(' → ')}
        </p>
      </div>
    </div>
  );
}
