import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mail";
import { generateWaitlistEmail } from "@/lib/mailTemplate";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { to, subject, queue } = body;

  if (!to || !subject || queue === undefined) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const htmlMessage = generateWaitlistEmail(to, queue);

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: htmlMessage,
    });

    console.log("✅ HTML email sent:", info.response);
    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Error sending HTML email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: errorMessage },
      { status: 500 }
    );
  }
}
