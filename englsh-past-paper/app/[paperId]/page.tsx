// app/[paperId]/page.tsx
import { notFound } from 'next/navigation';
import { PAPER_DATA, PaperItem } from '../data/papers';
import { PAPER_PAGES } from '../components/paper-pages';

interface PageProps {
  params: Promise<{ paperId: string }>;
}

export default async function PaperPage({ params }: PageProps) {
  const { paperId } = await params;
  const paper = PAPER_DATA[paperId];

  if (!paper) {
    notFound();
  }

  const PageComponent = PAPER_PAGES[paperId as keyof typeof PAPER_PAGES];
  if (!PageComponent) {
    notFound();
  }

  return <PageComponent paper={paper} />;
}
