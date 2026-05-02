// app/[paperId]/page.tsx
import { notFound } from 'next/navigation';

// 1. Mock Database (In a real app, this could be an API call or a JSON file)
// The keys here must match the 'href' values in your Sidebar.tsx (without the slash)
const PAPER_DATA: Record<string, { content: string; year: string; type: string }> = {
  'english-2018-subject-1': {
    year: '2018',
    type: 'Subjective',
    content: 'This is the specific content for English 2018 Subject Group 1 questions...',
  },
  'english-2018-subject-2': {
    year: '2018',
    type: 'Subjective',
    content: 'This is the specific content for English 2018 Subject Group 2 questions...',
  },
  'english-2018-object-1': {
    year: '2018',
    type: 'Objective',
    content: 'Multiple Choice Questions for English 2018 Objective Group 1...',
  },
};

interface PageProps {
  params: Promise<{ paperId: string }>;
}

export default async function PaperPage({ params }: PageProps) {
  // Await params because they are a Promise in Next.js 15+
  const { paperId } = await params;

  // 2. Fetch the specific data for this ID
  const paper = PAPER_DATA[paperId];

  // 3. Handle 404 if the user enters a URL that doesn't exist in our data
  if (!paper) {
    notFound();
  }

  // Formatting the title for display
  const displayTitle = paperId.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen lg:ml-80 p-4 md:p-8 pt-24 lg:pt-8 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                {paper.year}
              </span>
              <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest">
                {paper.type}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-purple-200 to-gray-400 bg-clip-text text-transparent">
              {displayTitle}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8 rounded-2xl border border-white/5 bg-gray-900/50 p-6 md:p-10">
          <h2 className="text-xl font-semibold mb-6 text-purple-300 border-b border-white/10 pb-4">
            Paper Description
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              {paper.content}
            </p>
          </div>

          {/* Placeholder for future features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-white/5 p-4 font-bold transition-all hover:bg-white/10 border border-white/10">
              Download PDF
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 p-4 font-bold transition-all hover:opacity-90 shadow-lg shadow-purple-500/20">
              Start Practice Test
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
