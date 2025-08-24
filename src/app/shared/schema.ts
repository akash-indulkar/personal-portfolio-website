export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  architecture?: string;
  techStack: string[];
  featured: boolean;
  createdAt: Date;
}

export interface WritingPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl?:string,
  tags: string[];
  featured: boolean;
  readTime: string;
  publishedAt: Date;
  createdAt: Date;
}
