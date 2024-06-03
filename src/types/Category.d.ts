import { Blog } from "./Blog";

export interface Category {
  _id: string;
  name: string;
  featuredMedia: string;
  slug: string;
  description: string;
  blogs: Blog[];
  created_at?: Date;
  count?: string;
}
