import { Counter } from './components/Counter';

export function App() {
  return (
    <div className="container">
      <h1 className="title">React + Playwright</h1>
      <p style={{ color: '#64748b' }}>End-to-end testing</p>
      <Counter />
    </div>
  );
}
