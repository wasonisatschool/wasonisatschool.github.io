export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string;
  status: 'draft' | 'published';
  readingTime: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  status: 'active' | 'completed' | 'archived';
}
