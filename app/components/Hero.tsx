"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, useScroll, useAnimationFrame, type MotionValue } from "framer-motion"
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
const OrbitingIcon = ({ icon, index, totalIcons, rotation }: {
  icon: {
    src: string
    alt: string
    radius: number
    delay: number
    size?: number
  }
  index: number
  totalIcons: number
  rotation: MotionValue<number>
}) => {
  const angleOffset = (index / totalIcons) * 360 // degrees
  const wobble = useMotionValue(0)
  
  // Add subtle oscillation for organic feel
  useAnimationFrame((t) => {
    wobble.set(Math.sin(t / 1500 + index * Math.PI/2) * 1) // ±1px subtle wobble
  })
  
  // Create smooth orbit transforms
  const orbitX = useTransform(rotation, (r: number) => 
    Math.cos((r + angleOffset) * Math.PI / 180) * icon.radius
  )
  const orbitY = useTransform(rotation, (r: number) => 
    Math.sin((r + angleOffset) * Math.PI / 180) * icon.radius
  )
  
  // Add depth effect - icons scale and fade based on position
  const scale = useTransform(rotation, (r: number) => {
    const angle = (r + angleOffset) * Math.PI / 180
    return 0.85 + Math.sin(angle) * 0.15 // Scale between 0.7 and 1.0
  })
  
  // Depth-based opacity
  const depthOpacity = useTransform(orbitY, (y: number) => 0.6 + (y / icon.radius) * 0.4)
  
  // Add mouse influence with smoother calculation - remove parallax to keep stable orbit
  const iconX = useTransform([orbitX, wobble], ([ox, w]: number[]) => ox + w)
  const iconY = orbitY
  
  // Counter-rotation to keep icon upright
  const counterRotate = useTransform(rotation, (r: number) => -r - angleOffset)
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        x: iconX,
        y: iconY,
        translateX: '-50%',
        translateY: '-50%',
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
          x: wobble,
          position: "relative",
          display: "inline-block"
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
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
      >
        {/* Glow effect layer - animates separately */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            boxShadow: "0 0 20px hsl(var(--accent) / 0.4)",
            zIndex: -1
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{
            opacity: { duration: 0.12, ease: "easeOut" }
          }}
        />
        
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.size || 72}
          height={icon.size || 72}
          className="drop-shadow-xl rounded-xl relative z-10"
          draggable={false}
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
const ArrowMarker = ({ startX, startY, endX, endY, delay, color }: {
  startX: number
  startY: number
  endX: number
  endY: number
  delay: number
  color: string
}) => {
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
  const [isMobile, setIsMobile] = React.useState(false)
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
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
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll()
  const parallaxScrollY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  
  // Icons configuration - expanded set with AI and communication tools
  const icons = [
    { src: "/icons/world-class/gmail/gmailglass2.png", alt: "Gmail", radius: 240, delay: 0, size: 72 },
    { src: "/icons/world-class/stripe/stripeglass.png", alt: "Stripe", radius: 240, delay: 0.1, size: 72 },
    { src: "/icons/world-class/github/githubglass.png", alt: "GitHub", radius: 240, delay: 0.2, size: 72 },
    { src: "/icons/world-class/notion/notionglass.png", alt: "Notion", radius: 240, delay: 0.3, size: 72 },
    { src: "/icons/final/claudefrostedlogo4.png", alt: "Claude", radius: 240, delay: 0.4, size: 84 },
    { src: "/icons/final/openaifrosted.png", alt: "OpenAI", radius: 240, delay: 0.5, size: 84 },
    { src: "/icons/final/slacklogofrosted.png", alt: "Slack", radius: 240, delay: 0.6, size: 84 }
  ]

  // Mobile version with simplified layout
  if (isMobile) {
    const mobileIcons = [
      { src: "/icons/world-class/gmail/gmailglass2.png", alt: "Gmail", angle: -45 },
      { src: "/icons/world-class/stripe/stripeglass.png", alt: "Stripe", angle: 90 },
      { src: "/icons/world-class/github/githubglass.png", alt: "GitHub", angle: 225 }
    ]
    
    const radius = 120
    
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central photo with glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-150" />
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl">
            <div 
              className="absolute -inset-1 rounded-full opacity-50"
              style={{ 
                background: "conic-gradient(from 0deg, hsl(var(--accent)) 0%, transparent 25%, transparent 50%, hsl(var(--primary)) 75%, hsl(var(--accent)) 100%)",
                filter: "blur(8px)"
              }} 
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
              <Image
                src="/images/pictureofme.png"
                alt="Robert Boulos - MCP Integration Specialist"
                fill
                className="object-cover"
                priority
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-inner" />
            </div>
          </div>
          
          {/* MCP Badge */}
          <div className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 bg-background/90 flex items-center gap-2 shadow-lg scale-110">
            <Image 
              src="/icons/world-class/mcp/MCPFrostedGlass2.png" 
              alt="MCP" 
              width={20} 
              height={20} 
              className="opacity-90" 
            />
            <span className="text-xs font-semibold text-foreground/80">MCP Expert</span>
          </div>
        </div>
        
        {/* Orbiting icons (static with gentle float) */}
        {mobileIcons.map((icon, i) => {
          const x = Math.cos(icon.angle * Math.PI / 180) * radius
          const y = Math.sin(icon.angle * Math.PI / 180) * radius
          return (
            <motion.div
              key={icon.alt}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                translateX: "-50%",
                translateY: "-50%"
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                opacity: { delay: 0.3 + i * 0.1 },
                scale: { delay: 0.3 + i * 0.1, type: "spring" },
                y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                {/* Connection line */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ 
                    width: Math.abs(x) + 48,
                    height: Math.abs(y) + 48,
                    left: x > 0 ? -x : 24,
                    top: y > 0 ? -y : 24,
                    zIndex: -1 
                  }}
                >
                  <line
                    x1={x > 0 ? Math.abs(x) + 24 : 24}
                    y1={y > 0 ? Math.abs(y) + 24 : 24}
                    x2={x > 0 ? 24 : Math.abs(x) + 24}
                    y2={y > 0 ? 24 : Math.abs(y) + 24}
                    stroke="hsl(var(--accent) / 0.2)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={48}
                  height={48}
                  className="drop-shadow-lg rounded-lg"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }
  
  // Desktop version
  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center will-change-transform"
      style={{ y: parallaxScrollY }}
    >
      {/* Enhanced multi-layer glow effect behind central node */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full"
        style={{
          left: '50%',
          top: '50%',
          translateX: '-50%',
          translateY: '-50%',
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
          left: '50%',
          top: '50%',
          translateX: '-50%',
          translateY: '-50%',
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

      {/* Central node - Consultant photo with premium glass effect */}
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        style={{
          left: '50%',
          top: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ 
          rotate: [0, 1, -1, 0],
          scale: [1, 1.005, 1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: [0.65, 0, 0.35, 1] 
        }}
      >
        {/* Photo container with glass morphism */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          {/* Gradient ring background */}
          <div 
            className="absolute -inset-1 rounded-full opacity-50"
            style={{ 
              background: "conic-gradient(from 0deg, hsl(var(--accent)) 0%, transparent 25%, transparent 50%, hsl(var(--primary)) 75%, hsl(var(--accent)) 100%)",
              filter: "blur(8px)"
            }} 
          />
          
          {/* Photo container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
            {/* Robert's photo */}
            <Image
              src="/images/pictureofme.png"
              alt="Robert Boulos - MCP Integration Specialist"
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className="object-cover"
              priority
              loading="eager"
            />
            
            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent" />
            
            {/* Subtle inner shadow */}
            <div className="pointer-events-none absolute inset-0 rounded-full shadow-inner" />
          </div>
          
          {/* Premium glow effect */}
          <div 
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              boxShadow: `
                0 0 40px hsl(var(--accent) / 0.4),
                0 0 80px hsl(var(--accent) / 0.2),
                inset 0 0 40px hsl(var(--primary) / 0.1)
              `
            }}
          />
        </div>
        
        {/* MCP Badge */}
        <motion.div 
          className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 bg-background/80 flex items-center gap-2 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <Image 
            src="/icons/world-class/mcp/MCPFrostedGlass2.png" 
            alt="MCP" 
            width={20} 
            height={20} 
            className="opacity-90" 
          />
          <span className="text-xs font-semibold text-foreground/80">MCP Expert</span>
        </motion.div>
      </motion.div>

      {/* Smooth orbiting icons with natural motion - hidden on mobile */}
      <div className="hidden sm:block">
        {icons.map((icon, i) => (
          <OrbitingIcon
            key={icon.alt}
            icon={icon}
            index={i}
            totalIcons={icons.length}
            rotation={rotation}
          />
        ))}
      </div>

      {/* Premium connection lines with glow - hidden on mobile */}
      <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800">
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
        {icons.map((icon, i) => {
          const angle = (i * Math.PI * 2) / icons.length
          const centerX = 400
          const centerY = 400
          const endX = centerX + Math.cos(angle) * icon.radius
          const endY = centerY + Math.sin(angle) * icon.radius
          return (
            <motion.line
              key={`line-${i}`}
              x1={centerX}
              y1={centerY}
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
        {icons.map((icon, i) => {
          const angle = (i * Math.PI * 2) / icons.length
          const centerX = 400
          const centerY = 400
          const arrowRadius = icon.radius * 0.9 // Slightly inside the icon
          const endX = centerX + Math.cos(angle) * arrowRadius
          const endY = centerY + Math.sin(angle) * arrowRadius
          return (
            <React.Fragment key={`arrows-${i}`}>
              {/* Outbound arrow */}
              <ArrowMarker 
                startX={centerX} 
                startY={centerY} 
                endX={endX} 
                endY={endY} 
                delay={i * 0.35} 
                color="hsl(var(--accent) / 0.25)" 
              />
              {/* Inbound arrow */}
              <ArrowMarker 
                startX={endX} 
                startY={endY} 
                endX={centerX} 
                endY={centerY} 
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
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-premium-text leading-tight">
                Your Database.<br />
                Supercharged With AI.
              </span>
              <span className="mt-6 block text-xl md:text-2xl font-light text-muted-foreground">
                Through MCP, we make your existing systems the hands, ears, and memory of artificial intelligence.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transform your existing database into an AI powerhouse in 1-2 weeks. No migrations, no disruptions — just seamless intelligence that understands your business logic and acts on your data.
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