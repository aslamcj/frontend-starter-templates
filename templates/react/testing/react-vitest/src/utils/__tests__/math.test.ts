import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, clamp, isInRange } from '../math';

describe('Math utilities', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('adds negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
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
  });

  describe('isInRange', () => {
    it('returns true when value is in range', () => {
      expect(isInRange(5, 0, 10)).toBe(true);
    });

    it('returns true at boundaries', () => {
      expect(isInRange(0, 0, 10)).toBe(true);
      expect(isInRange(10, 0, 10)).toBe(true);
    });

    it('returns false when out of range', () => {
      expect(isInRange(-1, 0, 10)).toBe(false);
      expect(isInRange(11, 0, 10)).toBe(false);
    });
  });
});
