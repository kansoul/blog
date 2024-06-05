import { API_URL } from "@/config";

export const srcImage = (mediaId: string) =>
  mediaId ? API_URL + "/media/" + mediaId : "";
