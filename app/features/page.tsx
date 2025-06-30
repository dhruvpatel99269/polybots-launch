import React from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { Blob } from "@/components/ui/FloatingBackgroundImages";
import { Features } from "@/components/features/features";
import { Perks } from "@/components/features/perks";
import { Differentiator } from "@/components/features/differentiator";
import { Navbar } from "@/components/ui/Navbar";

export default function FeaturesPage() {
  return (
    <main className="relative w-full h-screen snap-y snap-mandatory overflow-y-scroll text-white">
      {/* Animated grid background */}
      <GridBackground />
      {/* Floating blobs for visual interest */}
      <Blob className="fixed top-[-80px] left-[-60px] w-72 h-72 text-fuchsia-700/30 blur-2xl animate-fade-in" />
      <Blob className="fixed bottom-[-100px] right-[-80px] w-96 h-96 text-blue-700/30 blur-2xl animate-fade-in" />
      <Blob className="fixed top-[40%] left-[-100px] w-60 h-60 text-purple-700/20 blur-2xl animate-fade-in" />

      <Navbar/>

      {/* Features Section */}
      <Features/>

      {/* Differentiators Section */}
      <Differentiator/>            

      {/* Perks Section */}
      <Perks/>
    </main>
  );
} 
