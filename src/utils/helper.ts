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

const convertToNonAccent = (text: string) => {
  const accentuatedChars: string =
    "àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ";

  const nonAccentuatedChars: string =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";

  const charMap: { [key: string]: string } = {};

  for (let i = 0; i < accentuatedChars.length; i++) {
    charMap[accentuatedChars[i]] = nonAccentuatedChars[i];
  }

  return text
    .split("")
    .map((char) => charMap[char] || char)
    .join("");
};

export const changeTextToSlug = (text: string) => {
  let formattedString = convertToNonAccent(text)
    .replace(/[^\w\s]/gi, "")
    .toLowerCase();
  formattedString = formattedString.replace(/\s+/g, "-");

  return formattedString;
};
