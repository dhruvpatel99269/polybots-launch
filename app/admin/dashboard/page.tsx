"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LogOutIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Button from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import SparklesCore from "@/components/ui/SparklesCore";

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
        <div className="min-h-screen bg-black relative">
            {/* Sparkles background */}
            <div className="absolute inset-0 z-0">
                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={30}
                    particleColor="#d97757"
                    speed={0.3}
                    className="w-full h-full"
                />
            </div>

            {/* Mask overlay */}
            <div className="absolute inset-0 bg-black/20 [mask-image:radial-gradient(50%_50%_at_50%_50%,transparent_20%,black)]" />

            {/* Content */}
            <div className="relative z-10 px-4 py-6 md:px-8">
                <div className="max-w-6xl mx-auto space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col sm:flex-row justify-between items-center gap-4"
                    >
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                                Admin Dashboard
                            </h1>
                            <p className="text-gray-400 mt-2">Manage your waitlist registrations</p>
                        </div>
                        <Button 
                            variant="outline" 
                            onClick={handleLogout}
                            className="border-[#d97757]/20 text-[#d97757] hover:bg-[#d97757]/10 hover:border-[#d97757]/40 backdrop-blur-sm cursor-pointer"
                        >
                            <LogOutIcon className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="bg-black/20 backdrop-blur-sm border border-[#d97757]/20 hover:border-[#d97757]/40 transition-all duration-300">
                            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <CardTitle className="text-lg font-semibold text-white">
                                    Registered Users
                                    <Badge className="ml-2 bg-[#d97757] text-white border-[#d97757]">
                                        {users.length}
                                    </Badge>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="overflow-x-auto">
                                {loading ? (
                                    <div className="space-y-2">
                                        {[...Array(5)].map((_, idx) => (
                                            <div key={idx} className="flex items-center space-x-4">
                                                <Skeleton className="h-4 w-12 bg-gray-700" />
                                                <Skeleton className="h-4 w-48 bg-gray-700" />
                                                <Skeleton className="h-4 w-64 bg-gray-700" />
                                            </div>
                                        ))}
                                    </div>
                                ) : error ? (
                                    <div className="text-red-400 text-sm">{error}</div>
                                ) : (
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-[#d97757]/20 hover:bg-[#d97757]/5">
                                                <TableHead className="w-[100px] text-[#d97757] font-medium">Queue #</TableHead>
                                                <TableHead className="text-[#d97757] font-medium">Email</TableHead>
                                                <TableHead className="text-[#d97757] font-medium">Registered At</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {users.length > 0 ? (
                                                users.map((user) => (
                                                    <TableRow 
                                                        key={user._id}
                                                        className="border-[#d97757]/10 hover:bg-[#d97757]/5 transition-colors"
                                                    >
                                                        <TableCell className="text-white font-medium">
                                                            {user.queue ?? "N/A"}
                                                        </TableCell>
                                                        <TableCell className="text-gray-300">
                                                            {user.email}
                                                        </TableCell>
                                                        <TableCell className="text-gray-400">
                                                            {user.createdAt ? formatDate(user.createdAt) : "N/A"}
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell colSpan={3} className="text-center text-gray-400 py-8">
                                                        No users registered yet
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
