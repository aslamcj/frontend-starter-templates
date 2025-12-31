import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from 'react';

// Theme types
type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

type ThemeAction = { type: 'TOGGLE' } | { type: 'SET'; payload: Theme };

// Reducer
function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'TOGGLE':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET':
      return { theme: action.payload };
    default:
      return state;
  }
}

// Context type with actions bound
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  // Memoized action handlers
  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE' });
  }, []);

  const setTheme = useCallback((theme: Theme) => {
    dispatch({ type: 'SET', payload: theme });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
