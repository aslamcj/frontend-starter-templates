import { Counter } from './components/Counter';

export function App() {
  return (
    <div className="container">
      <h1 className="title">React + Vitest</h1>
      <p style={{ color: '#64748b' }}>Blazing fast unit testing</p>
      <Counter />
    </div>
  );
}
