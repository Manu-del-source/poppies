import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = ({ id, onBookClick }) => {
  return (
    <section id={id} className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Rooftop Dining" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-poppies-accent font-bold tracking-[6px] uppercase text-[0.7rem] mb-4 block">Established 2026 • Nairobi CBD</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Urban <span className="text-poppies-accent italic">Dining</span> <br />
              Redefined.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-poppies-secondary/70 mb-12 max-w-xl font-light leading-relaxed"
          >
            Experience the pulse of the city through curated flavors, signature cocktails, and a rhythmic atmosphere that celebrates the soul of Nairobi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="btn-primary py-5 px-10 text-[0.8rem] cursor-pointer"
            >
              Book Your Table
            </motion.button>
            <motion.a 
              href="#specials"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white py-5 px-10 rounded-sm font-bold uppercase tracking-[3px] text-[0.8rem] transition-all flex items-center justify-center cursor-pointer hover:border-poppies-accent hover:text-poppies-accent"
            >
              Explore Menu
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#featured"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        <span className="text-[0.6rem] uppercase tracking-[4px] font-bold text-white/30">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-poppies-accent" size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
