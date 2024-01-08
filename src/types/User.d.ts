export interface User {
  _id?: string;
  username?: string;
  role?: "ADMIN" | "AUTHOR";
  email?: string | null;
  name?: string | null;
  phoneNumber?: string;
  token?: string;
  avatar?: string;
  created_at?: string;
}
