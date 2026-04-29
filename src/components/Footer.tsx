export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-brand-black text-brand-beige/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em]">
        <div className="flex items-center gap-4">
          <span>© 2026 Praneeth Poreddy</span>
          <div className="w-1 h-1 bg-brand-beige/20 rounded-full" />
          <span>VFX Compositing Artist</span>
        </div>
        
        <div className="flex gap-12">
          <a href="#work" className="hover:text-brand-beige transition-colors">Work</a>
          <a href="#about" className="hover:text-brand-beige transition-colors">About</a>
          <a href="#contact" className="hover:text-brand-beige transition-colors">Career</a>
        </div>

        <div className="opacity-40">
          Designed for Excellence
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 h-px bg-brand-beige/5 w-full" />
    </footer>
  );
}
