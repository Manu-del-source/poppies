import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OptimizedImage = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ filter: 'blur(10px)', opacity: 0.5 }}
        animate={{ 
          filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
          opacity: isLoaded ? 1 : 0.5,
          scale: isLoaded ? 1 : 1.05
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full h-full object-cover"
        {...props}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-poppies-surface animate-pulse" />
      )}
    </div>
  )
}

export default OptimizedImage
