import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterCTA() {
  const { addToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid work email', 'warning');
      return;
    }
    setSubscribed(true);
    addToast('Subscribed to Quantum Executive Job Alerts!', 'success');
    setEmail('');
  };

  return (
    <section className="py-20 bg-cream-100 border-t border-cream-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-950 text-cream-50 rounded-3xl p-8 sm:p-12 border border-royal-900 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Hexagon Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-royal-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-900/80 border border-royal-700/60 text-xs text-royal-200 font-semibold">
              <Mail className="w-3.5 h-3.5 text-royal-400" />
              <span>Weekly Quantum Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream-50 tracking-tight">
              Get notified the second elite roles open up.
            </h2>

            <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
              Curated digest of top engineering, design, and executive leadership positions with verified compensation packages delivered directly to your inbox every Tuesday morning.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-royal-900/80 border border-royal-700 text-cream-100 text-sm font-semibold animate-in zoom-in-95">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>You're subscribed! Keep an eye out for this week’s confidential brief.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email address..."
                  className="flex-1 px-4 py-3.5 rounded-full bg-royal-900/90 border border-royal-700 text-sm text-cream-50 placeholder-cream-400/50 focus:outline-none focus:border-royal-400 font-medium"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-cream-50 text-royal-950 hover:bg-cream-200 font-bold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-1.5 group shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}

            <p className="text-[11px] text-cream-400">
              Zero spam. Strict privacy. Unsubscribe at any time with one click.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
