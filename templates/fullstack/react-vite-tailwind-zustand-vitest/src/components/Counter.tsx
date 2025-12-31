import { useCounterStore } from '../store/useCounterStore';

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl min-w-80">
      <h2 className="text-slate-800 text-xl font-semibold mb-4">Counter</h2>
      <p className="text-6xl font-bold text-sky-500 my-4" data-testid="count">
        {count}
      </p>
      <div className="flex gap-2 justify-center mt-4">
        <button
          onClick={decrement}
          aria-label="Decrement"
          className="px-6 py-3 text-xl font-semibold bg-slate-200 text-slate-600 rounded-lg hover:-translate-y-0.5 transition-transform"
        >
          -
        </button>
        <button
          onClick={reset}
          aria-label="Reset"
          className="px-6 py-3 text-xl font-semibold bg-slate-200 text-slate-600 rounded-lg hover:-translate-y-0.5 transition-transform"
        >
          Reset
        </button>
        <button
          onClick={increment}
          aria-label="Increment"
          className="px-6 py-3 text-xl font-semibold bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg hover:-translate-y-0.5 transition-transform"
        >
          +
        </button>
      </div>
    </div>
  );
}
