import { Post } from "@/types/Blog";
import PostReview from "../Base/PostReview";
import TitleOfSection from "../Base/TitleOfSection";
import LeftContent from "../LeftContent";

export default function RecentPosts(props: { posts: Post[] }) {
  const { posts } = props;

  return (
    <div className="lg:flex">
      <div className="lg:w-2/3 lg:mr-3">
        <TitleOfSection
          mainTitle="Recent posts"
          subTitle="Don't miss the latest trends"
        />
        {posts.map((value) => (
          <PostReview key={value?.title?.rendered} post={value} />
        ))}
      </div>
      <LeftContent />
    </div>
  );
}
