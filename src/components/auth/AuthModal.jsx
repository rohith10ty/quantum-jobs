import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Logo from '../common/Logo';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Building2,
  ShieldCheck
} from 'lucide-react';

export default function AuthModal() {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    authModalTab, 
    setAuthModalTab, 
    loginDemoUser, 
    setUser,
    addToast 
  } = useApp();

  const [role, setRole] = useState('candidate'); // 'candidate' | 'recruiter'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setUser({
        id: `usr_${Date.now()}`,
        name: name || (email.split('@')[0] || 'Alex Morgan'),
        email: email || 'alex@quantum.dev',
        title: role === 'candidate' ? 'Senior Software Architect' : 'VP of Talent Acquisition',
        location: 'San Francisco, CA',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
        bio: 'Active member of the Quantum verified network.',
        skills: ['React', 'TypeScript', 'System Design'],
        resumeName: 'Candidate_Executive_CV.pdf',
        resumeSize: '1.8 MB',
        profileCompletion: 85,
        phone: '+1 (555) 019-2831'
      });
      setIsAuthModalOpen(false);
      addToast(`Welcome to Quantum, ${name || 'Candidate'}!`, 'success');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-royal-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-md bg-cream-50 rounded-3xl border border-cream-300 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-cream-50 border-b border-cream-200 flex items-center justify-between">
          <Logo size="sm" />
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-cream-200 text-royal-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Tab Selector: Sign In vs Sign Up */}
          <div className="grid grid-cols-2 p-1 bg-cream-200/80 rounded-xl">
            <button
              type="button"
              onClick={() => setAuthModalTab('login')}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                authModalTab === 'login'
                  ? 'bg-cream-50 text-royal-950 shadow-xs'
                  : 'text-royal-800 hover:text-royal-950'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setAuthModalTab('signup')}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                authModalTab === 'signup'
                  ? 'bg-cream-50 text-royal-950 shadow-xs'
                  : 'text-royal-800 hover:text-royal-950'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Role Toggle: Candidate vs Recruiter */}
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setRole('candidate')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                role === 'candidate'
                  ? 'bg-royal-800 text-cream-50'
                  : 'bg-cream-100 text-royal-900 border border-cream-300'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Job Seeker</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('recruiter')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                role === 'recruiter'
                  ? 'bg-royal-800 text-cream-50'
                  : 'bg-cream-100 text-royal-900 border border-cream-300'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Hiring Leader</span>
            </button>
          </div>

          {/* Quick Demo One-Click Login */}
          <div className="p-3.5 bg-royal-100/60 rounded-2xl border border-royal-200/80 space-y-2 text-center">
            <span className="text-[11px] font-bold text-royal-900 flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-royal-700" />
              Instant Sandbox Access
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => loginDemoUser('candidate')}
                className="flex-1 py-2 rounded-xl bg-royal-800 text-cream-50 hover:bg-royal-900 text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Demo Candidate (Alex)
              </button>
              <button
                type="button"
                onClick={() => loginDemoUser('recruiter')}
                className="flex-1 py-2 rounded-xl bg-cream-50 text-royal-900 border border-cream-300 hover:bg-cream-200 text-xs font-bold transition-all cursor-pointer"
              >
                Demo Recruiter (Elena)
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-cream-300" />
            <span className="bg-cream-50 px-3 text-[11px] font-semibold text-royal-700 uppercase">
              Or continue with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {authModalTab === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-royal-700 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-100/80 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-royal-700 absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex.morgan@quantum.dev"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-100/80 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-royal-950 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-royal-700 absolute left-3.5 pointer-events-none" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-100/80 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>
                    {authModalTab === 'login' ? 'Sign In to Quantum' : 'Create Quantum Account'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-[11px] text-center text-royal-700/80">
            By proceeding, you agree to Quantum’s Verified Terms of Service and Privacy Policy.
          </p>

        </div>

      </div>

    </div>
  );
}
