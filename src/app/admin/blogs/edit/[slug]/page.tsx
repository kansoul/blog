"use client";
import CreateUpdateBlog from "@/components/CreateUpdateBlog";
import { APP_URL } from "@/config";
import { getBlog } from "@/services/blog";
import { Blog } from "@/types/Blog";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UpdateBlog({ params }: { params: { slug: string } }) {
  const { data: session } = useSession();
  const { slug } = params;
  const [blog, setBlog] = useState<Blog>();
  const handleFetchBlog = async () => {
    try {
      const result = await getBlog(slug);
      setBlog(result);
    } catch (error) {
      alert("Error fetching");
    }
  };

  useEffect(() => {
    if (slug) handleFetchBlog();

    // eslint-disable-next-line
  }, []);

  return session && blog ? (
    <CreateUpdateBlog session={session} itemUpdate={blog} />
  ) : (
    <div />
  );
}
