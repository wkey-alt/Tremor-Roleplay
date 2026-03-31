import React from 'react';
import { motion } from "motion/react";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Logo({ size = 'md', className = "" }: LogoProps) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
    xl: 'w-64 h-64',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`relative flex items-center justify-center ${sizes[size]} ${className}`}
    >
      <svg 
        viewBox="0 0 200 200" 
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <clipPath id="hexagonClip">
            <polygon points="100,5 195,50 195,150 100,195 5,150 5,50" />
          </clipPath>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="30%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ff9999" />
          </linearGradient>
          <mask id="glitchMask">
            <rect width="200" height="200" fill="white" />
            <rect x="0" y="85" width="200" height="2" fill="black" />
            <rect x="0" y="95" width="200" height="1.5" fill="black" />
            <rect x="0" y="105" width="200" height="2.5" fill="black" />
            <rect x="0" y="115" width="200" height="1" fill="black" />
          </mask>
        </defs>

        {/* Hexagon Background */}
        <g clipPath="url(#hexagonClip)">
          <rect width="200" height="200" fill="#0a0a0a" />
          <rect width="200" height="200" fill="rgba(255,0,0,0.05)" />
        </g>

        {/* Hexagon Border */}
        <polygon 
          points="100,5 195,50 195,150 100,195 5,150 5,50" 
          fill="none" 
          stroke="#ff4d4d" 
          strokeWidth="2.5"
        />

        {/* Stars */}
        <g fill="#e0e0e0" transform="translate(100, 60)">
          <path d="M0,-10 L2.5,-2.5 L10,0 L2.5,2.5 L0,10 L-2.5,2.5 L-10,0 L-2.5,-2.5 Z" /> {/* Center */}
          <path d="M0,-10 L2.5,-2.5 L10,0 L2.5,2.5 L0,10 L-2.5,2.5 L-10,0 L-2.5,-2.5 Z" transform="translate(-22, 2) scale(0.6)" /> {/* Left */}
          <path d="M0,-10 L2.5,-2.5 L10,0 L2.5,2.5 L0,10 L-2.5,2.5 L-10,0 L-2.5,-2.5 Z" transform="translate(22, 2) scale(0.6)" /> {/* Right */}
        </g>

        {/* Top Tapered Line (Eyelid Shape) */}
        <path 
          d="M15,75 Q100,65 185,75 L185,78 Q100,68 15,78 Z" 
          fill="#ff4d4d"
        />

        {/* Bottom Tapered Line (Eyelid Shape) */}
        <path 
          d="M15,145 Q100,155 185,145 L185,142 Q100,152 15,142 Z" 
          fill="#ff4d4d"
        />

        {/* TREMOR Text (SVG for better control) */}
        <text 
          x="100" 
          y="120" 
          textAnchor="middle" 
          fill="url(#textGradient)"
          mask="url(#glitchMask)"
          className="font-black italic uppercase select-none"
          style={{ 
            fontSize: '52px', 
            letterSpacing: '-2px',
            filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.8))'
          }}
        >
          TREMOR
        </text>

        {/* ROLEPLAY Text (SVG) */}
        <text 
          x="100" 
          y="148" 
          textAnchor="middle" 
          fill="#ff4d4d"
          className="font-black italic uppercase select-none"
          style={{ 
            fontSize: '18px', 
            letterSpacing: '4px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          ROLEPLAY
        </text>
      </svg>
    </motion.div>
  );
}
