"use client";

import * as React from "react";

interface MCPLogoProps {
  className?: string;
  size?: number;
}

export default function MCPLogo({ className = "", size = 48 }: MCPLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      fill="none"
    >
      {/* Base hexagon */}
      <polygon
        points="100,10 180,55 180,145 100,190 20,145 20,55"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
      />
      {/* Inner connection lines */}
      <line x1="100" y1="10" x2="100" y2="190" stroke="hsl(var(--accent))" strokeWidth="4" />
      <line x1="20" y1="55" x2="180" y2="145" stroke="hsl(var(--secondary))" strokeWidth="4" opacity="0.6" />
      <line x1="180" y1="55" x2="20" y2="145" stroke="hsl(var(--secondary))" strokeWidth="4" opacity="0.6" />
      {/* Center circle */}
      <circle cx="100" cy="100" r="35" fill="currentColor" opacity="0.1" />
      {/* MCP letters */}
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight="bold"
        fontSize="42"
        fill="currentColor"
      >
        MCP
      </text>
    </svg>
  );
}