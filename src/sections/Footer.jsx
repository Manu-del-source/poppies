import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, ArrowUp, CheckCircle2 } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }, 1500)
  }

  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/poppies_ke', label: 'Instagram' },
    { Icon: Facebook, href: 'https://facebook.com/poppies_ke', label: 'Facebook' },
    { Icon: Twitter, href: 'https://twitter.com/poppies_ke', label: 'Twitter' },
  ]

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
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: '#ff5e00', borderColor: '#ff5e00' }}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full transition-all cursor-pointer"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] uppercase tracking-widest text-white/80 font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-poppies-secondary/40">
              <li><a href="#home" className="hover:text-poppies-accent transition-colors cursor-pointer">Home</a></li>
              <li><a href="#featured" className="hover:text-poppies-accent transition-colors cursor-pointer">Featured</a></li>
              <li><a href="#about" className="hover:text-poppies-accent transition-colors cursor-pointer">Our Story</a></li>
              <li><a href="#specials" className="hover:text-poppies-accent transition-colors cursor-pointer">Menu</a></li>
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
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 text-poppies-accent font-bold text-sm"
              >
                <CheckCircle2 size={20} /> Welcome to the family!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-poppies-surface border border-white/5 py-4 px-6 rounded-sm text-sm outline-none focus:border-poppies-accent transition-colors"
                />
                <button 
                  disabled={loading}
                  className="absolute right-2 top-2 bottom-2 bg-poppies-accent px-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-poppies-accent transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {loading ? '...' : 'Join'}
                </button>
              </form>
            )}
            <p className="mt-4 text-[0.6rem] text-white/20 uppercase tracking-widest">
              Get VIP event access and secret menu drops.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[0.65rem] uppercase tracking-[3px] text-white/20">
            &copy; 2026 Poppies Restaurant Nairobi. Built with Soul.
          </p>
          <motion.button 
            whileHover={{ gap: '1rem' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-widest text-poppies-accent font-bold cursor-pointer transition-all"
          >
            Back to Top <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
