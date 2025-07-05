"use client";
import HeroSection from "@/components/ui/HeroSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import TeamSection from "@/components/ui/TeamSection";

const productName = "Polybots";
const tagline = "Turn Ideas into Websites Instantly with AI";
const description = "An intelligent platform that converts your product ideas into detailed user stories, system architecture, and fully functional websites — all in a single workflow. Empowering developers, startups, and innovators to build faster than ever.";
const launchDate = "Coming Soon";
const features = [
  {
    title: "AI-Driven Full-Stack Code",
    description: "Generate complete frontend, backend, and database code from simple prompts.",
  },
  {
    title: "Instant Design Previews",
    description: "See live UI previews before building anything, straight from your input.",
  },
  {
    title: "Reusable Component Output",
    description: "Get modular, production-ready components compatible with modern frameworks.",
  },
  {
    title: "Auto System Diagramming",
    description: "Automatically generate visual system architecture diagrams and flows.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection
        productName={productName}
        tagline={tagline}
        description={description}
        launchDate={launchDate}        
      />

      <FeaturesSection
        productName={productName}
        features={features}
      />                  
      
      <TeamSection/>
    </div>
  );
}
