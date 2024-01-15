import { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { API_URL } from "@/config";

const Jodit = ({ content, setContent, token }: any) => {
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      enableDragAndDropFileToEditor: true,
      uploader: {
        url: "http://localhost:3001/api/v1/upload",
        format: "json",
        method: "POST",
        queryBuild: function (data: any) {
          return JSON.stringify(data);
        },
        buildData: function (data: any) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(data.getAll("files[0]")[0]);
            reader.onload = function () {
              return resolve({
                data: reader.result,
              });
            };
            reader.onerror = function (error) {
              reject(error);
            };
          });
        },
        isSuccess: function (resp: any) {
          return resp;
        },
        getMessage: function (resp: any) {
          return resp;
        },
        process: function (resp: any) {
          return {
            file: resp?.data,
            path: "/media/",
            baseurl: API_URL,
            error: resp?.error ? resp?.msg : 0,
            msg: resp?.msg,
          };
        },
        defaultHandlerSuccess: function (data: any, resp: any) {
          if (data?.file) {
            (this as any).s.insertImage(
              data.baseurl + data.path + data.file["_id"],
              null,
              250
            );
          }
        },
        headers: {
          "Content-Type": "application/json",
        },
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
