import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Counter';

describe('Counter', () => {
  it('renders with default initial value of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('renders with custom initial value', () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  it('increments when + button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('decrements when - button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={5} />);

    await user.click(screen.getByRole('button', { name: /decrement/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('4');
  });

  it('resets to initial value', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={10} />);

    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /increment/i }));
    expect(screen.getByTestId('count')).toHaveTextContent('12');

    await user.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  it('handles multiple clicks', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });
});
