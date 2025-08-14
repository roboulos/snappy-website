"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
      {/* Base gradient layer for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(var(--primary)/0.05)] to-[hsl(var(--secondary)/0.05)]" />
      
      {/* Premium animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, hsl(var(--secondary) / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Subtle floating orbs */}
      <div 
        className="absolute -top-32 left-1/3 w-80 h-80 bg-gradient-radial from-primary/12 to-transparent rounded-full blur-2xl"
        style={{
          animation: 'float-orb 24s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-2xl"
        style={{
          animation: 'float-orb 30s ease-in-out infinite reverse'
        }}
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
            className="relative p-12 md:p-16 rounded-2xl service-card-glass overflow-hidden"
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
                className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">From Legacy to AI-Ready in 14 Days</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Get weekly insights on making your systems AI-accessible. Real examples from production MCP implementations, not theory.
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
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-14 px-8 text-base font-semibold whitespace-nowrap group bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] hover:from-[#3B7EA1]/90 hover:to-[#5E6B8D]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
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
                </Button>
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
                  This week: 
                  <a href="#" className="ml-1 text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline">
                    How We Made a 1985 Database ChatGPT-Ready
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}