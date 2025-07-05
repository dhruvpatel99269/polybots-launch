"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
  email: string;
}

interface WaitlistContextType {
  latestUsers: User[];
  loading: boolean;
  setLatestUsers: React.Dispatch<React.SetStateAction<User[]>>;
  refreshWaitlist: () => Promise<void>;
}

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export const WaitlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [latestUsers, setLatestUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshWaitlist = async () => {
    try {
      const res = await fetch("/api/fetchWaitlist");
      const data = await res.json();
      setLatestUsers(data.users || []);
    } catch (err) {
      console.error("Failed to refresh waitlist:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshWaitlist();
  }, []);

  return (
    <WaitlistContext.Provider value={{ latestUsers, loading, setLatestUsers, refreshWaitlist }}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (!context) throw new Error("useWaitlist must be used within a WaitlistProvider");
  return context;
};
