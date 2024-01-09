import { API_URL } from "@/config";
import { getSession, signOut } from "next-auth/react";

export default function useLogout() {
  const handleLogout = async function (callbackUrl?: string) {
    const session = await getSession();
    const res = await fetch(`${API_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });
    return signOut({
      callbackUrl: callbackUrl || undefined,
      redirect: !!callbackUrl,
    });
  };

  return {
    handleLogout,
  };
}
