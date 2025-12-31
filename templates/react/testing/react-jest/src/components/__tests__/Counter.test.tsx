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

  it('increments the count when + button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('decrements the count when - button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={5} />);

    await user.click(screen.getByRole('button', { name: /decrement/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('4');
  });

  it('resets to initial value when Reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={10} />);

    // First increment a few times
    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /increment/i }));
    expect(screen.getByTestId('count')).toHaveTextContent('12');

    // Then reset
    await user.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  it('uses custom step value for increment/decrement', async () => {
    const user = userEvent.setup();
    render(<Counter step={5} />);

    await user.click(screen.getByRole('button', { name: /increment/i }));
    expect(screen.getByTestId('count')).toHaveTextContent('5');

    await user.click(screen.getByRole('button', { name: /decrement/i }));
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('calls onCountChange callback with new count', async () => {
    const handleCountChange = jest.fn();
    const user = userEvent.setup();
    render(<Counter onCountChange={handleCountChange} />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(handleCountChange).toHaveBeenCalledWith(1);
    expect(handleCountChange).toHaveBeenCalledTimes(1);
  });

  it('handles multiple rapid clicks correctly', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: /increment/i });

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });

  it('can go into negative numbers', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /decrement/i }));
    await user.click(screen.getByRole('button', { name: /decrement/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('-2');
  });
});
