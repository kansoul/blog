import { API_URL } from "@/config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(API_URL + "/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return NextResponse.json(result, { status: result.code });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
