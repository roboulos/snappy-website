"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe2 } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Globe2,
    title: "Future-Proof",
    description: "Extensible architecture that grows with your AI needs",
    color: "from-secondary to-accent"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for real-time AI interactions with minimal latency",
    color: "from-accent to-brand-copper"
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Built-in security protocols ensure your data and AI interactions remain protected",
    color: "from-primary to-secondary"
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden gradient-services-to-about">
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(94,107,141,0.02)] to-transparent" />
      
      {/* Animated orbs for depth */}
      <div className="absolute left-1/4 top-1/3 w-[40rem] h-[40rem] bg-gradient-radial from-[rgba(59,126,161,0.12)] to-transparent blur-3xl opacity-50 animate-pulse-subtle" />
      <div className="absolute right-1/3 bottom-1/4 w-[35rem] h-[35rem] bg-gradient-radial from-[rgba(94,107,141,0.1)] to-transparent blur-3xl opacity-50 animate-pulse-subtle" />
      
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
              {/* Animated MCP visualization with rotating orbit circles */}
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
                  {/* Orbit circles for each icon - tighter radii for better composition */}
                  <circle cx="200" cy="200" r="125" stroke="url(#gradient1)" strokeWidth="2" opacity="0.25"/>
                  <circle cx="200" cy="200" r="155" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3"/>
                  <circle cx="200" cy="200" r="185" stroke="url(#gradient1)" strokeWidth="2" opacity="0.35"/>
                  
                  {/* Optional outer decorative circle */}
                  <circle cx="200" cy="200" r="205" stroke="url(#gradient1)" strokeWidth="1.5" opacity="0.15"/>
                  
                  {/* Connection lines */}
                  <path d="M100 200L300 200" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
                  <path d="M200 100L200 300" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
                  
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
                <div className="relative flex items-center justify-center">
                  {/* Subtle glow behind logo - slightly larger to compensate for smaller logo */}
                  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-transparent blur-3xl" />
                  <div className="absolute w-56 h-56 rounded-full bg-accent/10 blur-2xl animate-pulse" />
                  
                  {/* MCP Logo - increased size */}
                  <Image 
                    src="/icons/world-class/mcp/MCPFrostedGlass2.png" 
                    alt="MCP Logo" 
                    width={180} 
                    height={180}
                    className="relative z-10 drop-shadow-2xl"
                  />
                </div>
              </motion.div>
              
              {/* Orbiting elements */}
              {[0, 1, 2].map((i) => {
                // Icon sizes - all the same size for consistency
                const sizes = [36, 36, 36]; // in px - all same size
                
                // Distances adjusted to put icon centers exactly on orbit lines
                // Base orbit radii: 125, 155, 185
                // Custom adjustments per icon for perfect alignment
                const orbits = [125, 155, 185];
                const adjustments = [60, 5, 5]; // globe +60 total, zap +5, shield +5
                const distance = orbits[i] + (sizes[i] * 0.25) + adjustments[i];
                // Reorder icons: Globe on inner, Zap on middle, Shield on outer
                const Icon = [Globe2, Zap, Shield][i];

                // Different durations & easing for each
                const durations = [20, 25, 30];
                const delays = [0, 1, 2]; // stagger start times
                const startAngles = [0, 120, 240]; // evenly spaced starting positions

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: durations[i],
                      repeat: Infinity,
                      ease: "linear", // Changed to linear for smooth, no-snap rotation
                      delay: delays[i],
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        transform: `rotate(${startAngles[i]}deg) translateX(${distance}px)`,
                        transformOrigin: 'center center'
                      }}
                    >
                      <motion.div
                        className="premium-card rounded-2xl shadow-lg -translate-x-1/2 -translate-y-1/2 p-4"
                        style={{ width: `${sizes[i] * 2}px`, height: `${sizes[i] * 2}px` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-full h-full text-[#3B7EA1]" />
                      </motion.div>
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
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-6">
              <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">Why AI-Ready Systems Win</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Every week you wait, competitors pull ahead. While they&apos;re asking AI to &quot;update customer records&quot; or &quot;analyze sales trends,&quot; your team is stuck with manual processes. MCP changes that—making your unique systems speak AI&apos;s language, instantly.
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
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl premium-card p-3 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-full h-full text-[#3B7EA1] group-hover:text-[#5E6B8D] transition-colors duration-300" />
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