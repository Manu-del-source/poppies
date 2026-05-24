import React from 'react'
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-black text-poppies-accent tracking-tighter mb-6">POPPIES</h2>
            <p className="text-poppies-secondary/40 text-sm leading-relaxed mb-8">
              Redefining urban dining in the heart of Nairobi. Join us for a journey of flavor and soul.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-poppies-accent hover:border-poppies-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] uppercase tracking-widest text-white/80 font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-poppies-secondary/40">
              <li><a href="#home" className="hover:text-poppies-accent transition-colors">Home</a></li>
              <li><a href="#featured" className="hover:text-poppies-accent transition-colors">Featured</a></li>
              <li><a href="#about" className="hover:text-poppies-accent transition-colors">Our Story</a></li>
              <li><a href="#specials" className="hover:text-poppies-accent transition-colors">Menu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] uppercase tracking-widest text-white/80 font-bold mb-8">Location</h4>
            <p className="text-sm text-poppies-secondary/40 leading-loose">
              Kenyatta Avenue, CBD<br />
              Nairobi, Kenya<br />
              info@poppies.co.ke
            </p>
          </div>

          <div>
            <h4 className="text-[0.7rem] uppercase tracking-widest text-white/80 font-bold mb-8">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-poppies-surface border border-white/5 py-4 px-6 rounded-sm text-sm outline-none focus:border-poppies-accent transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-poppies-accent px-4 rounded-sm text-xs font-bold uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[0.65rem] uppercase tracking-[3px] text-white/20">
            &copy; 2026 Poppies Restaurant Nairobi. Built with Soul.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-widest text-poppies-accent font-bold hover:gap-4 transition-all"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
