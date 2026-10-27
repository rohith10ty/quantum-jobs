import React from 'react';
import { useApp } from '../../context/AppContext';
import { mockJobs } from '../../data/mockJobs';
import JobCard from './JobCard';
import { Bookmark, ArrowRight, Trash2 } from 'lucide-react';

export default function SavedJobsPage() {
  const { savedJobIds, navigateTo } = useApp();

  const savedJobs = mockJobs.filter((job) => savedJobIds.includes(job.id));

  return (
    <div className="py-12 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-cream-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal-800 mb-2">
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>Personal Wishlist</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight">
              Saved Roles ({savedJobs.length})
            </h1>
            <p className="text-sm text-royal-800/70 mt-1">
              Keep track of executive opportunities and submit applications when you’re ready.
            </p>
          </div>

          <button
            onClick={() => navigateTo('jobs')}
            className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-cream-50 hover:bg-cream-200 text-royal-900 border border-cream-300 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Explore More Roles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content */}
        {savedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-cream-50 rounded-3xl border border-cream-300 p-8 space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-cream-200 text-royal-800 mx-auto flex items-center justify-center">
              <Bookmark className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-royal-950">
              Your wishlist is currently empty
            </h3>
            <p className="text-xs sm:text-sm text-royal-800/70">
              Browse our curated positions and click the bookmark icon on any card to save it for easy access later.
            </p>
            <button
              onClick={() => navigateTo('jobs')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-royal-800 text-cream-50 font-bold text-xs hover:bg-royal-900 transition-colors shadow-md cursor-pointer"
            >
              <span>Browse Active Jobs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
