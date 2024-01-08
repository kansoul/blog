// pages/api/register.ts
import { API_URL } from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
    return res.ok && result
      ? NextResponse.json({ data: result }, { status: 201 })
      : NextResponse.json({ status: 404 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
