import './Layout.css';

/**
 * Header component with navigation
 */
export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <svg
            className="logo-icon"
            viewBox="0 0 100 100"
            width="32"
            height="32"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="8" fill="currentColor" />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="rotate(60 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="rotate(120 50 50)"
            />
          </svg>
          <span>React Vite</span>
        </a>

        <nav className="nav">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
