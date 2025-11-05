export default function Highlights() {
  const features = [
    {
      title: 'Whisper‑soft UI',
      desc: 'Glassmorphism cards, dreamy gradients, and cuddly corners throughout.',
      emoji: '🌙',
    },
    {
      title: 'Moments that Glow',
      desc: 'Delicate shadows and lights that feel like golden hour.',
      emoji: '✨',
    },
    {
      title: 'Two‑Heart Privacy',
      desc: 'Built with love and intention — just the two of you in your garden.',
      emoji: '🔒',
    },
  ];

  const timeline = [
    { time: 'Day 1', title: 'We matched', note: 'hello world but with butterflies 💕' },
    { time: 'Day 30', title: 'First mini‑adventure', note: 'polaroids, pastries, park benches' },
    { time: 'Month 6', title: 'Our playlist', note: 'soft synths, rainy windows, holding hands' },
    { time: 'Today', title: 'This little app', note: 'a secret place to write and dream' },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20" id="features">
      {/* Features */}
      <div className="grid gap-6 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl bg-white/60 p-6 shadow-xl ring-1 ring-white/70 backdrop-blur-xl"
          >
            <div className="text-3xl">{f.emoji}</div>
            <h3 className="mt-3 text-lg font-semibold text-rose-900">{f.title}</h3>
            <p className="mt-2 text-sm text-rose-700/80">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Story timeline */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-pink-50/80 to-purple-50/80 p-8 ring-1 ring-white/60 backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-rose-900">Our Story Timeline</h2>
        <ol className="mt-6 space-y-6">
          {timeline.map((t, i) => (
            <li key={i} className="grid gap-2 rounded-2xl bg-white/60 p-5 shadow-md ring-1 ring-white/70 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-rose-600/90">{t.time}</span>
                <span className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_12px_rgba(244,114,182,0.6)]" />
              </div>
              <div className="text-rose-900 font-semibold">{t.title}</div>
              <p className="text-sm text-rose-700/80">{t.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
