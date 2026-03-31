import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
}

export default function Button({ children, onClick, variant = "primary", className = "", href }: ButtonProps) {
  const baseStyles = "relative px-8 py-4 rounded-xl font-black uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group italic text-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-accent glow-red",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border-2 border-primary/50 text-primary hover:border-primary hover:bg-primary/5"
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Button Shine Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );

  if (href) {
    return <a href={href} className="inline-block w-full sm:w-auto">{content}</a>;
  }

  return content;
}
