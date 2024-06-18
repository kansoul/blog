import { API_URL } from "@/config";

type METHOD = "GET" | "POST" | "PUT" | "DELETE";

export const serverApi = async (
  router: string,
  method: METHOD,
  data?: any,
  noCache?: boolean
) => {
  try {
    const response = await fetch(`${API_URL}/${router}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(data && { body: JSON.stringify(data) }),
      ...(noCache && { cache: "no-cache" }),
    });
    const result = await response.json();
    return result?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const clientApi = async (
  router: string,
  method: METHOD,
  token: string,
  data?: any
) => {
  try {
    const response = await fetch(`${API_URL}/${router}`, {
      cache: "no-cache",
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...(data && { body: JSON.stringify(data) }),
    });
    const result = await response.json();
    return result?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
