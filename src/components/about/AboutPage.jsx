import React from 'react';
import { useApp } from '../../context/AppContext';
import Logo from '../common/Logo';
import { 
  ShieldCheck, 
  Target, 
  Sparkles, 
  Users, 
  Compass, 
  Award, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function AboutPage() {
  const { navigateTo } = useApp();

  const values = [
    {
      title: 'Precision Over Volume',
      desc: 'We refuse to flood candidates with irrelevant listings. Every role is rigorously calibrated for senior engineers, designers, and strategic operators.'
    },
    {
      title: 'Absolute Transparency',
      desc: 'No vague salary bands or bait-and-switch titles. All compensation ranges, equity terms, and remote policies are explicitly vetted before publication.'
    },
    {
      title: 'Respect for Candidate Dignity',
      desc: 'We believe career transitions deserve care. No ghosting, no 8-round generic ATS black holes—direct accountability with engineering leads.'
    },
    {
      title: 'Aesthetic & Architectural Craft',
      desc: 'A minimal, fast, and elegant interface honoring the standards of the software leaders and designers who rely on our network daily.'
    }
  ];

  return (
    <div className="py-16 bg-cream-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50 border border-cream-300 text-xs font-bold text-royal-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Quantum Manifesto</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-royal-950 tracking-tight leading-tight">
            Reimagining how the world’s top minds connect with enduring work.
          </h1>

          <p className="text-base sm:text-lg text-royal-900/80 leading-relaxed">
            Founded with the conviction that executive recruitment and senior tech hiring are fundamentally broken, Quantum is building the career ecosystem we always wished existed.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-cream-50 rounded-3xl border border-cream-300 p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-royal-800">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-royal-950 tracking-tight">
              A bespoke career platform with zero compromises.
            </h2>
            <p className="text-sm text-royal-900/80 leading-relaxed">
              Modern talent platforms have become bloated advertising mills filled with AI spam and ghost jobs. Quantum was created in contrast: a clean, quiet space built on mutual respect and guaranteed quality.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <p className="text-2xl font-black text-royal-950">98.4%</p>
                <p className="text-xs text-royal-700">Interview Acceptance</p>
              </div>
              <div className="w-px h-8 bg-cream-300" />
              <div>
                <p className="text-2xl font-black text-royal-950">14 Days</p>
                <p className="text-xs text-royal-700">Average Time-to-Offer</p>
              </div>
              <div className="w-px h-8 bg-cream-300" />
              <div>
                <p className="text-2xl font-black text-royal-950">$215k</p>
                <p className="text-xs text-royal-700">Median Staff Package</p>
              </div>
            </div>
          </div>

          <div className="bg-royal-950 text-cream-50 p-8 rounded-2xl border border-royal-900 relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" inverted={true} />
            </div>
            <p className="text-xs text-cream-200 leading-relaxed font-light">
              "When you build software for people who care deeply about craft, every pixel and every interaction matters. Quantum is our testament to that philosophy."
            </p>
            <div className="pt-2 border-t border-royal-800 flex items-center justify-between text-xs text-royal-300">
              <span>Elena Rostova & Alex Morgan</span>
              <span>Founding Team</span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-royal-800">
              Principles
            </span>
            <h2 className="text-3xl font-extrabold text-royal-950 tracking-tight">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-cream-50 p-8 rounded-2xl border border-cream-300 space-y-2"
              >
                <div className="w-8 h-8 rounded-xl bg-royal-100 text-royal-800 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-royal-950">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-royal-900/75 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-royal-800 text-cream-50 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready to find your next great role?
          </h2>
          <p className="text-cream-200 text-sm max-w-md mx-auto">
            Join thousands of senior professionals navigating their careers through Quantum.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigateTo('jobs')}
              className="px-8 py-3.5 rounded-full bg-cream-50 text-royal-950 font-bold text-xs hover:bg-cream-200 transition-colors shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Explore All Jobs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
