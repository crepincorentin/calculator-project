import { useCalculator } from '../hooks/useCalculator';
import { Display } from './Display';

// Define the buttons for the calculator
const buttons = [
    ['C', 'AC', '', ''],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
  ];

export const Calculator = () => {
    const {
      display,
      inputDigit,
      selectOperator,
      calculateResult,
      clear,
      history,
      clearHistory,
      recallFromHistory,
    } = useCalculator();
  
    const handleClick = (btn: string) => {
      if (/\d/.test(btn)) inputDigit(btn);
      else if (['+', '-', '*', '/'].includes(btn)) selectOperator(btn as '+' | '-' | '*' | '/');
      else if (btn === '=') calculateResult();
      else if (btn === 'C') clear();
      else if (btn === 'AC') clearHistory();
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-black p-6 gap-8 flex-wrap mx-auto">
        <div className="bg-[#1e1e1e] rounded-3xl p-6 w-[300px] shadow-xl">
          <Display value={display} />
          <div className="grid grid-cols-4 gap-4 mt-6">
            {buttons.flat().map((btn) => {
              const isOperator = ['+', '-', '*', '=', 'C', 'AC', '/'].includes(btn);
              const isEquals = btn === '=';
              return (
                <button
                  key={btn}
                  className={`${
                    isEquals
                      ? 'bg-amber-500 text-white font-bold'
                      : isOperator
                      ? 'text-white bg-amber-500'
                      : 'text-white'
                  } bg-[#2c2c2c] p-5 rounded-full text-xl font-medium hover:scale-105 transition-transform duration-150 flex items-center justify-center shadow-lg`}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
  
        {/* History Panel */}
        <div className="bg-[#121212] text-white rounded-2xl p-4 w-[280px] shadow-xl max-h-[500px] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-amber-400">Historique</h2>
            <button
              onClick={clearHistory}
              className="text-sm text-gray-400 hover:underline"
            >
              Vider
            </button>
          </div>
          <ul className="space-y-3">
            {history.length === 0 && (
              <li className="text-gray-500 italic text-sm">Aucun calcul pour le moment.</li>
            )}
            {history.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-[#1f1f1f] px-3 py-2 rounded-lg"
              >
                <div className="text-sm">
                  <div className="text-gray-300">{item.expression}</div>
                  <div className="text-amber-400 font-bold">{item.result}</div>
                </div>
                <button
                  className="text-amber-300 text-xs hover:underline"
                  onClick={() => recallFromHistory(idx)}
                >
                  Utiliser
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  