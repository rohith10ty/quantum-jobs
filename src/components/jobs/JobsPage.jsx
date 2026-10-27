import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { mockJobs } from '../../data/mockJobs';
import JobCard from './JobCard';
import JobFilters from './JobFilters';
import { 
  Search, 
  MapPin, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown,
  Briefcase,
  RotateCcw
} from 'lucide-react';

export default function JobsPage() {
  const { 
    searchFilters, 
    updateSearchFilters, 
    resetFilters 
  } = useApp();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter logic
  const filteredJobs = mockJobs.filter((job) => {
    // 1. Search Query
    if (searchFilters.searchQuery) {
      const q = searchFilters.searchQuery.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchTags = job.tags.some((t) => t.toLowerCase().includes(q));
      const matchOverview = job.overview.toLowerCase().includes(q);
      if (!matchTitle && !matchCompany && !matchTags && !matchOverview) return false;
    }

    // 2. Location Query
    if (searchFilters.locationQuery) {
      const lq = searchFilters.locationQuery.toLowerCase();
      const matchLoc = job.location.toLowerCase().includes(lq);
      if (!matchLoc) return false;
    }

    // 3. Category
    if (searchFilters.category && searchFilters.category !== 'all') {
      if (job.category !== searchFilters.category) return false;
    }

    // 4. Remote Only
    if (searchFilters.onlyRemote && !job.isRemote) {
      return false;
    }

    // 5. Job Types
    if (searchFilters.jobTypes?.length > 0) {
      if (!searchFilters.jobTypes.includes(job.jobType)) return false;
    }

    // 6. Experience Levels
    if (searchFilters.experienceLevels?.length > 0) {
      if (!searchFilters.experienceLevels.includes(job.experienceLevel)) return false;
    }

    // 7. Salary Min
    if (searchFilters.salaryMin > 0) {
      if (job.salaryMax < searchFilters.salaryMin) return false;
    }

    return true;
  });

  // Sorting
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (searchFilters.sortBy === 'salary-high') {
      return b.salaryMax - a.salaryMax;
    }
    if (searchFilters.sortBy === 'salary-low') {
      return a.salaryMin - b.salaryMin;
    }
    if (searchFilters.sortBy === 'company') {
      return a.company.localeCompare(b.company);
    }
    return 0; // Default order
  });

  return (
    <div className="py-10 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Search Bar */}
        <div className="mb-8 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-royal-800">
              Quantum Index
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight mt-1">
              Find Your Next Role
            </h1>
            <p className="text-sm text-royal-800/70 mt-1">
              Showing {sortedJobs.length} verified executive and engineering opportunities
            </p>
          </div>

          {/* Interactive Search Controls */}
          <div className="bg-cream-50 p-2.5 rounded-2xl border border-cream-300 shadow-sm flex flex-col md:flex-row items-stretch md:items-center gap-2">
            <div className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-cream-100/70 md:bg-transparent rounded-xl">
              <Search className="w-4 h-4 text-royal-700 shrink-0" />
              <input
                type="text"
                value={searchFilters.searchQuery}
                onChange={(e) => updateSearchFilters({ searchQuery: e.target.value })}
                placeholder="Search by title, skill, or keyword..."
                className="w-full bg-transparent text-sm text-royal-950 placeholder-royal-800/40 focus:outline-none font-medium"
              />
              {searchFilters.searchQuery && (
                <button
                  onClick={() => updateSearchFilters({ searchQuery: '' })}
                  className="p-1 text-royal-600 hover:text-royal-950"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="hidden md:block w-px h-6 bg-cream-300" />

            <div className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-cream-100/70 md:bg-transparent rounded-xl">
              <MapPin className="w-4 h-4 text-royal-700 shrink-0" />
              <input
                type="text"
                value={searchFilters.locationQuery}
                onChange={(e) => updateSearchFilters({ locationQuery: e.target.value })}
                placeholder="Filter by location (e.g. Bengaluru, London, US, Remote)..."
                className="w-full bg-transparent text-sm text-royal-950 placeholder-royal-800/40 focus:outline-none font-medium"
              />
              {searchFilters.locationQuery && (
                <button
                  onClick={() => updateSearchFilters({ locationQuery: '' })}
                  className="p-1 text-royal-600 hover:text-royal-950"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 bg-cream-200 text-royal-900 rounded-xl font-bold text-xs"
            >
              <SlidersHorizontal className="w-4 h-4 text-royal-800" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Content Layout: Sidebar Filters + Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <JobFilters />
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {mobileFilterOpen && (
            <div className="lg:hidden col-span-1 mb-4">
              <JobFilters />
            </div>
          )}

          {/* Jobs List Section */}
          <div className="lg:col-span-3 space-y-5">
            
            {/* Sorting & Filter Tags Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-cream-50 p-3 rounded-2xl border border-cream-200">
              
              <div className="text-xs font-semibold text-royal-800/80">
                Displaying <span className="font-bold text-royal-950">{sortedJobs.length}</span> positions
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-royal-700 font-medium">Sort by:</span>
                <select
                  value={searchFilters.sortBy}
                  onChange={(e) => updateSearchFilters({ sortBy: e.target.value })}
                  className="px-3 py-1.5 rounded-lg bg-cream-100 border border-cream-300 text-xs font-bold text-royal-950 focus:outline-none focus:border-royal-800 cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="salary-high">Highest Salary</option>
                  <option value="salary-low">Lowest Salary</option>
                  <option value="company">Company Name</option>
                </select>
              </div>

            </div>

            {/* Jobs Grid / List */}
            {sortedJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {sortedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              /* Zero Results State */
              <div className="text-center py-20 bg-cream-50 rounded-2xl border border-cream-300 p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cream-200 text-royal-800 mx-auto flex items-center justify-center">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-royal-950">
                  No matching roles found
                </h3>
                <p className="text-xs sm:text-sm text-royal-800/70 max-w-sm mx-auto">
                  We couldn't find any positions matching your specific filter combination. Try adjusting or clearing your filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-800 text-cream-50 font-bold text-xs hover:bg-royal-900 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
