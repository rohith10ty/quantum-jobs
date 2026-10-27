import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  TrendingUp
} from 'lucide-react';

export default function HeroSection() {
  const { navigateTo, searchFilters, updateSearchFilters } = useApp();

  const [localTitle, setLocalTitle] = useState(searchFilters.searchQuery || '');
  const [localLocation, setLocalLocation] = useState(searchFilters.locationQuery || '');

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    updateSearchFilters({
      searchQuery: localTitle.trim(),
      locationQuery: localLocation.trim(),
    });
    navigateTo('jobs');
  };

  const trendingTags = [
    { label: 'React / Next.js', query: 'React' },
    { label: 'AI & LLMs', query: 'LLMs' },
    { label: 'Design Systems', query: 'Design Systems' },
    { label: 'Distributed Systems', query: 'Distributed' },
    { label: 'Remote Only', query: '', location: 'Remote' },
  ];

  const handleTagClick = (tag) => {
    if (tag.location) {
      updateSearchFilters({ locationQuery: tag.location });
    } else {
      updateSearchFilters({ searchQuery: tag.query });
    }
    navigateTo('jobs');
  };

  return (
    <section className="relative overflow-hidden pt-7 pb-10 md:pt-10 md:pb-12 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200/50">
      
      {/* Subtle Geometric Hexagon Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" width="80" height="138.56" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L80 23.09 L80 69.28 L40 92.37 L0 69.28 L0 23.09 Z M40 46.19 L80 69.28 L80 115.47 L40 138.56 L0 115.47 L0 69.28 Z"
                fill="none"
                stroke="#1E3A8A"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      {/* Ambient Royal Blue Glow in Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-royal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50 border border-cream-300 shadow-xs text-xs font-semibold text-royal-900 animate-in fade-in duration-500">
            <span className="flex h-2 w-2 rounded-full bg-royal-700 animate-ping" />
            <span className="text-royal-800 font-bold">Quantum Career Index</span>
            <span className="text-cream-400">|</span>
            <span>1,200+ Verified Roles Added This Week</span>
          </div>

          {/* Main Headline - Little bit larger and commanding, without decorative underline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-royal-950 tracking-tight leading-[1.14]">
            Where visionary talent meets{' '}
            <span className="text-royal-800">
              extraordinary
            </span>{' '}
            companies.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-royal-900/75 leading-relaxed font-normal max-w-xl mx-auto">
            Curated executive & engineering roles with verified compensation and direct founder access.
          </p>

          {/* Hero Search Box */}
          <div className="pt-2 max-w-3xl mx-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="bg-cream-50 p-2 sm:p-2.5 rounded-2xl sm:rounded-full border border-cream-300 shadow-xl shadow-royal-950/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 backdrop-blur-md"
            >
              {/* Job Title / Keyword Input */}
              <div className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-xl sm:rounded-full bg-cream-100/60 sm:bg-transparent">
                <Search className="w-4 h-4 text-royal-700 shrink-0" />
                <input
                  type="text"
                  value={localTitle}
                  onChange={(e) => setLocalTitle(e.target.value)}
                  placeholder="Job title, keywords, or skills..."
                  className="w-full bg-transparent text-xs sm:text-sm text-royal-950 placeholder-royal-800/40 focus:outline-none font-medium"
                />
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block w-px h-6 bg-cream-300" />

              {/* Location Input */}
              <div className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-xl sm:rounded-full bg-cream-100/60 sm:bg-transparent">
                <MapPin className="w-4 h-4 text-royal-700 shrink-0" />
                <input
                  type="text"
                  value={localLocation}
                  onChange={(e) => setLocalLocation(e.target.value)}
                  placeholder="Location or 'Remote'..."
                  className="w-full bg-transparent text-xs sm:text-sm text-royal-950 placeholder-royal-800/40 focus:outline-none font-medium"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-7 py-3 rounded-xl sm:rounded-full bg-royal-800 hover:bg-royal-900 text-cream-50 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer group shrink-0"
              >
                <span>Search Jobs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            {/* Trending Quick Tags - Prominently Displayed Above the Bottom Viewport */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
              <span className="text-royal-800 font-bold flex items-center gap-1 text-xs">
                <TrendingUp className="w-3.5 h-3.5 text-royal-700" />
                Trending:
              </span>
              {trendingTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTagClick(tag)}
                  className="px-3 py-1.5 rounded-full bg-cream-50 hover:bg-royal-800 hover:text-cream-50 text-royal-900 border border-cream-300 transition-all cursor-pointer font-medium text-xs shadow-2xs"
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Proof Metrics */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-2xl mx-auto border-t border-cream-300/50 mt-5">
            <div className="p-1.5 text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-royal-950">4,850+</p>
              <p className="text-[11px] text-royal-800/70 font-medium">Verified Active Roles</p>
            </div>
            <div className="p-1.5 text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-royal-950">620+</p>
              <p className="text-[11px] text-royal-800/70 font-medium">Top Companies</p>
            </div>
            <div className="p-1.5 text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-royal-950">$195k</p>
              <p className="text-[11px] text-royal-800/70 font-medium">Avg Tech Salary</p>
            </div>
            <div className="p-1.5 text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-royal-950">98.4%</p>
              <p className="text-[11px] text-royal-800/70 font-medium">Placement Velocity</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
