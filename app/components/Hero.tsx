"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, useScroll, useAnimationFrame } from "framer-motion"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const FloatingOrb = ({ delay = 0, duration = 20, size = 400 }) => {
  return (
    <motion.div
      className="absolute rounded-full opacity-[0.02] will-change-transform"
      style={{
        background: "radial-gradient(circle, hsl(var(--accent) / 0.04) 0%, transparent 70%)",
        width: size,
        height: size,
        transform: "translateZ(0)",
        filter: "blur(80px)",
      }}
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
      }}
      transition={{
        duration: duration * 2, // even slower
        delay,
        repeat: Infinity,
        ease: [0.65, 0, 0.35, 1],
      }}
    />
  )
}

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
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
              className="text-border opacity-[0.015]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

// Individual orbiting icon component
const OrbitingIcon = ({ icon, index, totalIcons, rotation, parallaxX, parallaxY }) => {
  const angleOffset = (index / totalIcons) * 360 // degrees
  const wobble = useMotionValue(0)
  
  // Add subtle oscillation for organic feel
  useAnimationFrame((t) => {
    wobble.set(Math.sin(t / 1500 + index * Math.PI/2) * 1) // ±1px subtle wobble
  })
  
  // Create smooth orbit transforms
  const orbitX = useTransform(rotation, r => 
    Math.cos((r + angleOffset) * Math.PI / 180) * icon.radius
  )
  const orbitY = useTransform(rotation, r => 
    Math.sin((r + angleOffset) * Math.PI / 180) * icon.radius
  )
  
  // Add depth effect - icons scale and fade based on position
  const scale = useTransform(rotation, r => {
    const angle = (r + angleOffset) * Math.PI / 180
    return 0.85 + Math.sin(angle) * 0.15 // Scale between 0.7 and 1.0
  })
  
  // Depth-based opacity
  const depthOpacity = useTransform(orbitY, y => 0.6 + (y / icon.radius) * 0.4)
  
  // Add mouse influence
  const iconX = useTransform([orbitX, parallaxX], ([orbit, mouse]) => orbit + mouse)
  const iconY = useTransform([orbitY, parallaxY], ([orbit, mouse]) => orbit + mouse)
  
  // Counter-rotation to keep icon upright
  const counterRotate = useTransform(rotation, r => -r - angleOffset)
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
        x: iconX,
        y: iconY,
        scale,
        opacity: depthOpacity
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: icon.delay, duration: 0.8 }}
    >
      <motion.div
        style={{
          rotate: counterRotate,
          x: wobble
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: icon.delay,
          duration: 0.8,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ scale: 1.12 }}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={72}
          height={72}
          className="drop-shadow-xl"
        />
        <motion.span
          className="absolute text-[10px] sm:text-xs text-muted-foreground/50 whitespace-nowrap font-light"
          style={{ 
            bottom: "-20px",
            left: "50%",
            x: "-50%",
            rotate: counterRotate 
          }}
          animate={{ 
            opacity: orbitY.get() < 0 ? [0, 0.5, 0.5, 0] : 0 
          }}
          transition={{ duration: 2 }}
        >
          {icon.alt}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

// Helper component for directional arrow markers - ultra minimal
const ArrowMarker = ({ startX, startY, endX, endY, delay, color }: any) => {
  const progress = useMotionValue(0)
  
  useAnimationFrame((t) => {
    const d = ((t / 8000) + delay) % 1 // much slower movement
    progress.set(d)
  })

  // Interpolate position
  const cx = useTransform(progress, p => startX + (endX - startX) * p)
  const cy = useTransform(progress, p => startY + (endY - startY) * p)
  
  // Rotation angle to point toward destination
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)

  return (
    <motion.polygon
      points="-1.5,1 1.5,1 0,-2" // tiny chevron
      fill={color}
      style={{
        translateX: cx,
        translateY: cy,
        rotate: angle,
        opacity: 0.3
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.3, 0.3, 0] }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1]
      }}
    />
  )
}

