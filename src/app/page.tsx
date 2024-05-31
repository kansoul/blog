import EditorPicked from "@/components/EditorPicked";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HotTopic from "@/components/HotTopic";
import Introduce from "@/components/Introduce";
import PopularTag from "@/components/PopularTag";
import RecentPosts from "@/components/RecentPosts";
import { API_URL } from "@/config";
import "animate.css";

async function getData(type: string) {
  const result = await fetch(`${API_URL}/${type}`, {
    method: "GET",
  });
  if (!result.ok) {
    throw new Error(`Error fetching ${type}`);
  }
  const data = await result.json();
  return data.data;
}

export default async function Home() {
  const promises = ["blogs", "tags", "categories"].map((type) => getData(type));
  const [posts, tags, categories] = await Promise.all(promises);
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
