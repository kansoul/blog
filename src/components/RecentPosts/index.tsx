import { Blog } from "@/types/Blog";
import PostReview from "../Base/PostReview";
import TitleOfSection from "../Base/TitleOfSection";
import LeftContent from "../LeftContent";

export default function RecentPosts(props: { posts: Blog[] }) {
  const { posts } = props;

  return (
    <div className="lg:flex">
      <div className="lg:w-2/3 lg:mr-3">
        <TitleOfSection
          mainTitle="Recent posts"
          subTitle="Don't miss the latest trends"
        />
        {posts &&
          posts.length > 0 &&
          posts.map((value) => <PostReview key={value?.title} post={value} />)}
      </div>
      <LeftContent />
    </div>
  );
}
