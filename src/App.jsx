import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { useLenis } from './utils/useLenis';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';

// Home Sections
import HeroSection from './components/home/HeroSection';
import CategorySection from './components/home/CategorySection';
import FeaturedJobsSection from './components/home/FeaturedJobsSection';
import PopularCompaniesSection from './components/home/PopularCompaniesSection';
import WhyQuantum from './components/home/WhyQuantum';
import NewsletterCTA from './components/home/NewsletterCTA';

// Page Views
import JobsPage from './components/jobs/JobsPage';
import CompaniesPage from './components/companies/CompaniesPage';
import AboutPage from './components/about/AboutPage';
import SavedJobsPage from './components/jobs/SavedJobsPage';
import CandidateDashboard from './components/dashboard/CandidateDashboard';

// Modals
import JobDetailsModal from './components/jobs/JobDetailsModal';
import ApplyModal from './components/jobs/ApplyModal';
import AuthModal from './components/auth/AuthModal';

function MainLayout() {
  const { currentView } = useApp();

  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-royal-950 font-sans selection:bg-royal-800 selection:text-cream-50">
      
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection />
            <CategorySection />
            <FeaturedJobsSection />
            <PopularCompaniesSection />
            <WhyQuantum />
            <NewsletterCTA />
          </>
        )}

        {currentView === 'jobs' && <JobsPage />}
        {currentView === 'companies' && <CompaniesPage />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'saved' && <SavedJobsPage />}
        {currentView === 'dashboard' && <CandidateDashboard />}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <JobDetailsModal />
      <ApplyModal />
      <AuthModal />

      {/* Toast Notifications */}
      <Toast />

    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
