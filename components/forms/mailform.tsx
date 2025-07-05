"use client";

import { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { useWaitlist } from "@/hooks/useWaitlist";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

interface MailFormProps {
  ctaText?: string;
}

const MailForm = ({ ctaText = "Join Waitlist" }: MailFormProps) => {
  const color = useMotionValue("#d97757");

  useEffect(() => {
    animate(color, ["#d97757", "#e89b7e", "#f4b8a5", "#d97757"], {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
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
    console.log("📥 Email input:", email);

    try {
      const waitlistRes = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const waitlistData = await waitlistRes.json();
      console.log("🗃️ Waitlist Response:", waitlistData);

      if (waitlistRes.status === 409) {
        toast.error(`You're already on the waitlist! Your position is #${waitlistData.queue}`);
        setLoading(false);
        return;
      }

      const emailRes = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: "Waitlist Confirmation",
          queue: waitlistData.queue, // 💡 pass queue number
        }),
      });


      const emailData = await emailRes.json();
      console.log("📧 Email API Response:", emailData);

      if (emailRes.ok) {
        toast.success("You're successfully added to the waitlist! Check your mail.");
        setLatestUsers((prev) => [{ email }, ...prev]);
        setEmail("");
      } else {
        toast.error(emailData.message || "Email failed. Try again.");
      }
    } catch (err) {
      console.error("❌ Client error:", err);
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
            <>{ctaText}</>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default MailForm;
