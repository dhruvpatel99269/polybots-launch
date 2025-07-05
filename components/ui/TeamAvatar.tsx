"use client";
import React from "react";

interface TeamAvatarProps {
  name: string;
  size?: number;
  className?: string;
}

const TeamAvatar: React.FC<TeamAvatarProps> = ({ 
  name, 
  size = 128, 
  className = "" 
}) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  const colors = [
    'from-[#d97757] to-[#c86a4a]',
    'from-[#e89b7e] to-[#d97757]',
    'from-[#f4b8a5] to-[#e89b7e]',
    'from-[#d97757] to-[#b85a3a]'
  ];
  
  const colorIndex = name.length % colors.length;
  const gradientClass = colors[colorIndex];

  return (
    <div 
      className={`rounded-full overflow-hidden border-2 border-[#d97757]/30 group-hover:border-[#d97757] transition-colors duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
        <span 
          className="text-white font-bold"
          style={{ fontSize: `${size * 0.4}px` }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
};

export default TeamAvatar; 