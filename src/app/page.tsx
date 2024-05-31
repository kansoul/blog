import EditorPicked from "@/components/EditorPicked";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HotTopic from "@/components/HotTopic";
import Introduce from "@/components/Introduce";
import PopularTag from "@/components/PopularTag";
import RecentPosts from "@/components/RecentPosts";
import { getBlogs } from "@/services/blog";
import { getCategories } from "@/services/category";
import { getTags } from "@/services/tag";
import "animate.css";

export default async function Home() {
  const [posts, tags, categories] = await Promise.all([
    getBlogs(),
    getTags(),
    getCategories(),
  ]);
  return (
    <>
      <Header />
      <div className="container flex flex-row color-home">
        <div className="w-0 xl:w-1/12"></div>
        <div className="w-full xl:w-10/12 relative z-10">
          <Introduce />
          <HotTopic categories={categories} />
          <EditorPicked />
          <PopularTag tags={tags} />
          <RecentPosts posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
}
