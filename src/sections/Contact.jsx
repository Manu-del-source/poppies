import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

const Contact = ({ id }) => {
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
            className="glass-panel p-12 flex flex-col items-center justify-center text-center rounded-sm"
          >
            <div className="w-20 h-20 bg-poppies-accent/10 border border-poppies-accent/30 flex items-center justify-center rounded-full mb-8">
              <MessageSquare size={32} className="text-poppies-accent" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Direct Ordering</h3>
            <p className="text-poppies-secondary/60 mb-10 max-w-sm">
              Experience the soul of Poppies at home. Message us directly for priority delivery in the CBD.
            </p>
            <a 
              href="https://wa.me/254726090372?text=Hi%20Poppies!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
