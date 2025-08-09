"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
  };

  return (
    <section className="bg-bgLight py-24 md:py-32">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-textHeading leading-tight tracking-tight">
            Power Your AI with Model Context Protocol
          </h1>
          <p className="mt-6 text-lg md:text-xl text-textBody leading-relaxed">
            <span className="font-semibold text-textHeading">Expert MCP Solutions:</span> Custom development, seamless integration, and strategic consulting to transform your business with MCP
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </button>
          </form>
          <p className="mt-4 text-sm text-textBody">
            Join developers building the future with MCP. 
            <a href="#" className="text-primary hover:underline ml-1">Learn about our latest insights</a>
          </p>
        </div>
        <div className="flex justify-center relative">
          <svg 
            width="500" 
            height="400" 
            viewBox="0 0 500 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-lg"
          >
            {/* Waveform similar to Pulse */}
            <path 
              d="M50 200 Q100 150, 150 200 T250 200 Q300 100, 350 200 T450 200" 
              stroke="#6366f1" 
              strokeWidth="3" 
              fill="none"
            />
            <circle cx="50" cy="200" r="8" fill="#f97316"/>
            <circle cx="450" cy="200" r="8" fill="#f97316"/>
            
            {/* Nodes and connections */}
            <circle cx="150" cy="200" r="6" fill="#6366f1"/>
            <circle cx="250" cy="200" r="6" fill="#6366f1"/>
            <circle cx="350" cy="200" r="6" fill="#6366f1"/>
            
            {/* Additional decorative elements */}
            <path 
              d="M200 150 L300 150 M200 250 L300 250" 
              stroke="#f97316" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              opacity="0.5"
            />
            
            {/* Small accent dots */}
            <circle cx="100" cy="120" r="3" fill="#f97316" opacity="0.6"/>
            <circle cx="400" cy="120" r="3" fill="#f97316" opacity="0.6"/>
            <circle cx="150" cy="280" r="3" fill="#6366f1" opacity="0.6"/>
            <circle cx="350" cy="280" r="3" fill="#6366f1" opacity="0.6"/>
          </svg>
          
          {/* Social links */}
          <div className="absolute bottom-0 right-0 flex gap-4">
            <a href="#" className="text-textBody hover:text-primary transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12V16M8 8V8.01M12 16V10M16 16V13C16 11.3431 14.6569 10 13 10C12.4477 10 12 10.4477 12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#" className="text-textBody hover:text-primary transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.65 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.65 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="text-textBody hover:text-primary transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.00005C22 3.50005 20.97 3.87005 20 4.00005C21.05 3.50005 21.84 2.70005 22.23 1.75005C21.19 2.24005 20.04 2.57005 18.82 2.72005C17.84 1.88005 16.5 1.40005 15 1.40005C12.62 1.40005 10.71 3.31005 10.71 5.69005C10.71 6.02005 10.74 6.35005 10.81 6.66005C7.29 6.49005 4.16 4.79005 2.06 2.22005C1.69 2.85005 1.48 3.59005 1.48 4.39005C1.48 5.87005 2.23 7.18005 3.38 7.95005C2.68 7.93005 2.02 7.72005 1.44 7.39005V7.44005C1.44 9.54005 2.91 11.3 4.85 11.69C4.49 11.79 4.11 11.84 3.72 11.84C3.45 11.84 3.18 11.81 2.92 11.76C3.46 13.49 5.03 14.76 6.9 14.79C5.44 15.93 3.61 16.61 1.63 16.61C1.29 16.61 0.95 16.59 0.62 16.55C2.51 17.76 4.76 18.47 7.18 18.47C15 18.47 19.27 11.91 19.27 6.18005C19.27 6.00005 19.27 5.82005 19.26 5.64005C20.09 5.04005 20.8 4.29005 21.36 3.43005C20.6 3.77005 19.78 4.00005 18.91 4.11005C19.8 3.58005 20.48 2.75005 20.8 1.75005L23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}