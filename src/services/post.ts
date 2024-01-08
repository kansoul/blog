import { API_URL } from "@/config";

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts`, { cache: "force-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
