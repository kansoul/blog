export const getTags = async (url: string) => {
  const tags = await fetch(url, { cache: "force-cache" });
  if (!tags.ok) {
    throw new Error("Failed to fetch data");
  }
  return tags.json();
};
