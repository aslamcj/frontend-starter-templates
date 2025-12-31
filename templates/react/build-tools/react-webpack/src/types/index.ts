/**
 * Common TypeScript types and interfaces used across the application.
 * Add your shared types here.
 */

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Common user type
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Theme options
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Status types for async operations
 */
export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Make all properties of T optional and nullable
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] | null;
};

/**
 * Extract the element type from an array type
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/**
 * Make specific keys of T required
 */
export type RequiredKeys<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * Make specific keys of T optional
 */
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
