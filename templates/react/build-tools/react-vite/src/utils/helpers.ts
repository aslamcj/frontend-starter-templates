/**
 * Utility functions for common operations.
 */

/**
 * Combines multiple class names, filtering out falsy values.
 *
 * @param classes - Class names to combine
 * @returns Combined class string
 *
 * @example
 * ```ts
 * cn('btn', isActive && 'btn-active', className);
 * // => 'btn btn-active custom-class'
 * ```
 */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a number with thousand separators.
 *
 * @param value - Number to format
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted number string
 *
 * @example
 * ```ts
 * formatNumber(1234567); // => '1,234,567'
 * ```
 */
export function formatNumber(value: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(value);
}

/**
 * Formats a date to a localized string.
 *
 * @param date - Date to format
 * @param options - Intl.DateTimeFormat options
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 *
 * @example
 * ```ts
 * formatDate(new Date()); // => 'December 30, 2025'
 * ```
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  locale = 'en-US'
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Debounces a function call.
 *
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 *
 * @example
 * ```ts
 * const debouncedSearch = debounce((query: string) => {
 *   fetchResults(query);
 * }, 300);
 * ```
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Throttles a function call.
 *
 * @param fn - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 *
 * @example
 * ```ts
 * const throttledScroll = throttle(() => {
 *   updatePosition();
 * }, 100);
 * ```
 */
export function throttle<T extends (...args: Parameters<T>) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Generates a random string ID.
 *
 * @param length - Length of the ID (default: 8)
 * @returns Random string ID
 *
 * @example
 * ```ts
 * generateId(); // => 'a1b2c3d4'
 * ```
 */
export function generateId(length = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Safely parses JSON with a fallback value.
 *
 * @param json - JSON string to parse
 * @param fallback - Fallback value if parsing fails
 * @returns Parsed value or fallback
 *
 * @example
 * ```ts
 * safeJsonParse('{"a": 1}', {}); // => { a: 1 }
 * safeJsonParse('invalid', {}); // => {}
 * ```
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param str - String to capitalize
 * @returns Capitalized string
 *
 * @example
 * ```ts
 * capitalize('hello'); // => 'Hello'
 * ```
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a maximum length with ellipsis.
 *
 * @param str - String to truncate
 * @param maxLength - Maximum length
 * @returns Truncated string
 *
 * @example
 * ```ts
 * truncate('Hello World', 5); // => 'Hello...'
 * ```
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Delays execution for a specified time.
 *
 * @param ms - Delay in milliseconds
 * @returns Promise that resolves after the delay
 *
 * @example
 * ```ts
 * await sleep(1000); // Wait 1 second
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
