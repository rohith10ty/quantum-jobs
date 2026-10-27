import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { mockCategories } from '../../data/mockCategories';
import confetti from 'canvas-confetti';
import { X, PlusCircle, CheckCircle2, Building, DollarSign, MapPin } from 'lucide-react';

export default function PostJobModal() {
  const { isPostJobModalOpen, setIsPostJobModalOpen, addToast, user } = useApp();

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('software-development');
  const [location, setLocation] = useState('Bengaluru, Karnataka (Hybrid)');
  const [salary, setSalary] = useState('₹35,00,000 - ₹55,00,000 LPA + Equity');
  const [jobType, setJobType] = useState('Full-time');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isPostJobModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !company.trim()) {
      addToast('Please provide a job title and company name', 'warning');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsPostJobModalOpen(false);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#1E3A8A', '#3B82F6', '#FAF7F0']
      });

      addToast(`Position "${title}" published successfully!`, 'success');
      setTitle('');
      setCompany('');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-royal-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* Properly sized, compact card (max-w-md, no overflow cutoffs) */}
      <div 
        className="relative w-full max-w-md bg-cream-50 rounded-2xl border border-cream-300 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-cream-100/70 border-b border-cream-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base text-royal-800" aria-hidden="true">⬢</span>
            <h3 className="text-sm font-bold text-royal-950 uppercase tracking-wider">
              Post an Executive Role
            </h3>
          </div>
          <button
            onClick={() => setIsPostJobModalOpen(false)}
            className="p-1 rounded-lg hover:bg-cream-200 text-royal-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          
          <div>
            <label className="block text-[11px] font-bold text-royal-950 uppercase tracking-wider mb-1">
              Role Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Senior Staff Frontend Architect"
              className="w-full px-3 py-2 rounded-xl bg-cream-100/70 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-royal-950 uppercase tracking-wider mb-1">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Quantum Labs"
                className="w-full px-3 py-2 rounded-xl bg-cream-100/70 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-royal-950 uppercase tracking-wider mb-1">
                Domain / Sector
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-cream-100/70 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800 cursor-pointer"
              >
                {mockCategories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-royal-950 uppercase tracking-wider mb-1">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Bengaluru, India or Remote"
                className="w-full px-3 py-2 rounded-xl bg-cream-100/70 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-royal-950 uppercase tracking-wider mb-1">
                Commitment
              </label>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-cream-100/70 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800 cursor-pointer"
              >
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-royal-950 uppercase tracking-wider mb-1">
              Compensation Package
            </label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g. ₹35,00,000 - ₹55,00,000 LPA + Equity"
              className="w-full px-3 py-2 rounded-xl bg-cream-100/70 border border-cream-300 text-xs font-semibold text-royal-950 focus:outline-none focus:border-royal-800"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsPostJobModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-cream-300 text-xs font-bold text-royal-800 hover:bg-cream-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-xl bg-royal-800 hover:bg-royal-900 text-cream-50 text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              {isSubmitting ? (
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <PlusCircle className="w-3.5 h-3.5" />
              )}
              <span>Publish Role</span>
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}
