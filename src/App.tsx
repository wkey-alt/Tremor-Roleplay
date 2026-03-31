/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Factions from "./components/Factions";
import Rules from "./components/Rules";
import JoinSteps from "./components/JoinSteps";
import Community from "./components/Community";
import Devlog from "./components/Devlog";
import Whitelist from "./components/Whitelist";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="about">
          <Features />
        </div>
        
        <Whitelist />
        
        <Factions />
        
        <Devlog />
        
        <Rules />
        
        <JoinSteps />
        
        <Community />

        {/* Final CTA Section */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/tremor/1920/1080?grayscale" 
              className="w-full h-full object-cover opacity-10"
              alt="Background"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl uppercase italic font-black mb-8 tracking-tighter">
                Tvůj příběh začíná <span className="text-primary text-glow-red">právě teď.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Nečekej na zítřek. Staň se součástí Tremor RP ještě dnes a zažij roleplay, na který nezapomeneš.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button href="#join" className="w-full sm:w-auto text-xl px-12 py-6">
                  Začít hrát
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
