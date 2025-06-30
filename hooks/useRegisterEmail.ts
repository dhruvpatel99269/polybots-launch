import { toast } from "sonner";

export async function registerEmail(
  email: string,
  onSuccess?: (newUser: { email: string }) => void
) {
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
      toast.success(`You're added to the waitlist! Queue number: #${data.queue}`);
      onSuccess?.({ email });
    } else {
      toast.error(data.error || "Something went wrong.");
    }
  } catch (err) {
    console.error("Registration error:", err);
    toast.error("Something went wrong.");
  }
}
