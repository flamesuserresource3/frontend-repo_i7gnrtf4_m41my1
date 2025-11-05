import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Plans from './components/Plans';
import Letters from './components/Letters';

function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-white/70 backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-rose-900">Send Me a Love Letter 💌</h2>
        <p className="mt-1 text-rose-700/80">Whisper something sweet. Ill keep it safe.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Letter sent with a kiss 💋');
          }}
          className="mt-6 grid gap-4"
        >
          <div className="grid gap-2">
            <label className="text-sm text-rose-700">Your Name</label>
            <input className="rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 text-rose-900 shadow-inner placeholder:text-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-200" placeholder="Starry-eyed you" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-rose-700">Your Email</label>
            <input type="email" className="rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 text-rose-900 shadow-inner placeholder:text-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-200" placeholder="you@us.love" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-rose-700">Message</label>
            <textarea rows={5} className="rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 text-rose-900 shadow-inner placeholder:text-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-200" placeholder="Write me something tender..." />
          </div>
          <button className="rounded-2xl bg-rose-500 px-5 py-3 font-medium text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-300">
            Send with Love
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-rose-100/60 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-rose-600">Made with pastel feelings  2025</p>
        <nav className="flex gap-4 text-sm text-rose-700/80">
          <a href="#features" className="hover:text-rose-900">Features</a>
          <a href="#plans" className="hover:text-rose-900">Future Plans</a>
          <a href="#letters" className="hover:text-rose-900">Letters</a>
          <a href="#contact" className="hover:text-rose-900">Love Letter</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(255,182,193,0.35),transparent)]">
      {/* Soft background accents */}
      <div className="pointer-events-none fixed inset-0 opacity-70" aria-hidden>
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute right-[-4rem] top-48 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-100/60 blur-3xl" />
      </div>

      <Hero />
      <Highlights />
      <Plans />
      <Letters />
      <Contact />
      <Footer />
    </div>
  );
}
