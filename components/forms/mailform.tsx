'use client';
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const MailForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            alert("Please enter a valid email.");
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
                alert(`You're already on the waitlist! Your position is #${data.queue}`);
            } else if (res.ok) {
                // ✅ Send confirmation email
                await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                    {
                        to_email: email,
                        from_email: "99269dhruvpatel@gmail.com",
                        message: `New waitlist submission from: ${email}. Queue number: ${data.queue}`,
                        queue: data.queue,
                    },
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                );

                alert(`You're successfully added to the waitlist! Your queue number is #${data.queue}`);
                setEmail("");
            } else {
                alert(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Frontend error:", err);
            alert("Something went wrong. Please try again.");
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
                    className="h-12 bg-gray-950/50 border-gray-800"
                    required
                />                
                
                <Button
                    type="submit"
                    disabled={loading}
                    className={`${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}>
                    {loading ? "Submitting..." : "Join Waitlist"}
                </Button>
            </form>
        </div>
    );
};

export default MailForm;
