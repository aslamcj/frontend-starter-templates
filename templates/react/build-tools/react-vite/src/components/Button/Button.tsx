import type { ComponentProps } from 'react';
import './Button.css';

/**
 * Button variant types
 */
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

/**
 * Button size types
 */
type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component props
 */
interface ButtonProps extends ComponentProps<'button'> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Loading state - disables button and shows loading indicator */
  isLoading?: boolean;
}

/**
 * A reusable button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * <Button variant="outline" size="sm" isLoading>
 *   Loading...
 * </Button>
 * ```
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classNames = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    isLoading ? 'btn-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled ?? isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="btn-spinner" aria-hidden="true" />
          <span className="sr-only">Loading</span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
