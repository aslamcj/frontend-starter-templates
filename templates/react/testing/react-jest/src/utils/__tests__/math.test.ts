import { add, subtract, multiply, divide, clamp, isInRange, roundTo } from '../math';

describe('Math utilities', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('adds negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('adds mixed positive and negative', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('adds with zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('handles negative result', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    it('multiplies with zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('multiplies negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    it('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('handles decimal results', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('clamp', () => {
    it('returns value when within range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });

    it('clamps to min when below range', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    it('clamps to max when above range', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });

    it('handles edge cases at boundaries', () => {
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
    });
  });

  describe('isInRange', () => {
    it('returns true when value is in range', () => {
      expect(isInRange(5, 0, 10)).toBe(true);
    });

    it('returns true at boundaries', () => {
      expect(isInRange(0, 0, 10)).toBe(true);
      expect(isInRange(10, 0, 10)).toBe(true);
    });

    it('returns false when below range', () => {
      expect(isInRange(-1, 0, 10)).toBe(false);
    });

    it('returns false when above range', () => {
      expect(isInRange(11, 0, 10)).toBe(false);
    });
  });

  describe('roundTo', () => {
    it('rounds to specified decimal places', () => {
      expect(roundTo(3.14159, 2)).toBe(3.14);
    });

    it('rounds up when appropriate', () => {
      expect(roundTo(3.145, 2)).toBe(3.15);
    });

    it('handles zero decimal places', () => {
      expect(roundTo(3.7, 0)).toBe(4);
    });

    it('handles whole numbers', () => {
      expect(roundTo(5, 2)).toBe(5);
    });
  });
});
