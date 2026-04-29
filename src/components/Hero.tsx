import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="md:col-span-8 flex flex-col z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] font-bold tracking-[0.4em] text-brand-gray uppercase mb-4"
          >
            VFX / COMPOSITING ARTIST
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col"
          >
            <h1 className="font-display text-[15vw] md:text-[10vw] leading-[0.8] font-extrabold uppercase tracking-tighter">
              PORTFOLIO
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 max-w-md"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-brand-gray italic mb-8">
              "Hi, my name is Praneeth. I am a VFX Compositor specializing in cinematic integration, 
              photorealistic compositing, and visual storytelling."
            </p>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-brand-black flex items-center justify-center group-hover:bg-brand-black group-hover:text-brand-beige transition-all">
                <div className="rotate-45 w-1.5 h-1.5 border-r border-b border-current" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest">Explore Projects</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual detail */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[3/4] max-w-[320px] bg-brand-black/5 rounded-2xl overflow-hidden border border-brand-line shadow-2xl"
          >
            {/* Semantic Placeholder for Silhouette */}
            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                 alt="Portrait of Artist" 
                 className="w-full h-full object-cover grayscale opacity-80"
               />
               <div className="absolute inset-0 bg-brand-black/10" />
            </div>
            
            {/* UI Detail: Minimal Progress Graphic */}
            <div className="absolute bottom-6 right-6">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full border border-brand-black/20 flex items-center justify-center text-[6px] tracking-widest uppercase font-bold text-brand-black/40"
              >
                <span className="absolute inset-x-0 text-center">OPEN TO WORK • OPEN TO WORK • </span>
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-brand-black rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-12 h-24 w-px bg-brand-line hidden md:block" />
    </section>
  );
}
