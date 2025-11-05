export default function Letters() {
  const posts = [
    {
      title: 'A tiny museum of moments',
      excerpt: 'Ticket stubs, pressed flowers, and us on a rainy Tuesday.',
      date: 'Apr 14',
      emoji: '🎟️',
    },
    {
      title: 'Midnight grocery run',
      excerpt: 'Peach yogurt, pasta, and laughing in aisle 7.',
      date: 'May 02',
      emoji: '🛒',
    },
    {
      title: 'Our favorite bench',
      excerpt: 'When the light hits the leaves just right.',
      date: 'Jun 21',
      emoji: '🪑',
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20" id="letters">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-rose-900">Letters / Memories</h2>
          <p className="mt-2 max-w-2xl text-rose-700/80">Sweet little notes and gentle recollections.</p>
        </div>
        <a href="#write" className="rounded-full bg-white/70 px-4 py-2 text-sm text-rose-700 ring-1 ring-white/70 backdrop-blur">
          Write a new one →
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl bg-white/60 p-6 shadow-xl ring-1 ring-white/70 backdrop-blur-xl"
          >
            <div className="text-4xl">{p.emoji}</div>
            <h3 className="mt-3 text-lg font-semibold text-rose-900 group-hover:underline">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-rose-700/80">{p.excerpt}</p>
            <div className="mt-4 text-xs text-rose-400">{p.date}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
