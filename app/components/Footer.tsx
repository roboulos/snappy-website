"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Linkedin, 
  Github, 
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles
} from "lucide-react"

const footerLinks = {
  services: [
    { label: "Custom MCP Development", href: "/services/custom-development" },
    { label: "Integration Services", href: "/services/integration" },
    { label: "Strategy Consulting", href: "/services/consulting" },
    { label: "Training & Resources", href: "/resources" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" }
  ],
  resources: [
    { label: "MCP Documentation", href: "https://modelcontextprotocol.io" },
    { label: "MCP Registry", href: "https://github.com/modelcontextprotocol/registry" },
    { label: "Discord Community", href: "https://discord.gg/mcp" },
    { label: "GitHub", href: "https://github.com/snappymcp" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" }
  ]
}

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/snappymcp", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/snappymcp", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/snappymcp", label: "Twitter" }
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/50 border-t">
      {/* Newsletter CTA */}
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Stay Ahead with MCP Insights
                </h3>
                <p className="text-muted-foreground">
                  Get weekly updates on MCP developments, best practices, and industry news 
                  delivered directly to your inbox.
                </p>
              </div>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="btn-gold">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Snappy MCP</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Enterprise Model Context Protocol solutions that transform how organizations 
              leverage AI at scale.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:enterprise@snappymcp.com" className="hover:text-primary transition-colors">
                  enterprise@snappymcp.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+18885550123" className="hover:text-primary transition-colors">
                  +1 (888) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="px-3 py-1">
                <Shield className="w-3 h-3 mr-1" />
                SOC2 Type II
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Shield className="w-3 h-3 mr-1" />
                ISO 27001
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Shield className="w-3 h-3 mr-1" />
                HIPAA Compliant
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span>Pioneering MCP solutions since 2022</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Snappy MCP. All rights reserved. 
            Built with dedication in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  )
}