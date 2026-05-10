'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6">
          <h1 className="mb-4 text-3xl font-semibold">Something went wrong</h1>
          <p className="mb-8 text-lg text-slate-600">
            An unexpected error occurred while loading this page. Our team has been notified and is
            looking into it. You can try again, or return later.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="rounded-md bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Try again
            </button>
            <p className="text-xs text-slate-400">
              Error reference: <span className="font-mono">{error.digest ?? 'N/A'}</span>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
