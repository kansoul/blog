import { clientApi, serverApi } from "./api";

export const getBlogs = async () => {
  const result = await serverApi("blogs", "GET");
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
