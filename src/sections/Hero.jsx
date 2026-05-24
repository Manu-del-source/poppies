import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = ({ id }) => {
  return (
    <section id={id} className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=2400" 
          alt="Luxury Rooftop" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-poppies-accent font-bold tracking-[6px] uppercase text-[0.7rem] mb-6">
              Modern Urban Dining • Nairobi CBD
            </h4>
            <h1 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.85] font-black tracking-tighter uppercase mb-8">
              Urban <span className="text-poppies-accent italic font-light lowercase">Flavors</span> <br />
              Nairobi <span className="font-light">Soul</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12">
              <p className="text-poppies-secondary/70 max-w-md border-l-2 border-poppies-accent pl-6 text-lg">
                Experience the perfect blend of contemporary urban cuisine and authentic local ingredients at the heart of the city.
              </p>
              <motion.a
                href="#specials"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Discover the Menu
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#featured"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-[0.6rem] uppercase tracking-[4px] text-white/40 group-hover:text-poppies-accent transition-colors">Discover</span>
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
