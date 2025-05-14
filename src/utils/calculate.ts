export function calculateExpression(expression: string): number {
  try {
    return eval(expression);
  } catch {
    return NaN;
  }
}
