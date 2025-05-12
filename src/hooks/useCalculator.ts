import { useState } from 'react';
import { calculate } from '../utils/calculate';

type HistoryItem = {
  expression: string;
  result: string;
};

export function useCalculator() {
  const [current, setCurrent] = useState('');
  const [previous, setPrevious] = useState('');
  const [operator, setOperator] = useState<null | '+' | '-' | '*' | '/' >(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  function inputDigit(digit: string) {
    setCurrent((prev) => prev + digit);
  }

  function selectOperator(op: '+' | '-' | '*' | '/') {
    if (current === '') return;
    setPrevious(current);
    setCurrent('');
    setOperator(op);
  }

  function calculateResult() {
    if (previous === '' || current === '' || !operator) return;
    const a = parseFloat(previous);
    const b = parseFloat(current);
    const result = calculate(a, b, operator);
    const resultStr = result.toString();
  
    const expression = `${previous} ${operator} ${current}`;
    setCurrent(resultStr);
    setPrevious('');
    setOperator(null);
  
    setHistory((prev) => [{ expression, result: resultStr }, ...prev]);
  }
  

  function clear() {
    setCurrent('');
    setPrevious('');
    setOperator(null);
  }

  function clearHistory() {
    setHistory([]);
  }

  function recallFromHistory(index: number) {
    const item = history[index];
    if (item) {
      setCurrent(item.result);
    }
  }

  return {
    display: current || '0',
    inputDigit,
    selectOperator,
    calculateResult,
    clear,
    history,
    clearHistory,
    recallFromHistory,
  };
}
