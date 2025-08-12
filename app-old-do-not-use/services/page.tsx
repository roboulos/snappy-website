import { Metadata } from "next"
import ServicesClient from "./ServicesClient"

export const metadata: Metadata = {
  title: "MCP Services - Custom Development, Integration & Consulting",
  description: "Enterprise MCP services: Custom protocol development, seamless system integration, and strategic consulting. Transform your AI infrastructure with proven solutions.",
  keywords: ["MCP services", "MCP development", "MCP integration", "MCP consulting", "enterprise MCP", "AI infrastructure services"],
  openGraph: {
    title: "Enterprise MCP Services | Snappy MCP",
    description: "Custom MCP development, integration services, and strategic consulting for Fortune 500 companies.",
    url: "https://snappymcp.com/services",
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}