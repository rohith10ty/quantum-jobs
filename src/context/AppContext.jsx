import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockJobs } from '../data/mockJobs';

const AppContext = createContext();

const ROHITH_NAIDU_USER = {
  id: 'usr_rohith_naidu',
  name: 'Rohith Naidu',
  email: 'rohithnaidu.com',
  title: 'Senior Frontend Architect',
  location: 'San Francisco, CA (Hybrid)',
  avatar: '/profile.jpg',
  bio: 'Specializing in design systems, React 19, web performance, and modern executive software. 7+ years delivering world-class client architectures.',
  skills: ['React', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'Performance', 'Next.js', 'GraphQL'],
  resumeName: 'Rohith_Naidu_Senior_Architect_CV.pdf',
  resumeSize: '2.4 MB',
  resumeDate: 'Updated Oct 2026',
  profileCompletion: 96,
  phone: '+1 (555) 389-4021',
  portfolio: 'https://rohithnaidu.dev',
  github: 'https://github.com/rohith10ty',
  linkedin: 'https://linkedin.com/in/rohithnaidu'
};

const DEFAULT_APPLIED = [
  {
    jobId: 'job-1',
    appliedAt: '2 days ago',
    timestamp: Date.now() - 172800000,
    status: 'Interview Scheduled',
    statusStep: 3,
    notes: 'Executive video interview scheduled with Founder & Engineering Director.',
    interviewDate: 'Tomorrow at 2:00 PM PST'
  },
  {
    jobId: 'job-3',
    appliedAt: '5 days ago',
    timestamp: Date.now() - 432000000,
    status: 'In Review',
    statusStep: 2,
    notes: 'Application passed preliminary review. Portfolio review in progress.',
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
  // Authentication gate: on starting page, ask to login unless session active
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('quantum_auth_session') === 'true';
  });

  // User state - ensure Rohith's real photo is always used
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('quantum_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          name: 'Rohith Naidu',
          avatar: '/profile.jpg',
        };
      } catch (e) {
        return ROHITH_NAIDU_USER;
      }
    }
    return ROHITH_NAIDU_USER;
  });

  // Saved Jobs - Sanitized strictly against mockJobs so invalid or deleted IDs never cause discrepancies
  const [savedJobIds, setSavedJobIds] = useState(() => {
    const saved = localStorage.getItem('quantum_saved_jobs');
    let list = ['job-1', 'job-2'];
    if (saved) {
      try {
        list = JSON.parse(saved);
      } catch (e) {
        list = ['job-1', 'job-2'];
      }
    }
    // Filter only IDs that actually exist in mockJobs
    const valid = list.filter((id) => mockJobs.some((j) => j.id === id));
    return valid;
  });

  // Applied Jobs
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const saved = localStorage.getItem('quantum_applied_jobs');
    return saved ? JSON.parse(saved) : DEFAULT_APPLIED;
  });

  // Navigation
  const [currentView, setCurrentView] = useState('home');
  
  // Modals
  const [selectedJobForDetails, setSelectedJobForDetails] = useState(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);

  // Search & Filter state
  const [searchFilters, setSearchFilters] = useState(INITIAL_FILTERS);

  // Toasts
  const [toasts, setToasts] = useState([]);

  // Persistence
  useEffect(() => {
    if (user) {
      localStorage.setItem('quantum_user', JSON.stringify(user));
    }
  }, [user]);

  // Persist only valid saved job IDs
  useEffect(() => {
    const validIds = savedJobIds.filter((id) => mockJobs.some((j) => j.id === id));
    localStorage.setItem('quantum_saved_jobs', JSON.stringify(validIds));
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

  const loginWithEmail = (enteredEmail = 'rohithnaidu.com') => {
    const updatedUser = {
      ...ROHITH_NAIDU_USER,
      avatar: '/profile.jpg',
      email: enteredEmail
    };
    setUser(updatedUser);
    setIsAuthenticated(true);
    sessionStorage.setItem('quantum_auth_session', 'true');
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('quantum_auth_session');
    addToast('Logged out. See you soon!', 'info');
  };

  const toggleSaveJob = (jobId) => {
    const job = mockJobs.find((j) => j.id === jobId);
    const jobTitle = job ? job.title : 'Job';

    if (savedJobIds.includes(jobId)) {
      setSavedJobIds((prev) => prev.filter((id) => id !== jobId));
      addToast(`Removed "${jobTitle}" from wishlist`, 'info');
    } else {
      setSavedJobIds((prev) => [...prev, jobId]);
      addToast(`Saved "${jobTitle}" to wishlist`, 'success');
    }
  };

  const applyForJob = (jobId, applicationDetails) => {
    const job = mockJobs.find((j) => j.id === jobId);
    const existing = appliedJobs.find((a) => a.jobId === jobId);

    if (existing) {
      addToast(`You have already applied for ${job ? job.title : 'this role'}.`, 'warning');
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
    addToast(`Successfully applied to ${job ? job.company : 'Company'}!`, 'success', 4500);
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

  // Helper count for valid saved jobs
  const validSavedCount = mockJobs.filter((j) => savedJobIds.includes(j.id)).length;

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        savedJobIds,
        validSavedCount,
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
        isPostJobModalOpen,
        setIsPostJobModalOpen,
        searchFilters,
        setSearchFilters,
        updateSearchFilters,
        resetFilters,
        toasts,
        addToast,
        removeToast,
        loginWithEmail,
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
