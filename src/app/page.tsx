import EditorPicked from "@/components/EditorPicked";
import HotTopic from "@/components/HotTopic";
import Introduce from "@/components/Introduce";
import PopularTag from "@/components/PopularTag";
import RecentPosts from "@/components/RecentPosts";
import { getPosts } from "@/services/post";
import { Blog } from "@/types/Blog";
import "animate.css";

export default async function Home() {
  const posts: Blog[] = await getPosts();

  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12 relative z-10">
        <Introduce />
        <HotTopic />
        <EditorPicked />
        <PopularTag />
        <RecentPosts posts={posts} />
      </div>
    </div>
  );
}
