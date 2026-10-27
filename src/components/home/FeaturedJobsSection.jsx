import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { mockJobs } from '../../data/mockJobs';
import JobCard from '../jobs/JobCard';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

export default function FeaturedJobsSection() {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Featured' },
    { id: 'india', label: 'India Tech (₹ LPA)' },
    { id: 'global', label: 'UK & US Roles' },
    { id: 'data-science', label: 'AI & Data' },
    { id: 'remote', label: 'Remote Only' },
  ];

  const featuredJobs = mockJobs.filter((job) => {
    if (!job.featured) return false;
    if (activeTab === 'all') return true;
    if (activeTab === 'india') return job.location.includes('India');
    if (activeTab === 'global') return job.location.includes('United Kingdom') || job.location.includes('United States') || job.location.includes('London');
    if (activeTab === 'remote') return job.isRemote;
    return job.category === activeTab;
  });

  return (
    <section className="py-20 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-royal-700" />
              <span>Handpicked Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight">
              Featured Positions
            </h2>
            <p className="text-royal-800/70 text-sm sm:text-base mt-1 max-w-xl">
              Roles verified for verified compensation, high autonomy, and direct collaboration with world-class teams.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-royal-800 text-cream-50 shadow-xs'
                    : 'bg-cream-100 text-royal-900 hover:bg-cream-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Explore All CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigateTo('jobs')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-royal-800 hover:bg-royal-900 text-cream-50 font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
          >
            <span>Explore All 4,850+ Open Roles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
