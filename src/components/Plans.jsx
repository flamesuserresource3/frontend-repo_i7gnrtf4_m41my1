export default function Plans() {
  const plans = [
    {
      name: 'Near Future',
      price: 'Free',
      perks: ['Shared notes', 'Cute reminders', 'One secret place'],
      highlight: false,
      emoji: '🌷',
    },
    {
      name: 'Soon™',
      price: '$9/mo',
      perks: ['Photo journal', 'Love maps', 'Custom themes'],
      highlight: true,
      emoji: '💝',
    },
    {
      name: 'Someday',
      price: '$29/mo',
      perks: ['Private spaces', 'Keepsake export', 'Playful AI prompts'],
      highlight: false,
      emoji: '🌈',
    },
  ];

  return (
    <section id="plans" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-rose-900">Our Future Plans</h2>
        <p className="mx-auto mt-2 max-w-2xl text-rose-700/80">
          A roadmap of gentle upgrades as our little world grows.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl p-6 shadow-xl ring-1 backdrop-blur-xl ${
              p.highlight
                ? 'bg-rose-50/80 ring-rose-100'
                : 'bg-white/60 ring-white/70'
            }`}
          >
            <div className="text-4xl">{p.emoji}</div>
            <h3 className="mt-3 text-xl font-bold text-rose-900">{p.name}</h3>
            <div className="mt-1 text-rose-500">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-rose-700/80">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(244,114,182,0.5)]" />
                  {perk}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-2xl bg-rose-500/90 px-4 py-3 font-medium text-white shadow-lg shadow-rose-200 transition hover:bg-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-300">
              Save Us a Spot
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
