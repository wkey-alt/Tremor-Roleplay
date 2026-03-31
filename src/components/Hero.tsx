import { motion, useScroll, useTransform } from "motion/react";
import { SERVER_DATA } from "../constants";
import Button from "./Button";
import { MessageSquare, Play, ShieldCheck } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-10" />
        <div className="absolute inset-0 bg-primary/5" />
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
        className="relative z-20 max-w-4xl mx-auto px-4 w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {SERVER_DATA.description}. Zažij nejrealističtější RP v unikátním prostředí s vlastními skripty.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="#join" className="w-full sm:w-auto h-14 px-8 text-lg group">
              Připojit se <Play size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href={SERVER_DATA.discord} variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg">
              Discord <MessageSquare size={18} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
