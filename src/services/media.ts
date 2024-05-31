import { clientApi, serverApi } from "./api";

export const getAllMedia = async (token: string) => {
  const result = await clientApi("media", "GET", token);
  return result;
};

export const createMedia = async (token: string, data: any) => {
  const result = await clientApi(`media`, "POST", token, data);
  return result;
};

export const putMedia = async (id: string, token: string, data: any) => {
  const result = await clientApi(`media/${id}`, "PUT", token, data);
  return result;
};

export const deleteMedia = async (id: string, token: string) => {
  const result = await clientApi(`media/${id}`, "DELETE", token);
  return result;
};
