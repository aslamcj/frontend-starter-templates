import './Layout.css';

/**
 * Footer component
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Built with{' '}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{' '}
          +{' '}
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite
          </a>
        </p>
        <p className="footer-copyright">
          &copy; {currentYear} Your Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
