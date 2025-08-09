export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bgLight">
      <div className="max-w-container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <svg 
              width="400" 
              height="300" 
              viewBox="0 0 400 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* MCP Logo/Illustration */}
              <rect x="50" y="50" width="100" height="100" rx="8" stroke="#6366f1" strokeWidth="2" fill="none"/>
              <rect x="250" y="50" width="100" height="100" rx="8" stroke="#f97316" strokeWidth="2" fill="none"/>
              <rect x="150" y="150" width="100" height="100" rx="8" stroke="#6366f1" strokeWidth="2" fill="none"/>
              
              {/* Connection lines */}
              <path d="M150 100H250" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M100 150V100" stroke="#f97316" strokeWidth="2"/>
              <path d="M300 150V100" stroke="#f97316" strokeWidth="2"/>
              <path d="M200 150V100" stroke="#6366f1" strokeWidth="2"/>
              
              {/* MCP text */}
              <text x="100" y="105" textAnchor="middle" className="fill-textHeading font-bold text-lg">M</text>
              <text x="300" y="105" textAnchor="middle" className="fill-textHeading font-bold text-lg">C</text>
              <text x="200" y="205" textAnchor="middle" className="fill-textHeading font-bold text-lg">P</text>
              
              {/* Decorative elements */}
              <circle cx="100" cy="100" r="3" fill="#6366f1"/>
              <circle cx="300" cy="100" r="3" fill="#f97316"/>
              <circle cx="200" cy="200" r="3" fill="#6366f1"/>
            </svg>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-textHeading mb-6 tracking-tight">
              Why MCP Matters
            </h2>
            <p className="text-lg text-textBody mb-8 leading-relaxed">
              Just as HTTP standardized web communications, MCP creates a universal protocol for AI systems to interact with the world&apos;s data - securely, reliably, and at scale.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7V12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12V7L12 2Z" stroke="#6366f1" strokeWidth="2"/>
                    <path d="M12 8V16M8 12H16" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-textHeading mb-1">Secure by Design</h3>
                  <p className="text-textBody leading-relaxed">Built-in security protocols ensure your data and AI interactions remain protected</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-textHeading mb-1">Lightning Fast</h3>
                  <p className="text-textBody leading-relaxed">Optimized for real-time AI interactions with minimal latency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#6366f1" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-textHeading mb-1">Future-Proof</h3>
                  <p className="text-textBody leading-relaxed">Extensible architecture that grows with your AI needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}