import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Users, Clock } from 'lucide-react'

const ReservationModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative w-full max-w-lg glass-panel p-10 md:p-16 rounded-sm shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-poppies-accent transition-colors"
            >
              <X size={32} />
            </button>

            <div className="mb-10">
              <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.7rem] mb-2 block">Reservations</span>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Secure Your <span className="text-poppies-accent italic">Table</span></h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">Guest Count</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent" size={18} />
                  <select className="w-full bg-poppies-bg border border-white/10 py-4 pl-12 pr-6 rounded-sm outline-none focus:border-poppies-accent appearance-none">
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6 People</option>
                    <option>Large Group</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent" size={18} />
                    <input type="date" className="w-full bg-poppies-bg border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent" size={18} />
                    <select className="w-full bg-poppies-bg border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent text-sm appearance-none">
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full mt-8 py-5">
                Confirm Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ReservationModal
