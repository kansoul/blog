import { Category } from "./Category";
import { Tag } from "./Tag";

export interface Blog {
  _id: string;
  slug: string;
  featuredMedia: string;
  category: Category;
  tags: Tag[];
  title: string;
  description: string;
  content: string;
  status: string;
  replies?: string[];
  created_at: Date;
  updated_at?: Date;
}
