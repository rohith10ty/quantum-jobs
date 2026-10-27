import React from 'react';

export default function Logo({ size = 'md', inverted = false, showTagline = false }) {
  const sizeMap = {
    sm: { symbol: 'text-2xl', text: 'text-lg', badge: 'text-[9px]' },
    md: { symbol: 'text-3xl sm:text-4xl', text: 'text-2xl', badge: 'text-[10px]' },
    lg: { symbol: 'text-4xl sm:text-5xl', text: 'text-3xl', badge: 'text-xs' },
  };

  const { symbol, text, badge } = sizeMap[size] || sizeMap.md;

  return (
    <div className="flex items-center gap-2.5 select-none group cursor-pointer">
      {/* Exact Solid Hexagon Symbol ⬢ - Prominent & Big in Royal Blue */}
      <span
        className={`leading-none transition-transform duration-300 ease-out group-hover:scale-110 shrink-0 ${symbol} ${
          inverted ? 'text-cream-100' : 'text-royal-800'
        }`}
        style={{
          color: inverted ? '#FAF7F0' : '#1E3A8A',
          filter: inverted 
            ? 'drop-shadow(0 0 10px rgba(250,247,240,0.35))' 
            : 'drop-shadow(0 2px 6px rgba(30,58,138,0.2))'
        }}
        aria-hidden="true"
      >
        ⬢
      </span>

      {/* Brand Typography */}
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
