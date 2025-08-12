"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { 
  Menu, 
  Code2,
  Wrench,
  Users,
  FileText,
  Mail,
  Phone
} from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Custom MCP Development",
    href: "/services",
    description: "Build tailored MCP servers designed for your unique business requirements",
    icon: Code2,
  },
  {
    title: "MCP Integration Services",
    href: "/services",
    description: "Seamlessly integrate MCP into your existing systems and workflows",
    icon: Wrench,
  },
  {
    title: "MCP Strategy Consulting",
    href: "/services",
    description: "Expert guidance to help your organization adopt and scale MCP",
    icon: Users,
  },
]

const resources = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real-world success stories from our clients",
    icon: FileText,
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm" 
          : "bg-background border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image 
                src="/icons/mcp-logo.png" 
                alt="MCP Logo" 
                width={32} 
                height={32}
                className="drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-accent/20 blur-lg group-hover:bg-accent/30 transition-colors" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">
              Snappy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 nav-menu-trigger">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-1">
                    {services.map((service) => {
                      const Icon = service.icon
                      return (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="group grid grid-cols-[48px_1fr] items-start gap-4 rounded-md p-3 nav-link-hover"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B7EA1]/10 group-hover:bg-[#3B7EA1]/20 transition-all duration-300">
                                <Icon className="h-6 w-6 text-[#3B7EA1]" />
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold leading-none group-hover:text-[#3B7EA1] transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "nav-link-hover")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 nav-menu-trigger">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {resources.map((resource) => {
                      const Icon = resource.icon
                      return (
                        <li key={resource.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={resource.href}
                              className="group flex items-start gap-3 rounded-md p-3 nav-link-hover"
                            >
                              <Icon className="h-5 w-5 text-[#3B7EA1] mt-0.5" />
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold leading-none group-hover:text-[#3B7EA1] transition-colors">
                                  {resource.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {resource.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "nav-link-hover")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/events">
              <Button variant="ghost" size="sm" className="hover:text-[#3B7EA1] transition-colors">
                📅 Workshops
              </Button>
            </Link>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              onClick={() => window.open('https://calendly.com/robertboulos/45m-vip', '_blank')}
            >
              <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>Book a Call</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <nav className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold hover:text-[#3B7EA1] transition-colors"
                >
                  Home
                </Link>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground">Services</h3>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block pl-3 text-sm hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold hover:text-[#3B7EA1] transition-colors"
                >
                  About
                </Link>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground">Resources</h3>
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block pl-3 text-sm hover:text-primary transition-colors"
                    >
                      {resource.title}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold hover:text-[#3B7EA1] transition-colors"
                >
                  Contact
                </Link>

                <div className="pt-4 space-y-3">
                  <Link href="/newsletter" className="w-full">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-1.5 flex-shrink-0" />
                      <span>Newsletter</span>
                    </Button>
                  </Link>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    onClick={() => window.open('https://calendly.com/robertboulos/45m-vip', '_blank')}
                  >
                    <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>Book a Call</span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}