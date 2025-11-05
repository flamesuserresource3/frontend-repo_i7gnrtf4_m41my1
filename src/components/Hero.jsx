import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient glaze over the scene to match the dreamy palette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/60 via-pink-50/40 to-purple-50/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
        <span className="inline-flex items-center rounded-full bg-white/60 px-4 py-1 text-sm text-rose-500 shadow-sm ring-1 ring-white/60 backdrop-blur-md">
          💗 Soft & dreamy — built like a real SaaS
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-rose-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] sm:text-6xl">
          A Romantic SaaS for Two Hearts
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-rose-700/80 sm:text-lg">
          Gentle gradients, glassmorphism, and pastel emotions — all wrapped in a
          polished product experience made for lovers.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-rose-500/90 px-6 py-3 text-white shadow-lg shadow-rose-200 transition hover:bg-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-300"
          >
            Lovers‑only Login
          </button>
          <a
            href="#plans"
            className="rounded-full bg-white/80 px-6 py-3 text-rose-700 ring-1 ring-rose-100 backdrop-blur-md shadow-md hover:bg-white"
          >
            Our Future Plans →
          </a>
        </div>

        {/* Floating badges */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            '✨ Glowing gradients',
            '🌸 Gentle animations',
            '🔒 Private by design',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/60 px-4 py-2 text-sm text-rose-700 ring-1 ring-white/70 backdrop-blur-md shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Auth Modal */}
      {open && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-rose-900/20 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-2xl ring-1 ring-white/60 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-rose-900">Lovers‑only Login</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-rose-400 hover:bg-rose-50"
                aria-label="Close"
              >
                ✖️
              </button>
            </div>
            <p className="mt-1 text-sm text-rose-700/80">
              Enter the secret garden. Only two hearts allowed.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Welcome back, sweetheart 💞');
                setOpen(false);
              }}
              className="mt-5 space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm text-rose-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 text-rose-900 shadow-inner placeholder:text-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-200"
                  placeholder="you@us.love"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-rose-700">Password</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 text-rose-900 shadow-inner placeholder:text-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-200"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-rose-500 px-4 py-3 font-medium text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-300"
              >
                Enter Together 💘
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
