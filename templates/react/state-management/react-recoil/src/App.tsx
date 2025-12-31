import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countState, doubleCountState, textState, charCountState } from './store/atoms';

export function App() {
  const [count, setCount] = useRecoilState(countState);
  const doubleCount = useRecoilValue(doubleCountState);
  const [text, setText] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  return (
    <div className="container">
      <h1 className="title">React + Recoil</h1>
      <p style={{ color: '#64748b' }}>Facebook's state management</p>

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

      <div className="card">
        <h2>Text Input</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #e2e8f0',
            fontSize: '1rem',
            marginBottom: '0.5rem',
          }}
        />
        <p style={{ color: '#64748b' }}>Character count: {charCount}</p>
      </div>
    </div>
  );
}
