import { motion } from "motion/react";

const SKILLS = ["Nuke", "After Effects", "Silhouette", "Photoshop", "3DEqualizer", "Houdini Basics"];
const SERVICES = [
  "Compositing", 
  "Cleanup & Roto", 
  "CG Integration", 
  "Matte Painting Integration", 
  "Color Matching", 
  "Look Development"
];

export default function SkillsServices() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32">
          
          {/* Left Column: Vision + Skills */}
          <div>
            <h2 className="text-[11px] font-bold tracking-[0.4em] text-brand-gray uppercase mb-8">ARTISTIC VISION</h2>
            <p className="text-2xl md:text-3xl font-light leading-snug text-brand-black mb-12 italic">
              "Compositing is the final layer of truth. My vision is to make the invisible, visible—and the impossible, real."
            </p>
            
            <div className="pt-12 border-t border-brand-line">
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-8 text-brand-gray">CORE TOOLKIT</h3>
              <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm uppercase font-bold tracking-tighter">
                {SKILLS.map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.1, color: "#000" }}
                    className="text-brand-gray/60 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Services */}
          <div>
            <h2 className="text-[11px] font-bold tracking-[0.4em] text-brand-gray uppercase mb-8">CAPABILITIES</h2>
            <div className="grid grid-cols-1 gap-1">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col pt-6 pb-6 border-b border-brand-line last:border-0"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-2xl md:text-4xl font-display font-extrabold uppercase tracking-tighter group-hover:pl-4 transition-all duration-300">
                      {service}
                    </span>
                    <span className="text-[10px] mr-2 opacity-20 group-hover:opacity-100 transition-all font-mono">0{idx + 1}</span>
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-brand-black text-brand-beige rounded-2xl relative overflow-hidden group cursor-pointer">
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest">Start a Project</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
