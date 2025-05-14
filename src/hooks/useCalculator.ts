import { useState } from 'react';

type HistoryItem = {
  expression: string;
  result: string;
};

export function useCalculator() {
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  function inputSymbol(symbol: string) {
    setExpression((prev) => prev + symbol);
  }

  function clear() {
    setExpression('');
  }

  function calculateResult() {
    try {
      const result = eval(expression);
      const resultStr = result.toString();
      setHistory((prev) => [{ expression, result: resultStr }, ...prev]);
      setExpression(resultStr);
    } catch {
      setExpression('Erreur');
    }
  }

  function clearHistory() {
    setHistory([]);
  }

  function recallFromHistory(index: number) {
    const item = history[index];
    if (item) {
      setExpression(item.result);
    }
  }

  return {
    display: expression || '0',
    inputSymbol,
    calculateResult,
    clear,
    clearHistory,
    recallFromHistory,
    history,
  };
}
