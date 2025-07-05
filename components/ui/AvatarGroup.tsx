"use client";
import { Avatar, AvatarFallback } from "./avatar";
import { getColorForEmail } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { CardLoader } from "@/components/loaders/CardLoader";
import { useWaitlist } from "@/hooks/waitlistContext";

export default function AvatarGroup() {
  const { latestUsers, loading } = useWaitlist();

  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Avatar Stack */}
        <div className="flex -space-x-3">
          {loading ? (
            <CardLoader />
          ) : (
            <>
              {latestUsers.slice(0, 3).map((user) => (
                <Avatar
                  key={user.email}
                  className={`w-10 h-10 border-2 ring-white transition-transform duration-300 hover:scale-110`}
                >
                  <AvatarFallback
                    className={`text-sm font-bold text-white ${getColorForEmail(user.email)} hover:shadow-md`}
                  >
                    {user.email[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              ))}

              {latestUsers.length > 3 && (
                <div className="w-10 h-10 rounded-full bg-[#d97757] text-white font-semibold flex items-center justify-center border-2 ring-white text-sm hover:scale-110 transition-transform duration-300 z-1">
                  +{latestUsers.length - 3}
                </div>
              )}
            </>
          )}
        </div>

        {/* Waitlist Badge */}
        <Badge className="text-[#d97757] bg-[#d97757]/10 border border-[#d97757]/20 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
          <Zap className="w-4 h-4 animate-bounce" />
          {loading ? "Loading waitlist..." : `${latestUsers.length} already onboard!`}
        </Badge>
      </div>
    </div>
  );
}
