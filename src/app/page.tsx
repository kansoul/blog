import EditorPicker from "@/components/EditorPicked";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HotTopic from "@/components/HotTopic";
import Introduce from "@/components/Introduce";
import PopularTag from "@/components/PopularTag";

export default function Home() {
  return (
    <main className="bg-[#F9FBFF] dark:bg-[#0F172A]">
      <Header />
      <div className="container flex flex-row color-home">
        <div className="w-0 xl:w-1/12"></div>
        <div className="w-full xl:w-10/12">
          <Introduce />
          <HotTopic />
          <EditorPicker />
          <PopularTag />
        </div>
      </div>
      <Footer />
    </main>
  );
}
