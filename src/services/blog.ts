import { clientApi, serverApi } from "./api";

export const getBlogs = async (noCache?: boolean) => {
  const result = await serverApi("blogs", "GET", null, noCache);
  return result;
};
export const getBlogsByCategory = async (
  categoryId: string,
  noCache?: boolean
) => {
  const result = await serverApi(
    `blogs/category/${categoryId}`,
    "GET",
    null,
    noCache
  );
  return result;
};
export const getBlogsEditorPicker = async (noCache?: boolean) => {
  const result = await serverApi(
    "blogs/tag/665d7e757f084374ee7265fa",
    "GET",
    null,
    noCache
  );
  return result;
};
export const getBlogsRecent = async (noCache?: boolean) => {
  const result = await serverApi("blogs/recent", "GET", null, noCache);
  return result;
};
export const getBlogsPopular = async (noCache?: boolean) => {
  const result = await serverApi("blogs/popular", "GET", null, noCache);
  return result;
};

export const getBlog = async (id: string, noCache?: boolean) => {
  const result = await serverApi(`blog/${id}`, "GET", null, noCache);
  return result;
};

export const createBlog = async (token: string, data: any) => {
  const result = await clientApi(`blog`, "POST", token, data);
  return result;
};

export const putBlog = async (id: string, token: string, data: any) => {
  const result = await clientApi(`blog/${id}`, "PUT", token, data);
  return result;
};

export const deleteBlog = async (id: string, token: string) => {
  const result = await clientApi(`blog/${id}`, "DELETE", token);
  return result;
};
