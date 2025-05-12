import { renderHook, act } from '@testing-library/react';
import { useCalculator } from '../hooks/useCalculator';
import { describe, it, expect } from 'vitest';

describe('useCalculator', () => {
  it('should perform addition correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.inputDigit('2');
      result.current.selectOperator('+');
      result.current.inputDigit('3');
      result.current.calculateResult();
    });

    expect(result.current.display).toBe('5');
  });

  it('should store calculation in history', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.inputDigit('4');
      result.current.selectOperator('*');
      result.current.inputDigit('5');
      result.current.calculateResult();
    });

    expect(result.current.history).toEqual([
      { expression: '4 * 5', result: '20' },
    ]);
  });
});
