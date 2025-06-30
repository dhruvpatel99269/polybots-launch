import { useEffect, useState } from "react";

export interface User { email: string }

export function useWaitlist() {
  const [latestUsers, setLatestUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/fetchWaitlist");
        const data = await res.json();
        setLatestUsers(data.users || []);
      } catch (err) {
        console.error("Error fetching waitlist:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { latestUsers, loading, setLatestUsers };
}
