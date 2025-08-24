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

export type InsertProject = Omit<Project, "id" | "createdAt">;

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

export type InsertWritingPost = Omit<WritingPost, "id" | "createdAt">;

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export type InsertContactMessage = Omit<ContactMessage, "id" | "createdAt">;