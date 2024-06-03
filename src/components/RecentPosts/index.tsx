import { Blog } from "@/types/Blog";
import PostReview from "../Base/PostReview";
import TitleOfSection from "../Base/TitleOfSection";
import LeftContent from "../LeftContent";

export default function RecentPosts(props: {
  popularPost: Blog[];
  recentPost: Blog[];
}) {
  const { popularPost, recentPost } = props;

  return (
    <div className="lg:flex">
      <div className="lg:w-2/3 lg:mr-3">
        <TitleOfSection
          mainTitle="Recent posts"
          subTitle="Don't miss the latest trends"
        />
        {recentPost &&
          recentPost.length > 0 &&
          recentPost.map((value) => (
            <PostReview key={value?.title} post={value} />
          ))}
      </div>
      <LeftContent popularPost={popularPost} />
    </div>
  );
}
