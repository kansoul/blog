export const getMedia = async (url: string) => {
  const media = await fetch(url, { cache: "force-cache" });
  if (!media.ok) {
    throw new Error("Failed to fetch data");
  }
  return media.json();
};
