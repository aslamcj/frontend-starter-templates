/**
 * Adds two numbers together
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts b from a
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides a by b
 * @throws Error if b is 0
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Clamps a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Checks if a number is within a range (inclusive)
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Rounds a number to a specified number of decimal places
 */
export function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
