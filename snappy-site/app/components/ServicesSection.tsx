"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    iconPath: "/icons/world-class/mcp/MCPFrostedGlass2.png",
    title: "Custom MCP Servers",
    description: "Make your systems speak AI. From legacy databases to modern APIs, we build secure MCP servers that work with ChatGPT, Claude, or any AI agent. Your data stays yours.",
    href: "https://calendly.com/robertboulos/45m-vip",
    features: ["OAuth & enterprise auth built-in", "Any system: APIs, DBs, SaaS", "Live in 14 days, guaranteed"],
    gradientClass: "gradient-primary"
  },
  {
    iconPath: "/icons/services/icon-1754959549552.png",
    title: "Build-to-Own Development",
    description: "Skip months of learning. We build your AI-powered system together using production MCP tools. You watch, learn, and gradually take ownership.",
    href: "https://calendly.com/robertboulos/45m-vip",
    features: ["Build alongside an expert", "Your team learns by doing", "Ship 10x faster"],
    gradientClass: "gradient-accent"
  },
  {
    iconPath: "/icons/services/icon-1754959594687.png",
    title: "Accelerated Development Training",
    description: "Master AI-powered development with Claude Code. Learn to build MCP integrations. Join 500+ developers shipping faster.",
    href: "https://calendly.com/robertboulos/45m-vip",
    features: ["500+ member community", "Live workshops", "Real-world implementation"],
    gradientClass: "gradient-premium"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}


export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden gradient-projects-to-services">
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(59,126,161,0.02)] to-transparent" />
      
      {/* Animated orbs for depth */}
      <div className="absolute right-0 top-1/4 w-[50rem] h-[50rem] bg-gradient-radial from-[rgba(59,126,161,0.15)] to-transparent blur-3xl opacity-40 animate-pulse-subtle" />
      <div className="absolute left-0 bottom-1/4 w-[50rem] h-[50rem] bg-gradient-radial from-[rgba(94,107,141,0.15)] to-transparent blur-3xl opacity-40 animate-pulse-subtle" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Our Services
          </Badge>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-6">
            <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">Ways We Can Work Together</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need AI-ready systems built, want to learn alongside an expert, or prefer 
            to master it yourself—we have a path that fits.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: 'preserve-3d' }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Card className="premium-card relative h-full p-6 overflow-hidden rounded-2xl transition-all duration-300">
                  {/* Premium gradient background - removed as projects don't have this */}
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg premium-card flex items-center justify-center">
                        <Image 
                          src={service.iconPath} 
                          alt={service.title}
                          width={32}
                          height={32}
                          className="relative drop-shadow-lg"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                          <span className="group-hover:bg-gradient-to-r group-hover:from-[#3B7EA1] group-hover:to-[#5E6B8D] group-hover:bg-clip-text group-hover:text-transparent">
                            {service.title}
                          </span>
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6">
                          {service.description}
                        </p>
                        
                        {/* Features list */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-xs">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#3B7EA1]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button asChild variant="ghost" className="group/btn relative overflow-hidden px-4 py-1.5 text-sm border border-[rgba(59,126,161,0.2)] hover:border-[rgba(59,126,161,0.4)]">
                          <Link href={service.href}>
                            <span className="relative z-10">Learn more</span>
                            <ArrowRight className="relative z-10 ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(59,126,161,0.1)] to-[rgba(94,107,141,0.1)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to make your systems AI-ready?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://calendly.com/robertboulos/45m-vip', '_blank')}
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-6 text-lg font-semibold border-2 border-[#3B7EA1]/20 hover:border-[#3B7EA1]/40 hover:bg-[#3B7EA1]/5 transition-all duration-300">
              <Link href="https://calendly.com/robertboulos/45m-vip">
                Schedule Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}