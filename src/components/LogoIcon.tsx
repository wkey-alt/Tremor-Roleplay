import React from 'react';
import { motion } from "motion/react";

interface LogoIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LogoIcon({ size = 'md', className = "" }: LogoIconProps) {
  const sizes = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-10 h-10 text-xl',
    lg: 'w-16 h-16 text-4xl',
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`relative flex items-center justify-center ${sizes[size]} ${className}`}
    >
      {/* Outer Glow Layer */}
      <div 
        className="absolute inset-0 bg-primary/30 blur-xl animate-pulse"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
        }}
      />
      
      {/* Hexagon Background with Glow */}
      <div 
        className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(255,0,0,0.6)]"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
        }}
      />
      
      {/* Inner Hexagon for border effect */}
      <div 
        className="absolute inset-[2px] bg-background"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
        }}
      />
      
      {/* Metallic Sheen Effect */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-white via-transparent to-black pointer-events-none"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
        }}
      />

      {/* The Letter T */}
      <span className="relative z-10 font-black italic text-white transform -skew-x-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        T
      </span>
    </motion.div>
  );
}
