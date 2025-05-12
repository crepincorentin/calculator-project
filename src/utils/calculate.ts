export function calculate(a: number, b: number, operator: '+' | '-' | '*'): number {
    if (operator === '+') {
      return a + b;
    }
    throw new Error('Unsupported operator');
}
  