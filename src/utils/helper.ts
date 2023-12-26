export const saveStorage = (value: "dark" | "light", key = "color-theme") => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key = "color-theme") => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};
