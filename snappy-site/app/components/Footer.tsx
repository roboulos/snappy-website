"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Github, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Users,
  Heart,
  ExternalLink,
  Check
} from "lucide-react"
import MCPLogo from "./icons/MCPLogo"

const footerLinks = {
  services: [
    { label: "Custom MCP Development", href: "https://calendly.com/robertboulos/45m-vip" },
    { label: "Integration Services", href: "https://calendly.com/robertboulos/45m-vip" },
    { label: "Strategy Consulting", href: "https://calendly.com/robertboulos/45m-vip" },
    { label: "Training & Resources", href: "https://calendly.com/robertboulos/45m-vip" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Weekly MCP Meeting", href: "https://calendly.com/robertboulos/45m-vip" },
    { label: "Book Strategy Call", href: "https://calendly.com/robertboulos/45m-vip" }
  ],
  resources: [
    { label: "Snappy MCP Tool", href: "https://mcp.snappy.ai", external: true },
    { label: "Skool Community", href: "https://www.skool.com/snappy", external: true },
    { label: "YouTube Channel", href: "https://www.youtube.com/channel/UC86jQJpksJULOMiQN6XBLsQ", external: true },
    { label: "MCP Guide (Free)", href: "/enterprise-mcp-guide.pdf", external: false }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "mailto:robert@snappy.ai" },
    { label: "Book a Call", href: "https://calendly.com/robertboulos/45m-vip" }
  ]
}

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/channel/UC86jQJpksJULOMiQN6XBLsQ", label: "YouTube" },
  { icon: Users, href: "https://www.skool.com/snappy", label: "Community" },
  { icon: Github, href: "https://github.com/modelcontextprotocol", label: "GitHub" }
]

const securityBadges = [
  { label: "SOC2 Type II", icon: Shield },
  { label: "ISO 27001", icon: Shield },
  { label: "HIPAA Compliant", icon: Shield }
]

export default function Footer() {
  // Mouse tracking for glow effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <footer 
      className="relative bg-gradient-to-b from-muted/30 to-background border-t overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle background glow that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${springX.get()}px ${springY.get()}px, hsl(var(--primary) / 0.1), transparent 40%)`,
        }}
      />

      {/* Premium CTA Section */}
      <div className="relative border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5 rounded-3xl blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">Ready to Make Your Systems AI-Ready?</span>
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    From 1985 Universe databases to modern APIs, we&apos;ve made it all work with AI. Your systems could be next.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-base font-semibold group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => window.open('https://calendly.com/robertboulos/45m-vip', '_blank')}
                  >
                    See Your Data + AI in 15 Minutes
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group"
                    onClick={() => window.open('https://calendly.com/robertboulos/45m-vip', '_blank')}
                  >
                    Book Strategy Call
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </div>
              
              {/* Trust indicators */}
              <motion.div 
                className="mt-10 pt-10 border-t border-border/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Free 30-min consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Expert MCP guidance</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content with refined grid */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Wider column */}
          <motion.div 
            className="col-span-2 md:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                <MCPLogo size={40} className="relative text-primary" />
              </div>
              <span className="text-2xl font-bold">Snappy MCP</span>
            </Link>
            
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              We build production-grade MCP servers that make your APIs, databases, and legacy systems work with ChatGPT, Claude, or any AI. From 1985 Universe DB to modern SaaS—we&apos;ve done it all.
            </p>
            
            <div className="space-y-3 mb-8">
              <motion.a 
                href="mailto:robert@snappy.ai" 
                className="flex items-center gap-3 text-sm group"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">robert@snappy.ai</span>
              </motion.a>
              
              <motion.div 
                className="flex items-center gap-3 text-sm"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-muted-foreground">Schedule via contact form</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-sm"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Remote First • Global Team</span>
              </motion.div>
            </div>
            
            {/* Social Links with hover effects */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center transition-all group"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Link Columns with staggered animations */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust & Bottom Section */}
        <motion.div 
          className="mt-16 pt-12 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Security Badges */}
            <div className="flex flex-wrap gap-4">
              {securityBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Copyright and Credits */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                © {new Date().getFullYear()} Snappy MCP. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-end gap-1">
                Built with <Heart className="h-3 w-3 text-red-500 animate-pulse" /> in San Francisco
              </p>
            </div>
          </div>

          {/* Pioneering statement */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span>Pioneering MCP solutions since 2022</span>
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}