import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function GlassyLoginModal() {
  const { loginWithEmail, addToast } = useApp();
  const [email, setEmail] = useState('rohithnaidu.com');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      loginWithEmail(email || 'rohithnaidu.com');
      setIsSubmitting(false);
      addToast(`Welcome back, Rohith Naidu! Accessing Quantum platform...`, 'success');
    }, 400);
  };

  const handleSocial = (provider) => {
    setIsSubmitting(true);
    setTimeout(() => {
      loginWithEmail('rohithnaidu.com');
      setIsSubmitting(false);
      addToast(`Connected with ${provider}. Welcome back, Rohith!`, 'success');
    }, 350);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center select-none bg-gradient-to-br from-[#050C1F] via-[#0E1F4D] to-[#1E3A8A]">
      
      {/* Ambient Royal Blue & Frosted Specular Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[25%] w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,transparent_65%)] blur-[90px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-[15%] right-[20%] w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(30,58,138,0.35)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Subtle Geometric Hexagon Backdrop */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="login-hex" width="80" height="138.56" patternUnits="userSpaceOnUse">
                <path
                  d="M40 0 L80 23.09 L80 69.28 L40 92.37 L0 69.28 L0 23.09 Z M40 46.19 L80 69.28 L80 115.47 L40 138.56 L0 115.47 L0 69.28 Z"
                  fill="none"
                  stroke="#FAF7F0"
                  strokeWidth="1.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#login-hex)" />
          </svg>
        </div>
      </div>

      {/* Audix #132 Precision Glassy Login Card */}
      <div className="relative z-20 w-[356px] h-[376px] flex items-center justify-center backdrop-blur-2xl">
        
        {/* Unified SVG Vector Base with Cut Corners and Specular Glow */}
        <svg
          className="absolute -inset-3.5 w-[calc(100%+30px)] h-[calc(100%+30px)] pointer-events-none z-10 overflow-visible"
          viewBox="-15 -15 386 406"
        >
          <defs>
            <linearGradient id="quantumBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#FAF7F0" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="quantumCornerCap" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.45" />
            </linearGradient>

            <filter id="quantumCornerGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#60A5FA" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Card Surface with Royal Blue Glass Fill and Specular Stroke */}
          <path
            d="M 34 0 L 334 0 A 22 22 0 0 1 356 22 L 356 342 L 322 376 L 22 376 A 22 22 0 0 1 0 354 L 0 34 Z"
            fill="rgba(11, 22, 53, 0.88)"
            stroke="url(#quantumBorderGrad)"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_24px_60px_rgba(3,8,22,0.95)]"
          />

          {/* Floating Glass Corner Bracket - Top Left */}
          <path
            d="M -7 22 L -7 0 A 7 7 0 0 1 0 -7 L 22 -7 L -7 22 Z"
            fill="rgba(255, 255, 255, 0.08)"
            stroke="url(#quantumCornerCap)"
            strokeWidth="1.4"
            filter="url(#quantumCornerGlow)"
          />

          {/* Floating Glass Corner Bracket - Bottom Right */}
          <path
            d="M 363 354 L 363 376 A 7 7 0 0 1 356 383 L 334 383 L 363 354 Z"
            fill="rgba(255, 255, 255, 0.08)"
            stroke="url(#quantumCornerCap)"
            strokeWidth="1.4"
            filter="url(#quantumCornerGlow)"
          />
        </svg>

        {/* Content Container (Compact, perfectly proportioned, no scrolling) */}
        <div className="absolute inset-0 z-20 p-7 flex flex-col justify-between bg-transparent">
          
          {/* 1. Header with Hexagon Symbol ⬢ */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="text-xl text-[#60A5FA]" aria-hidden="true">⬢</span>
              <span className="font-black text-sm tracking-widest text-cream-50 font-sans">
                QUANTUM
              </span>
            </div>
            <h1 className="text-[20px] font-extrabold tracking-tight text-white leading-tight">
              Welcome back
            </h1>
            <p className="text-[11px] text-royal-200/80 mt-0.5 font-normal">
              Sign in to access verified executive opportunities
            </p>
          </div>

          {/* 2. Three Social Login Buttons (Google, Apple, GitHub) */}
          <div className="grid grid-cols-3 gap-2.5 mt-1">
            {/* Google */}
            <button
              type="button"
              onClick={() => handleSocial('Google')}
              disabled={isSubmitting}
              className="h-[44px] flex items-center justify-center rounded-[14px] bg-[#0F1B3E] border border-white/12 hover:bg-[#162758] hover:border-white/30 text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              title="Sign in with Google"
            >
              <svg className="w-5 h-5 shrink-0 block" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </button>

            {/* Apple */}
            <button
              type="button"
              onClick={() => handleSocial('Apple')}
              disabled={isSubmitting}
              className="h-[44px] flex items-center justify-center rounded-[14px] bg-[#0F1B3E] border border-white/12 hover:bg-[#162758] hover:border-white/30 text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              title="Sign in with Apple"
            >
              <svg className="w-5 h-5 shrink-0 block fill-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.67-.82 1.13-1.96.99-3.1-.98.04-2.18.67-2.88 1.49-.62.72-1.16 1.88-1.01 2.98 1.1.08 2.22-.56 2.9-1.37z"/>
              </svg>
            </button>

            {/* GitHub */}
            <button
              type="button"
              onClick={() => handleSocial('GitHub')}
              disabled={isSubmitting}
              className="h-[44px] flex items-center justify-center rounded-[14px] bg-[#0F1B3E] border border-white/12 hover:bg-[#162758] hover:border-white/30 text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              title="Sign in with GitHub"
            >
              <svg className="w-5 h-5 shrink-0 block fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </button>
          </div>

          {/* 3. Divider */}
          <div className="flex items-center gap-2.5 my-1">
            <span className="flex-1 h-px bg-white/12" />
            <span className="font-mono text-[9px] font-semibold tracking-wider uppercase text-royal-200">
              OR CONTINUE WITH EMAIL
            </span>
            <span className="flex-1 h-px bg-white/12" />
          </div>

          {/* 4. Single Email Input with Inline Circular Arrow Button (Pre-filled with rohithnaidu.com) */}
          <form onSubmit={handleEmailSubmit}>
            <div className="relative bg-[#0F1B3E] border border-white/14 rounded-2xl flex items-center pl-3.5 pr-1.5 py-1.5 focus-within:border-white focus-within:bg-[#152452] focus-within:shadow-[0_0_18px_rgba(96,165,250,0.3)] transition-all">
              <svg className="w-4 h-4 text-royal-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="rohithnaidu.com"
                className="w-full bg-transparent border-none outline-none px-2.5 text-[13px] text-white placeholder:text-zinc-400 font-medium"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-8.5 h-8.5 rounded-full bg-cream-50 text-royal-950 flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-all shadow-[0_3px_10px_rgba(255,255,255,0.25)] hover:bg-white cursor-pointer"
                title="Sign In to Quantum"
              >
                {isSubmitting ? (
                  <div className="w-3.5 h-3.5 border-2 border-royal-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                )}
              </button>
            </div>
          </form>

          {/* 5. Terms Footer */}
          <p className="text-center text-[10px] text-royal-300/70 leading-relaxed pt-0.5">
            By clicking continue, you agree to Quantum’s <span className="text-cream-100 underline">Terms of Service</span> and <span className="text-cream-100 underline">Privacy Policy</span>.
          </p>

        </div>
      </div>

    </div>
  );
}
