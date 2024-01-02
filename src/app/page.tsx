import EditorPicked from "@/components/EditorPicked";
import HotTopic from "@/components/HotTopic";
import Introduce from "@/components/Introduce";
import PopularTag from "@/components/PopularTag";
import RecentPosts from "@/components/RecentPosts";
import "animate.css";

export default function Home() {
  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12 relative z-10">
        <Introduce />
        <HotTopic />
        <EditorPicked />
        <PopularTag />
        <RecentPosts />
      </div>
    </div>
  );
}
