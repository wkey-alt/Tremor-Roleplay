import { motion } from "motion/react";
import { SERVER_DATA } from "../constants";
import { Download, Terminal, MessageSquare, Play } from "lucide-react";

const STEPS = [
  {
    title: "Stáhni FiveM",
    description: "Základní klient pro hraní na modifikovaných serverech.",
    icon: Download
  },
  {
    title: "Otevři F8",
    description: "V herním klientovi stiskni klávesu F8 pro otevření konzole.",
    icon: Terminal
  },
  {
    title: "Zadej Příkaz",
    description: `Napiš do konzole: ${SERVER_DATA.connectCommand}`,
    icon: Play
  },
  {
    title: "Připoj se na Discord",
    description: "Důležité pro novinky, podporu a whitelist pohovory.",
    icon: MessageSquare
  }
];

export default function JoinSteps() {
  return (
    <section id="join" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl uppercase italic mb-4">Jak se <span className="text-primary">Připojit</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Začni své dobrodružství v několika jednoduchých krocích.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-white/5 z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-surface border border-white/10 rounded-full flex items-center justify-center text-primary mb-6 glow-red">
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black text-sm italic">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase italic tracking-tight">{step.title}</h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
