import { PaperItem } from '../../data/papers';

export default function English2018Object1Page({ paper }: { paper: PaperItem }) {
  return (
    <main className="min-h-screen lg:ml-80 p-4 md:p-8 pt-24 lg:pt-8 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-widest">
              {paper.year}
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-widest">
              {paper.type}
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-4">
            English 2018 Objective Group 1
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {paper.content}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">MCQ Practice</h2>
              <p className="text-gray-400">Sharpen your speed and accuracy with objective multiple-choice exercises.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">Answer Key</h2>
              <p className="text-gray-400">Check your solutions, understand common traps, and learn the best elimination tactics.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
