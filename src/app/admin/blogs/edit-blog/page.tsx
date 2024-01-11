"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
const Jodit = dynamic(() => import("@/components/Base/Jodit"), { ssr: false });

export default function EditBlog() {
  const [content, setContent] = useState("");

  // return <Jodit content={content} setContent={setContent} />;
  return <div>EditBlog</div>;
}
