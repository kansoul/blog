import EditorPicked from "@/components/EditorPicked";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HotTopic from "@/components/HotTopic";
import Introduce from "@/components/Introduce";
import PopularTag from "@/components/PopularTag";
import RecentPosts from "@/components/RecentPosts";
import { Blog } from "@/types/Blog";
import "animate.css";

export default async function Home() {
  const posts: Blog[] = [];

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
