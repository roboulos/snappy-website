"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe2 } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Built-in security protocols ensure your data and AI interactions remain protected",
    color: "from-primary to-secondary"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for real-time AI interactions with minimal latency",
    color: "from-accent to-brand-copper"
  },
  {
    icon: Globe2,
    title: "Future-Proof",
    description: "Extensible architecture that grows with your AI needs",
    color: "from-secondary to-accent"
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-subtle" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Animated MCP visualization */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer circle */}
                  <circle cx="200" cy="200" r="180" stroke="url(#gradient1)" strokeWidth="2" opacity="0.2"/>
                  <circle cx="200" cy="200" r="150" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
                  
                  {/* Connection lines */}
                  <path d="M100 200L300 200" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
                  <path d="M200 100L200 300" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
                  <path d="M129 129L271 271" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                  <path d="M271 129L129 271" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                  
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              {/* Central MCP element */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                  <Image 
                    src="/icons/mcp-logo.png" 
                    alt="MCP Logo" 
                    width={100} 
                    height={100}
                    className="relative z-10 drop-shadow-2xl"
                  />
                </div>
              </motion.div>
              
              {/* Orbiting elements */}
              {[0, 1, 2].map((i) => {
                // Vary distances for depth
                const distances = [120, 140, 160];
                const distance = distances[i];

                // Vary icon sizes slightly for interest
                const sizes = [24, 28, 26]; // in px
                const Icon = [Shield, Zap, Globe2][i];

                // Different durations & easing for each
                const durations = [20, 25, 30];
                const delays = [0, 1, 2]; // stagger start times

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{ originX: 0.5, originY: 0.5 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: durations[i],
                      repeat: Infinity,
                      ease: [0.6, 0.05, 0.01, 0.99], // smooth cubic bezier
                      delay: delays[i],
                    }}
                  >
                    <div
                      style={{
                        transform: `rotate(${i * 120}deg) translate(${distance}px)`,
                      }}
                      className="absolute"
                    >
                      <div
                        className="rounded-2xl gradient-gold shadow-lg"
                        style={{ width: `${sizes[i] * 2}px`, height: `${sizes[i] * 2}px` }} // scale container
                      >
                        <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="text-primary" style={{ width: sizes[i], height: sizes[i] }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-6 gradient-premium-text">
              Why MCP Matters
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Just as HTTP standardized web communications, MCP creates a universal protocol for AI systems to interact with the world's data - securely, reliably, and at scale.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[2px] shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="w-full h-full rounded-2xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}