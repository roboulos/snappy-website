"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Zap } from "lucide-react"

const clients = [
  { name: "OpenAI", category: "AI Leader" },
  { name: "Microsoft", category: "Technology" },
  { name: "JP Morgan", category: "Finance" },
  { name: "Johnson & Johnson", category: "Healthcare" },
  { name: "Tesla", category: "Automotive" },
  { name: "Goldman Sachs", category: "Finance" },
  { name: "Amazon", category: "E-commerce" },
  { name: "Pfizer", category: "Healthcare" }
]

const achievements = [
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "Information security management"
  },
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Security & availability"
  },
  {
    icon: Zap,
    title: "99.99% Uptime",
    description: "Enterprise SLA guaranteed"
  }
]

export default function ClientLogos() {
  return (
    <section className="py-20 border-y bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Award className="w-3 h-3 mr-1" />
            Trusted by Industry Leaders
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Powering AI Innovation for Fortune 500 Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From startups to global enterprises, leading organizations trust Snappy MCP 
            to deliver mission-critical AI infrastructure.
          </p>
        </motion.div>

        {/* Client logos grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative p-8 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {client.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{client.category}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t pt-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}