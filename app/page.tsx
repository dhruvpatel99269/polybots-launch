"use client";
import { useRouter } from "next/navigation";
import { GridBackground } from "@/components/ui/grid-background";
import MailForm from "@/components/forms/mailform";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { PolybotsLogo } from "@/components/ui/Polybotslogo";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />

      {/* Top-Centered Logo */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <PolybotsLogo />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="w-full max-w-xl mx-auto p-8 space-y-12 animate-fade-in">

          {/* Headline Section */}
          <div className="space-y-6 text-center animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600 animate-text">
              Join Our Product Launch Waitlist
            </h2>
            <p className="text-md md:text-xl text-gray-400 max-w-lg mx-auto">
              Be part of something truly extraordinary. Join thousands of others already gaining early access to our revolutionary new product.
            </p>

            {/* Our Features Button */}
            <div className="mt-4">
              <Button
                className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer hover:scale-[1.03]"
                onClick={() => router.push("/features")}
              >
                🌟 Our Features
              </Button>
            </div>
          </div>

          {/* Email Form */}
          <div className="flex max-w-md mx-auto">
            <MailForm />
          </div>

          {/* Avatar Group */}
          <AvatarGroup />
        </div>
      </div>
    </div>
  );
}
