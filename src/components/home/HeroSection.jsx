import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  TrendingUp, 
  ShieldCheck,
  Building,
  CheckCircle2
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
    { label: 'Remote', query: '', location: 'Remote' },
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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200/50">
      
      {/* Subtle Geometric Hexagon Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" width="80" height="138.56" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
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
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-royal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50 border border-cream-300 shadow-xs text-xs font-semibold text-royal-900 animate-in fade-in duration-500">
            <span className="flex h-2 w-2 rounded-full bg-royal-700 animate-ping" />
            <span className="text-royal-800 font-bold">Quantum Career Index</span>
            <span className="text-cream-400">|</span>
            <span>Over 1,200+ Verified Roles Added This Week</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-royal-950 tracking-tight leading-[1.12]">
            Where visionary talent meets{' '}
            <span className="text-royal-800 relative inline-block">
              extraordinary
              <svg
                className="absolute left-0 -bottom-1 w-full h-2.5 text-royal-800/30"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="none"
              >
                <path d="M0 15 Q50 0 100 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            companies.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-royal-900/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Quantum is a refined career sanctuary for engineers, designers, and tech leaders. We strip away the noise to surface transparent compensation, direct hiring channels, and high-impact roles.
          </p>

          {/* Hero Search Box */}
          <div className="pt-4 max-w-4xl mx-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="bg-cream-50 p-2.5 sm:p-3 rounded-2xl sm:rounded-full border border-cream-300 shadow-xl shadow-royal-950/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 backdrop-blur-md"
            >
              {/* Job Title / Keyword Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-full bg-cream-100/60 sm:bg-transparent">
                <Search className="w-5 h-5 text-royal-700 shrink-0" />
                <input
                  type="text"
                  value={localTitle}
                  onChange={(e) => setLocalTitle(e.target.value)}
                  placeholder="Job title, keywords, or skills..."
                  className="w-full bg-transparent text-sm text-royal-950 placeholder-royal-800/40 focus:outline-none font-medium"
                />
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block w-px h-8 bg-cream-300" />

              {/* Location Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-full bg-cream-100/60 sm:bg-transparent">
                <MapPin className="w-5 h-5 text-royal-700 shrink-0" />
                <input
                  type="text"
                  value={localLocation}
                  onChange={(e) => setLocalLocation(e.target.value)}
                  placeholder="City, State, or 'Remote'..."
                  className="w-full bg-transparent text-sm text-royal-950 placeholder-royal-800/40 focus:outline-none font-medium"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl sm:rounded-full bg-royal-800 hover:bg-royal-900 text-cream-50 font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Search Jobs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Trending Quick Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
              <span className="text-royal-800/70 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-royal-700" />
                Trending:
              </span>
              {trendingTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTagClick(tag)}
                  className="px-2.5 py-1 rounded-full bg-cream-50 hover:bg-royal-800 hover:text-cream-50 text-royal-900 border border-cream-300 transition-all cursor-pointer font-medium"
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-cream-300/60 mt-10">
            <div className="p-3 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-royal-950">4,850+</p>
              <p className="text-xs text-royal-800/70 font-medium mt-0.5">Verified Active Roles</p>
            </div>
            <div className="p-3 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-royal-950">620+</p>
              <p className="text-xs text-royal-800/70 font-medium mt-0.5">Top-Tier Companies</p>
            </div>
            <div className="p-3 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-royal-950">$195k</p>
              <p className="text-xs text-royal-800/70 font-medium mt-0.5">Average Tech Salary</p>
            </div>
            <div className="p-3 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-royal-950">98.4%</p>
              <p className="text-xs text-royal-800/70 font-medium mt-0.5">Placement Velocity</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
