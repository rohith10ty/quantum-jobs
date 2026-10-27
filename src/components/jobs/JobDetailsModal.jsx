import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Bookmark, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Sparkles, 
  CheckCircle, 
  Building2, 
  ArrowRight,
  Share2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function JobDetailsModal() {
  const { 
    selectedJobForDetails, 
    setSelectedJobForDetails, 
    setSelectedJobForApply, 
    savedJobIds, 
    toggleSaveJob, 
    appliedJobs,
    addToast 
  } = useApp();

  const job = selectedJobForDetails;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedJobForDetails(null);
    };
    if (job) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [job, setSelectedJobForDetails]);

  if (!job) return null;

  const isSaved = savedJobIds.includes(job.id);
  const application = appliedJobs.find((a) => a.jobId === job.id);
  const isApplied = !!application;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Job link copied to clipboard!', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-royal-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-cream-50 rounded-3xl border border-cream-300 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-cream-50/95 backdrop-blur-md border-b border-cream-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold text-royal-800">
              Role Specification
            </span>
            <span className="text-cream-300">|</span>
            <span className="text-xs text-royal-700 font-medium">Ref: {job.id.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-cream-200 text-royal-800 transition-colors cursor-pointer"
              title="Share job"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleSaveJob(job.id)}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-royal-800 text-cream-50 border-royal-800'
                  : 'hover:bg-cream-200 text-royal-800 border-cream-300'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save job'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setSelectedJobForDetails(null)}
              className="p-2 rounded-full hover:bg-cream-200 text-royal-800 transition-colors cursor-pointer ml-1"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Role Banner */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-cream-200">
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl tracking-wider shadow-sm shrink-0 ${job.badgeColor}`}>
                {job.logoInitials}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-royal-900">{job.company}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  <span className="text-xs text-royal-700/60 font-medium">• {job.postedTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-royal-950 mt-1">
                  {job.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-2.5 mt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cream-200 text-royal-900">
                    <MapPin className="w-3.5 h-3.5 text-royal-700" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cream-200 text-royal-900">
                    <Briefcase className="w-3.5 h-3.5 text-royal-700" />
                    {job.jobType}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-royal-100 text-royal-900 border border-royal-200">
                    <Sparkles className="w-3.5 h-3.5 text-royal-700" />
                    {job.experience}
                  </span>
                </div>
              </div>
            </div>

            {/* Salary Highlight Box */}
            <div className="bg-cream-100/80 p-4 rounded-2xl border border-cream-300 w-full sm:w-auto text-left sm:text-right shrink-0">
              <span className="text-[10px] uppercase font-bold tracking-wider text-royal-700 block">
                Total Compensation
              </span>
              <p className="text-lg font-black text-royal-950 mt-0.5">
                {job.salaryFormatted}
              </p>
              <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                ✓ Verified pay transparency band
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-royal-950">
              Role Overview
            </h3>
            <p className="text-sm sm:text-base text-royal-900/80 leading-relaxed font-normal">
              {job.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-royal-950">
              What You Will Do & Own
            </h3>
            <ul className="space-y-2.5">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-royal-900/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-800 mt-2 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-royal-950">
              Qualifications & What We Are Looking For
            </h3>
            <ul className="space-y-2.5">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-royal-900/85">
                  <CheckCircle className="w-4 h-4 text-royal-700 mt-0.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-royal-950">
              Key Technologies & Domains
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-cream-200/80 text-royal-900 text-xs font-semibold border border-cream-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits & Perks */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-royal-950">
              Benefits, Healthcare & Perks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {job.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-cream-100/70 border border-cream-300 text-xs text-royal-900/90 font-medium flex items-center gap-2.5"
                >
                  <Sparkles className="w-4 h-4 text-royal-700 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Process Flow */}
          <div className="p-5 rounded-2xl bg-royal-100/40 border border-royal-200 space-y-3">
            <h3 className="text-sm font-bold text-royal-950 uppercase tracking-wider">
              Quantum Fast-Track Interview Path
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-cream-50 rounded-xl border border-cream-300">
                <span className="font-extrabold text-royal-800">1. Recruiter Screen</span>
                <p className="text-[11px] text-royal-700/80 mt-1">30 min culture & compensation alignment</p>
              </div>
              <div className="p-3 bg-cream-50 rounded-xl border border-cream-300">
                <span className="font-extrabold text-royal-800">2. Technical Deep-Dive</span>
                <p className="text-[11px] text-royal-700/80 mt-1">60 min architecture or portfolio review</p>
              </div>
              <div className="p-3 bg-cream-50 rounded-xl border border-cream-300">
                <span className="font-extrabold text-royal-800">3. Team Collaboration</span>
                <p className="text-[11px] text-royal-700/80 mt-1">Pair programming or strategy sprint</p>
              </div>
              <div className="p-3 bg-cream-50 rounded-xl border border-cream-300">
                <span className="font-extrabold text-emerald-700">4. Executive Offer</span>
                <p className="text-[11px] text-royal-700/80 mt-1">Formal proposal within 48 hours</p>
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-cream-50/95 backdrop-blur-md border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-xs text-royal-700 font-medium">
              Applying for: <strong className="text-royal-950">{job.title}</strong>
            </p>
            <p className="text-[11px] text-royal-700/70">{job.salaryFormatted}</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => toggleSaveJob(job.id)}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl border border-cream-300 font-bold text-xs text-royal-900 hover:bg-cream-200 transition-colors cursor-pointer"
            >
              {isSaved ? '★ Saved to Wishlist' : '☆ Save for Later'}
            </button>

            {isApplied ? (
              <span className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs">
                <CheckCircle className="w-4 h-4" />
                Application Submitted
              </span>
            ) : (
              <button
                onClick={() => {
                  setSelectedJobForDetails(null);
                  setSelectedJobForApply(job);
                }}
                className="flex-1 sm:flex-initial px-8 py-3 rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Apply for this Position</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
