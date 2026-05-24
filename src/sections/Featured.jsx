import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import OptimizedImage from '../components/OptimizedImage'
import { MessageSquare } from 'lucide-react'

const featuredMeals = [
  {
    name: 'Midnight Platter',
    price: 'KES 1,200',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    desc: 'Slow-roasted prime cuts marinated in a secret blend of 12 Kenyan spices.'
  },
  {
    name: 'Poppies Signature Burger',
    price: 'KES 850',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    desc: 'Juicy 200g beef patty, caramelized onions, and our signature Poppies secret sauce.'
  },
  {
    name: 'Peri Peri Flame Grill',
    price: 'KES 650',
    img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    desc: 'Flame-grilled chicken marinated for 24 hours in authentic African bird\'s eye chili.'
  },
  {
    name: 'Nairobi Sunset Cocktail',
    price: 'KES 750',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    desc: 'Local premium gin, fresh passion fruit, and hibiscus infusion.'
  }
]

const Featured = ({ id }) => {
  const containerRef = useRef(null)
  const whatsappNumber = "254726090372"
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  const getWhatsappLink = (itemName) => {
    const text = encodeURIComponent(`Hello, I'd like to order: ${itemName}`)
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }

  return (
    <section id={id} ref={containerRef} className="py-32 bg-poppies-bg overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.7rem] mb-2 block">Curation</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">Meal of the <span className="text-poppies-accent italic">Moment</span></h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-poppies-secondary/60 max-w-sm"
          >
            Hand-picked selections from our chef, representing the vibrant pulse of Nairobi's food culture.
          </motion.p>
        </div>
      </div>

      <motion.div style={{ x }} className="flex gap-8 pl-[10vw] pr-6">
        {featuredMeals.map((meal, i) => (
          <motion.div
            key={meal.name}
            className="min-w-[300px] md:min-w-[450px] group"
          >
            <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-sm">
              <OptimizedImage 
                src={meal.img} 
                alt={meal.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6 bg-poppies-accent text-white px-4 py-2 font-bold text-sm shadow-xl">
                {meal.price}
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                <motion.a
                  href={getWhatsappLink(meal.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-black px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} /> Order Now
                </motion.a>
              </div>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-poppies-accent transition-colors">{meal.name}</h3>
            <p className="text-poppies-secondary/60 text-sm line-clamp-2 font-light">{meal.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Featured
