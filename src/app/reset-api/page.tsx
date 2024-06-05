import {
  getBlog,
  getBlogs,
  getBlogsEditorPicker,
  getBlogsPopular,
  getBlogsRecent,
} from "@/services/blog";
import { getCategories, getCategory } from "@/services/category";
import { getTags } from "@/services/tag";
import { Blog } from "@/types/Blog";
import { Category } from "@/types/Category";
import { Tag } from "@/types/Tag";

export default async function ResetAPI() {
  const posts: Blog[] = await getBlogs(true);
  if (posts) {
    const post = await Promise.all(
      posts.map((post) => getBlog(post.slug, true))
    );
    const postCustom = await Promise.all([
      getBlogsEditorPicker(true),
      getBlogsRecent(true),
      getBlogsPopular(true),
    ]);
  }
  const categories: Category[] = await getCategories(true);
  if (categories) {
    const category = await Promise.all(
      categories.map((category) => getCategory(category.slug, true))
    );
  }
  const tags: Tag[] = await getTags(true);
  return <div>OK nha</div>;
}
