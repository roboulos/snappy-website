"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Users, Code2 } from "lucide-react";

const projects = [
  {
    name: "mcp.snappy.ai",
    description: "Xano MCP Tool - Remote server with 101+ database operations",
    url: "https://mcp.snappy.ai",
    icon: Code2,
    stats: "Production Ready"
  },
  {
    name: "Scira MCP UI Chat",
    description: "Next-gen MCP client with visual UI and tool orchestration",
    url: "#",
    icon: ExternalLink,
    stats: "Live Demo"
  },
  {
    name: "Skool Community",
    description: "500+ developers learning MCP implementation strategies",
    url: "https://www.skool.com/snappy",
    icon: Users,
    stats: "500+ Members"
  },
  {
    name: "Chrome Extension",
    description: "StateChange Power Tools with 5-star reviews",
    url: "https://chrome.google.com/webstore/detail/statechange-power-tools-f/jgednopabapolfhfbgipkkigkafnlmla",
    icon: Star,
    stats: "5.0 ★ Rating"
  }
];

export default function RealProjects() {
  return (
    <section className="py-20 border-y bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            What Robert Has Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Working MCP implementations, tools, and communities used by developers worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
                className="group relative p-6 rounded-lg border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
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
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Community Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">100+</p>
            <p className="text-sm text-muted-foreground">MCP Tools Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">5.0★</p>
            <p className="text-sm text-muted-foreground">Chrome Extension Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}