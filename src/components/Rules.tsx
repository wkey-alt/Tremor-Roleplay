import { motion } from "motion/react";
import { SERVER_DATA } from "../constants";
import Button from "./Button";
import { FileText, ExternalLink } from "lucide-react";

export default function Rules() {
  return (
    <section id="rules" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 top-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 bg-background border border-white/5 rounded-[40px] relative z-10"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
            <FileText size={40} />
          </div>
          
          <h2 className="text-4xl md:text-6xl uppercase italic mb-6">Pravidla <span className="text-primary">Serveru</span></h2>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Aby byl roleplay kvalitní a férový pro všechny, je nutné dodržovat pravidla serveru. 
            Neznalost pravidel neomlouvá.
          </p>

          <Button 
            href={SERVER_DATA.rulesLink} 
            className="w-full sm:w-auto"
          >
            Zobrazit pravidla <ExternalLink size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
