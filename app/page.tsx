'use client';
import { GridBackground } from "@/components/ui/grid-background";
import MailForm from "@/components/forms/mailform";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { Navbar } from "@/components/ui/Navbar";

export default function Page() {  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />

      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-24">
        <div className="w-full max-w-xl mx-auto p-8 space-y-12 animate-fade-in">
          
          {/* Headline Section */}
          <div className="space-y-6 text-center animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600 animate-text">
              Join Our Product Launch Waitlist
            </h2>
            <p className="text-md md:text-xl text-gray-400 max-w-lg mx-auto">
              Be part of something truly extraordinary. Join thousands of others already gaining early access to our revolutionary new product.
            </p>
          </div>

          {/* Form */}
          <div className="flex max-w-md mx-auto">
            <MailForm/>
          </div>

          {/* AvatarGroup */}
          <AvatarGroup/>
        </div>
      </div>
    </div>
  );
}
