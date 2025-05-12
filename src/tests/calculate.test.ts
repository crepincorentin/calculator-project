import { describe, it, expect } from 'vitest';
import { calculate } from '../utils/calculate';

describe('calculate()', () => {
    it('should return 5 when adding 2 and 3', () => {
        const result = calculate(2, 3, '+');
        expect(result).toBe(5);
    });

    it('should return -1 when subtracting 2 and 3', () => {
        const result = calculate(2, 3, '-');
        expect(result).toBe(-1);
    });
  
    it('should return 6 when multiplying 2 and 3', () => {
        const result = calculate(2, 3, '*');
        expect(result).toBe(6);
    });
});