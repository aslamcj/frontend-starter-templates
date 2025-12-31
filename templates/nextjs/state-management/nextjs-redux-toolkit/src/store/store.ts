import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

// Infer types from the store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
