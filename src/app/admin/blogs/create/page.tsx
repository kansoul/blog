"use client";

import CreateUpdateBlog from "@/components/CreateUpdateBlog";
import { useSession } from "next-auth/react";

export default function CreateBlog() {
  const { data: session } = useSession();
  return session ? <CreateUpdateBlog session={session} /> : <div />;
}
