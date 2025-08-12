import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import AnimatedLayout from "./components/AnimatedLayout";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://snappymcp.com'),
  title: {
    default: "Snappy MCP - Enterprise Model Context Protocol Solutions",
    template: "%s | Snappy MCP"
  },
  description: "Fortune 500 trusted MCP consulting. Custom development, seamless integration, and strategic consulting for Model Context Protocol implementations.",
  keywords: [
    "Model Context Protocol",
    "MCP consulting",
    "MCP development",
    "MCP integration",
    "AI infrastructure",
    "enterprise MCP",
    "MCP solutions",
    "AI consulting"
  ],
  authors: [{ name: "Snappy MCP" }],
  creator: "Snappy MCP",
  publisher: "Snappy MCP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Snappy MCP - Enterprise Model Context Protocol Solutions",
    description: "Transform your AI infrastructure with enterprise-grade MCP solutions. Custom development, integration, and consulting services.",
    url: "https://snappymcp.com",
    siteName: "Snappy MCP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Snappy MCP - Enterprise MCP Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snappy MCP - Enterprise Model Context Protocol Solutions",
    description: "Transform your AI infrastructure with enterprise-grade MCP solutions.",
    images: ["/twitter-image.png"],
    creator: "@snappymcp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Snappy MCP",
  description: "Enterprise Model Context Protocol consulting and development services",
  url: "https://snappymcp.com",
  logo: "https://snappymcp.com/logo.png",
  sameAs: [
    "https://twitter.com/snappymcp",
    "https://linkedin.com/company/snappymcp",
    "https://github.com/snappymcp"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-888-555-0123",
    contactType: "sales",
    email: "enterprise@snappymcp.com",
    areaServed: "Worldwide",
    availableLanguage: ["English"]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preload" as="image" href="/icons/mcp-logo.png" type="image/png" fetchPriority="high" />
        <link rel="preload" as="image" href="/icons/mcp-servers-final.png" type="image/png" />
        <link rel="preload" as="image" href="/icons/mcp-training-final.png" type="image/png" />
        <link rel="preload" as="image" href="/icons/build-to-own-final.png" type="image/png" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}