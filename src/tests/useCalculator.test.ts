import { renderHook, act } from '@testing-library/react';
import { useCalculator } from '../hooks/useCalculator';
import { describe, it, expect } from 'vitest';
import { waitFor } from '@testing-library/react';

describe('useCalculator', () => {
  it('should perform addition correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
        result.current.inputDigit('2');
    });
    act(() => {
        result.current.selectOperator('+');
    });
    act(() => {
        result.current.inputDigit('3');
    });
    act(() => {
        result.current.calculateResult();
    });      

    expect(result.current.display).toBe('5');
  });

  it('should store calculation in history', async () => {
    const { result } = renderHook(() => useCalculator());
  
    act(() => {
      result.current.inputDigit('4');
    });
    act(() => {
      result.current.selectOperator('*');
    });
    act(() => {
      result.current.inputDigit('5');
    });
    act(() => {
      result.current.calculateResult();
    });
  
    await waitFor(() => {
      expect(result.current.history).toEqual([
        { expression: '4 * 5', result: '20' },
      ]);
    });
  });
  
});
