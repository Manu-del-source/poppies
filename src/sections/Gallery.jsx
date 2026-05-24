import React from 'react'
import { motion } from 'framer-motion'
import OptimizedImage from '../components/OptimizedImage'

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', title: 'Industrial Elegance' },
  { url: 'https://images.unsplash.com/photo-1550966841-396ad88675c7?auto=format&fit=crop&q=80&w=800', title: 'Artisan Plates' },
  { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800', title: 'Intimate Evenings' },
  { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', title: 'Culinary Mastery' },
  { url: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=800', title: 'Signature Sips' },
  { url: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=800', title: 'Urban Escape' }
]

const Gallery = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-poppies-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-poppies-accent font-bold tracking-[4px] uppercase text-[0.7rem] mb-2 block">Atmosphere</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">The <span className="text-poppies-accent italic">Vibe</span></h2>
          </motion.div>
          <p className="text-poppies-secondary/60 max-w-sm text-right md:text-left">
            A visual journey through the industrial elegance and urban soul of Poppies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-sm"
            >
              <OptimizedImage 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <h3 className="text-xl font-bold uppercase tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
