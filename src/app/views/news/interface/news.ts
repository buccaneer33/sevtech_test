export interface HighlightResult {
  matchLevel: string;
  matchedWords: unknown[],
  value: string;
}

export interface News {
  author: string;
  children: number[];
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url: string;
  _highlightResult: { [key: string]: HighlightResult };
  _tags: string[];
}
