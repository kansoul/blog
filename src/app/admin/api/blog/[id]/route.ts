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

export async function PUT(request: NextRequest, context: { params: any }) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  const id = context?.params?.id;
  try {
    const body = await request.json();
    if (!body) return NextResponse.json({ error: true }, { status: 400 });
    delete body._id;
    const res = await fetch(API_URL + "/blog/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();

    return NextResponse.json({ result }, { status: result.code });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
