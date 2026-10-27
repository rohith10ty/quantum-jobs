import React from 'react';

export default function Logo({ size = 'md', inverted = false, showTagline = false }) {
  // Dimensions
  const sizeMap = {
    sm: { icon: 28, text: 'text-lg', badge: 'text-[9px]' },
    md: { icon: 34, text: 'text-2xl', badge: 'text-[10px]' },
    lg: { icon: 44, text: 'text-3xl', badge: 'text-xs' },
  };

  const { icon, text, badge } = sizeMap[size] || sizeMap.md;

  const hexFill = inverted ? '#FAF7F0' : '#1E3A8A';
  const hexStroke = inverted ? '#93C5FD' : '#FAF7F0';
  const innerFill = inverted ? '#172554' : '#FAF7F0';
  const coreFill = inverted ? '#FAF7F0' : '#1E3A8A';

  return (
    <div className="flex items-center gap-2.5 select-none group cursor-pointer">
      {/* Geometric Hexagon Logo */}
      <div className="relative flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-all duration-300"
        >
          {/* Subtle Outer Glow Ring on Hover */}
          <polygon
            points="50 3, 92 27, 92 73, 50 97, 8 73, 8 27"
            fill="none"
            stroke={inverted ? 'rgba(255,255,255,0.2)' : 'rgba(30, 58, 138, 0.2)'}
            strokeWidth="3"
            strokeDasharray="4 4"
            className="group-hover:rotate-45 origin-center transition-transform duration-700 ease-in-out"
          />

          {/* Primary Hexagon */}
          <polygon
            points="50 8, 88 30, 88 70, 50 92, 12 70, 12 30"
            fill={hexFill}
            stroke={hexStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Hexagon Core */}
          <polygon
            points="50 24, 76 39, 76 61, 50 76, 24 61, 24 39"
            fill={innerFill}
            strokeLinejoin="round"
          />

          {/* Precision Quantum Center Ring and Node */}
          <circle cx="50" cy="50" r="10" fill={coreFill} />
          <circle cx="50" cy="50" r="4" fill={innerFill} />
          
          {/* Subtle Dynamic Circuit Orbit Node */}
          <circle cx="68" cy="50" r="2.5" fill={innerFill} className="animate-pulse" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight font-sans ${text} ${
              inverted ? 'text-cream-50' : 'text-royal-950'
            }`}
          >
            QUANTUM
          </span>
          <span
            className={`font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded ${badge} ${
              inverted
                ? 'bg-cream-100/20 text-cream-100 border border-cream-100/30'
                : 'bg-royal-800 text-cream-50'
            }`}
          >
            JOBS
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[10px] uppercase tracking-widest font-medium mt-0.5 ${
              inverted ? 'text-royal-200' : 'text-royal-800/70'
            }`}
          >
            Executive & Tech Talent
          </span>
        )}
      </div>
    </div>
  );
}
