import { motion } from "motion/react";
import { FACTIONS } from "../constants";

export default function Factions() {
  return (
    <section id="factions" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-mono text-sm mb-4"
            >
              <span className="w-8 h-px bg-primary" />
              VYBER SI SVŮJ OSUD
            </motion.div>
            <h2 className="text-5xl md:text-7xl mb-6">
              Frakce <span className="text-primary text-glow-red">Serveru</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tremor RP nabízí širokou škálu frakcí s unikátními systémy. Budeš chránit zákon, zachraňovat životy, nebo ovládat podsvětí?
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="text-right">
              <div className="text-4xl font-black text-white/5 tracking-tighter mb-2">TREMOR RP</div>
              <div className="text-xs text-primary/40 font-mono tracking-[0.5em]">EST. 2026</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {FACTIONS.map((faction, index) => {
            // Create a bento-style grid pattern
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={faction.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 group cursor-pointer flex flex-col justify-end h-[300px] ${
                  isLarge ? "md:col-span-3" : "md:col-span-2"
                }`}
              >
                {/* Content */}
                <div className="overflow-hidden mb-4">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="w-16 h-1 bg-primary glow-red" 
                  />
                </div>
                
                <h3 className="text-4xl font-black mb-4 tracking-tighter group-hover:text-primary transition-colors duration-300">
                  {faction.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed max-w-md transition-all duration-500">
                  {faction.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
