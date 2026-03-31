import { motion, useScroll, useTransform } from "motion/react";
import { SERVER_DATA } from "../constants";
import Button from "./Button";
import { ChevronRight, MessageSquare, Play, ShieldCheck } from "lucide-react";
import LogoIcon from "./LogoIcon";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      {/* Background Layers */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover scale-110"
          alt="Background"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* FX Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute inset-0 scanlines opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8 glow-red">
              <ShieldCheck size={14} />
              Whitelist: {SERVER_DATA.whitelist.status}
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-6 leading-[0.85] tracking-tighter">
              <span className="block text-white">Tremor</span>
              <span className="block text-primary text-glow-red">Roleplay</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed">
              {SERVER_DATA.description}. Zažij nejrealističtější RP v unikátním prostředí s vlastními skripty.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6">
              <Button href="#join" className="w-full sm:w-auto h-14 px-8 text-lg group">
                Připojit se <Play size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href={SERVER_DATA.discord} variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg">
                Discord <MessageSquare size={18} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Rings */}
            <div className="absolute inset-0 -m-20 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 -m-10 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            <LogoIcon size="lg" className="scale-[2.5] drop-shadow-[0_0_50px_rgba(255,0,0,0.4)]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ height: [4, 12, 4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
