import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { isValidEmail } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !isValidEmail(email)) {
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
        {
          message: "You're already on the waitlist.",
          queue: existing.queue,
        },
        { status: 409 }
      );
    }

    const totalUsers = await collection.countDocuments();
    const newUser = {
      email,
      queue: totalUsers + 1,
      createdAt: new Date(),
    };

    await collection.insertOne(newUser);

    return NextResponse.json(
      {
        message: "Successfully added to the waitlist.",
        queue: newUser.queue,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[REGISTRATION_ERROR]:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
