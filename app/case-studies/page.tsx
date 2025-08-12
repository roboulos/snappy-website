"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users,
  Zap,
  Building2,
  Briefcase,
  FileText,
  Quote
} from "lucide-react"

const caseStudies = [
  {
    id: "fintech-transformation",
    company: "Global Financial Services Corp",
    industry: "Finance",
    title: "Revolutionizing Real-Time Risk Analysis with MCP",
    description: "How we helped a Fortune 500 financial institution process 10M+ transactions daily with 99.99% accuracy",
    thumbnail: "/case-studies/finance.jpg",
    logo: "/logos/finance-corp.png",
    stats: {
      improvement: "87%",
      metric: "Faster Risk Detection",
      volume: "10M+",
      volumeMetric: "Daily Transactions",
      reduction: "92%",
      reductionMetric: "False Positives"
    },
    technologies: ["Custom MCP Servers", "Real-time Processing", "ML Integration"],
    testimonial: {
      quote: "Snappy's MCP implementation transformed our risk management capabilities. We're now detecting fraudulent patterns in milliseconds instead of minutes.",
      author: "Sarah Mitchell",
      role: "CTO, Global Financial Services"
    }
  },
  {
    id: "healthcare-ai",
    company: "MedTech Innovations",
    industry: "Healthcare",
    title: "AI-Powered Diagnostics at Scale",
    description: "Implementing MCP to enable secure, HIPAA-compliant AI analysis across 200+ hospitals",
    thumbnail: "/case-studies/healthcare.jpg",
    logo: "/logos/medtech.png",
    stats: {
      improvement: "94%",
      metric: "Diagnostic Accuracy",
      volume: "1M+",
      volumeMetric: "Patient Records",
      reduction: "65%",
      reductionMetric: "Processing Time"
    },
    technologies: ["HIPAA Compliance", "Edge Computing", "Federated Learning"],
    testimonial: {
      quote: "The MCP solution enabled us to leverage AI while maintaining the highest standards of patient privacy and data security.",
      author: "Dr. James Chen",
      role: "Chief Medical Officer"
    }
  },
  {
    id: "retail-personalization",
    company: "NextGen Retail",
    industry: "E-commerce",
    title: "Hyper-Personalization Through MCP",
    description: "Building an AI system that delivers personalized experiences to 50M+ customers globally",
    thumbnail: "/case-studies/retail.jpg",
    logo: "/logos/nextgen.png",
    stats: {
      improvement: "156%",
      metric: "Conversion Rate",
      volume: "50M+",
      volumeMetric: "Active Users",
      reduction: "78%",
      reductionMetric: "Cart Abandonment"
    },
    technologies: ["Real-time Recommendations", "Multi-region Deployment", "A/B Testing"],
    testimonial: {
      quote: "Snappy delivered an MCP solution that scales effortlessly with our growth while maintaining sub-50ms response times globally.",
      author: "Maria Rodriguez",
      role: "VP of Engineering"
    }
  }
]

const results = [
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Average ROI",
    description: "Within first 12 months"
  },
  {
    icon: Clock,
    value: "6 weeks",
    label: "Avg. Implementation",
    description: "From kickoff to production"
  },
  {
    icon: Users,
    value: "200+",
    label: "Enterprise Clients",
    description: "Across 15 industries"
  },
  {
    icon: Zap,
    value: "50ms",
    label: "Response Time",
    description: "P99 latency globally"
  }
]

export default function CaseStudiesPage() {
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
              <Briefcase className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Real Results,
              <span className="block gradient-text gradient-gold">
                Real Impact
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how leading enterprises are transforming their AI capabilities with 
              our MCP solutions. From finance to healthcare, we&apos;re driving innovation at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-12 border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const Icon = result.icon
              return (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl md:text-4xl font-bold gradient-text gradient-primary">
                    {result.value}
                  </p>
                  <p className="font-semibold mt-1">{result.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{result.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Left side - Image */}
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="w-32 h-32 text-primary/20" />
                      </div>
                      <Badge className="absolute top-4 left-4">
                        {study.industry}
                      </Badge>
                    </div>

                    {/* Right side - Content */}
                    <div className="p-8 lg:p-12">
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                          {study.company}
                        </h3>
                        <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                        <p className="text-lg text-muted-foreground">
                          {study.description}
                        </p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary">{study.stats.improvement}</p>
                          <p className="text-xs text-muted-foreground">{study.stats.metric}</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary">{study.stats.volume}</p>
                          <p className="text-xs text-muted-foreground">{study.stats.volumeMetric}</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary">{study.stats.reduction}</p>
                          <p className="text-xs text-muted-foreground">{study.stats.reductionMetric}</p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <p className="text-sm font-semibold mb-3">Key Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="border-l-4 border-accent pl-6 mb-8">
                        <Quote className="w-8 h-8 text-accent mb-3" />
                        <p className="text-lg italic mb-3">&quot;{study.testimonial.quote}&quot;</p>
                        <div>
                          <p className="font-semibold">{study.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                        </div>
                      </div>

                      <Button className="group">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">More Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to Fortune 500, we&apos;ve helped organizations across every industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { industry: "Manufacturing", company: "AutoTech Industries", improvement: "+72% Efficiency" },
              { industry: "Energy", company: "GreenPower Solutions", improvement: "60% Cost Reduction" },
              { industry: "Logistics", company: "Global Shipping Co", improvement: "3x Faster Processing" },
              { industry: "Education", company: "EduTech Platform", improvement: "85% Engagement" },
              { industry: "Media", company: "StreamMedia Inc", improvement: "10x Content Analysis" },
              { industry: "Insurance", company: "SecureLife Insurance", improvement: "90% Claim Accuracy" }
            ].map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 hover-elevate">
                  <Badge variant="outline" className="mb-3">
                    {story.industry}
                  </Badge>
                  <h3 className="font-semibold mb-2">{story.company}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">{story.improvement}</p>
                  <Button variant="ghost" size="sm" className="group">
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Card>
              </motion.div>
            ))}
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
            <FileText className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the ranks of industry leaders who have transformed their AI capabilities with MCP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Case Study PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}