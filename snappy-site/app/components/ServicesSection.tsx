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
    iconPath: "/icons/services/icon-1754959717343.png",
    title: "Custom MCP Servers",
    description: "Connect legacy systems to AI in 1-2 weeks. I build the bridge between your database and Claude. Perfect for SMBs.",
    href: "/offer",
    features: ["1-2 week delivery", "Database integration", "Full OAuth security"],
    gradientClass: "gradient-primary"
  },
  {
    iconPath: "/icons/services/icon-1754959549552.png",
    title: "Build-to-Own Development",
    description: "We build your system together using my MCP tools. You gradually take ownership, while moving fast.",
    href: "https://mcp.snappy.ai",
    features: ["Collaborative building", "Knowledge transfer", "Production-ready"],
    gradientClass: "gradient-accent"
  },
  {
    iconPath: "/icons/services/icon-1754959594687.png",
    title: "Accelerated Development Training",
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

// Liquid Glass Icon Component
function ServiceIcon({ src, alt, index }: { src: string; alt: string; index: number }) {
  return (
    <motion.div 
      className="relative w-28 h-28 mx-auto liquid-glass-icon rounded-2xl p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image 
        src={src} 
        alt={alt}
        width={80}
        height={80}
        className="w-full h-full object-contain relative z-10"
      />
    </motion.div>
  )
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
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Card className="service-card-glass h-full p-8 overflow-hidden rounded-2xl">
                  {/* Simple icon */}
                  <div className="mb-6 flex justify-center">
                    <ServiceIcon src={service.iconPath} alt={service.title} index={index} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 tracking-[-0.02em] text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button asChild variant="ghost" className="w-full group/btn hover:bg-primary/5">
                      <Link href={service.href}>
                        <span>Learn more</span>
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