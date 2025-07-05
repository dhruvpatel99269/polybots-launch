"use client";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Rocket } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import SparklesCore from "../ui/SparklesCore";
import MailForm from "../forms/mailform";
import AvatarGroup from "../ui/AvatarGroup";

const HeroSection = ({
  productName = "Polybots",
  tagline = "The Future of Productivity is Here",
  description = "Revolutionary software that transforms how teams collaborate, innovate, and achieve extraordinary results.",
  launchDate = "Coming Soon",
}) => {
  const color = useMotionValue("#d97757");

  useEffect(() => {
    animate(color, ["#d97757", "#e89b7e", "#f4b8a5", "#d97757"], {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #1a1a1a 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-6 sm:py-0 md:py-2 lg:py-0 xl:py-0"
    >
      <div className="absolute inset-0 z-0">
        <SparklesCore background="transparent" minSize={0.6} maxSize={1.4} particleDensity={50} particleColor="#d97757" speed={0.5} className="w-full h-full" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d97757]/10 border border-[#d97757]/20 px-4 py-2 text-sm font-medium text-[#d97757] backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            {launchDate}
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 flex justify-center items-center">
          <Image src="/logo.svg" alt="logo" width={75} height={75} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent leading-tight pb-1"
        >
          {productName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-semibold mb-4 text-[#d97757]"
        >
          {tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="mb-8">
          <MailForm />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}>
          <AvatarGroup />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/20 [mask-image:radial-gradient(50%_50%_at_50%_50%,transparent_20%,black)]" />
    </motion.section>
  );
};

export default HeroSection;
