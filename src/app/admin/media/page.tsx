"use client";

import FileUpload from "@/components/FileUpload";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { API_URL } from "@/config";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MediaManagement() {
  const { data: session } = useSession();

  const [media, setMedia] = useState<any>([]);
  const [imageUpdate, setImageUpdate] = useState<any>(null);

  const [openCreateMedia, setOpenCreateMedia] = useState<boolean>(false);

  const handleGetMedia = async () => {
    const result = await fetch(`api/media`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + session?.user?.token,
      },
    });
    const data = await result.json();
    if (data && data.error) {
      alert("Error fetching media");
    }
    setMedia(data.data);
  };
  useEffect(() => {
    if (session?.user?.token) handleGetMedia();
  }, [session]);

  const refetchData = () => {
    setOpenCreateMedia(false);
    setImageUpdate(null);
    handleGetMedia();
  };

  const srcImage = (mediaId: string) => API_URL + "/media/" + mediaId;
  return (
    <div className="flex flex-wrap">
      {media &&
        media.length > 0 &&
        media.map((value: any) => (
          <div key={value._id} className="p-2 w-1/5 h-[300px]">
            <div
              className="w-full h-full cursor-pointer relative rounded-md overflow-hidden"
              onClick={() => {
                setImageUpdate(value);
                setOpenCreateMedia(true);
              }}
            >
              <div className="card-info z-20 peer">
                <div className="absolute bottom-0 left-0 p-[15px] text-left">
                  <h6 className="text-[#F9FBFF] dark:text-[#B9E0F2] mb-2 text-base font-bold">
                    {value.title}
                  </h6>
                  <p className="text-xs text-[#708AB0] dark:text-[#94A9C9]">
                    {value.description}
                  </p>
                </div>
              </div>
              <Image
                alt={value.description}
                src={srcImage(value._id)}
                width="0"
                height="0"
                sizes="100vw"
                className="object-cover w-full h-full transform transition-transform duration-300 peer-hover:scale-110"
              />
            </div>
          </div>
        ))}
      {session?.user?.token && (
        <Dialog open={openCreateMedia}>
          <DialogTrigger asChild>
            <div
              className="fixed bottom-0 right-0 p-2 m-8 rounded-full border border-gray-300 shadow shadow-gray-700 cursor-pointer"
              onClick={() => setOpenCreateMedia(true)}
            >
              <Image
                alt="Upload"
                src={"/icons/upload.svg"}
                width={48}
                height={48}
                className="bg-transparent"
              />
            </div>
          </DialogTrigger>

          <DialogContent
            onClose={() => setOpenCreateMedia(false)}
            className="w-auto p-6 max-h-screen"
          >
            {imageUpdate ? (
              <FileUpload
                token={session?.user?.token}
                refetch={refetchData}
                closePopup={setOpenCreateMedia}
                imageUpdate={imageUpdate}
              />
            ) : (
              <FileUpload
                token={session?.user?.token}
                refetch={refetchData}
                closePopup={setOpenCreateMedia}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
