import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return undefined

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    const handleMouseOver = (event) => {
      const target = event.target
      setIsHovering(Boolean(
        target instanceof Element &&
        (target.matches('a, button, input, select, textarea, [role="button"]') ||
          target.closest('a, button, [role="button"]'))
      ))
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-[400px] w-[400px] rounded-full bg-poppies-accent/10 blur-[120px] lg:block"
        animate={{ x: position.x - 200, y: position.y - 200 }}
        transition={{ type: 'spring', damping: 50, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 rounded-full bg-poppies-accent mix-blend-difference lg:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      />
    </>
  )
}

export default CustomCursor
