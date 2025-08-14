"use client"

import * as React from "react"
import { motion, useTransform, useScroll, useMotionValue, animate } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

const FloatingOrb = ({ delay = 0, duration = 20, size = 400 }) => {
  return (
    <div
      className="absolute rounded-full opacity-[0.02]"
      style={{
        background: "radial-gradient(circle, hsl(var(--accent) / 0.04) 0%, transparent 70%)",
        width: size,
        height: size,
        transform: "translateZ(0)",
        filter: "blur(40px)", // Reduced from 80px
        animation: `float-orb ${duration * 2}s ${delay}s ease-in-out infinite`,
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
const OrbitingIcon = ({ icon, index, totalIcons, baseSpeed }: {
  icon: {
    src: string
    alt: string
    radius: number
    delay: number
    size?: number
  }
  index: number
  totalIcons: number
  baseSpeed: number
}) => {
  const orbitRadiusX = 240 // Horizontal spread remains wide
  const orbitRadiusY = 180 // Reduced vertical spread for perspective squash
  const baselineSize = 72
  const angleOffset = (index / totalIcons) * 2 * Math.PI // radians
  
  // Create a motion value for rotation
  const rotation = useMotionValue(0)
  
  // Animate the rotation continuously
  React.useEffect(() => {
    const controls = animate(rotation, 2 * Math.PI, {
      duration: baseSpeed,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop"
    })
    return controls.stop
  }, [rotation, baseSpeed])
  
  // Position: elliptical orbit for perspective
  const x = useTransform(rotation, r =>
    Math.cos(r + angleOffset) * orbitRadiusX
  )
  const y = useTransform(rotation, r =>
    Math.sin(r + angleOffset) * orbitRadiusY
  )
  
  // Map Y (vertical position) to scale and opacity
  const scale = useTransform(y, [-orbitRadiusY, orbitRadiusY], [0.65, 1.25])
  const opacity = useTransform(y, [-orbitRadiusY, orbitRadiusY], [0.45, 1])
  
  // Optional Z-lift for bottom icons (depth effect)
  const zLift = useTransform(y, [-orbitRadiusY, orbitRadiusY], [-10, 20])
  
  return (
    <motion.div
      className="absolute cursor-pointer pointer-events-auto"
      style={{
        left: "50%",
        top: "50%",
        x,
        y,
        scale,
        opacity,
        z: zLift,
        translateX: "-50%",
        translateY: "-50%",
        width: baselineSize,
        height: baselineSize,
      }}
    >
      {/* Glow effect layer */}
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
        width={baselineSize}
        height={baselineSize}
        className="drop-shadow-xl rounded-xl relative z-10"
        draggable={false}
      />
    </motion.div>
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
  
  // CSS-based rotation for better performance
  const baseSpeed = 65 // ultra-slow rotation for luxury feel
  
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
        {/* Central photo with glow - using primary blue */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-150" />
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl">
            <div 
              className="absolute -inset-1 rounded-full opacity-50"
              style={{ 
                background: "conic-gradient(from 0deg, hsl(var(--primary)) 0%, transparent 25%, transparent 50%, hsl(var(--secondary)) 75%, hsl(var(--primary)) 100%)",
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
      {/* Enhanced multi-layer glow effect behind central node - elliptical to match orbit */}
      <div
        className="absolute"
        style={{
          width: `${240 * 2}px`, // Match orbital path exactly
          height: `${180 * 2}px`, // Match orbital path exactly
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: `
            radial-gradient(ellipse at center, hsl(var(--primary) / 0.25) 0%, transparent 60%),
            radial-gradient(ellipse at center, hsl(var(--primary) / 0.1) 0%, transparent 100%)
          `,
          filter: "blur(80px)",
        }}
      />
      
      {/* Orbital path indicator - precise SVG ellipse */}
      <svg
        className="absolute pointer-events-none"
        width="600"
        height="400"
        viewBox="-300 -200 600 400"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ellipse
          cx={0}
          cy={0}
          rx={240} // orbitRadiusX
          ry={180} // orbitRadiusY
          fill="none"
          stroke="rgba(59, 126, 161, 0.3)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      {/* Central node - Consultant photo with premium glass effect */}
      <motion.div
        className="absolute"
        style={{
          width: '420px',  // Slightly smaller than 2x orbital radius for border gap
          height: '420px', // Keep square for proper image display
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
        {/* Photo container with glass morphism - using clip-path for ellipse */}
        <div 
          className="relative w-full h-full overflow-hidden"
          style={{
            clipPath: 'ellipse(50% 37.5% at 50% 50%)', // 4:3 ratio to match orbit
          }}
        >
          {/* Gradient ring background - using primary blue */}
          <div 
            className="absolute -inset-1 opacity-50"
            style={{ 
              background: "conic-gradient(from 0deg, hsl(var(--primary)) 0%, transparent 25%, transparent 50%, hsl(var(--secondary)) 75%, hsl(var(--primary)) 100%)",
              filter: "blur(8px)"
            }} 
          />
          
          {/* Photo container */}
          <div className="relative w-full h-full overflow-hidden border border-white/10 flex items-center justify-center">
            {/* Robert's photo - medium size within the container */}
            <div className="relative" style={{ width: '360px', height: '360px', marginTop: '35px' }}>
              <Image
                src="/images/pictureofme.png"
                alt="Robert Boulos - MCP Integration Specialist"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover rounded-full"
                style={{ objectPosition: 'center top' }}
                priority
                loading="eager"
              />
            </div>
            
            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
            
            {/* Subtle inner shadow */}
            <div className="pointer-events-none absolute inset-0 shadow-inner" />
          </div>
          
          {/* Premium glow effect - using primary blue */}
          <div 
            className="pointer-events-none absolute inset-0"
            style={{
              clipPath: 'ellipse(50% 37.5% at 50% 50%)', // Match the container's ellipse
              boxShadow: `
                0 0 40px hsl(var(--primary) / 0.4),
                0 0 80px hsl(var(--primary) / 0.2),
                inset 0 0 40px hsl(var(--primary) / 0.1)
              `
            }}
          />
        </div>
        
        {/* MCP Badge */}
        <motion.div 
          className="absolute px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 bg-background/80 flex items-center gap-2 shadow-lg"
          style={{
            bottom: '40px',  // Position relative to ellipse edge
            right: '40px',   // Position relative to ellipse edge
          }}
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

      {/* Smooth orbiting icons with CSS animation - hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {icons.map((icon, i) => (
            <OrbitingIcon
              key={icon.alt}
              icon={icon}
              index={i}
              totalIcons={icons.length}
              baseSpeed={baseSpeed}
            />
          ))}
        </div>
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
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 200], [0, -10])

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top, rgba(59, 126, 161, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(229, 183, 56, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, hsl(var(--background)) 0%, rgba(59, 126, 161, 0.02) 50%, hsl(var(--background)) 100%)
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
              <Badge variant="outline" className="mb-4 px-3 py-1">
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
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
                <span className="text-foreground">Your Systems,</span><br />
                <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">Ready for Any AI.</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We build production-grade MCP servers that make your APIs, databases, and legacy systems work with ChatGPT, Claude, or any AI—securely, in 2 weeks. Built Xano&apos;s integration. Yours could be next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <Button 
                  size="lg" 
                  className="relative px-8 py-6 text-lg font-semibold group flex-1 bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  onClick={() => window.open('https://calendly.com/robertboulos/45m-vip', '_blank')}
                >
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-2 border-[#3B7EA1]/20 hover:border-[#3B7EA1]/40 hover:bg-[#3B7EA1]/5 flex-1 transition-all duration-300"
                  onClick={() => window.open('/enterprise-mcp-guide.pdf', '_blank')}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get MCP Guide
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-green-600">✓</span> 30-min architecture review
                <span className="mx-2">•</span>
                <span className="font-semibold text-green-600">✓</span> 70% deploy in under 2 weeks
                <span className="mx-2">•</span>
                <span className="font-semibold text-green-600">✓</span> No migration required
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

      </div>
    </section>
  )
}