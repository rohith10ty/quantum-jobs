import React from 'react';
import { useApp } from '../../context/AppContext';
import { mockCompanies } from '../../data/mockCompanies';
import { Building2, Star, MapPin, Users2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function PopularCompaniesSection() {
  const { navigateTo, updateSearchFilters } = useApp();

  const handleCompanyClick = (companyName) => {
    updateSearchFilters({ searchQuery: companyName });
    navigateTo('jobs');
  };

  return (
    <section className="py-20 bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal-800 mb-2">
              <Building2 className="w-3.5 h-3.5 text-royal-700" />
              <span>Hiring Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight">
              Popular Companies Hiring Now
            </h2>
            <p className="text-royal-800/70 text-sm sm:text-base mt-1 max-w-xl">
              From market leaders shaping generative AI to pioneers in developer experience and fintech.
            </p>
          </div>

          <button
            onClick={() => navigateTo('companies')}
            className="self-start md:self-auto text-sm font-bold text-royal-800 hover:text-royal-950 flex items-center gap-1.5 group cursor-pointer"
          >
            <span>View All Companies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCompanies.slice(0, 6).map((comp) => (
            <div
              key={comp.id}
              className="bg-cream-50 rounded-2xl border border-cream-300 hover:border-royal-800 hover:shadow-xl hover:shadow-royal-950/5 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm tracking-wider shadow-xs ${comp.badgeColor}`}>
                      {comp.logoInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-extrabold text-base text-royal-950">
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

                {/* Tagline */}
                <p className="text-xs text-royal-900/80 font-medium line-clamp-2 leading-relaxed mb-4">
                  "{comp.tagline}"
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
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cream-100 text-royal-800 border border-cream-200"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <span className="text-xs font-bold text-royal-800">
                  {comp.openRolesCount} Open Positions
                </span>
                <button
                  onClick={() => handleCompanyClick(comp.name)}
                  className="px-3.5 py-1.5 rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 group/btn"
                >
                  <span>Explore Jobs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
