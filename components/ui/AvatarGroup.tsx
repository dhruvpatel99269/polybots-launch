"use client";
import { Avatar, AvatarFallback } from "./avatar";
import { getColorForEmail } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { CardLoader } from "@/components/loaders/CardLoader";
import { useWaitlist } from "@/hooks/useWaitlist";

export default function AvatarGroup() {
  const { latestUsers, loading } = useWaitlist();

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-4 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-fit mx-auto relative">
        <div className="absolute inset-0 rounded-xl bg-white/5 blur-lg opacity-20" />
        <div className="relative z-10 flex flex-col items-center" />
        
        <div className="flex -space-x-3">
          {loading ? (
            <CardLoader />
          ) : (
            <>
              {latestUsers.slice(0, 3).map((user, index) => (
                <Avatar
                  key={user.email}
                  className={`border-2 w-10 h-10 hover:scale-110 transition-transform duration-300 animate-bounce ${
                    index === 1 ? "delay-100" : index === 2 ? "delay-200" : "delay-0"
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
              ))}

              {latestUsers.length > 3 && (
                <div className="w-10 h-10 rounded-full bg-gray-800 text-white font-semibold flex items-center justify-center border-2 text-sm hover:scale-110 transition-transform duration-300 animate-bounce delay-300">
                  +{latestUsers.length - 3}
                </div>
              )}
            </>
          )}
        </div>
        
        <Badge className="font-bold h-10 text-xs md:text-sm lg:text-lg xl:text-lg text-yellow-200 animate-pulse flex items-center gap-1">
          <Zap className="w-4 h-4 animate-bounce" />
          {loading
            ? "Loading waitlist..."
            : `${latestUsers.length} people in the waitlist!`}
        </Badge>
      </div>
    </div>
  );
}
