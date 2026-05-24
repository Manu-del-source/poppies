import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

const Contact = ({ id }) => {
  const whatsappNumber = "254726090372"
  const whatsappText = encodeURIComponent("Hello I want to order")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`

  return (
    <section id={id} className="py-32 bg-poppies-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.7rem] mb-2 block">Reach Out</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Join the <span className="text-poppies-accent italic">Movement</span></h2>
            <p className="text-poppies-secondary/60 text-lg mb-12 max-w-md">
              Whether it's a birthday feast or a quick urban bite, we're ready to welcome you to the Poppies family.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-poppies-surface border border-white/5 flex items-center justify-center rounded-sm transition-colors group-hover:border-poppies-accent">
                  <MapPin size={20} className="text-poppies-accent" />
                </div>
                <div>
                  <h4 className="text-[0.65rem] uppercase tracking-widest text-white/30 font-bold mb-1">Location</h4>
                  <p className="text-lg font-clash">Kenyatta Avenue, CBD, Nairobi</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-poppies-surface border border-white/5 flex items-center justify-center rounded-sm transition-colors group-hover:border-poppies-accent">
                  <Phone size={20} className="text-poppies-accent" />
                </div>
                <div>
                  <h4 className="text-[0.65rem] uppercase tracking-widest text-white/30 font-bold mb-1">Phone</h4>
                  <p className="text-lg font-clash">+254 726 090 372</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-poppies-surface border border-white/5 flex items-center justify-center rounded-sm transition-colors group-hover:border-poppies-accent">
                  <Clock size={20} className="text-poppies-accent" />
                </div>
                <div>
                  <h4 className="text-[0.65rem] uppercase tracking-widest text-white/30 font-bold mb-1">Hours</h4>
                  <p className="text-lg font-clash leading-tight">Mon - Sat: 10:00 - 22:00 <br /><span className="text-white/40">Sun: 12:00 - 20:00</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-12 flex flex-col items-center justify-center text-center rounded-sm relative overflow-hidden group/card"
          >
            {/* Animated Background Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-poppies-accent rounded-full blur-[100px] pointer-events-none"
            />

            <div className="w-20 h-20 bg-poppies-accent/10 border border-poppies-accent/30 flex items-center justify-center rounded-full mb-8 relative z-10 group-hover/card:scale-110 transition-transform duration-500">
              <MessageSquare size={32} className="text-poppies-accent" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 relative z-10">Direct Ordering</h3>
            <p className="text-poppies-secondary/60 mb-10 max-w-sm relative z-10">
              Experience the soul of Poppies at home. Message us directly for priority delivery in the CBD.
            </p>
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full relative z-10 flex items-center justify-center gap-3 cursor-pointer"
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
