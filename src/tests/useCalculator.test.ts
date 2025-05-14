import { renderHook, act } from '@testing-library/react';
import { useCalculator } from '../hooks/useCalculator';
import { describe, it, expect } from 'vitest';
import { waitFor } from '@testing-library/react';

describe('useCalculator (expression-based)', () => {
  it('should evaluate full expression', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.inputSymbol('1');
      result.current.inputSymbol('0');
      result.current.inputSymbol('*');
      result.current.inputSymbol('2');
      result.current.inputSymbol('/');
      result.current.inputSymbol('2');
    });

    act(() => {
      result.current.calculateResult();
    });

    expect(result.current.display).toBe('10');
  });

  it('should store expression in history', async () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.inputSymbol('2');
      result.current.inputSymbol('+');
      result.current.inputSymbol('3');
    });

    act(() => {
      result.current.calculateResult();
    });

    await waitFor(() => {
      expect(result.current.history).toEqual([
        { expression: '2+3', result: '5' },
      ]);
    });
  });

  it('should clear display', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.inputSymbol('5');
    });

    act(() => {
      result.current.clear();
    });

    expect(result.current.display).toBe('0');
  });

  it('should recall result from history', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.inputSymbol('3');
      result.current.inputSymbol('*');
      result.current.inputSymbol('3');
    });

    act(() => {
      result.current.calculateResult(); // 9
    });

    act(() => {
      result.current.recallFromHistory(0);
    });

    expect(result.current.display).toBe('9');
  });

  it('should show "Erreur" on invalid expression', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.inputSymbol('2');
      result.current.inputSymbol('+');
    });

    act(() => {
      result.current.calculateResult();
    });

    expect(result.current.display).toBe('Erreur');
  });

  it('should evaluate complex expression with multiple operations', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      '10+2*3-4/2'
        .split('')
        .forEach((char) => result.current.inputSymbol(char));
    });

    act(() => {
      result.current.calculateResult();
    });

    expect(result.current.display).toBe('14'); // 10 + 6 - 2 = 14
  });

  it('should handle parentheses correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      '(2+3)*4'.split('').forEach((char) => result.current.inputSymbol(char));
    });

    act(() => {
      result.current.calculateResult();
    });

    expect(result.current.display).toBe('20');
  });

  it('should return Infinity when dividing by 0', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      '5/0'.split('').forEach((char) => result.current.inputSymbol(char));
    });

    act(() => {
      result.current.calculateResult();
    });

    expect(result.current.display).toBe('Infinity');
  });

  it('should clear history properly after multiple calculations', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      '1+1'.split('').forEach((c) => result.current.inputSymbol(c));
      result.current.calculateResult();
    });

    act(() => {
      '2+2'.split('').forEach((c) => result.current.inputSymbol(c));
      result.current.calculateResult();
    });

    act(() => {
      result.current.clearHistory();
    });

    expect(result.current.history).toEqual([]);
  });
});
