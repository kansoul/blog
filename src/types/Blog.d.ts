export interface Blog {
  id: number;
  slug: string;
  featuredMedia: string;
  categories: string[];
  tags: string[];
  title: string;
  description: string;
  content: string;
  status: string;
  replies: string[];
  createdAt: Date;
  updatedAt: Date;
}