const MCPVisualization = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring values for mouse interaction
  const springConfig = { damping: 20, stiffness: 120 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  
  // Rotation value for smooth orbit
  const rotation = useMotionValue(0)
  const timeRef = React.useRef(0)
  const baseSpeed = 65 // ultra-slow rotation for luxury feel
  
  // Continuous orbit animation
  useAnimationFrame((_, delta) => {
    timeRef.current += delta / 1000 // convert to seconds
    const deg = (timeRef.current / baseSpeed) * 360
    rotation.set(deg)
  })
  
  // Enhanced mouse parallax for richer 3D feel
  const parallaxX = useTransform(x, v => v * 0.05)
  const parallaxY = useTransform(y, v => v * 0.05)
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll()
  const parallaxScrollY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  
  // Create transforms for central node
  const centralX = useTransform(x, (value) => value * 0.2)
  const centralY = useTransform(y, (value) => value * 0.2)
  
  // Icons configuration - smaller, refined orbit radius for premium feel
  const icons = [
    { src: "/icons/world-class/gmail/gmailglass2.png", alt: "Gmail", radius: 210, delay: 0 },
    { src: "/icons/world-class/stripe/stripeglass.png", alt: "Stripe", radius: 210, delay: 0.2 },
    { src: "/icons/world-class/github/githubglass.png", alt: "GitHub", radius: 210, delay: 0.4 },
    { src: "/icons/world-class/notion/notionglass.png", alt: "Notion", radius: 210, delay: 0.6 }
  ]

  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center will-change-transform"
      style={{ y: parallaxScrollY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      {/* Enhanced multi-layer glow effect behind central node */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full"
        style={{
          x: centralX,
          y: centralY,
          background: `
            radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 75%),
            radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 100%)
          `,
          filter: "blur(100px)",
          boxShadow: "0 0 120px hsl(var(--accent) / 0.6), 0 0 200px hsl(var(--accent) / 0.3)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.9, 1, 0.9],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Rotating halo shimmer for luxury effect */}
      <motion.div
        className="absolute w-72 h-72 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full border border-accent/20"
        style={{
          x: centralX,
          y: centralY,
          boxShadow: "0 0 40px hsl(var(--accent) / 0.3), inset 0 0 40px hsl(var(--accent) / 0.1)",
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.02, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Central node - Larger MCP logo as dominant focal point */}
      <motion.div
        className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        style={{
          x: centralX,
          y: centralY,
        }}
        animate={{ 
          rotate: [0, 1, -1, 0],
          scale: [1, 1.005, 1],
          filter: [
            "drop-shadow(0 0 25px hsl(var(--accent) / 0.25)) drop-shadow(0 0 50px hsl(var(--accent) / 0.1))",
            "drop-shadow(0 0 30px hsl(var(--accent) / 0.3)) drop-shadow(0 0 60px hsl(var(--accent) / 0.15))",
            "drop-shadow(0 0 25px hsl(var(--accent) / 0.25)) drop-shadow(0 0 50px hsl(var(--accent) / 0.1))"
          ]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: [0.65, 0, 0.35, 1] 
        }}
      >
        <Image
          src="/icons/world-class/mcp/MCPFrostedGlass2.png"
          alt="MCP Logo"
          width={400}
          height={400}
          className="w-full h-full select-none pointer-events-none"
          priority
          loading="eager"
        />
      </motion.div>

      {/* Smooth orbiting icons with natural motion */}
      {icons.map((icon, i) => (
        <OrbitingIcon
          key={icon.alt}
          icon={icon}
          index={i}
          totalIcons={icons.length}
          rotation={rotation}
          parallaxX={parallaxX}
          parallaxY={parallaxY}
        />
      ))}

      {/* Premium connection lines with glow */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800">
        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Thin connection lines */}
        {icons.map((_, i) => {
          const angle = (i * Math.PI * 2) / icons.length
          const startX = 400
          const startY = 400
          const endX = 400 + Math.cos(angle) * 280
          const endY = 400 + Math.sin(angle) * 280
          return (
            <motion.line
              key={`line-${i}`}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="hsl(var(--accent) / 0.08)"
              strokeWidth="0.75"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.08, 0.12, 0.08]
              }}
              transition={{ 
                delay: 0.5 + i * 0.5, 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )
        })}
        {/* Bidirectional moving data dots for active flow */}
        {icons.map((_, i) => {
          const angle = (i * Math.PI * 2) / icons.length
          const startX = 400
          const startY = 400
          const endX = 400 + Math.cos(angle) * 250
          const endY = 400 + Math.sin(angle) * 250
          return (
            <React.Fragment key={`arrows-${i}`}>
              {/* Outbound arrow */}
              <ArrowMarker 
                startX={startX} 
                startY={startY} 
                endX={endX} 
                endY={endY} 
                delay={i * 0.35} 
                color="hsl(var(--accent) / 0.25)" 
              />
              {/* Inbound arrow */}
              <ArrowMarker 
                startX={endX} 
                startY={endY} 
                endX={startX} 
                endY={startY} 
                delay={i * 0.35 + 0.5} 
                color="hsl(var(--primary) / 0.2)" 
              />
            </React.Fragment>
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
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, hsl(var(--background)) 0%, hsl(var(--muted) / 0.05) 40%, hsl(var(--background)) 80%),
          linear-gradient(180deg, hsl(var(--muted) / 0.1) 0%, transparent 50%, hsl(var(--muted) / 0.1) 100%)
        `
      }}
    >
      {/* Background effects */}
      <AnimatedGrid />
      
      {/* Subtle noise texture for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <FloatingOrb delay={0} duration={40} size={900} />
      <FloatingOrb delay={5} duration={35} size={700} />
      <FloatingOrb delay={10} duration={50} size={800} />
      
      {/* Additional subtle fog layers */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[30rem] h-[30rem] bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
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
                The Next Era of AI-Driven Operations
              </Badge>
            </motion.div>

            <motion.h1
              className="font-extrabold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ y: textY }}
            >
              <span className="block text-base md:text-lg font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Model Context Protocol
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-premium-text leading-tight">
                MCP as the Brain of <br className="hidden md:block" />
                Your Infrastructure
              </span>
              <span className="mt-6 block text-xl md:text-2xl font-light text-muted-foreground">
                Orchestrating data. Automating workflows. Preserving your logic.
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
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span>SOC2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
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