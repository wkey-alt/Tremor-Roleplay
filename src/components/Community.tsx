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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">
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

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Button href={SERVER_DATA.discord} className="h-16 px-10">
                <MessageSquare size={20} /> Připojit se na Discord
              </Button>
              
              <div className="flex items-center gap-4 px-8 h-16 bg-background/50 border border-white/5 rounded-xl backdrop-blur-sm">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                  <div className="w-3 h-3 bg-green-500 rounded-full relative z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-white leading-none">1,240+</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Hráčů Online</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
            
            {/* Discord Interface Mockup */}
            <div className="relative bg-background/80 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl tracking-tight">TREMOR RP</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Official Server</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-full border border-primary/20 tracking-widest">
                  Verified
                </div>
              </div>
              
              {/* Mock Discord Messages */}
              <div className="space-y-6">
                {[
                  { name: "Admin_Tremor", msg: "Vítejte na serveru! Nový update je venku.", color: "bg-primary/20" },
                  { name: "Hráč_01", msg: "LSPD nabírá nové členy, hlaste se na webu!", color: "bg-white/5" },
                  { name: "Mechanik_Joe", msg: "Dnes sleva na tuning v Bennys!", color: "bg-white/5" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-xl shrink-0 flex items-center justify-center font-black text-xs`}>
                      {item.name[0]}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-white group-hover:text-primary transition-colors">{item.name}</span>
                        <span className="text-[8px] text-gray-600 font-bold uppercase">Dnes v 14:05</span>
                      </div>
                      <p className="text-sm text-gray-400 font-light leading-snug">{item.msg}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Mockup */}
              <div className="mt-10 pt-6 border-t border-white/5">
                <div className="bg-white/5 rounded-xl px-5 py-4 text-xs text-gray-600 font-bold uppercase tracking-widest flex justify-between items-center">
                  Napište zprávu...
                  <Users size={16} />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
