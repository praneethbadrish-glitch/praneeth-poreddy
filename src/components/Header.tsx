import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 border-b border-brand-line bg-brand-beige/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-0"
        >
          <span className="font-display text-sm font-bold tracking-tight uppercase">Praneeth Poreddy</span>
          <span className="text-[10px] text-brand-gray tracking-[0.2em] uppercase">VFX Compositor</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 text-[11px] font-medium uppercase tracking-widest text-brand-gray">
          <a href="#work" className="hover:text-brand-black transition-colors">Work</a>
          <a href="#showreel" className="hover:text-brand-black transition-colors">Showreel</a>
          <a href="#about" className="hover:text-brand-black transition-colors">About</a>
          <a href="#contact" className="hover:text-brand-black transition-colors">Contact</a>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <button className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-black pb-0.5 hover:opacity-60 transition-opacity">
            Download Resume
          </button>
        </motion.div>
      </div>
    </header>
  );
}
