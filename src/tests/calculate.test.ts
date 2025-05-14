import { describe, it, expect } from 'vitest';
import { calculateExpression } from '../utils/calculate';

describe('calculateExpression()', () => {
  it('should evaluate simple addition', () => {
    expect(calculateExpression('2 + 3')).toBe(5);
  });

  it('should evaluate simple subtraction', () => {
    expect(calculateExpression('5 - 2')).toBe(3);
  });

  it('should evaluate simple multiplication', () => {
    expect(calculateExpression('2 * 3')).toBe(6);
  });

  it('should evaluate simple division', () => {
    expect(calculateExpression('6 / 2')).toBe(3);
  });

  it('should evaluate mixed operations with precedence', () => {
    expect(calculateExpression('2 + 3 * 4')).toBe(14); // 3*4=12 +2
  });

  it('should evaluate chained operations', () => {
    expect(calculateExpression('10 * 2 / 2')).toBe(10);
  });

  it('should evaluate expressions with parenthesis', () => {
    expect(calculateExpression('(2 + 3) * 4')).toBe(20);
  });

  it('should return NaN for invalid expression', () => {
    expect(calculateExpression('2 + ')).toBeNaN();
  });

  it('should evaluate zero division as Infinity or NaN', () => {
    expect(calculateExpression('1 / 0')).toBe(Infinity); // JS behavior
  });

  it('should handle negative numbers', () => {
    expect(calculateExpression('-2 + 3')).toBe(1);
    expect(calculateExpression('2 - 3')).toBe(-1);
    expect(calculateExpression('-2 * -3')).toBe(6);
    expect(calculateExpression('-2 / -1')).toBe(2);
  });
});
