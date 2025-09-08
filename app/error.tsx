'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 flex items-center justify-center">
      <div className="glass-card p-8 text-center max-w-md">
        <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-400 text-2xl">⚠️</span>
        </div>
        <h2 className="text-white text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-white text-opacity-80 mb-6">
          We encountered an error while loading FlexiNest. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
