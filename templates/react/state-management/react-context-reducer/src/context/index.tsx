import type { ReactNode } from 'react';
import { CounterProvider } from './CounterContext';
import { ThemeProvider } from './ThemeContext';

// Combine all providers
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CounterProvider>{children}</CounterProvider>
    </ThemeProvider>
  );
}

// Re-export hooks
export { useCounter, counterActions } from './CounterContext';
export { useTheme } from './ThemeContext';
