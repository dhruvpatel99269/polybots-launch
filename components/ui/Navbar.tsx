"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PolybotsLogo } from "./Polybotslogo";
import { Button } from "./button";
import { MenuIcon, XIcon } from "lucide-react"; // You can replace this with any icon lib you prefer

export const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = () => {
        setIsOpen(false); // close dropdown on navigate
        if (pathname === "/features") {
            router.push("/");
        } else {
            router.push("/features");
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-20 px-6 py-4 md:py-4 lg:py-2 xl:py-4 backdrop-blur bg-black/30">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="h-10 md:h-15 lg:h-17 xl:h-15">
                    <PolybotsLogo />
                </div>

                {/* Desktop Button */}
                <div className="hidden sm:block h-10 md:h-15 lg:h-17 xl:h-15 py-4 md:py-4 lg:py-4 xl:py-4">
                    <Button
                        className="text-white w-40 h-10 text-lg"
                        onClick={handleNavigation}
                    >
                        {pathname === "/features" ? "Home" : "Features"}
                    </Button>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="sm:hidden h-10 md:h-15 lg:h-17 xl:h-15 py-2 md:py-4 lg:py-2 xl:py-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none "
                    >
                        {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>


                {/* Dropdown menu for mobile */}
                {isOpen && (
                    <div className="sm:hidden flex justify-end h-12 md:h-15 lg:h-17 xl:h-15 py-0 md:py-4 lg:py-2 xl:py-4">
                        <Button
                            className="w-40 h-12 md:h-15 lg:h-17 xl:h-15 py-4 md:py-4 lg:py-2 xl:py-4 text-white text-base"
                            onClick={handleNavigation}
                        >
                            {pathname === "/features" ? "Home" : "Features"}
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
};
