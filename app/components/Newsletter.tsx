"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { ShieldCheck, Sparkles, Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Mouse tracking for spotlight effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("Newsletter subscription:", email)
    setEmail("")
    setIsSubmitting(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, hsl(var(--secondary) / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating orbs with parallax */}
      <motion.div 
        className="absolute -top-32 left-1/3 w-96 h-96 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-32 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glassmorphic card */}
          <motion.div
            className="relative p-12 md:p-16 rounded-3xl backdrop-blur-2xl bg-gradient-to-b from-background/70 to-background/50 border border-white/10 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Spotlight effect */}
            <motion.div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(600px circle at ${springX.get()}px ${springY.get()}px, rgba(255,255,255,0.06), transparent 40%)`,
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 mb-6"
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold mb-4 gradient-premium-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                MCP Moves Fast. Stay Current Here.
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Get weekly insights on MCP developments, implementation strategies, and real-world use cases delivered straight to your inbox.
              </motion.p>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 pl-12 pr-4 text-base bg-background/50 backdrop-blur-sm border-white/10 focus:border-accent/50 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
                <MagneticButton 
                  type="submit" 
                  className="h-14 px-8 text-base font-semibold whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      Get The Weekly Pulse
                      <Sparkles className="ml-2 w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
              </motion.form>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>100% Privacy • No spam • Unsubscribe anytime</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Read our latest: 
                  <a href="#" className="ml-1 text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">
                    5 Ways MCP is Transforming Enterprise AI
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}