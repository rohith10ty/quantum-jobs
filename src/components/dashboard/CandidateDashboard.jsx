import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { mockJobs } from '../../data/mockJobs';
import JobCard from '../jobs/JobCard';
import { 
  User, 
  Briefcase, 
  Bookmark, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Edit3, 
  Sparkles, 
  ShieldCheck,
  Download
} from 'lucide-react';

export default function CandidateDashboard() {
  const { 
    user, 
    setUser, 
    appliedJobs, 
    savedJobIds, 
    setSelectedJobForDetails,
    navigateTo,
    addToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState('applied');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedTitle, setEditedTitle] = useState(user?.title || '');
  const [editedBio, setEditedBio] = useState(user?.bio || '');
  const [newSkill, setNewSkill] = useState('');

  if (!user) {
    return (
      <div className="py-20 bg-cream-100 min-h-screen">
        <div className="max-w-md mx-auto text-center bg-cream-50 p-8 rounded-3xl border border-cream-300 space-y-4">
          <User className="w-12 h-12 text-royal-800 mx-auto" />
          <h2 className="text-xl font-bold text-royal-950">Candidate Account Required</h2>
          <p className="text-xs text-royal-800/70">
            Please log in to access your Candidate Dashboard and monitor your applications.
          </p>
        </div>
      </div>
    );
  }

  const applicationList = appliedJobs.map((app) => {
    const job = mockJobs.find((j) => j.id === app.jobId);
    return {
      ...app,
      job
    };
  });

  const savedJobs = mockJobs.filter((j) => savedJobIds.includes(j.id));

  const handleSaveProfile = () => {
    setUser({
      ...user,
      title: editedTitle,
      bio: editedBio
    });
    setIsEditingProfile(false);
    addToast('Profile updated successfully!', 'success');
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    if (user.skills.includes(newSkill.trim())) return;
    setUser({
      ...user,
      skills: [...user.skills, newSkill.trim()]
    });
    setNewSkill('');
    addToast(`Added skill: ${newSkill.trim()}`, 'info');
  };

  const handleRemoveSkill = (skillToRemove) => {
    setUser({
      ...user,
      skills: user.skills.filter((s) => s !== skillToRemove)
    });
  };

  return (
    <div className="py-10 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Profile Card */}
        <div className="bg-cream-50 rounded-3xl border border-cream-300 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-cream-200">
            
            {/* Avatar & Core Bio */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-royal-700/30 shadow-md"
                />
                <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-cream-50 flex items-center justify-center text-white" title="Verified Candidate">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-royal-950 tracking-tight">
                    {user.name}
                  </h1>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-royal-100 text-royal-800 border border-royal-200">
                    Candidate Tier 1
                  </span>
                </div>

                <p className="text-sm font-semibold text-royal-800 mt-0.5">
                  {user.title}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-royal-700/80 mt-2 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-royal-700" />
                    {user.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-royal-700" />
                    {user.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-royal-700" />
                    {user.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Completion Meter */}
            <div className="bg-cream-100 p-4 rounded-2xl border border-cream-300 w-full md:w-64 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-royal-950">
                <span>Profile Strength</span>
                <span className="text-royal-800">{user.profileCompletion}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-cream-300 overflow-hidden">
                <div
                  className="h-full bg-royal-800 rounded-full transition-all duration-500"
                  style={{ width: `${user.profileCompletion}%` }}
                />
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold block">
                ✓ Ready for fast-track interviews
              </span>
            </div>

          </div>

          {/* Bio & Resume Row */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-royal-800">
                  Professional Statement
                </h3>
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="text-xs font-bold text-royal-800 hover:text-royal-950 flex items-center gap-1"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditingProfile ? 'Cancel' : 'Edit Statement'}</span>
                </button>
              </div>

              {isEditingProfile ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    placeholder="Your Professional Title"
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
                  />
                  <textarea
                    rows={3}
                    value={editedBio}
                    onChange={(e) => setEditedBio(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-royal-950 focus:outline-none focus:border-royal-800 resize-none font-medium"
                  />
                  <button
                    onClick={handleSaveProfile}
                    className="px-4 py-1.5 rounded-xl bg-royal-800 text-cream-50 font-bold text-xs"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-royal-900/80 leading-relaxed font-normal">
                  {user.bio}
                </p>
              )}

              {/* Skills Tags with Quick Add */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-royal-800 block mb-2">
                  Verified Technical Skills
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {user.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cream-200 text-royal-900 text-xs font-semibold border border-cream-300"
                    >
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-royal-600 hover:text-royal-950 ml-1 text-xs"
                        title="Remove skill"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <form onSubmit={handleAddSkill} className="inline-flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="+ Add skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-xs text-royal-950 placeholder-royal-700/60 focus:outline-none focus:border-royal-800 w-24"
                    />
                  </form>
                </div>
              </div>
            </div>

            {/* Resume Card */}
            <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-royal-800 block">
                Primary Master Document
              </span>
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-royal-800 shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-royal-950 truncate">
                    {user.resumeName}
                  </p>
                  <p className="text-[11px] text-royal-700">
                    {user.resumeSize} • {user.resumeDate}
                  </p>
                </div>
              </div>
              <div className="pt-1 flex items-center gap-2">
                <button
                  onClick={() => addToast('Downloading verified resume snapshot...', 'info')}
                  className="flex-1 px-3 py-2 rounded-xl bg-cream-50 hover:bg-cream-200 border border-cream-300 text-royal-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <a
                  href={user.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-3 py-2 rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center gap-3 border-b border-cream-300 pb-2">
          <button
            onClick={() => setActiveTab('applied')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'applied'
                ? 'bg-royal-800 text-cream-50 shadow-xs'
                : 'bg-cream-50 text-royal-900 hover:bg-cream-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Applications ({applicationList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'saved'
                ? 'bg-royal-800 text-cream-50 shadow-xs'
                : 'bg-cream-50 text-royal-900 hover:bg-cream-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved Jobs ({savedJobs.length})</span>
          </button>
        </div>

        {/* Applications Tab Content */}
        {activeTab === 'applied' && (
          <div className="space-y-4">
            {applicationList.length > 0 ? (
              applicationList.map((app, idx) => {
                const job = app.job;
                if (!job) return null;

                let statusBadge = 'bg-royal-100 text-royal-900 border-royal-300';
                if (app.status.includes('Interview')) {
                  statusBadge = 'bg-amber-100 text-amber-950 border-amber-300';
                } else if (app.status.includes('Offer')) {
                  statusBadge = 'bg-emerald-100 text-emerald-950 border-emerald-300';
                }

                return (
                  <div
                    key={idx}
                    className="bg-cream-50 rounded-2xl border border-cream-300 p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm tracking-wider ${job.badgeColor}`}>
                        {job.logoInitials}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-royal-900">{job.company}</span>
                          <span className="text-xs text-royal-700/60">• Applied {app.appliedAt}</span>
                        </div>
                        <h3
                          onClick={() => setSelectedJobForDetails(job)}
                          className="text-base font-bold text-royal-950 hover:text-royal-800 cursor-pointer"
                        >
                          {job.title}
                        </h3>
                        <p className="text-xs text-royal-800/80">
                          {job.location} • {job.salaryFormatted}
                        </p>

                        {app.notes && (
                          <p className="text-xs text-royal-900/90 bg-cream-100 p-2.5 rounded-xl border border-cream-200 mt-2 font-medium">
                            <strong>Update:</strong> {app.notes}
                          </p>
                        )}
                        {app.interviewDate && (
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mt-1">
                            <Calendar className="w-3.5 h-3.5 text-amber-700" />
                            <span>Scheduled: {app.interviewDate}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold border text-center ${statusBadge}`}>
                        {app.status}
                      </span>
                      <button
                        onClick={() => setSelectedJobForDetails(job)}
                        className="px-4 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-royal-900 font-bold text-xs border border-cream-300 transition-colors cursor-pointer"
                      >
                        View Job Details
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 bg-cream-50 rounded-2xl border border-cream-300 p-8 space-y-3">
                <Briefcase className="w-10 h-10 text-royal-800 mx-auto" />
                <h3 className="text-base font-bold text-royal-950">No applications dispatched yet</h3>
                <p className="text-xs text-royal-800/70">Explore open opportunities and submit your direct application.</p>
                <button
                  onClick={() => navigateTo('jobs')}
                  className="px-5 py-2 rounded-full bg-royal-800 text-cream-50 font-bold text-xs cursor-pointer"
                >
                  Browse Roles
                </button>
              </div>
            )}
          </div>
        )}

        {/* Saved Jobs Tab Content */}
        {activeTab === 'saved' && (
          <div>
            {savedJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-cream-50 rounded-2xl border border-cream-300 p-8 space-y-3">
                <Bookmark className="w-10 h-10 text-royal-800 mx-auto" />
                <h3 className="text-base font-bold text-royal-950">No saved roles in your wishlist</h3>
                <button
                  onClick={() => navigateTo('jobs')}
                  className="px-5 py-2 rounded-full bg-royal-800 text-cream-50 font-bold text-xs cursor-pointer"
                >
                  Browse Roles
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
