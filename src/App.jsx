import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Featured from './sections/Featured'
import Specials from './sections/Specials'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import CustomCursor from './components/CustomCursor'
import SpecialWidget from './components/SpecialWidget'
import ReservationModal from './components/ReservationModal'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative min-h-screen bg-poppies-bg selection:bg-poppies-accent selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-poppies-accent z-[2001] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <SpecialWidget />
      
      <main>
        <Hero id="home" onBookClick={() => setIsBookingOpen(true)} />
        <Featured id="featured" />
        <About id="about" />
        <Specials id="specials" />
        <Gallery id="gallery" />
        <Reviews id="reviews" />
        <Contact id="contact" />
      </main>
      
      <Footer />

      <ReservationModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  )
}

export default App
