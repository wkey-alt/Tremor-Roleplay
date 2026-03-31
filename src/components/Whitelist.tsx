import { motion } from "motion/react";
import { SERVER_DATA } from "../constants";
import { ShieldCheck, UserPlus } from "lucide-react";

export default function Whitelist() {
  return (
    <section id="whitelist" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-surface border border-white/10 rounded-[40px] relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary blur-sm" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Whitelist <span className="text-primary">OFF</span></h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {SERVER_DATA.whitelist.note}
              </p>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                Připoj se hned bez čekání
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-surface border border-white/10 rounded-[40px] relative"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/50">
                  <UserPlus size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Whitelist <span className="text-white/50">Pohovor</span></h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Chceš lepší role, přístup k exkluzivním frakcím nebo vedení podniku? 
                Absolvuj whitelist pohovor na našem Discordu.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/30">
                Pro pokročilé hráče
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
