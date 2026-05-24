import React from 'react'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const SpecialWidget = () => {
  return (
    <motion.a
      href="#specials"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ x: 10, scale: 1.05 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-10 left-6 z-[1000] hidden md:flex items-center gap-4 bg-poppies-surface border border-poppies-accent/30 p-4 rounded-sm shadow-2xl backdrop-blur-md cursor-pointer group"
    >
      <div className="bg-poppies-accent/20 p-2 rounded-full group-hover:bg-poppies-accent/30 transition-colors">
        <Flame className="text-poppies-accent animate-pulse" size={20} />
      </div>
      <div>
        <h4 className="text-[0.65rem] uppercase tracking-widest text-poppies-accent font-bold">Chef's Special</h4>
        <p className="text-[0.85rem] font-semibold text-white/90">Midnight Platter - 15% OFF</p>
      </div>
    </motion.a>
  )
}

export default SpecialWidget
