import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-48 px-6 md:px-12 bg-brand-black text-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-20">
          
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-[15vw] md:text-[12vw] leading-[0.8] font-extrabold uppercase tracking-tighter"
            >
              CONTACT
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-[15vw] md:text-[12vw] leading-[0.8] font-extrabold uppercase tracking-tighter text-brand-beige/40 text-outline ml-[10vw]"
            >
              ME
            </motion.h2>
          </div>

          <div className="flex flex-col gap-12 max-w-sm w-full">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-beige/40">Say Hello</span>
              <p className="text-2xl md:text-3xl font-light hover:underline cursor-pointer transition-all">praneethr275@gmail.com</p>
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-beige/40">Call Me</span>
              <p className="text-2xl md:text-3xl font-light">+91 98765 43210</p>
            </div>

            <div className="flex gap-8 border-t border-brand-beige/10 pt-12">
               <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-white/60 transition-colors">LinkedIn</a>
               <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-white/60 transition-colors">Instagram</a>
               <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-white/60 transition-colors">Vimeo</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
