import React from 'react';
import { 
  ShieldCheck, 
  Coins, 
  Sparkles, 
  Lock, 
  Zap, 
  Users 
} from 'lucide-react';

export default function WhyQuantum() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Verified Opportunities Only',
      desc: 'Zero spam, ghost jobs, or stale listings. Every opening is audited directly with verified hiring leaders and talent executives.'
    },
    {
      icon: Coins,
      title: 'Transparent Compensation',
      desc: 'Strict pay equity and salary transparency standard. We reject any posting without clear base, equity, and bonus bands.'
    },
    {
      icon: Zap,
      title: 'Direct Fast-Track Pipeline',
      desc: 'Skip automated ATS resume scrapers. Quantum candidates enter prioritized review queues directly with engineering managers.'
    },
    {
      icon: Lock,
      title: 'Confidential Discretion',
      desc: 'Explore opportunities without notifying your current employer. Control exactly who sees your resume and portfolio.'
    }
  ];

  return (
    <section className="py-20 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-royal-800">
            The Quantum Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight mt-2">
            Engineered for high-caliber careers
          </h2>
          <p className="text-royal-800/70 text-sm sm:text-base mt-2">
            We are building a radically better way to navigate modern tech and executive employment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-cream-100 border border-cream-300 hover:border-royal-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-800 text-cream-50 flex items-center justify-center mb-5 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-royal-950 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-royal-900/75 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
