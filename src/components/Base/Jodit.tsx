import { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Jodit = ({ content, setContent }: any) => {
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      enableDragAndDropFileToEditor: true,
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    []
  );
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
      onChange={(newContent) => setContent(newContent)}
    />
  );
};
export default Jodit;
