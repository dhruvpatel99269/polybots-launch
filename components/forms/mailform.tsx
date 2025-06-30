'use client';
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

interface MailFormProps {
  onSuccess?: (newUser: { email: string }) => void;
}

const MailForm = ({ onSuccess }: MailFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.info("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 409) {
        toast.error(`You're already on the waitlist! Your position is #${data.queue}`);
      } else if (res.ok) {
        // ✅ Send confirmation email
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          {
            to_email: email,
            from_email: process.env.FROM_EMAIL,
            message: `New waitlist submission from: ${email}. Queue number: ${data.queue}`,
            queue: data.queue,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        toast.success("You're successfully added to the waitlist! Check your mail.");

        // 🔥 Notify parent component immediately
        if (onSuccess) {
          onSuccess({ email });
        }

        setEmail("");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Frontend error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-center w-full max-w-md"
      >
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="h-12 bg-gray-950/50 border-gray-800 text-white rounded-4xl pl-5"
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className={`${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-800"}`}
        >
          {loading ? (
            <div className="flex gap-x-1 items-center justify-center"><Loader2Icon className="size-4 animate-spin"/> <span>Processing</span></div>
          ) : (
            "Join Waitlist"
          )}

        </Button>
      </form>
    </div>
  );
};

export default MailForm;
