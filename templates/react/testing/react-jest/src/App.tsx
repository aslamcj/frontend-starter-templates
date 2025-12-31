import { Counter } from './components/Counter';

export function App() {
  return (
    <div className="container">
      <h1 className="title">React + Jest</h1>
      <p style={{ color: '#64748b' }}>Unit testing with Jest & Testing Library</p>
      <Counter />
    </div>
  );
}
