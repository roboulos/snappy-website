import { ServiceCard } from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Custom MCP Development Icon */}
          <rect x="20" y="30" width="80" height="60" rx="4" stroke="#f97316" strokeWidth="2"/>
          <path d="M30 40H90M30 50H90M30 60H70" stroke="#6366f1" strokeWidth="2"/>
          <circle cx="85" cy="60" r="3" fill="#f97316"/>
          <path d="M40 75L50 85L70 65" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="25" cy="35" r="2" fill="#6366f1"/>
          <circle cx="32" cy="35" r="2" fill="#6366f1"/>
          <circle cx="39" cy="35" r="2" fill="#6366f1"/>
        </svg>
      ),
      title: "Custom MCP Development",
      description: "Build tailored MCP servers designed specifically for your unique business requirements and workflows",
      href: "#custom-development"
    },
    {
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Integration Services Icon */}
          <circle cx="30" cy="60" r="20" stroke="#6366f1" strokeWidth="2"/>
          <circle cx="90" cy="60" r="20" stroke="#f97316" strokeWidth="2"/>
          <path d="M50 60H70" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4"/>
          <path d="M30 40V80M90 40V80" stroke="#f97316" strokeWidth="2"/>
          <path d="M25 55L35 65M35 55L25 65" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M85 55L95 65M95 55L85 65" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "MCP Integration Services",
      description: "Seamlessly integrate MCP into your existing systems and tools for enhanced AI capabilities",
      href: "#integration"
    },
    {
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Strategy Consulting Icon */}
          <path d="M60 20L40 40V80L60 100L80 80V40L60 20Z" stroke="#6366f1" strokeWidth="2"/>
          <path d="M60 40V80M40 60H80" stroke="#f97316" strokeWidth="2"/>
          <circle cx="60" cy="60" r="5" fill="#f97316"/>
          <path d="M35 35L25 25M85 35L95 25M35 85L25 95M85 85L95 95" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="25" cy="25" r="3" stroke="#f97316" strokeWidth="2"/>
          <circle cx="95" cy="25" r="3" stroke="#f97316" strokeWidth="2"/>
          <circle cx="25" cy="95" r="3" stroke="#f97316" strokeWidth="2"/>
          <circle cx="95" cy="95" r="3" stroke="#f97316" strokeWidth="2"/>
        </svg>
      ),
      title: "MCP Strategy Consulting",
      description: "Expert guidance to help your organization adopt and scale MCP effectively",
      href: "#consulting"
    },
    {
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Resources & Newsletter Icon */}
          <rect x="25" y="25" width="70" height="70" rx="4" stroke="#6366f1" strokeWidth="2"/>
          <path d="M35 35H85M35 45H85M35 55H65" stroke="#f97316" strokeWidth="2"/>
          <circle cx="75" cy="55" r="3" fill="#6366f1"/>
          <path d="M35 70H55M65 70H85" stroke="#6366f1" strokeWidth="2"/>
          <path d="M95 40V85L85 80L75 85V40" stroke="#f97316" strokeWidth="2" fill="none"/>
          <circle cx="60" cy="85" r="3" fill="#f97316"/>
        </svg>
      ),
      title: "Resources & Newsletter",
      description: "Stay updated with the latest MCP insights, tutorials, and best practices",
      href: "#resources"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-textHeading text-center mb-12 tracking-tight">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}