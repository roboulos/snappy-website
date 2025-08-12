interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <a 
      href={href}
      className="bg-white border border-gray-200 rounded-lg shadow-card p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transform transition-all duration-200"
    >
      <div className="mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-textHeading mb-3">{title}</h3>
      <p className="text-textBody leading-relaxed">{description}</p>
    </a>
  );
}