"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SparklesCore from "@/components/ui/SparklesCore";
import TeamAvatar from "@/components/ui/TeamAvatar";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dhaval Bhimani",
    role: "Full Stack Engineer",
    image: "/team/dhaval.jpg",
    linkedin: "https://www.linkedin.com/in/dhaval1522/",
    bio: "Builds scalable web apps end-to-end, integrating frontend, backend, and automated CI/CD pipelines.",
  },
  {
    name: "Dhruv Patel",
    role: "Full Stack Developer",
    image: "/team/dhruv.jpg",
    linkedin: "https://www.linkedin.com/in/dhruv-patel-dp99269/",
    bio: "Builds seamless user interfaces and robust backend services using modern full-stack technologies and practices.",
  },
  {
    name: "Harsh Kharwar",
    role: "Frontend Developer",
    image: "/team/harsh.jpg",
    linkedin: "https://www.linkedin.com/in/harsh-kharwar-82546928a/",
    bio: "Develops responsive, interactive user interfaces with clean code and optimized user experience in mind.",
  },
  {
    name: "Vasu Desai",
    role: "Application Tester",
    image: "/team/vasu.png",
    linkedin: "https://www.linkedin.com/in/vasudesai11/",
    bio: "Ensures product reliability with detailed manual and automated testing across multiple platforms and environments.",
  },
];

export default function TeamSection() {
  return (
    <section className="relative z-10 py-16 md:py-20">
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

      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d97757]/10 border border-[#d97757]/20 px-4 py-2 text-sm font-medium text-[#d97757] backdrop-blur-sm">
            Meet Our Team
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent py-2"
        >
          The Team Behind Polybots
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          We&apos;re a passionate team of innovators, designers, and engineers dedicated to transforming how products are built with AI.
        </motion.p>
      </div>

      {/* Team Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-black/20 backdrop-blur-sm border border-[#d97757]/20 rounded-2xl p-6 hover:border-[#d97757]/40 transition-all duration-300 hover:bg-black/30">
                <TeamCard member={member} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mask overlay */}
      <div className="absolute inset-0 bg-black/20 [mask-image:radial-gradient(50%_50%_at_50%_50%,transparent_20%,black)]" />
    </section>
  );
}

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="relative mb-6">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            width={100}
            height={100}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#d97757]/40 shadow-lg"
            onError={() => setImageError(true)}
          />
        ) : (
          <TeamAvatar name={member.name} size={128} className="mx-auto" />
        )}

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center hover:bg-[#c86a4a] transition duration-300"
        >
          <Linkedin className="w-4 h-4 text-white" />
        </a>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#d97757] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#d97757] text-sm font-medium mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm">{member.bio}</p>
      </div>
    </>
  );
}
