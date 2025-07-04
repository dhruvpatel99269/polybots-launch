"use client";
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { useWaitlist } from "@/hooks/useWaitlist";
import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const MailForm = ({ ctaText = "Join Waitlist" }) => {
  const color = useMotionValue("#d97757");

  useEffect(() => {
    animate(color, ["#d97757", "#e89b7e", "#f4b8a5", "#d97757"], {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { setLatestUsers } = useWaitlist();

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
        setLatestUsers((prev) => [{ email }, ...prev]);
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

        <motion.button
          type="submit"
          disabled={loading}
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2 rounded-full bg-[#d97757]/10 px-4 py-2 lg:px-6 xl:px-6 lg:py-3 xl:py-3 text-white font-medium text-sm transition-all hover:bg-[#d97757]/20 backdrop-blur-sm whitespace-nowrap cursor-pointer"
        >
          {loading ? (
            <div className="flex gap-x-1 items-center justify-center">
              <Loader2Icon className="w-4 h-4 animate-spin" />
              <span className="text-sm">Processing</span>
            </div>
          ) : (
            <>
              {ctaText}              
            </>
          )}
        </motion.button>



      </form>
    </div>
  );
};

export default MailForm;
