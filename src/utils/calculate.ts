export function calculate(a: number, b: number, operator: '+' | '-' | '*' | '/'): number {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : NaN;
      default:
        throw new Error('Unsupported operator');
    }
}
  