import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { mockCompanies } from '../../data/mockCompanies';
import { 
  Building2, 
  Star, 
  MapPin, 
  Users2, 
  ArrowUpRight, 
  CheckCircle2, 
  Search,
  Globe,
  SlidersHorizontal
} from 'lucide-react';

export default function CompaniesPage() {
  const { navigateTo, updateSearchFilters } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    'all',
    'Productivity & Software',
    'Financial Technology',
    'Artificial Intelligence',
    'Design & Collaboration',
    'Cloud Infrastructure',
    'Developer Tools'
  ];

  const filteredCompanies = mockCompanies.filter((comp) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = comp.name.toLowerCase().includes(q);
      const matchTagline = comp.tagline.toLowerCase().includes(q);
      const matchIndustry = comp.industry.toLowerCase().includes(q);
      if (!matchName && !matchTagline && !matchIndustry) return false;
    }
    if (selectedIndustry !== 'all' && comp.industry !== selectedIndustry) {
      return false;
    }
    return true;
  });

  const handleCompanyClick = (companyName) => {
    updateSearchFilters({ searchQuery: companyName });
    navigateTo('jobs');
  };

  return (
    <div className="py-12 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-royal-800">
            Quantum Hiring Ecosystem
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight">
            Discover Exceptional Organizations
          </h1>
          <p className="text-sm text-royal-800/70 max-w-2xl">
            Explore verified workplaces with proven employee satisfaction, transparent compensation, and autonomous product culture.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-cream-50 p-3 rounded-2xl border border-cream-300 shadow-xs flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-cream-100/70 rounded-xl">
            <Search className="w-4 h-4 text-royal-700 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies by name or domain..."
              className="w-full bg-transparent text-sm text-royal-950 placeholder-royal-800/40 focus:outline-none font-medium"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full md:w-auto px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs font-bold text-royal-950 focus:outline-none focus:border-royal-800 cursor-pointer"
            >
              <option value="all">All Industries</option>
              {industries.filter((i) => i !== 'all').map((ind, idx) => (
                <option key={idx} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((comp) => (
            <div
              key={comp.id}
              className="bg-cream-50 rounded-2xl border border-cream-300 hover:border-royal-800 hover:shadow-xl hover:shadow-royal-950/5 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base tracking-wider shadow-xs ${comp.badgeColor}`}>
                      {comp.logoInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-extrabold text-lg text-royal-950">
                          {comp.name}
                        </h3>
                        {comp.verified && (
                          <CheckCircle2 className="w-4 h-4 text-royal-700 fill-royal-100" />
                        )}
                      </div>
                      <p className="text-xs text-royal-800/70 font-medium">
                        {comp.industry}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-200/80 text-xs font-bold text-royal-950">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{comp.rating}</span>
                  </div>
                </div>

                {/* Tagline & Description */}
                <p className="text-xs font-semibold text-royal-950 mb-2">
                  "{comp.tagline}"
                </p>
                <p className="text-xs text-royal-900/75 leading-relaxed line-clamp-3 mb-4">
                  {comp.description}
                </p>

                {/* Meta details */}
                <div className="space-y-1.5 text-xs text-royal-800/70 mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-royal-700 shrink-0" />
                    <span className="truncate">{comp.hq}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users2 className="w-3.5 h-3.5 text-royal-700 shrink-0" />
                    <span>{comp.size}</span>
                  </div>
                </div>

                {/* Culture tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {comp.culturePillars.map((pillar, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-cream-100 text-royal-800 border border-cream-200"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <span className="text-xs font-extrabold text-royal-800">
                  {comp.openRolesCount} Open Positions
                </span>

                <button
                  onClick={() => handleCompanyClick(comp.name)}
                  className="px-4 py-2 rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 group/btn"
                >
                  <span>View Open Roles</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
