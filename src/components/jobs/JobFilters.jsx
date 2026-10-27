import React from 'react';
import { useApp } from '../../context/AppContext';
import { mockCategories } from '../../data/mockCategories';
import { 
  Filter, 
  RotateCcw, 
  Search, 
  MapPin, 
  DollarSign, 
  Briefcase, 
  Sparkles,
  Check
} from 'lucide-react';

export default function JobFilters() {
  const { searchFilters, updateSearchFilters, resetFilters } = useApp();

  const jobTypes = [
    { id: 'Full-time', label: 'Full-time' },
    { id: 'Contract', label: 'Contract / Advisory' },
    { id: 'Part-time', label: 'Part-time' },
    { id: 'Internship', label: 'Internship / Fellow' },
  ];

  const experienceLevels = [
    { id: 'entry', label: 'Entry-Level (1-2 yrs)' },
    { id: 'mid', label: 'Mid-Level (3-5 yrs)' },
    { id: 'senior', label: 'Senior (5-8 yrs)' },
    { id: 'lead', label: 'Lead / Staff (7+ yrs)' },
    { id: 'executive', label: 'Executive / Principal (10+ yrs)' },
  ];

  const salaryOptions = [
    { label: 'All Compensation Bands', min: 0 },
    { label: '₹20+ LPA', min: 20 },
    { label: '₹35+ LPA', min: 35 },
    { label: '₹50+ LPA', min: 50 },
    { label: '₹75+ LPA / Global Tier', min: 75 },
  ];

  const handleJobTypeToggle = (typeId) => {
    const current = searchFilters.jobTypes || [];
    const updated = current.includes(typeId)
      ? current.filter((t) => t !== typeId)
      : [...current, typeId];
    updateSearchFilters({ jobTypes: updated });
  };

  const handleExperienceToggle = (levelId) => {
    const current = searchFilters.experienceLevels || [];
    const updated = current.includes(levelId)
      ? current.filter((l) => l !== levelId)
      : [...current, levelId];
    updateSearchFilters({ experienceLevels: updated });
  };

  const activeFiltersCount = 
    (searchFilters.category !== 'all' ? 1 : 0) +
    (searchFilters.onlyRemote ? 1 : 0) +
    (searchFilters.salaryMin > 0 ? 1 : 0) +
    (searchFilters.jobTypes?.length || 0) +
    (searchFilters.experienceLevels?.length || 0);

  return (
    <div className="bg-cream-50 rounded-2xl border border-cream-300 p-5 space-y-6">
      
      {/* Filters Header */}
      <div className="flex items-center justify-between pb-4 border-b border-cream-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-royal-800" />
          <h3 className="text-sm font-bold text-royal-950 uppercase tracking-wider">
            Refine Search
          </h3>
          {activeFiltersCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-royal-800 text-cream-50 text-[10px] font-bold flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </div>

        {activeFiltersCount > 0 && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-royal-700 hover:text-royal-950 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Remote Only Toggle */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-cream-100 border border-cream-200">
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-royal-950 block">Remote Roles Only</span>
          <span className="text-[11px] text-royal-700/70 block">India, UK & US Remote</span>
        </div>
        <button
          type="button"
          onClick={() => updateSearchFilters({ onlyRemote: !searchFilters.onlyRemote })}
          className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
            searchFilters.onlyRemote ? 'bg-royal-800' : 'bg-cream-300'
          }`}
          aria-label="Toggle Remote Only"
        >
          <div
            className={`w-4 h-4 rounded-full bg-cream-50 absolute top-1 transition-transform ${
              searchFilters.onlyRemote ? 'right-1' : 'left-1'
            }`}
          />
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-royal-950 uppercase tracking-wider block">
          Category
        </label>
        <select
          value={searchFilters.category}
          onChange={(e) => updateSearchFilters({ category: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800 cursor-pointer"
        >
          <option value="all">All Domains & Sectors</option>
          {mockCategories.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.name} ({c.count})
            </option>
          ))}
        </select>
      </div>

      {/* Experience Level */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold text-royal-950 uppercase tracking-wider block">
          Experience Tier
        </label>
        <div className="space-y-2">
          {experienceLevels.map((lvl) => {
            const checked = searchFilters.experienceLevels?.includes(lvl.id);
            return (
              <label
                key={lvl.id}
                onClick={() => handleExperienceToggle(lvl.id)}
                className="flex items-center gap-2.5 text-xs font-medium text-royal-900 cursor-pointer select-none hover:text-royal-950"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    checked
                      ? 'bg-royal-800 border-royal-800 text-cream-50'
                      : 'border-cream-300 bg-cream-100'
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{lvl.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Job Type */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold text-royal-950 uppercase tracking-wider block">
          Commitment
        </label>
        <div className="space-y-2">
          {jobTypes.map((type) => {
            const checked = searchFilters.jobTypes?.includes(type.id);
            return (
              <label
                key={type.id}
                onClick={() => handleJobTypeToggle(type.id)}
                className="flex items-center gap-2.5 text-xs font-medium text-royal-900 cursor-pointer select-none hover:text-royal-950"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    checked
                      ? 'bg-royal-800 border-royal-800 text-cream-50'
                      : 'border-cream-300 bg-cream-100'
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{type.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Salary Floor Filter in INR */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-royal-950 uppercase tracking-wider block">
          Minimum Compensation
        </label>
        <div className="grid grid-cols-1 gap-1.5">
          {salaryOptions.map((opt, idx) => {
            const isSelected = searchFilters.salaryMin === opt.min;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => updateSearchFilters({ salaryMin: opt.min })}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-royal-800 text-cream-50'
                    : 'bg-cream-100/80 text-royal-900 hover:bg-cream-200'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
