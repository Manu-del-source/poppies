import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Users, Clock, User, Phone, MessageSquare, CheckCircle2 } from 'lucide-react'

const ReservationModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
      }, 3000)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-poppies-accent transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle2 size={80} className="text-poppies-accent" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Reservation <span className="text-poppies-accent italic">Received</span></h2>
                <p className="text-poppies-secondary/60">We've received your request. Our team will contact you shortly to confirm your table.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.6rem] mb-2 block">Reservations</span>
                  <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Book Your <span className="text-poppies-accent italic">Experience</span></h2>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/50" size={16} />
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent transition-colors text-sm" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/50" size={16} />
                        <input 
                          required
                          type="tel" 
                          placeholder="+254 7..."
                          className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent transition-colors text-sm" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                      <label className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/50" size={16} />
                        <select className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent appearance-none text-sm">
                          <option className="bg-[#0a0a0a]">2 People</option>
                          <option className="bg-[#0a0a0a]">3 People</option>
                          <option className="bg-[#0a0a0a]">4 People</option>
                          <option className="bg-[#0a0a0a]">5+ People</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/50" size={16} />
                        <input 
                          required
                          type="date" 
                          className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent transition-colors text-sm [color-scheme:dark]" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/50" size={16} />
                        <select className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent appearance-none text-sm">
                          <option className="bg-[#0a0a0a]">18:00</option>
                          <option className="bg-[#0a0a0a]">19:00</option>
                          <option className="bg-[#0a0a0a]">20:00</option>
                          <option className="bg-[#0a0a0a]">21:00</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">Special Requests</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-poppies-accent/50" size={16} />
                      <textarea 
                        rows="3"
                        placeholder="Birthdays, allergies, or window seat preference..."
                        className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-sm outline-none focus:border-poppies-accent transition-colors text-sm resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className={`btn-primary w-full mt-4 py-5 flex items-center justify-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Processing...
                      </>
                    ) : 'Confirm Reservation'}
                  </motion.button>
                  
                  <p className="text-[0.6rem] text-center text-white/20 uppercase tracking-[2px] mt-4">
                    Instant confirmation via SMS/Email
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ReservationModal
