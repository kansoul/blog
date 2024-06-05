import { clientApi, serverApi } from "./api";

export const getCategories = async (noCache?: boolean) => {
  const result = await serverApi("categories", "GET", null, noCache);
  return result;
};

export const getCategory = async (slug: string, noCache?: boolean) => {
  const result = await serverApi(`category/${slug}`, "GET", null, noCache);
  return result;
};

export const createCategory = async (token: string, data: any) => {
  const result = await clientApi(`category`, "POST", token, data);
  return result;
};

export const putCategory = async (id: string, token: string, data: any) => {
  const result = await clientApi(`category/${id}`, "PUT", token, data);
  return result;
};

export const deleteCategory = async (id: string, token: string) => {
  const result = await clientApi(`category/${id}`, "DELETE", token);
  return result;
};
