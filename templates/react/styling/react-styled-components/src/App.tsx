import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.125rem;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const CounterCard = styled(Card)`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const CountValue = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin: ${({ theme }) => theme.spacing['2xl']} auto 0;
`;

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
        <Title>React + Styled Components</Title>
        <Subtitle>CSS-in-JS with tagged template literals</Subtitle>
      </Header>

      <CounterCard>
        <h2>Counter Example</h2>
        <CountValue>{count}</CountValue>
        <ButtonGroup>
          <Button $variant="secondary" onClick={() => setCount((c) => c - 1)}>
            Decrement
          </Button>
          <Button $variant="outline" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
        </ButtonGroup>
      </CounterCard>

      <FeaturesGrid>
        <Card>
          <h3>Scoped Styles</h3>
          <p>Styles are automatically scoped to components</p>
        </Card>
        <Card>
          <h3>Dynamic Styling</h3>
          <p>Use props to dynamically change styles</p>
        </Card>
        <Card>
          <h3>Theming</h3>
          <p>Consistent design tokens via ThemeProvider</p>
        </Card>
      </FeaturesGrid>
    </Container>
  );
}
