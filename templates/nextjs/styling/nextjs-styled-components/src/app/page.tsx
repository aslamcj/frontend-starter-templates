'use client';

import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: system-ui, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Next.js + Styled Components</Title>
      <Description>CSS-in-JS with SSR support</Description>
      <Button href="https://styled-components.com/docs">Documentation</Button>
    </Container>
  );
}
