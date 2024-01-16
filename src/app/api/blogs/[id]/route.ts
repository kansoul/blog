import { API_URL } from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: any }) {
  const id = context?.params?.id;
  try {
    const res = await fetch(API_URL + "/blog/" + id, {
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
