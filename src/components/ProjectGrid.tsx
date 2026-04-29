import { motion } from "motion/react";

const PROJECTS = [
  {
    id: 1,
    title: "Pushpa 2",
    category: "VFX Integration",
    tags: ["Film", "Commercial"],
    image: "https://images.unsplash.com/photo-1542204113-11f8e28581e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "The Village",
    category: "Atmospheric Compositing",
    tags: ["OTT", "CG Integration"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Jailer",
    category: "Action Compositing",
    tags: ["Film", "Action"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Operation Valentine",
    category: "Realistic Effects",
    tags: ["CG Integration", "Film"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProjectGrid() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-[11px] font-bold tracking-[0.4em] text-brand-gray uppercase mb-4">SELECTED WORK</h2>
            <h3 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              FEATURED<br/>PROJECTS
            </h3>
          </div>
          <p className="max-w-sm text-sm text-brand-gray leading-relaxed font-light">
            A curation of high-fidelity compositing work across diverse cinematic environments and visual challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-[1px] bg-brand-line">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-brand-beige relative overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-8 md:p-12 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
                      {project.title}
                    </h4>
                    <span className="text-[10px] text-brand-gray tracking-widest uppercase font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold px-2 py-1 border border-brand-line uppercase tracking-widest bg-brand-black/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-brand-line opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                  <button className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                    View Breakdown <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-brand-black text-brand-beige text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-black/90 transition-colors"
          >
            Explore All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}
