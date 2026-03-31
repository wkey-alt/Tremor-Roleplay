import { motion } from "motion/react";
import { FEATURES } from "../constants";
import * as Icons from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl uppercase italic mb-4">Proč <span className="text-primary">Tremor RP</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Náš server je postaven na základech kvality, stability a unikátního obsahu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = (Icons as any)[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-background border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={32} />}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
