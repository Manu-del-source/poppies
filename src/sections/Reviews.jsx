import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const reviews = [
  {
    text: "The Poppies Burger is easily the best burger I've had in Nairobi. The secret sauce is actually incredible!",
    author: "David M.",
    role: "Food Critic",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  },
  {
    text: "Love the vibe and the peri peri chicken. Perfect spot for a weekend lunch with friends. Highly recommend!",
    author: "Sarah J.",
    role: "Urban Explorer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    text: "Ordered via WhatsApp and the delivery was super fast. The Loaded Fries arrived hot and crispy. 10/10.",
    author: "Kevin K.",
    role: "Regular Guest",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
]

const Reviews = ({ id }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id={id} className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Quote className="mx-auto text-poppies-accent opacity-20 mb-8" size={60} />
          
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <p className="text-2xl md:text-3xl font-clash italic font-light leading-relaxed text-poppies-secondary mb-10">
                  "{reviews[index].text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={reviews[index].img} 
                    alt={reviews[index].author}
                    className="w-12 h-12 rounded-full border border-poppies-accent/30 p-1"
                  />
                  <div className="text-left">
                    <h4 className="font-bold uppercase tracking-widest text-[0.7rem] text-poppies-accent">{reviews[index].author}</h4>
                    <p className="text-[0.6rem] uppercase tracking-widest text-white/30">{reviews[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-12 h-1 transition-all duration-500 rounded-full ${i === index ? 'bg-poppies-accent' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
