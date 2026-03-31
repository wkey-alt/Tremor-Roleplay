import { motion } from "motion/react";
import { SERVER_DATA } from "../constants";
import Button from "./Button";
import { MessageSquare, Users, Zap } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="py-32 bg-surface relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">
              <Zap size={14} fill="currentColor" />
              SPOLEČNĚ SILNĚJŠÍ
            </div>
            
            <h2 className="text-5xl md:text-7xl mb-8">
              Naše <span className="text-primary text-glow-red">Komunita</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
              Tremor RP není jen server, je to komunita, kde tvoříš svůj vlastní příběh. 
              Připoj se k našemu Discordu, hledej frakce nebo jen pokecaj s ostatními hráči.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <Button href={SERVER_DATA.discord} className="h-16 px-10">
                <MessageSquare size={20} /> Připojit se na Discord
              </Button>
              
              <div className="flex items-center gap-4 px-8 h-16 bg-background/50 border border-white/5 rounded-xl backdrop-blur-sm">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                  <div className="w-3 h-3 bg-green-500 rounded-full relative z-10" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-black text-white leading-none">1,240+</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Hráčů Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
