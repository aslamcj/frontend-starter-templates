/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

const containerStyles = css`
  min-height: 100vh;
  padding: 2rem;
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Card = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.5rem 1.5rem;
  margin: 0.25rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? css`
          background: #3b82f6;
          color: white;
          &:hover {
            background: #2563eb;
          }
        `
      : css`
          background: #e2e8f0;
          color: #334155;
          &:hover {
            background: #cbd5e1;
          }
        `}
`;

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div css={containerStyles}>
      <Title>React + Emotion</Title>
      <p css={{ textAlign: 'center', color: '#64748b', marginTop: '0.5rem' }}>
        Performant CSS-in-JS with the css prop and styled components
      </p>

      <Card>
        <h2>Counter</h2>
        <p css={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6' }}>
          {count}
        </p>
        <div>
          <Button variant="secondary" onClick={() => setCount((c) => c - 1)}>
            -
          </Button>
          <Button onClick={() => setCount((c) => c + 1)}>+</Button>
        </div>
      </Card>
    </div>
  );
}
