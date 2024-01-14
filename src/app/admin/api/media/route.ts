import { API_URL } from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  try {
    const res = await fetch(API_URL + "/media", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
    const res = await fetch(API_URL + "/media", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const result = await res.json();

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  try {
    const body = await request.json();
    if (!body) return NextResponse.json({ error: true }, { status: 400 });
    const mediaId = body.mediaId;
    delete body.mediaId;
    const res = await fetch(API_URL + "/media/" + mediaId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();

    return NextResponse.json(result, { status: result.code });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  try {
    const body = await request.json();
    if (!body) return NextResponse.json({ error: true }, { status: 400 });
    const res = await fetch(API_URL + "/media/" + body.mediaId, {
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
