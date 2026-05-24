import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Specials', href: '#specials' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 200

      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const offsetTop = el.offsetTop
          const height = el.offsetHeight
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + height
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-lg border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-clash font-black tracking-tighter text-poppies-accent cursor-pointer"
        >
          POPPIES
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-[0.65rem] uppercase tracking-[3px] font-bold transition-all duration-300 hover:text-poppies-accent cursor-pointer relative py-2 ${activeSection === link.href.substring(1) ? 'text-poppies-accent' : 'text-poppies-secondary/60'}`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-poppies-accent"
                />
              )}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className="btn-primary py-3 px-8 text-[0.7rem] cursor-pointer"
          >
            Book Table
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-white p-2 cursor-pointer z-[1001]" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-black z-[1000] flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-clash font-bold tracking-widest uppercase hover:text-poppies-accent transition-colors cursor-pointer ${activeSection === link.href.substring(1) ? 'text-poppies-accent' : 'text-white'}`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => { setMobileMenuOpen(false); onBookClick(); }} 
                className="btn-primary mt-6 cursor-pointer"
              >
                Book Table
              </motion.button>
            </div>
            
            <div className="absolute bottom-12 text-white/20 text-[0.6rem] tracking-[4px] uppercase font-bold">
              Nairobi • Urban Dining
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
