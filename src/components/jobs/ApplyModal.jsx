import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  X, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Briefcase,
  AlertCircle
} from 'lucide-react';

export default function ApplyModal() {
  const { 
    selectedJobForApply, 
    setSelectedJobForApply, 
    user, 
    applyForJob 
  } = useApp();

  const job = selectedJobForApply;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill user information if candidate is logged in
  useEffect(() => {
    if (user) {
      setFullName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
      setPortfolio(user.portfolio || user.linkedin || '');
      if (user.resumeName) {
        setResumeFile({ name: user.resumeName, size: user.resumeSize || '2.4 MB' });
      }
    }
  }, [user, job]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (job) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [job]);

  if (!job) return null;

  const handleClose = () => {
    setSelectedJobForApply(null);
    setIsSuccess(false);
    setIsSubmitting(false);
    setErrorMsg('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please enter your full name and valid email address.');
      return;
    }

    if (!resumeFile) {
      setErrorMsg('Please attach your CV/Resume to proceed.');
      return;
    }

    setIsSubmitting(true);

    // Simulate fast realistic network processing
    setTimeout(() => {
      const ok = applyForJob(job.id, {
        candidateName: fullName,
        candidateEmail: email,
        candidatePhone: phone,
        portfolioUrl: portfolio,
        coverNote,
        resumeName: resumeFile.name,
        resumeSize: resumeFile.size
      });

      setIsSubmitting(false);

      if (ok) {
        setIsSuccess(true);
        // Trigger celebratory confetti burst!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1E3A8A', '#3B82F6', '#FAF7F0', '#10B981']
        });

        // Close after 2.5s celebration
        setTimeout(() => {
          handleClose();
        }, 2400);
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-royal-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-cream-50 rounded-3xl border border-cream-300 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-cream-50 border-b border-cream-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${job.badgeColor}`}>
              {job.logoInitials}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-royal-800">
                Direct Application
              </p>
              <h3 className="text-base sm:text-lg font-bold text-royal-950 truncate max-w-sm sm:max-w-md">
                {job.title}
              </h3>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-cream-200 text-royal-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-royal-950">
              Application Dispatched!
            </h3>
            <p className="text-sm text-royal-900/80 max-w-md mx-auto">
              Your profile and materials have been submitted directly to the hiring team at <strong>{job.company}</strong>. You can monitor the real-time status in your Candidate Dashboard.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
              <span>Status: Application Received</span>
              <span>•</span>
              <span>Confirmation emailed</span>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1.5">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-100/70 border border-cream-300 text-sm text-royal-950 focus:outline-none focus:border-royal-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@quantum.dev"
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-100/70 border border-cream-300 text-sm text-royal-950 focus:outline-none focus:border-royal-800 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-100/70 border border-cream-300 text-sm text-royal-950 focus:outline-none focus:border-royal-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1.5">
                  Portfolio / GitHub / LinkedIn
                </label>
                <input
                  type="url"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-100/70 border border-cream-300 text-sm text-royal-950 focus:outline-none focus:border-royal-800 font-medium"
                />
              </div>
            </div>

            {/* Resume File Upload Box */}
            <div>
              <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1.5">
                Curriculum Vitae / Resume (PDF, DOCX) *
              </label>

              {resumeFile ? (
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-royal-100/60 border border-royal-300">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-royal-800" />
                    <div>
                      <p className="text-xs font-bold text-royal-950">{resumeFile.name}</p>
                      <p className="text-[10px] text-royal-700">{resumeFile.size} • Ready for dispatch</p>
                    </div>
                  </div>
                  <label className="text-xs font-bold text-royal-800 hover:text-royal-950 cursor-pointer underline">
                    Replace
                    <input type="file" accept=".pdf,.docx,.doc" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-cream-300 hover:border-royal-800 rounded-2xl bg-cream-100/40 cursor-pointer transition-colors text-center">
                  <UploadCloud className="w-8 h-8 text-royal-700 mb-2" />
                  <span className="text-xs font-bold text-royal-950">
                    Click to select your Resume or drag & drop here
                  </span>
                  <span className="text-[11px] text-royal-700/60 mt-0.5">
                    PDF or Word document up to 10MB
                  </span>
                  <input type="file" accept=".pdf,.docx,.doc" onChange={handleFileChange} className="hidden" />
                </label>
              )}
            </div>

            {/* Note to Hiring Manager */}
            <div>
              <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1.5">
                Note to Hiring Lead (Optional)
              </label>
              <textarea
                rows={3}
                value={coverNote}
                onChange={(e) => setCoverNote(e.target.value)}
                placeholder="Highlight your relevant experience, proudest accomplishment, or why this team specifically resonates with you..."
                className="w-full px-4 py-2.5 rounded-xl bg-cream-100/70 border border-cream-300 text-sm text-royal-950 focus:outline-none focus:border-royal-800 font-medium resize-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl border border-cream-300 font-bold text-xs text-royal-800 hover:bg-cream-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-2.5 rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
