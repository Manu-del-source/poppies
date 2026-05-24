import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OptimizedImage from '../components/OptimizedImage'
import { MessageSquare } from 'lucide-react'

const menuCategories = ['all', 'burgers', 'grill', 'specials', 'cocktails']

const menuItems = [
  {
    id: 1,
    name: 'The Poppies Burger',
    price: 'KES 850',
    category: 'burgers',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    desc: 'Juicy 200g beef patty, caramelized onions, melted cheddar, and secret sauce.',
    tags: ['Popular']
  },
  {
    id: 2,
    name: 'Peri Peri Chicken',
    price: 'KES 650',
    category: 'grill',
    img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    desc: 'Flame-grilled chicken marinated for 24 hours in authentic African bird\'s eye chili.',
    tags: ['Spicy']
  },
  {
    id: 3,
    name: 'Nairobi Loaded Fries',
    price: 'KES 550',
    category: 'specials',
    img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800',
    desc: 'Crispy masala chips topped with seasoned minced meat and melted mozzarella.',
    tags: ['Best Seller']
  },
  {
    id: 4,
    name: 'Nyama Choma Platter',
    price: 'KES 1,200',
    category: 'grill',
    img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800',
    desc: 'Traditional slow-roasted goat meat served with kachumbari and ugali.',
    tags: []
  },
  {
    id: 5,
    name: 'Urban Wings (6pcs)',
    price: 'KES 600',
    category: 'specials',
    img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=800',
    desc: 'Succulent chicken wings tossed in Sticky Honey BBQ or Spicy Buffalo sauce.',
    tags: ['Spicy']
  },
  {
    id: 6,
    name: 'Nairobi Sunset',
    price: 'KES 750',
    category: 'cocktails',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    desc: 'Local premium gin, fresh passion fruit, hibiscus, and volcanic water.',
    tags: ['Signature']
  }
]

const Specials = ({ id }) => {
  const [activeTab, setActiveTab] = useState('all')
  const whatsappNumber = "254726090372"

  const filteredItems = activeTab === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab)

  const getWhatsappLink = (itemName) => {
    const text = encodeURIComponent(`Hello, I'd like to order: ${itemName}`)
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }

  return (
    <section id={id} className="py-32 bg-poppies-surface relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.7rem] mb-2 block">The Collection</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">Curated <span className="text-poppies-accent italic">Selection</span></h2>
            <div className="w-16 h-1 bg-poppies-accent mx-auto" />
          </motion.div>
        </div>

        {/* Categories Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {menuCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-sm text-[0.7rem] uppercase tracking-widest font-bold transition-all duration-300 border cursor-pointer ${activeTab === cat ? 'bg-poppies-accent border-poppies-accent text-white shadow-lg' : 'border-white/10 text-white/40 hover:border-poppies-accent/50'}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-sm group overflow-hidden flex flex-col border border-white/5 hover:border-poppies-accent/30 transition-colors"
              >
                <div className="h-64 overflow-hidden relative">
                  <OptimizedImage 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className={`text-[0.6rem] font-black uppercase px-2 py-1 rounded-sm ${tag === 'Spicy' ? 'bg-red-500/80' : 'bg-poppies-accent/80'}`}>
                        {tag === 'Spicy' ? '🌶️ ' : '🔥 '}{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-poppies-accent transition-colors">{item.name}</h3>
                    <span className="text-poppies-accent font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-poppies-secondary/60 text-sm leading-relaxed font-light mb-8 flex-grow">
                    {item.desc}
                  </p>
                  
                  <motion.a
                    href={getWhatsappLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-4 border border-poppies-accent/50 text-poppies-accent font-bold uppercase tracking-widest text-[0.7rem] hover:bg-poppies-accent hover:text-white transition-all duration-300 rounded-sm"
                  >
                    <MessageSquare size={14} /> Order Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Specials
