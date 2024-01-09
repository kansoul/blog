"use client";

import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

export default function EditBlog() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={{
        readonly: false,
      }} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
}
