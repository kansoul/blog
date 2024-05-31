import { Blog } from "@/types/Blog";
import CardBlog from "../ui/card-blog";
import { srcImage } from "@/utils/image";

export default function ContentCards({ posts }: { posts: Blog[] }) {
  return (
    <div className="w-full lg:flex flex-wrap items-center justify-center gap-5">
      {(posts || []).slice(0, 5).map((value, index) => (
        <CardBlog
          key={`Card blog ${index}`}
          cardTag={value?.tags}
          cardTitle={value?.title}
          srcImage={srcImage(value?.featuredMedia)}
          size={index === 0 || index === 1 ? "XL" : "L"}
        />
      ))}
    </div>
  );
}
