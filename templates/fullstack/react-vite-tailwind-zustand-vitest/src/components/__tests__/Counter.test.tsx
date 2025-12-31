import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Counter';
import { useCounterStore } from '../../store/useCounterStore';

describe('Counter', () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it('renders with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('increments when + is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('decrements when - is clicked', async () => {
    useCounterStore.setState({ count: 5 });
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /decrement/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('4');
  });

  it('resets when Reset is clicked', async () => {
    useCounterStore.setState({ count: 10 });
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /reset/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });
});
