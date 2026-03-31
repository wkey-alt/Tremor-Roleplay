import { motion, useScroll, useSpring } from "motion/react";
import { NAV_LINKS, SERVER_DATA } from "../constants";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "h-16 glass-panel" : "h-24 bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* Branding removed */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-[0.2em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href={SERVER_DATA.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent transition-all glow-red hover:scale-105 active:scale-95"
            >
              Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:text-primary transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-panel border-t border-white/10 px-4 py-8"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-black text-gray-400 hover:text-primary transition-colors uppercase italic tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <a
              href={SERVER_DATA.discord}
              className="bg-primary text-center py-4 rounded-xl font-black uppercase tracking-widest glow-red"
            >
              Discord
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
