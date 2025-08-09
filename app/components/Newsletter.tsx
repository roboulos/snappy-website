"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section id="newsletter" className="bg-bgDark text-white py-24">
      <div className="max-w-container mx-auto text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          MCP Moves Fast. Stay Current Here.
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get weekly insights on MCP developments, implementation strategies, and real-world use cases delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-lg text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
            required
          />
          <button 
            type="submit"
            className="bg-secondary px-8 py-4 rounded-lg font-semibold shadow hover:bg-orange-600 transition-colors whitespace-nowrap"
          >
            Get The Weekly Pulse
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-6">
          Read our latest: <a href="#" className="text-secondary hover:underline">5 Ways MCP is Transforming Enterprise AI Integration</a>
        </p>
      </div>
    </section>
  );
}