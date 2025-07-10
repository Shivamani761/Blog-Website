export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export type ViewMode = 'list' | 'editor' | 'viewer';