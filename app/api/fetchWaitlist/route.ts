// app/api/fetchWaitlist/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("waitlist_db");
    const collection = db.collection("emails");

    const users = await collection
      .find({}, { projection: { email: 1, queue: 1, createdAt: 1 } })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ users });
  } catch (err) {
    console.error("[FETCH_WAITLIST_ERROR]:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
