import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockJobs } from '../data/mockJobs';

const AppContext = createContext();

const DEFAULT_DEMO_USER = {
  id: 'usr_demo_1',
  name: 'Alex Morgan',
  email: 'alex.morgan@quantum.dev',
  title: 'Senior Frontend Architect',
  location: 'San Francisco, CA',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
  bio: 'Specializing in design systems, React performance, and modern web ergonomics. 7+ years delivering world-class client architectures.',
  skills: ['React', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'Performance', 'Next.js', 'GraphQL'],
  resumeName: 'Alex_Morgan_Executive_Resume.pdf',
  resumeSize: '2.4 MB',
  resumeDate: 'Updated Oct 2026',
  profileCompletion: 92,
  phone: '+1 (555) 389-4021',
  portfolio: 'https://alexmorgan.design',
  github: 'https://github.com/alexmorgan-dev',
  linkedin: 'https://linkedin.com/in/alexmorgan-arch'
};

const DEFAULT_APPLIED = [
  {
    jobId: 'job-1',
    appliedAt: '2 days ago',
    timestamp: Date.now() - 172800000,
    status: 'Interview Scheduled',
    statusStep: 3, // 1: Applied, 2: Under Review, 3: Interview, 4: Offer
    notes: 'Video interview scheduled with Founder & Engineering Director.',
    interviewDate: 'Tomorrow at 2:00 PM PST'
  },
  {
    jobId: 'job-3',
    appliedAt: '5 days ago',
    timestamp: Date.now() - 432000000,
    status: 'In Review',
    statusStep: 2,
    notes: 'Application passed preliminary review. Awaiting design portfolio feedback.',
    interviewDate: null
  }
];

const INITIAL_FILTERS = {
  searchQuery: '',
  locationQuery: '',
  category: 'all',
  jobTypes: [],
  experienceLevels: [],
  salaryMin: 0,
  onlyRemote: false,
  sortBy: 'recent'
};

export function AppProvider({ children }) {
  // User state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('quantum_user');
    return saved ? JSON.parse(saved) : DEFAULT_DEMO_USER;
  });

  // Saved Jobs
  const [savedJobIds, setSavedJobIds] = useState(() => {
    const saved = localStorage.getItem('quantum_saved_jobs');
    return saved ? JSON.parse(saved) : ['job-1', 'job-2', 'job-5'];
  });

  // Applied Jobs
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const saved = localStorage.getItem('quantum_applied_jobs');
    return saved ? JSON.parse(saved) : DEFAULT_APPLIED;
  });

  // Navigation
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'jobs' | 'companies' | 'about' | 'saved' | 'dashboard'
  
  // Modals
  const [selectedJobForDetails, setSelectedJobForDetails] = useState(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'signup'

  // Search & Filter state
  const [searchFilters, setSearchFilters] = useState(INITIAL_FILTERS);

  // Toasts
  const [toasts, setToasts] = useState([]);

  // Persistence effects
  useEffect(() => {
    if (user) {
      localStorage.setItem('quantum_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('quantum_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('quantum_saved_jobs', JSON.stringify(savedJobIds));
  }, [savedJobIds]);

  useEffect(() => {
    localStorage.setItem('quantum_applied_jobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  const addToast = (message, type = 'info', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleSaveJob = (jobId) => {
    const job = mockJobs.find((j) => j.id === jobId);
    const jobTitle = job ? job.title : 'Job';

    if (savedJobIds.includes(jobId)) {
      setSavedJobIds((prev) => prev.filter((id) => id !== jobId));
      addToast(`Removed "${jobTitle}" from saved jobs`, 'info');
    } else {
      setSavedJobIds((prev) => [...prev, jobId]);
      addToast(`Saved "${jobTitle}" to your wishlist`, 'success');
    }
  };

  const applyForJob = (jobId, applicationDetails) => {
    const job = mockJobs.find((j) => j.id === jobId);
    const existing = appliedJobs.find((a) => a.jobId === jobId);

    if (existing) {
      addToast(`You have already applied for ${job ? job.title : 'this role'}. Check your Dashboard.`, 'warning');
      return false;
    }

    const newApplication = {
      jobId,
      appliedAt: 'Just now',
      timestamp: Date.now(),
      status: 'Application Submitted',
      statusStep: 1,
      notes: 'Application received and confirmed. Awaiting recruiter review.',
      interviewDate: null,
      ...applicationDetails
    };

    setAppliedJobs((prev) => [newApplication, ...prev]);
    addToast(`Successfully applied to ${job ? job.company : 'Company'} for ${job ? job.title : 'Role'}!`, 'success', 4500);
    return true;
  };

  const updateSearchFilters = (newFilters) => {
    setSearchFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setSearchFilters(INITIAL_FILTERS);
    addToast('Search filters reset', 'info');
  };

  const navigateTo = (view, options = {}) => {
    setCurrentView(view);
    if (options.category) {
      setSearchFilters((prev) => ({ ...prev, category: options.category }));
    }
    if (options.searchQuery !== undefined) {
      setSearchFilters((prev) => ({ ...prev, searchQuery: options.searchQuery }));
    }
    if (options.locationQuery !== undefined) {
      setSearchFilters((prev) => ({ ...prev, locationQuery: options.locationQuery }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loginDemoUser = (role = 'candidate') => {
    if (role === 'candidate') {
      setUser(DEFAULT_DEMO_USER);
      addToast('Logged in as Alex Morgan (Senior Candidate)', 'success');
    } else {
      setUser({
        id: 'usr_recruiter_1',
        name: 'Elena Rostova',
        email: 'elena@quantum-talent.com',
        title: 'VP of Global Talent @ Horizon',
        location: 'New York, NY',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
        bio: 'Connecting exceptional software executives and AI pioneers with tier-1 ventures.',
        skills: ['Executive Recruiting', 'AI Talent Mapping', 'Compensation Design'],
        profileCompletion: 100,
        phone: '+1 (555) 789-1029'
      });
      addToast('Logged in as Elena Rostova (Hiring Partner)', 'success');
    }
    setIsAuthModalOpen(false);
  };

  const logoutUser = () => {
    setUser(null);
    addToast('Logged out successfully', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        savedJobIds,
        toggleSaveJob,
        appliedJobs,
        applyForJob,
        currentView,
        setCurrentView,
        navigateTo,
        selectedJobForDetails,
        setSelectedJobForDetails,
        selectedJobForApply,
        setSelectedJobForApply,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalTab,
        setAuthModalTab,
        searchFilters,
        setSearchFilters,
        updateSearchFilters,
        resetFilters,
        toasts,
        addToast,
        removeToast,
        loginDemoUser,
        logoutUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
