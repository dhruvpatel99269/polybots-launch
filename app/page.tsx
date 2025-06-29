'use client';

import { useEffect, useState } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MailForm from "@/components/forms/mailform";
import { PolybotsLogo } from "@/components/ui/Polybotslogo";

export default function Page() {
  const [latestUsers, setLatestUsers] = useState<{ email: string }[]>([]);

  useEffect(() => {
    fetch("/api/fetchWaitlist")
      .then((res) => res.json())
      .then((data) => setLatestUsers(data.users || []))
      .catch((err) => console.error("Error loading latest users:", err));
  }, []);

  function getColorForEmail(email: string): string {
    const colors = [
      "bg-gradient-to-br from-pink-500 to-rose-500",
      "bg-gradient-to-br from-blue-500 to-cyan-500",
      "bg-gradient-to-br from-yellow-400 to-orange-500",
      "bg-gradient-to-br from-purple-500 to-fuchsia-600",
      "bg-gradient-to-br from-green-400 to-emerald-600",
      "bg-gradient-to-br from-red-400 to-amber-600",
      "bg-gradient-to-br from-teal-400 to-blue-700",
      "bg-gradient-to-br from-indigo-500 to-violet-700"
    ];

    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = email.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }


  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xl mx-auto p-8 space-y-12">
          <PolybotsLogo />

          <div className="space-y-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
              Join Our Product Launch Waitlist
            </h2>
            <p className="text-md sm:text-md md:text-xl lg:text-xl text-gray-400 max-w-lg mx-auto">
              Be part of something truly extraordinary. Join thousands of others
              already gaining early access to our revolutionary new product.
            </p>
          </div>

          <div className="flex gap-2 max-w-md mx-auto">
            <MailForm onSuccess={(newUser) => setLatestUsers((prev) => [newUser, ...prev])} />
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {latestUsers.slice(0, 3).map((user, index) => (
                  <Avatar key={index} className="border-2 w-12 h-12">
                    <AvatarFallback className={`text-sm font-semibold border-white/20 ${getColorForEmail(user.email)}`}>
                      {user.email[0]?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                ))}

                {/* Show +N if there are more than 3 users */}
                {latestUsers.length > 3 && (
                  <Avatar className="border-2 w-12 h-12 bg-gray-800 text-white text-sm font-semibold flex items-center justify-center">
                    +{latestUsers.length - 3}
                  </Avatar>
                )}
              </div>

              <span className="font-bold">{latestUsers.length} people on the waitlist!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
