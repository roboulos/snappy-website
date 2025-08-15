"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react"
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
          {services.map((service, index) => {
            return (
              <motion.a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                className="group premium-card p-6 rounded-2xl transition-all duration-300 block"
                style={{ transformStyle: 'preserve-3d' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-full">
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
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-xs">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#3B7EA1]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.a>
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