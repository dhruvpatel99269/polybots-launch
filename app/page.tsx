'use client';

import { useEffect, useState } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MailForm from "@/components/forms/mailform";
import { PolybotsLogo } from "@/components/ui/Polybotslogo";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export default function Page() {
  const [latestUsers, setLatestUsers] = useState<{ email: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fetchWaitlist")
      .then((res) => res.json())
      .then((data) => setLatestUsers(data.users || []))
      .catch((err) => console.error("Error loading latest users:", err))
      .finally(() => setLoading(false));
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
    return colors[Math.abs(hash) % colors.length];
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-xl mx-auto p-8 space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="animate-slide-in-down">
            <PolybotsLogo />
          </div>

          {/* Headline */}
          <div className="space-y-6 text-center animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600 animate-text">
              Join Our Product Launch Waitlist
            </h2>
            <p className="text-md md:text-xl text-gray-400 max-w-lg mx-auto">
              Be part of something truly extraordinary. Join thousands of others already gaining early access to our revolutionary new product.
            </p>
          </div>

          {/* Mail Form */}
          <div className="flex gap-2 max-w-md mx-auto">
            <MailForm onSuccess={(newUser) => setLatestUsers((prev) => [newUser, ...prev])} />
          </div>

          {/* User Avatars & Count */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex -space-x-3">
                {loading ? (
                  <>
                    <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse" />
                    <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse" />
                    <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse" />
                  </>
                ) : (
                  latestUsers.slice(0, 3).map((user, index) => (
                    <Avatar
                      key={index}
                      className={`border-2 w-12 h-12 hover:scale-110 transition-transform duration-300 animate-bounce ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : "delay-0"
                        }`}
                    >
                      <AvatarFallback
                        className={`text-sm font-semibold border-white/20 ${getColorForEmail(
                          user.email
                        )} hover:shadow-lg`}
                      >
                        {user.email[0]?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ))
                )}

                {!loading && latestUsers.length > 3 && (
                  <div className="w-12 h-12 rounded-full bg-gray-800 text-white font-semibold flex items-center justify-center border-2 text-sm hover:scale-110 transition-transform duration-300 animate-bounce delay-300">
                    +{latestUsers.length - 3}
                  </div>
                )}
              </div>

              {/* Count Badge */}
              <Badge className="font-bold h-12 text-md text-yellow-200 animate-pulse flex items-center gap-1">
                <Zap className="w-4 h-4 animate-bounce" />
                {loading ? "Loading waitlist..." : `${latestUsers.length} people in the waitlist!`}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
