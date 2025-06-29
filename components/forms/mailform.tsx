'use client';
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const MailForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                {
                    to_email: email,
                    from_email: "99269dhruvpatel@gmail.com",
                    message: `New waitlist submission from: ${email}`,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("You're successfully added to the waitlist!");
                    setEmail("");
                },
                () => {
                    setLoading(false);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className="flex justify-center items-center w-full h-full">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4 items-center w-full max-w-md"
            >
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-black rounded-md outline-none"
                    required
                />
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                    {loading ? "Submitting..." : "Join Waitlist"}
                </button>
            </form>
        </div>
    );
};

export default MailForm;
