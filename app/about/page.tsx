"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Target, 
  Heart, 
  Shield, 
  Users,
  Award,
  Globe,
  Zap,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  CheckCircle2
} from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We deliver world-class MCP solutions that exceed expectations and drive real business value."
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We build lasting relationships with our clients, working as an extension of their team."
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Security and reliability are at the core of everything we build. Your data is sacred."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay at the forefront of MCP technology, constantly evolving our solutions."
  }
]

const stats = [
  { value: "200+", label: "Enterprise Clients" },
  { value: "500+", label: "MCP Implementations" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50M+", label: "API Calls Daily" }
]

// Note: This is placeholder team data - Robert operates as a solo consultant
// The team section could be removed or replaced with testimonials/partners
const team = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Former AI architect at Google with 15+ years building enterprise systems.",
    image: "/team/sarah.jpg", // Placeholder
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "Co-Founder & CTO",
    bio: "Ex-Microsoft principal engineer, pioneering MCP implementations since day one.",
    image: "/team/michael.jpg", // Placeholder
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emily Johnson",
    role: "VP of Engineering",
    bio: "Led AI infrastructure teams at Meta, specializing in distributed systems.",
    image: "/team/emily.jpg", // Placeholder
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "David Kim",
    role: "Head of Solutions",
    bio: "Enterprise architect with deep expertise in Fortune 500 digital transformations.",
    image: "/team/david.jpg", // Placeholder
    social: {
      linkedin: "#",
      github: "#"
    }
  }
]

const milestones = [
  { year: "2022", event: "Founded with a mission to democratize MCP" },
  { year: "2023", event: "First Fortune 500 client implementation" },
  { year: "2024", event: "Expanded to 50+ team members globally" },
  { year: "2025", event: "Leading MCP consultancy worldwide" }
]

export default function AboutPage() {
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
              <Users className="w-3 h-3 mr-1" />
              About Snappy
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Building the Future of
              <span className="block gradient-text gradient-gold">
                AI Infrastructure
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re on a mission to unlock the full potential of AI through Model Context Protocol, 
              empowering enterprises to build smarter, faster, and more secure AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text gradient-primary">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that AI should be accessible, secure, and transformative for every 
                organization. Through Model Context Protocol, we&apos;re creating a world where AI 
                systems can seamlessly connect, communicate, and collaborate.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of world-class engineers and consultants work tirelessly to ensure 
                that your MCP implementation not only meets today&apos;s needs but scales for 
                tomorrow&apos;s challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise-First Approach</h4>
                    <p className="text-muted-foreground">
                      Built for scale, security, and compliance from day one
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Technology Leadership</h4>
                    <p className="text-muted-foreground">
                      Contributing to MCP standards and best practices globally
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Client Success Focus</h4>
                    <p className="text-muted-foreground">
                      Your success is our success - we&apos;re partners, not vendors
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="h-full rounded-xl bg-card flex items-center justify-center">
                  <Globe className="w-32 h-32 text-primary/50" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from code to client relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover-elevate">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet Robert Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              Founder
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Meet Robert</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MCP Integration Specialist who transforms significant business systems into AI-powered machines
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Robert has been pioneering Model Context Protocol implementations since its inception, 
                  building tools that let developers ship in hours what used to take weeks. From designing 
                  the Xano MCP server (mcp.snappy.ai) to running a 500+ member community, Robert combines 
                  deep technical expertise with a passion for empowering developers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His approach is simple: connect legacy systems to AI in 1-2 weeks, preserve proven 
                  business logic, and enable teams to move fast without disrupting customers. Whether 
                  you&apos;re an SMB looking for custom MCP servers or an enterprise needing production-grade 
                  integrations, Robert&apos;s hands-on approach ensures you achieve results quickly.
                </p>
                
                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Created StateChange Power Tools - 5.0★ Chrome Extension</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Built 100+ MCP tools for production use</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">500+ developers in the Snappy community</span>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <Button asChild className="btn-gold">
                    <a href="https://www.youtube.com/channel/UC86jQJpksJULOMiQN6XBLsQ" target="_blank" rel="noopener noreferrer">
                      Watch on YouTube
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://www.skool.com/snappy" target="_blank" rel="noopener noreferrer">
                      Join Community
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <div className="h-full rounded-xl bg-card flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Users className="w-24 h-24 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        Photo placeholder - Robert will provide
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Partner Network</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with talented developers and consultants worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-elevate">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startup to industry leader in just three years
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-right">
                    {index % 2 === 0 && (
                      <div className="inline-block p-6 bg-card rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h3>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-lg" />
                  </div>
                  
                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <div className="inline-block p-6 bg-card rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h3>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Join Us in Building the Future</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you&apos;re looking to implement MCP or join our team, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold">
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Join Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}