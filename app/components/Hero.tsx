"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const FloatingOrb = ({ delay = 0, duration = 20, size = 400 }) => {
  return (
    <motion.div
      className="absolute rounded-full opacity-10 will-change-transform"
      style={{
        background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
        width: size,
        height: size,
        transform: "translateZ(0)",
      }}
      animate={{
        x: [0, 100, -100, 0],
        y: [0, -100, 100, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border opacity-50"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

const MCPVisualization = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  const orbitScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.15])

  // Create transforms for central node
  const centralX = useTransform(x, (value) => value * 0.15)
  const centralY = useTransform(y, (value) => value * 0.15)

  // Create transforms for orbiting nodes (individually to avoid hooks in callbacks)
  const orbit0X = useTransform(x, (value) => Math.cos(0) * 150 + value * 0.08)
  const orbit0Y = useTransform(y, (value) => Math.sin(0) * 150 + value * 0.08)
  const orbit1X = useTransform(x, (value) => Math.cos(Math.PI / 2) * 150 + value * 0.08)
  const orbit1Y = useTransform(y, (value) => Math.sin(Math.PI / 2) * 150 + value * 0.08)
  const orbit2X = useTransform(x, (value) => Math.cos(Math.PI) * 150 + value * 0.08)
  const orbit2Y = useTransform(y, (value) => Math.sin(Math.PI) * 150 + value * 0.08)
  const orbit3X = useTransform(x, (value) => Math.cos(3 * Math.PI / 2) * 150 + value * 0.08)
  const orbit3Y = useTransform(y, (value) => Math.sin(3 * Math.PI / 2) * 150 + value * 0.08)

  const orbitTransforms = [
    { x: orbit0X, y: orbit0Y },
    { x: orbit1X, y: orbit1Y },
    { x: orbit2X, y: orbit2Y },
    { x: orbit3X, y: orbit3Y }
  ]

  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center will-change-transform"
      style={{ y: parallaxY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
    >
      {/* Glow effect behind central node */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full"
        style={{
          x: centralX,
          y: centralY,
          background: "radial-gradient(circle, hsl(var(--accent) / 0.25) 0%, transparent 75%)",
          filter: "blur(80px)",
          boxShadow: "0 0 100px hsl(var(--accent) / 0.4)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central node - Much larger MCP logo */}
      <motion.div
        className="absolute w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-3xl gradient-premium shadow-2xl overflow-hidden border-4 border-white/10 pulse-glow"
        style={{
          x: centralX,
          y: centralY,
          boxShadow: "0 30px 60px rgba(0,0,0,0.25), 0 0 100px hsl(var(--accent) / 0.4)",
        }}
        animate={{
          rotate: [0, 6, -6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
        <div className="absolute inset-4 md:inset-5 lg:inset-6 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
          <Image 
            src="/icons/mcp-logo.png" 
            alt="MCP Logo" 
            width={160} 
            height={160}
            className="drop-shadow-3xl w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
            priority
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Orbiting nodes with enhanced effects */}
      <motion.div 
        style={{ scale: orbitScale }} 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI * 2) / 4
          const radius = 150
          return (
            <motion.div
            key={i}
            className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-accent to-brand-copper shadow-xl overflow-hidden z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
            }}
            transition={{
              scale: { delay: 0.3 + i * 0.15, duration: 0.8, type: "spring" },
              opacity: { delay: 0.3 + i * 0.15, duration: 0.8 },
            }}
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              x: orbitTransforms[i].x,
              y: orbitTransforms[i].y,
              transform: 'translate(-50%, -50%)',
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 40px hsl(var(--accent) / 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
            <div className="absolute inset-2 rounded-xl bg-background/40 backdrop-blur-sm flex items-center justify-center">
              {i === 0 && <Zap className="w-10 h-10 text-accent drop-shadow-lg" />}
              {i === 1 && <Globe className="w-10 h-10 text-accent drop-shadow-lg" />}
              {i === 2 && <Sparkles className="w-10 h-10 text-accent drop-shadow-lg" />}
              {i === 3 && <Shield className="w-10 h-10 text-accent drop-shadow-lg" />}
            </div>
          </motion.div>
          )
        })}
      </motion.div>

      {/* Enhanced connecting lines with gradients */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI * 2) / 4
          const radius = 150
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + (x / 4)}%`}
              y2={`${50 + (y / 4)}%`}
              stroke="url(#line-gradient)"
              strokeWidth="2"
              strokeDasharray="8,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 1.2 }}
            />
          )
        })}
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  const [email, setEmail] = React.useState("")
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 200], [0, -10])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background effects */}
      <AnimatedGrid />
      <FloatingOrb delay={0} duration={30} size={600} />
      <FloatingOrb delay={5} duration={25} size={400} />
      <FloatingOrb delay={10} duration={35} size={500} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] gap-8 lg:gap-8 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-4 px-3 py-1 border-accent text-accent">
                <Sparkles className="w-3 h-3 mr-1" />
                MCP Integration Expert
              </Badge>
            </motion.div>

            <motion.h1
              className="font-extrabold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ y: textY }}
            >
              <span className="block text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-4">
                Transform Your
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AI Infrastructure
              </span>
              <span className="block text-lg md:text-xl lg:text-2xl font-light text-muted-foreground mt-6">
                with Model Context Protocol
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              MCP Integration Specialist for significant business systems. Your database becomes hands and ears for AI while preserving proven business logic. No system replacement, just AI-powered efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-5 text-base"
                  required
                />
                <MagneticButton type="submit" className="px-6 py-3 text-base font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </form>
              <p className="mt-4 text-sm text-muted-foreground">
                Join 500+ enterprises already leveraging MCP.{" "}
                <Link href="/case-studies" className="text-primary underline-gold">
                  See success stories
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>SOC2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>50ms Response</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visualization */}
          <motion.div
            className="relative h-[350px] md:h-[450px] lg:h-[550px] overflow-visible flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <MCPVisualization />
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-border"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Proven track record with real results
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              { label: "500+", desc: "Community Members" },
              { label: "100+", desc: "MCP Tools Built" },
              { label: "5.0★", desc: "Chrome Extension" },
              { label: "1-2 weeks", desc: "Typical Delivery" }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}