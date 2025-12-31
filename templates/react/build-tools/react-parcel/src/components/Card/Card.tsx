import type { ReactNode } from 'react';
import './Card.css';

/**
 * Card component props
 */
interface CardProps {
  /** Card title */
  title?: string;
  /** Card content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether to add padding */
  noPadding?: boolean;
}

/**
 * A reusable card component for containing content.
 *
 * @example
 * ```tsx
 * <Card title="Welcome">
 *   <p>This is the card content.</p>
 * </Card>
 * ```
 */
export function Card({
  title,
  children,
  className = '',
  noPadding = false,
}: CardProps) {
  const classNames = ['card', noPadding ? 'card-no-padding' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {title ? <h3 className="card-title">{title}</h3> : null}
      <div className="card-content">{children}</div>
    </div>
  );
}
