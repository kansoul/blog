import { clientApi, serverApi } from "./api";

export const getTags = async (noCache?: boolean) => {
  const result = await serverApi("tags", "GET", null, noCache);
  return result;
};

export const createTag = async (token: string, data: any) => {
  const result = await clientApi(`tag`, "POST", token, data);
  return result;
};

export const putTag = async (id: string, token: string, data: any) => {
  const result = await clientApi(`tag/${id}`, "PUT", token, data);
  return result;
};

export const deleteTag = async (id: string, token: string) => {
  const result = await clientApi(`tag/${id}`, "DELETE", token);
  return result;
};
