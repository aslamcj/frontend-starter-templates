export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
        Next.js + Tailwind CSS
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Utility-first CSS with Next.js 15
      </p>
      <div className="flex gap-4">
        <a
          href="https://nextjs.org/docs"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Next.js Docs
        </a>
        <a
          href="https://tailwindcss.com/docs"
          className="rounded-lg border border-gray-300 px-6 py-3 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Tailwind Docs
        </a>
      </div>
    </main>
  );
}
