import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import Logo from './Logo';
import { 
  Bookmark, 
  User, 
  Menu, 
  X, 
  Briefcase, 
  LogOut, 
  PlusCircle,
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const { 
    currentView, 
    navigateTo, 
    savedJobIds, 
    user, 
    logoutUser, 
    setIsPostJobModalOpen 
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    if (userDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'jobs', label: 'Find Jobs' },
    { id: 'companies', label: 'Companies' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (viewId) => {
    navigateTo(viewId);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md border-b border-cream-300/80 shadow-xs'
          : 'bg-transparent border-b border-cream-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with ⬢ Symbol in Royal Blue */}
          <div onClick={() => handleNavClick('home')}>
            <Logo size="md" showTagline={false} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-royal-800 text-cream-50 shadow-xs'
                      : 'text-royal-900/80 hover:text-royal-950 hover:bg-cream-200/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Wishlist / Saved Jobs Button */}
            <button
              onClick={() => handleNavClick('saved')}
              className={`relative flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-full border transition-all cursor-pointer ${
                currentView === 'saved'
                  ? 'border-royal-800 bg-royal-100/60 text-royal-900'
                  : 'border-cream-300 hover:border-royal-400 bg-cream-50/80 text-royal-900 hover:bg-cream-100'
              }`}
              title="View Saved Jobs"
            >
              <Bookmark className="w-4 h-4 text-royal-800" />
              <span className="hidden lg:inline text-xs font-semibold">Wishlist</span>
              {savedJobIds.length > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[11px] font-bold bg-royal-800 text-cream-50 rounded-full">
                  {savedJobIds.length}
                </span>
              )}
            </button>

            {/* Candidate Profile: Rohith Naidu (Closes when clicking outside) */}
            {user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full border border-cream-300 hover:border-royal-400 bg-cream-50/90 transition-all cursor-pointer"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 rounded-full object-cover border border-royal-700/30"
                  />
                  <div className="text-left">
                    <p className="text-xs font-bold text-royal-950 leading-tight">
                      {user.name.split(' ')[0]}
                    </p>
                    <p className="text-[10px] text-royal-700 leading-tight">Candidate</p>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-royal-800 ml-0.5" />
                </button>

                {/* Dropdown Menu - Closes when clicking anywhere outside */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-cream-50 rounded-2xl border border-cream-300 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2 border-b border-cream-200">
                      <p className="text-xs font-bold text-royal-950">{user.name}</p>
                      <p className="text-[11px] text-royal-700/70 truncate">{user.email}</p>
                    </div>

                    <button
                      onClick={() => handleNavClick('dashboard')}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-royal-900 hover:bg-royal-100/60 transition-colors text-left cursor-pointer"
                    >
                      <Briefcase className="w-4 h-4 text-royal-800" />
                      Candidate Dashboard
                    </button>

                    <button
                      onClick={() => handleNavClick('saved')}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-royal-900 hover:bg-royal-100/60 transition-colors text-left cursor-pointer"
                    >
                      <Bookmark className="w-4 h-4 text-royal-800" />
                      Saved Jobs ({savedJobIds.length})
                    </button>

                    <div className="border-t border-cream-200 my-1" />

                    <button
                      onClick={() => {
                        logoutUser();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-700 hover:bg-rose-50 transition-colors text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Post a Job button (Opens sleek, properly-sized PostJobModal) */}
            <button
              onClick={() => setIsPostJobModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-cream-200/80 hover:bg-royal-800 hover:text-cream-50 text-royal-900 border border-cream-300 transition-all cursor-pointer shadow-2xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post a Job</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('saved')}
              className="p-2 rounded-xl text-royal-900 hover:bg-cream-200 relative"
              aria-label="Wishlist"
            >
              <Bookmark className="w-5 h-5 text-royal-800" />
              {savedJobIds.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-royal-800 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-royal-900 hover:bg-cream-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cream-300 bg-cream-50 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium text-left ${
                  currentView === link.id
                    ? 'bg-royal-800 text-cream-50'
                    : 'bg-cream-200/50 text-royal-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-cream-200 flex flex-col gap-2">
            {user ? (
              <>
                <button
                  onClick={() => handleNavClick('dashboard')}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-royal-100/50 text-royal-900 text-sm font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover" />
                    <span>Rohith's Dashboard</span>
                  </div>
                  <span className="text-xs text-royal-700 font-semibold">View</span>
                </button>
                <button
                  onClick={() => {
                    setIsPostJobModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-royal-800 text-cream-50 text-xs font-bold"
                >
                  Post a Job
                </button>
                <button
                  onClick={() => {
                    logoutUser();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 text-xs font-semibold text-rose-700 bg-rose-50 rounded-xl"
                >
                  Sign Out
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
}
