"use client";

import { API_URL } from "@/config";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MediaManagement() {
  const { data: session } = useSession();

  const [media, setMedia] = useState<any>([]);
  const handleGetMedia = async () => {
    const result = await fetch(`http://localhost:3000/api/media`, {
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
    if (session?.user.token) handleGetMedia();
  }, [session]);

  const srcImage = (mediaId: string) => API_URL + "/media/" + mediaId;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {media.map((value: any) => (
        <div
          key={value._id}
          className="m-2 w-full h-[250px] cursor-pointer relative rounded-md overflow-hidden"
        >
          <div className="card-info z-20 peer">
            <div className="absolute bottom-0 left-0 p-[15px] text-left flex">
              <button>a</button>
              <button>b</button>
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
      ))}
    </div>
  );
}
