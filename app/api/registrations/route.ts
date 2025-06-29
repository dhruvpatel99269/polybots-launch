import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("waitlist_db");
    const collection = db.collection("emails");

    const existing = await collection.findOne({ email });

    if (existing) {
      return NextResponse.json(
        { message: "You're already on the waitlist.", queue: existing.queue },
        { status: 409 }
      );
    }

    // ✅ Get the current queue size
    const totalUsers = await collection.countDocuments();

    const newUser = {
      email,
      queue: totalUsers + 1,
      createdAt: new Date(),
    };

    await collection.insertOne(newUser);

    return NextResponse.json(
      { message: "Successfully added to the waitlist.", queue: newUser.queue },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
