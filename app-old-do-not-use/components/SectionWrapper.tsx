"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export default function SectionWrapper({ 
  children, 
  className = "", 
  gradient = ""
}: SectionWrapperProps) {
  return (
    <motion.section 
      className={`relative overflow-hidden ${gradient} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Smooth gradient mesh overlay */}
      <div className="absolute inset-0 gradient-mesh-overlay pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-[rgba(59,126,161,0.02)] pointer-events-none" />
    </motion.section>
  )
}