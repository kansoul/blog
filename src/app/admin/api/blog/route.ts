import { API_URL } from "@/config";
import { NextRequest, NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  try {
    const body = await request.json();
    if (!body) return NextResponse.json({ error: true }, { status: 400 });
    const res = await fetch(API_URL + "/blog", {
      method: "POST",
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

export async function PUT(request: NextRequest) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  try {
    const body = await request.json();
    if (!body) return NextResponse.json({ error: true }, { status: 400 });
    const blogId = body._id;
    delete body._id;
    const res = await fetch(API_URL + "/blog/" + blogId, {
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

export async function DELETE(request: NextRequest) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  try {
    const body = await request.json();
    if (!body) return NextResponse.json({ error: true }, { status: 400 });
    const res = await fetch(API_URL + "/blog/" + body.blogId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    return NextResponse.json({ result }, { status: result.code });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
