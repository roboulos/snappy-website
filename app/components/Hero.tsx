"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const FloatingOrb = ({ delay = 0, duration = 20, size = 400 }) => {
  return (
    <motion.div
      className="absolute rounded-full opacity-10"
      style={{
        background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
        width: size,
        height: size,
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

  // Create transforms for central node
  const centralX = useTransform(x, (value) => value * 0.1)
  const centralY = useTransform(y, (value) => value * 0.1)

  // Create transforms for orbiting nodes (individually to avoid hooks in callbacks)
  const orbit0X = useTransform(x, (value) => Math.cos(0) * 150 + value * 0.05)
  const orbit0Y = useTransform(y, (value) => Math.sin(0) * 150 + value * 0.05)
  const orbit1X = useTransform(x, (value) => Math.cos(Math.PI / 2) * 150 + value * 0.05)
  const orbit1Y = useTransform(y, (value) => Math.sin(Math.PI / 2) * 150 + value * 0.05)
  const orbit2X = useTransform(x, (value) => Math.cos(Math.PI) * 150 + value * 0.05)
  const orbit2Y = useTransform(y, (value) => Math.sin(Math.PI) * 150 + value * 0.05)
  const orbit3X = useTransform(x, (value) => Math.cos(3 * Math.PI / 2) * 150 + value * 0.05)
  const orbit3Y = useTransform(y, (value) => Math.sin(3 * Math.PI / 2) * 150 + value * 0.05)

  const orbitTransforms = [
    { x: orbit0X, y: orbit0Y },
    { x: orbit1X, y: orbit1Y },
    { x: orbit2X, y: orbit2Y },
    { x: orbit3X, y: orbit3Y }
  ]

  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
    >
      {/* Central node */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl"
        style={{
          x: centralX,
          y: centralY,
        }}
      >
        <div className="absolute inset-2 rounded-full bg-background/90 flex items-center justify-center">
          <Image 
            src="/icons/mcp-logo.png" 
            alt="MCP Logo" 
            width={48} 
            height={48}
            className="drop-shadow-lg"
          />
        </div>
      </motion.div>

      {/* Orbiting nodes */}
      {[0, 1, 2, 3].map((i) => {
        return (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-accent shadow-lg"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              rotate: 360,
            }}
            transition={{
              scale: { delay: 0.2 + i * 0.1, duration: 0.5 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            style={{
              x: orbitTransforms[i].x,
              y: orbitTransforms[i].y,
            }}
          >
            <div className="absolute inset-2 rounded-full bg-background/90 flex items-center justify-center">
              {i === 0 && <Zap className="w-6 h-6 text-accent" />}
              {i === 1 && <Globe className="w-6 h-6 text-accent" />}
              {i === 2 && <Sparkles className="w-6 h-6 text-accent" />}
              {i === 3 && <Shield className="w-6 h-6 text-accent" />}
            </div>
          </motion.div>
        )
      })}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
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
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
              opacity={0.3}
            />
          )
        })}
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  const [email, setEmail] = React.useState("")

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block">Transform Your</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AI Infrastructure
              </span>
              <span className="block">with MCP</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
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
                <Button type="submit" size="lg" className="btn-gold group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
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
            className="relative h-[400px] lg:h-[600px]"
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
          className="mt-20 pt-12 border-t border-border"
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