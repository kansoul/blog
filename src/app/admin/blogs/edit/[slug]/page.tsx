"use client";
import CreateUpdateBlog from "@/components/CreateUpdateBlog";
import { APP_URL } from "@/config";
import { Blog } from "@/types/Blog";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UpdateBlog({ params }: { params: { slug: string } }) {
  const { data: session } = useSession();
  const { slug } = params;
  const [blog, setBlog] = useState<Blog>();
  const handleFetchBlog = async () => {
    try {
      const result = await fetch(`${APP_URL}/admin/api/blog/${slug}`, {
        method: "GET",
      });
      if (!result.ok) {
        throw new Error("Error fetching");
      }

      const data = await result.json();
      setBlog(data.data);
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
