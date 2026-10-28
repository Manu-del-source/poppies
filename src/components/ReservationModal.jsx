import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Users, Clock, User, Phone, MessageSquare } from 'lucide-react'

const ReservationModal = ({ isOpen, onClose }) => {
  const [showDemoNotice, setShowDemoNotice] = useState(false)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    previousFocusRef.current = document.activeElement
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (!first || !last) {
        event.preventDefault()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previousFocusRef.current?.focus?.()
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) setShowDemoNotice(false)
  }, [isOpen])

  const handleSubmit = (event) => {
    event.preventDefault()
    // Do not imply that a booking was received until a real booking service is connected.
    setShowDemoNotice(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close reservation dialog"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-default"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-dialog-title"
            aria-describedby="reservation-dialog-description"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 md:p-12 rounded-sm shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-poppies-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-poppies-accent transition-colors z-10 p-2"
              aria-label="Close reservation dialog"
            >
              <X size={24} aria-hidden="true" />
            </button>

            <div className="mb-8 pr-8">
              <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.6rem] mb-2 block">Reservations</span>
              <h2 id="reservation-dialog-title" className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-tight">
                Book Your <span className="text-poppies-accent italic">Experience</span>
              </h2>
              <p id="reservation-dialog-description" className="mt-3 text-sm text-poppies-secondary/70">
                This reservation form is a preview and is not connected to a booking service yet.
              </p>
            </div>

            {showDemoNotice && (
              <p role="status" aria-live="polite" className="mb-6 border border-poppies-accent/40 bg-poppies-accent/10 p-4 text-sm text-white">
                No reservation was sent. Online booking is not available in this preview because the booking service has not been connected.
              </p>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="reservation-name" className="text-[0.65rem] uppercase tracking-widest text-white/60 font-bold">Full Name</label>
                  <div className="relative">
                    <User aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/60" size={16} />
                    <input id="reservation-name" name="name" required autoComplete="name" type="text" placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/15 py-4 pl-12 pr-4 rounded-sm outline-none focus-visible:border-poppies-accent focus-visible:ring-2 focus-visible:ring-poppies-accent/50 transition-colors text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="reservation-phone" className="text-[0.65rem] uppercase tracking-widest text-white/60 font-bold">Phone Number</label>
                  <div className="relative">
                    <Phone aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/60" size={16} />
                    <input id="reservation-phone" name="phone" required autoComplete="tel" type="tel" placeholder="+254..."
                      className="w-full bg-white/5 border border-white/15 py-4 pl-12 pr-4 rounded-sm outline-none focus-visible:border-poppies-accent focus-visible:ring-2 focus-visible:ring-poppies-accent/50 transition-colors text-sm" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-2">
                  <label htmlFor="reservation-guests" className="text-[0.65rem] uppercase tracking-widest text-white/60 font-bold">Guests</label>
                  <div className="relative">
                    <Users aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/60" size={16} />
                    <select id="reservation-guests" name="guests" defaultValue="2" className="w-full bg-white/5 border border-white/15 py-4 pl-12 pr-2 rounded-sm outline-none focus-visible:border-poppies-accent focus-visible:ring-2 focus-visible:ring-poppies-accent/50 appearance-none text-sm">
                      <option value="2" className="bg-[#0a0a0a]">2 People</option>
                      <option value="3" className="bg-[#0a0a0a]">3 People</option>
                      <option value="4" className="bg-[#0a0a0a]">4 People</option>
                      <option value="5+" className="bg-[#0a0a0a]">5+ People</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="reservation-date" className="text-[0.65rem] uppercase tracking-widest text-white/60 font-bold">Date</label>
                  <div className="relative">
                    <Calendar aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/60" size={16} />
                    <input id="reservation-date" name="date" required type="date" min={new Date().toLocaleDateString('en-CA')} className="w-full min-w-0 bg-white/5 border border-white/15 py-4 pl-12 pr-2 rounded-sm outline-none focus-visible:border-poppies-accent focus-visible:ring-2 focus-visible:ring-poppies-accent/50 transition-colors text-sm [color-scheme:dark]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="reservation-time" className="text-[0.65rem] uppercase tracking-widest text-white/60 font-bold">Time</label>
                  <div className="relative">
                    <Clock aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-poppies-accent/60" size={16} />
                    <select id="reservation-time" name="time" defaultValue="18:00" className="w-full bg-white/5 border border-white/15 py-4 pl-12 pr-2 rounded-sm outline-none focus-visible:border-poppies-accent focus-visible:ring-2 focus-visible:ring-poppies-accent/50 appearance-none text-sm">
                      <option value="18:00" className="bg-[#0a0a0a]">18:00</option>
                      <option value="19:00" className="bg-[#0a0a0a]">19:00</option>
                      <option value="20:00" className="bg-[#0a0a0a]">20:00</option>
                      <option value="21:00" className="bg-[#0a0a0a]">21:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="reservation-requests" className="text-[0.65rem] uppercase tracking-widest text-white/60 font-bold">Special Requests</label>
                <div className="relative">
                  <MessageSquare aria-hidden="true" className="absolute left-4 top-4 text-poppies-accent/60" size={16} />
                  <textarea id="reservation-requests" name="requests" rows={3} placeholder="Dietary needs or seating preferences (optional)"
                    className="w-full bg-white/5 border border-white/15 py-4 pl-12 pr-4 rounded-sm outline-none focus-visible:border-poppies-accent focus-visible:ring-2 focus-visible:ring-poppies-accent/50 transition-colors text-sm resize-y" />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full mt-4 py-5 flex items-center justify-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-poppies-accent">
                Preview booking request
              </button>
              <p className="text-xs text-center text-white/50 mt-4">
                Demo only — details entered here are not sent or stored.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ReservationModal
