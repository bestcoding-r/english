// data/papers.ts
export interface PaperItem {
  id: string;
  year: string;
  type: string;
  content: string;
}

export const PAPER_DATA: Record<string, PaperItem> = {
  'english-2018-subject-1': {
    id: 'english-2018-subject-1',
    year: '2018',
    type: 'Subjective',
    content: 'Content for Group 1...',
  },
  'english-2018-subject-2': {
    id: 'english-2018-subject-2',
    year: '2018',
    type: 'Subjective',
    content: 'Content for Group 2...',
  },
  'english-2018-object-1': {
    id: 'english-2018-object-1',
    year: '2018',
    type: 'Objective',
    content: 'Content for Objective 1...',
  },
};