import { NextResponse } from "next/server";

export async function GET() {
  console.log(123);
  const res = await fetch(process.env.API_URL + "/posts", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return NextResponse.json({ result });
}
