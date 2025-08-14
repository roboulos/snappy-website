"use client"

import { motion } from "framer-motion"
import { Heart, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Script from "next/script"

export default function WallOfLove() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden gradient-hero-to-wall">
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-overlay opacity-30" />
      
      {/* Subtle floating orbs for depth */}
      <div className="absolute top-1/3 left-1/4 w-[45rem] h-[45rem] bg-gradient-radial from-[rgba(59,126,161,0.1)] to-transparent blur-3xl opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-[40rem] h-[40rem] bg-gradient-radial from-[rgba(94,107,141,0.08)] to-transparent blur-3xl opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Heart className="w-3 h-3 mr-1 fill-current" />
            Wall of Love
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">What People Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from developers, founders, and teams who I&apos;ve worked with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative quote icons */}
          <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent/20 rotate-180" />
          <Quote className="absolute -bottom-4 -right-4 w-12 h-12 text-accent/20" />
          
          {/* Senja Widget Container with premium styling */}
          <div className="relative rounded-2xl overflow-hidden border border-[rgba(59,126,161,0.1)] shadow-2xl">
            {/* Premium glass effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-[rgba(59,126,161,0.02)] backdrop-blur-sm" />
            
            {/* Senja Embed */}
            <Script 
              src="https://widget.senja.io/widget/672608cd-9f1e-46b9-b5b9-b55240539664/platform.js" 
              strategy="lazyOnload"
            />
            <div 
              className="senja-embed relative z-10" 
              data-id="672608cd-9f1e-46b9-b5b9-b55240539664" 
              data-mode="shadow" 
              data-lazyload="false" 
              style={{ display: "block", width: "100%" }}
            />
          </div>
        </motion.div>

        {/* Trust metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto"
        >
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">100+</p>
            <p className="text-sm text-muted-foreground mt-1">MCP Tools Built</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">14 Days</p>
            <p className="text-sm text-muted-foreground mt-1">To AI Integration</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">1 of 100</p>
            <p className="text-sm text-muted-foreground mt-1">Global MCP Experts</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}