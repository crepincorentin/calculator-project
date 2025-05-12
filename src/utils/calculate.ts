export function calculate(a: number, b: number, operator: '+' | '-' | '*'): number {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        throw new Error('Unsupported operator');
    }
}
  