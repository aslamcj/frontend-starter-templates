export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container-custom flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-bold text-blue-600">
          React Tailwind
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Tailwind Docs
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            React Docs
          </a>
        </nav>
      </div>
    </header>
  );
}
