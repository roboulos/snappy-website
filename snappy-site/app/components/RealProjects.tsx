"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    name: "Snappy Xano MCP Tool",
    description: "OAuth-protected MCP server with 101+ database operations. Powers MCP UI Chat and 100+ developers",
    url: "https://mcp.snappy.ai",
    icon: Code2,
    stats: "In Production"
  },
  {
    name: "MCP UI Chat",
    description: "Visual interface for MCP tools. Built using our Xano MCP server - see AI build apps in real-time",
    url: "https://scira-mcp-ui-chat.vercel.app/",
    icon: ExternalLink,
    stats: "Live Demo"
  },
  {
    name: "Universe DB MCP",
    description: "Making 40-year-old multivalue databases speak AI. From PICK commands to ChatGPT in 2 weeks",
    url: "https://universe-mcp-demo.snappy.ai",
    icon: Code2,
    stats: "Legacy → AI"
  }
];

export default function RealProjects() {
  return (
    <section className="py-20 relative overflow-hidden gradient-wall-to-projects">
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-overlay opacity-40" />
      
      {/* Animated orbs for depth */}
      <div className="absolute right-0 top-0 w-[45rem] h-[45rem] bg-gradient-radial from-[rgba(94,107,141,0.12)] to-transparent blur-3xl opacity-60" />
      <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-gradient-radial from-[rgba(59,126,161,0.1)] to-transparent blur-3xl opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <ExternalLink className="w-3 h-3 mr-1" />
            Real MCP Projects
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#3B7EA1] via-[#5E6B8D] to-[#3B7EA1] bg-clip-text text-transparent">Some Things I&apos;m Building</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Working MCP implementations and tools that prove what&apos;s possible with AI integration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                className="group premium-card p-6 rounded-2xl transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg premium-card flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#3B7EA1] group-hover:text-[#5E6B8D] transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold transition-colors duration-300">
                        <span className="group-hover:bg-gradient-to-r group-hover:from-[#3B7EA1] group-hover:to-[#5E6B8D] group-hover:bg-clip-text group-hover:text-transparent">
                          {project.name}
                        </span>
                      </h3>
                      <Badge variant="outline" className="text-xs border-[rgba(59,126,161,0.2)] text-[#3B7EA1]">
                        {project.stats}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t"
        >
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">500+</p>
            <p className="text-sm text-muted-foreground">Community Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">100+</p>
            <p className="text-sm text-muted-foreground">MCP Tools Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">1-2 weeks</p>
            <p className="text-sm text-muted-foreground">Typical Delivery Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}