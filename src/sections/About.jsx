import React from 'react'
import { motion } from 'framer-motion'
import OptimizedImage from '../components/OptimizedImage'

const About = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200" 
                alt="Chef Cooking"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -right-10 bg-poppies-accent p-8 hidden md:block"
            >
              <h3 className="text-4xl font-black italic tracking-tighter leading-none">Est.<br />2024</h3>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.7rem] mb-4 block">Our Story</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Born in the streets, <br />
              <span className="text-poppies-accent italic">Crafted</span> for the city.
            </h2>
            <div className="space-y-6 text-poppies-secondary/70 text-lg leading-relaxed font-light">
              <p>
                Founded in the vibrant heart of Nairobi, Poppies is more than just a culinary destination. It's an urban sanctuary designed for those who seek the extraordinary in the everyday.
              </p>
              <p>
                We believe that food is the soul of the city. Our philosophy is simple: source the finest local ingredients, respect the heritage of Kenyan flavors, and present them with a modern, industrial elegance that reflects the evolution of our streets.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-3xl font-black text-poppies-accent leading-none mb-2">100%</h4>
                <p className="text-[0.7rem] uppercase tracking-widest text-white/40">Local Sourcing</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-poppies-accent leading-none mb-2">24/7</h4>
                <p className="text-[0.7rem] uppercase tracking-widest text-white/40">Urban Passion</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Text Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none -translate-x-1/2">
        HERITAGE
      </div>
    </section>
  )
}

export default About
