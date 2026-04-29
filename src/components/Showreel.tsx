import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Showreel() {
  return (
    <section id="showreel" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[11px] font-bold tracking-[0.4em] text-brand-gray uppercase mb-4">REEL 2025</h2>
          <h3 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter">
            MOTION SUMMARY
          </h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video bg-neutral-900 rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200" 
            alt="Showreel Preview" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.15 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-beige text-brand-black flex items-center justify-center shadow-2xl"
            >
              <Play size={32} fill="currentColor" />
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
             <div className="flex flex-col gap-1">
               <span className="text-[10px] font-bold uppercase tracking-widest text-brand-beige/60">Duration</span>
               <span className="text-xl font-display font-bold text-brand-beige uppercase">02:45 MIN</span>
             </div>
             <div className="flex flex-col gap-1 items-end">
               <span className="text-[10px] font-bold uppercase tracking-widest text-brand-beige/60">Resolution</span>
               <span className="text-xl font-display font-bold text-brand-beige uppercase">4K ULTRA HD</span>
             </div>
          </div>
          
          <div className="noise" />
        </motion.div>
      </div>
    </section>
  );
}
