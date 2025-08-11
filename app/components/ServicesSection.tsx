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
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Stronger gradient continuation from RealProjects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gradient-accent-start))] via-[hsl(var(--gradient-primary-mid))] to-[hsl(var(--gradient-accent-mid))]" />
      <div className="absolute right-0 top-1/3 w-[50rem] h-[50rem] bg-gradient-radial from-accent/30 via-accent/15 to-transparent blur-3xl animate-pulse-subtle" />
      <div className="absolute left-0 bottom-1/3 w-[50rem] h-[50rem] bg-gradient-radial from-primary/25 via-primary/10 to-transparent blur-3xl animate-pulse-subtle" />
      
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
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-6 gradient-premium-text">
            Enterprise MCP Solutions
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
                <Card className="relative h-full p-10 hover-elevate overflow-hidden border-2 border-transparent hover:border-accent/20 transition-all duration-300">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 ${service.gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon without background - glassmorphism style */}
                    <div className="mb-8 group-hover:scale-110 transition-all duration-300">
                      <Image 
                        src={service.iconPath} 
                        alt={service.title}
                        width={100}
                        height={100}
                        className="w-24 h-24 drop-shadow-xl"
                      />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-[-0.02em]">
                      {service.title}
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
                    
                    <Button asChild variant="outline" className="group/btn">
                      <Link href={service.href}>
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
            <Button size="lg" className="btn-gold">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
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