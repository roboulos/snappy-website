"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  // Create spotlight position
  const spotlightX = useTransform(springX, (value) => `calc(50% + ${value}px)`)
  const spotlightY = useTransform(springY, (value) => `calc(50% + ${value}px)`)

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const xPos = (e.clientX - rect.left - rect.width / 2) * 0.5
    const yPos = (e.clientY - rect.top - rect.height / 2) * 0.5
    x.set(xPos)
    y.set(yPos)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-3",
        "bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--brand-copper))]",
        "shadow-lg hover:shadow-xl transition-shadow",
        "text-white font-medium",
        className
      )}
      {...props}
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(255,255,255,0.25), transparent 60%)`,
        }}
      />
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  )
}