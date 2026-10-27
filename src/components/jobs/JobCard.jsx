import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Bookmark, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Sparkles, 
  Building2,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function JobCard({ job }) {
  const { 
    savedJobIds, 
    toggleSaveJob, 
    setSelectedJobForDetails, 
    setSelectedJobForApply, 
    appliedJobs 
  } = useApp();

  const isSaved = savedJobIds.includes(job.id);
  const application = appliedJobs.find((a) => a.jobId === job.id);
  const isApplied = !!application;

  return (
    <div className="group relative bg-cream-50 rounded-2xl border border-cream-300 hover:border-royal-700/80 hover:shadow-xl hover:shadow-royal-950/5 transition-all duration-300 p-6 flex flex-col justify-between">
      
      {/* Top Header: Company Info & Save Button */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Hexagon/Square Company Badge */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm tracking-wider shadow-xs ${job.badgeColor || 'bg-royal-900 text-cream-50'}`}>
              {job.logoInitials || job.company.substring(0, 2).toUpperCase()}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-royal-900 tracking-tight">
                  {job.company}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Verified Employer" />
              </div>
              <p className="text-[11px] text-royal-700/70 font-medium">
                {job.postedTime}
              </p>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleSaveJob(job.id);
            }}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isSaved
                ? 'bg-royal-800 text-cream-50 border-royal-800'
                : 'bg-cream-100 hover:bg-cream-200 text-royal-800 border-cream-300'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save job to wishlist'}
            aria-label="Save Job"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Job Title */}
        <h3
          onClick={() => setSelectedJobForDetails(job)}
          className="text-lg font-bold text-royal-950 hover:text-royal-800 transition-colors cursor-pointer leading-snug mb-2"
        >
          {job.title}
        </h3>

        {/* Overview snippet */}
        <p className="text-xs text-royal-900/75 line-clamp-2 leading-relaxed mb-4">
          {job.overview}
        </p>

        {/* Key Badges: Location, Type, Experience */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-cream-200/80 text-royal-900">
            <MapPin className="w-3 h-3 text-royal-700" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-cream-200/80 text-royal-900">
            <Briefcase className="w-3 h-3 text-royal-700" />
            {job.jobType}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-royal-100/70 text-royal-900 border border-royal-200">
            <Sparkles className="w-3 h-3 text-royal-700" />
            {job.experience}
          </span>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {job.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-cream-100 text-royal-800 border border-cream-200"
            >
              {tag}
            </span>
          ))}
          {job.tags.length > 4 && (
            <span className="text-[10px] text-royal-700 font-semibold self-center">
              +{job.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Footer: Salary & Apply Button */}
      <div className="pt-4 border-t border-cream-200 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-royal-700/70 block">
            Compensation
          </span>
          <span className="text-sm font-extrabold text-royal-950">
            {job.salaryFormatted}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedJobForDetails(job)}
            className="hidden sm:inline-flex px-3 py-2 text-xs font-bold rounded-xl text-royal-800 hover:bg-cream-200 transition-colors cursor-pointer"
          >
            Details
          </button>

          {isApplied ? (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300">
              <CheckCircle className="w-3.5 h-3.5" />
              Applied
            </span>
          ) : (
            <button
              onClick={() => setSelectedJobForApply(job)}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 transition-all shadow-xs hover:shadow cursor-pointer flex items-center gap-1.5 group/btn"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
