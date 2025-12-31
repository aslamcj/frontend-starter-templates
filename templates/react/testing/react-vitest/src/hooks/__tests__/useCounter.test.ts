import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../useCounter';

describe('useCounter', () => {
  it('should initialize with default value of 0', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
  });

  it('should initialize with custom initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));

    expect(result.current.count).toBe(10);
  });

  it('should increment count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should decrement count', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(4);
  });

  it('should reset to initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));

    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(12);

    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(10);
  });

  it('should respect max value', () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: 9, max: 10 })
    );

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(10);

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(10);
  });

  it('should respect min value', () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: 1, min: 0 })
    );

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  it('should use custom step', () => {
    const { result } = renderHook(() => useCounter({ step: 5 }));

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should set count directly', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setCount(50);
    });

    expect(result.current.count).toBe(50);
  });
});
