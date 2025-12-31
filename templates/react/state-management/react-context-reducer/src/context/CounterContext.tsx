import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from 'react';

// State type
interface CounterState {
  count: number;
  history: number[];
}

// Action types
type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET'; payload: number };

// Initial state
const initialState: CounterState = {
  count: 0,
  history: [0],
};

// Reducer function
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT': {
      const newCount = state.count + 1;
      return {
        count: newCount,
        history: [...state.history, newCount],
      };
    }
    case 'DECREMENT': {
      const newCount = state.count - 1;
      return {
        count: newCount,
        history: [...state.history, newCount],
      };
    }
    case 'RESET':
      return initialState;
    case 'SET':
      return {
        count: action.payload,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
}

// Context types
interface CounterContextType {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
}

// Create contexts
const CounterContext = createContext<CounterContextType | null>(null);

// Provider component
export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// Custom hook for using the context
export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}

// Action creators (optional, for convenience)
export const counterActions = {
  increment: (): CounterAction => ({ type: 'INCREMENT' }),
  decrement: (): CounterAction => ({ type: 'DECREMENT' }),
  reset: (): CounterAction => ({ type: 'RESET' }),
  set: (value: number): CounterAction => ({ type: 'SET', payload: value }),
};
