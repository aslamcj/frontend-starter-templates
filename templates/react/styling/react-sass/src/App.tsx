import { useState } from 'react';
import './styles/App.scss';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">React + Sass</h1>
      <p className="subtitle">CSS preprocessor with variables and mixins</p>

      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <div className="button-group">
          <button
            className="button button--secondary"
            onClick={() => setCount((c) => c - 1)}
          >
            Decrement
          </button>
          <button className="button" onClick={() => setCount((c) => c + 1)}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
