import { PaperItem } from '../../data/papers';

export default function English2018Subject1Page({ paper }: { paper: PaperItem }) {
  return (
    <main className="min-h-screen lg:ml-80 p-4 md:p-8 pt-24 lg:pt-8 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest">
              {paper.year}
            </span>
            <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest">
              {paper.type}
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-4">
            English 2018 Subject Group 1
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {paper.content}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">Focus</h2>
              <p className="text-gray-400">Detailed essay and structured answer practice for subjective English.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">Goal</h2>
              <p className="text-gray-400">Build confidence with long-form English paper questions and answer strategies.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
