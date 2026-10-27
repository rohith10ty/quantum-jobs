import React from 'react';
import Logo from './Logo';
import { useApp } from '../../context/AppContext';
import { 
  ArrowUpRight, 
  ShieldCheck
} from 'lucide-react';

function GithubIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function DribbbleIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

export default function Footer() {
  const { navigateTo } = useApp();

  return (
    <footer className="bg-royal-950 text-cream-100 border-t border-royal-900/60 transition-colors">
      {/* Top Banner / Value Proposition */}
      <div className="border-b border-royal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-royal-300 font-semibold">
                Next-Gen Career Intelligence
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-cream-50 tracking-tight">
                Ready to make your quantum leap?
              </h3>
              <p className="text-cream-300 text-xs sm:text-sm max-w-xl">
                Explore hand-curated roles at verified technology pioneers, high-growth startups, and visionary research labs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('jobs')}
                className="px-5 py-2.5 rounded-full bg-cream-50 text-royal-950 font-bold text-xs hover:bg-cream-200 transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 group"
              >
                <span>Browse All Roles</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div onClick={() => navigateTo('home')}>
              <Logo size="lg" inverted={true} showTagline={true} />
            </div>
            <p className="text-cream-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Quantum is the premier tech and executive career ecosystem. Connecting elite engineers, designers, and leaders with opportunities built for impact.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/rohith10ty"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-royal-900/80 hover:bg-royal-800 text-cream-200 hover:text-white flex items-center justify-center border border-royal-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-royal-900/80 hover:bg-royal-800 text-cream-200 hover:text-white flex items-center justify-center border border-royal-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-royal-900/80 hover:bg-royal-800 text-cream-200 hover:text-white flex items-center justify-center border border-royal-800 transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-royal-900/80 hover:bg-royal-800 text-cream-200 hover:text-white flex items-center justify-center border border-royal-800 transition-colors"
                aria-label="Dribbble"
              >
                <DribbbleIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-royal-300/80 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Employers & Transparent Packages</span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-royal-200">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li>
                <button
                  onClick={() => navigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Explore All Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('companies')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Companies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('saved')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Saved Wishlist
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('dashboard')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Candidate Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-royal-200">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li>
                <button
                  onClick={() => navigateTo('jobs', { category: 'software-development' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jobs', { category: 'data-science' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Data Science & AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jobs', { category: 'ui-ux-design' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  UI/UX & Product Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jobs', { category: 'finance' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Finance & Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jobs', { category: 'marketing' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Growth & Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-royal-200">
              Quantum
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Quantum
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Manifesto
                </button>
              </li>
              <li>
                <span className="text-cream-400">Careers at Quantum (Hiring)</span>
              </li>
              <li>
                <span className="text-cream-400">Security & Privacy Policy</span>
              </li>
              <li>
                <span className="text-cream-400">Terms of Service</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Tight spacing below company name */}
        <div className="mt-8 pt-4 border-t border-royal-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-royal-400 pb-2">
          <p>© 2026 Quantum Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 text-cream-300/80">
            <span>Designed with precision in</span>
            <span className="text-royal-300 font-semibold">Royal Blue & Cream</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
