import { clientApi, serverApi } from "./api";

export const getBlogs = async () => {
  const result = await serverApi("blogs", "GET");
  return result;
};
export const getBlogsByCategory = async (categoryId: string) => {
  const result = await serverApi(`blogs/category/${categoryId}`, "GET");
  return result;
};
export const getBlogsEditorPicker = async () => {
  const result = await serverApi("blogs/tag/665d7e757f084374ee7265fa", "GET");
  return result;
};
export const getBlogsRecent = async () => {
  const result = await serverApi("blogs/recent", "GET");
  return result;
};
export const getBlogsPopular = async () => {
  const result = await serverApi("blogs/popular", "GET");
  return result;
};

export const getBlog = async (id: string) => {
  const result = await serverApi(`blog/${id}`, "GET");
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
