"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LogOutIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Button from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

interface User {
    _id: string;
    email: string;
    queue?: number;
    createdAt?: string;
}

export default function AdminDashboard() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/fetchWaitlist");

                if (response.status === 401) {
                    toast.error("Unauthorized. Please login.");
                    router.push("/admin/login");
                    return;
                }

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setUsers(data.users || []);
            } catch (err) {
                console.error(err);
                setError("Failed to load users");
                toast.error("Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [router]);

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/admin/logout", {
                method: "POST",
            });

            if (response.ok) {
                router.push("/admin/login");
                toast.success("Logged out successfully");
            } else {
                throw new Error("Logout failed");
            }
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("Logout failed");
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        const isAM = hours < 12;
        const displayHour = hours % 12 === 0 ? 12 : hours % 12;
        const ampm = isAM ? "AM" : "PM";

        return `${day}/${month}/${year}, ${displayHour}:${minutes}:${seconds} ${ampm}`;
    };


    return (
        <div className="min-h-screen bg-muted px-4 py-6 md:px-8">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
                    <Button variant="outline" onClick={handleLogout}>
                        <LogOutIcon className="w-4 h-4 mr-2" />
                        Logout
                    </Button>
                </div>

                <Card>
                    <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <CardTitle className="text-lg font-semibold">
                            Registered Users
                            <Badge className="ml-2" variant="secondary">{users.length}</Badge>
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="overflow-x-auto">
                        {loading ? (
                            <div className="space-y-2">
                                {[...Array(5)].map((_, idx) => (
                                    <div key={idx} className="flex items-center space-x-4">
                                        <Skeleton className="h-4 w-12" />
                                        <Skeleton className="h-4 w-48" />
                                        <Skeleton className="h-4 w-64" />
                                    </div>
                                ))}
                            </div>
                        ) : error ? (
                            <div className="text-red-500 text-sm">{error}</div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Queue #</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Registered At</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {users.length > 0 ? (
                                        users.map((user) => (
                                            <TableRow key={user._id}>
                                                <TableCell>{user.queue ?? "N/A"}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.createdAt ? formatDate(user.createdAt) : "N/A"}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={3} className="text-center text-muted-foreground">
                                                No users registered yet
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
