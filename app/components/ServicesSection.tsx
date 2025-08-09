"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Wrench, Users, BookOpen, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "Custom MCP Development",
    description: "Build tailored MCP servers designed specifically for your unique business requirements and workflows",
    href: "/services/custom-development",
    features: ["Custom protocols", "API integration", "Scalable architecture"],
    color: "from-primary to-secondary"
  },
  {
    icon: Wrench,
    title: "MCP Integration Services",
    description: "Seamlessly integrate MCP into your existing systems and tools for enhanced AI capabilities",
    href: "/services/integration",
    features: ["Legacy systems", "Cloud platforms", "Real-time sync"],
    color: "from-secondary to-accent"
  },
  {
    icon: Users,
    title: "MCP Strategy Consulting",
    description: "Expert guidance to help your organization adopt and scale MCP effectively",
    href: "/services/consulting",
    features: ["Architecture planning", "Team training", "Best practices"],
    color: "from-accent to-primary"
  },
  {
    icon: BookOpen,
    title: "Resources & Training",
    description: "Comprehensive documentation, tutorials, and training programs for your team",
    href: "/resources",
    features: ["Documentation", "Video tutorials", "Workshops"],
    color: "from-primary to-accent"
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise MCP Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From development to deployment, we provide comprehensive MCP services that transform 
            how your organization leverages AI technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="relative h-full p-8 hover-elevate overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
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