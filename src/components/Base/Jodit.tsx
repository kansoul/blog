import { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Jodit = ({ content, setContent }: any) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={{
        readonly: false,
        enableDragAndDropFileToEditor: true,
        uploader: {
          url: "/manage/upload", //your upload api url
          insertImageAsBase64URI: false, // not inster base64
          imagesExtensions: ["jpg", "png", "jpeg", "gif"],
          //headers: {"token":`${db.token}`},
          filesVariableName: function (t: any) {
            return "files[" + t + "]";
          }, //"files",
          withCredentials: false,
          pathVariableName: "path",
          format: "json",
          method: "POST",
          prepareData: function (formdata: any) {
            return formdata;
          },
          isSuccess: function (e: any) {
            debugger;
            return e.success;
          },
          getMessage: function (e: any) {
            return void 0 !== e.data.messages && Array.isArray(e.data.messages)
              ? e.data.messages.join("")
              : "";
          },
          process: function (resp: any) {
            //success callback transfrom data to defaultHandlerSuccess use.it's up to you.
            let files = [];
            files.unshift(resp.data);
            return {
              files: resp.data,
              error: resp.msg,
              msg: resp.msg,
            };
          },
          error: function (this: any, e: Error) {
            this.j.e.fire("errorMessage", e.message, "error", 4000);
          },
          defaultHandlerSuccess: function (this: any, resp: any) {
            // `this` is the editor.
            const j = this;
            debugger;
            if (resp.files && resp.files.length) {
              const tagName = "img";
              resp.files.forEach((filename: string, index: number) => {
                //edetor insertimg function
                const elm = j.createInside.element(tagName);
                elm.setAttribute("src", filename);
                j.s.insertImage(
                  elm as HTMLImageElement,
                  null,
                  j.o.imageDefaultWidth
                );
              });
            }
          },
          defaultHandlerError: function (this: any, e: any) {
            this.j.e.fire("errorMessage", e.message);
          },
        },
        filebrowser: {
          buttons: [],
        },
      }}
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => setContent(newContent)}
    />
  );
};
export default Jodit;
