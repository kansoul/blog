"use client";

import Image from "next/image";
import { API_URL, APP_URL } from "@/config";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Media } from "@/types/Media";

export default function Gallery(props: { setMediaId: any; closeGallery: any }) {
  const { setMediaId, closeGallery } = props;
  const { data: session } = useSession();

  const [media, setMedia] = useState<Media[]>([]);
  const [mediaChoose, setMediaChoose] = useState<Media | null>(null);

  const handleGetMedia = async () => {
    const result = await fetch(`${APP_URL}/admin/api/media`, {
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

  const chooseImage = () => {
    if (!mediaChoose) return;
    setMediaId(mediaChoose?._id);
    closeGallery(false);
  };

  useEffect(() => {
    if (session?.user?.token) handleGetMedia();
    // eslint-disable-next-line
  }, [session]);

  const bodyScroll = document.documentElement.style;

  useEffect(() => {
    bodyScroll.overflow = "hidden";
    return () => {
      bodyScroll.overflow = "scroll";
    };
    // eslint-disable-next-line
  }, []);

  const srcImage = (mediaId: string) => API_URL + "/media/" + mediaId;

  return (
    <div className="w-full h-full overflow-hidden p-2">
      <div className="w-full h-[calc(100%-60px)] overflow-y-auto">
        <div className="flex flex-wrap">
          {media &&
            media.length > 0 &&
            media.map((value) => (
              <div
                key={value._id}
                className={`p-3 w-1/5 h-[300px] ${
                  value._id === mediaChoose?._id ? "bg-gray-400" : ""
                }`}
              >
                <div
                  className="w-full h-full cursor-pointer relative rounded-md overflow-hidden"
                  onClick={() => {
                    setMediaChoose(value);
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
        </div>
      </div>
      <div className="mt-3 w-full flex items-center justify-end flex-wrap gap-x-4">
        <button
          type="button"
          onClick={() => closeGallery(false)}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Close
        </button>

        <button
          type="button"
          onClick={chooseImage}
          disabled={!mediaChoose}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Choose
        </button>
      </div>
    </div>
  );
}
