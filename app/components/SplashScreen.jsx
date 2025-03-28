'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SplashScreen({ children, duration = 3000, backgroundColor = 'bg-black' }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isLoading) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        <motion.div
          className={`fixed inset-0 flex items-center justify-center ${backgroundColor}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Rectangles moving up */}
            {[20, 40, 60, 80, 100].map((width, index) => (
              <motion.div
                key={index}
                initial={{
                  y: '100%', // Start from the bottom
                  opacity: 0,
                }}
                animate={{
                  y: '0%', // Move up
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-0 flex items-center justify-center"
                style={{
                  width: `${width}%`,
                  height: '100%',
                  backgroundColor: '#706D54',
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
