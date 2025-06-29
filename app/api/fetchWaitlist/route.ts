import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("waitlist_db");
    const collection = db.collection("emails");

    const users = await collection
      .find({})
      .sort({ createdAt: -1 }) // latest first
      .limit(3) // get top 3 latest
      .toArray();

    return NextResponse.json({
      users: users.map((u) => ({
        email: u.email,
      })),
    });
  } catch (err) {
    console.error("Error fetching latest registrations:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
