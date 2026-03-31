import { motion } from "motion/react";
import { DEVLOGS } from "../constants";
import { Calendar, CheckCircle2, Terminal } from "lucide-react";

export default function Devlog() {
  return (
    <section id="devlog" className="py-32 bg-surface relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-mono text-sm mb-4"
            >
              <Terminal size={16} />
              VÝVOJOVÝ DENÍK
            </motion.div>
            <h2 className="text-5xl md:text-7xl mb-6">
              Poslední <span className="text-primary text-glow-red">Změny</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Sledujte vývoj serveru Tremor RP. Neustále pracujeme na nových funkcích a vylepšeních pro váš nejlepší zážitek.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {DEVLOGS.map((log, index) => (
            <motion.div
              key={log.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-background/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-12 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Date & Title */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 text-primary/60 font-mono text-xs mb-4 uppercase tracking-[0.2em]">
                      <Calendar size={14} />
                      {log.date}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">
                      {log.title}
                    </h3>
                    {log.highlight && (
                      <p className="text-primary/80 text-sm font-bold mb-6 uppercase tracking-wider leading-relaxed">
                        {log.highlight}
                      </p>
                    )}
                    <div className="w-12 h-1 bg-primary/20 rounded-full" />
                  </div>

                  {/* Changes List */}
                  <div className="lg:w-2/3">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {log.changes.map((change, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed group/item font-mono"
                        >
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                          <span className="group-hover/item:text-white transition-colors">{change}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
