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
    iconPath: "/icons/world-class/service-mcp-servers.png",
    title: "Custom MCP Servers",
    description: "Connect legacy systems to AI in 1-2 weeks. I build the bridge between your database and Claude. Perfect for SMBs.",
    href: "/offer",
    features: ["1-2 week delivery", "Database integration", "Full OAuth security"],
    gradientClass: "gradient-primary"
  },
  {
    iconPath: "/icons/world-class/service-build-to-own.png",
    title: "Build-to-Own Development",
    description: "We build your system together using my MCP tools. You gradually take ownership, while moving fast.",
    href: "https://mcp.snappy.ai",
    features: ["Collaborative building", "Knowledge transfer", "Production-ready"],
    gradientClass: "gradient-accent"
  },
  {
    iconPath: "/icons/world-class/service-training.png",
    title: "Snappy MCP Training",
    description: "Master the tool and techniques that let me ship in hours what used to take weeks. Pure knowledge transfer.",
    href: "/tools",
    features: ["500+ member community", "Live workshops", "Real-world examples"],
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
            <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">Enterprise MCP Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real MCP expertise from someone who builds and ships daily. Transform your business 
            with AI integration that actually works.
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
                whileHover={{ scale: 1.015, rotateX: 1, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="group"
              >
                <Card className="premium-card relative h-full p-10 overflow-hidden rounded-2xl">
                  {/* Premium gradient background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,126,161,0.05)] via-transparent to-[rgba(94,107,141,0.05)]" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Premium icon container with glow */}
                    <div className="mb-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,126,161,0.2)] to-[rgba(94,107,141,0.2)] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                      <Image 
                        src={service.iconPath} 
                        alt={service.title}
                        width={100}
                        height={100}
                        className="relative w-24 h-24 drop-shadow-xl transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 tracking-[-0.02em] transition-colors duration-300">
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#3B7EA1] group-hover:to-[#5E6B8D] group-hover:bg-clip-text group-hover:text-transparent">
                        {service.title}
                      </span>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-base">
                          <div className="w-2 h-2 rounded-full gradient-accent" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild variant="ghost" className="group/btn relative overflow-hidden px-6 py-2 border border-[rgba(59,126,161,0.2)] hover:border-[rgba(59,126,161,0.4)]">
                      <Link href={service.href}>
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(59,126,161,0.1)] to-[rgba(94,107,141,0.1)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </Button>
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
            Ready to transform your AI infrastructure with MCP?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-6 text-lg font-semibold border-2 border-[#3B7EA1]/20 hover:border-[#3B7EA1]/40 hover:bg-[#3B7EA1]/5 transition-all duration-300">
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}