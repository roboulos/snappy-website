"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Wrench, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Shield,
  Globe,
  Layers,
  GitBranch,
  Database,
  Cloud,
  Lock,
  BarChart
} from "lucide-react"

const services = [
  {
    id: "custom-development",
    title: "Custom MCP Development",
    description: "Build tailored MCP servers designed specifically for your unique business requirements",
    icon: Code2,
    href: "/services/custom-development",
    color: "from-primary to-secondary",
    features: [
      "Custom protocol design",
      "API integration",
      "Real-time data processing",
      "Scalable architecture"
    ],
    stats: {
      projects: "150+",
      uptime: "99.9%",
      response: "50ms"
    }
  },
  {
    id: "integration",
    title: "MCP Integration Services",
    description: "Seamlessly integrate MCP into your existing systems and workflows",
    icon: Wrench,
    href: "/services/integration",
    color: "from-secondary to-accent",
    features: [
      "Legacy system integration",
      "Cloud platform connectivity",
      "Database synchronization",
      "Workflow automation"
    ],
    stats: {
      integrations: "500+",
      platforms: "25+",
      efficiency: "3x"
    }
  },
  {
    id: "consulting",
    title: "MCP Strategy Consulting",
    description: "Expert guidance to help your organization adopt and scale MCP effectively",
    icon: Users,
    href: "/services/consulting",
    color: "from-accent to-primary",
    features: [
      "Architecture planning",
      "Team training",
      "Best practices implementation",
      "Performance optimization"
    ],
    stats: {
      clients: "200+",
      saved: "$50M+",
      satisfaction: "98%"
    }
  }
]

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Implementation",
    description: "Get your MCP solution up and running in weeks, not months"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC2 compliant with end-to-end encryption and audit trails"
  },
  {
    icon: Globe,
    title: "Global Scale Ready",
    description: "Built to handle millions of requests across distributed systems"
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Flexible, composable solutions that grow with your needs"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your requirements and existing infrastructure"
  },
  {
    step: "02",
    title: "Design",
    description: "Architect a custom MCP solution tailored to your needs"
  },
  {
    step: "03",
    title: "Development",
    description: "Build and test your MCP implementation with agile methodology"
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch with confidence using our proven deployment strategies"
  },
  {
    step: "05",
    title: "Support",
    description: "Ongoing maintenance and optimization for peak performance"
  }
]

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Enterprise MCP Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              MCP Services That
              <span className="block gradient-text gradient-gold">
                Transform Your Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom development to seamless integration, we provide end-to-end MCP solutions 
              that unlock the full potential of your AI infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="relative h-full p-8 hover-elevate group overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <p className="text-2xl font-bold text-primary">{value}</p>
                            <p className="text-xs text-muted-foreground capitalize">{key}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild className="w-full group">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Snappy MCP?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine deep technical expertise with enterprise experience to deliver 
              MCP solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to ongoing support, we follow a structured approach 
              that ensures successful MCP implementation every time.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-20" />
            
            <div className="space-y-12">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-right">
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </>
                    )}
                  </div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your AI Infrastructure?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how MCP can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}