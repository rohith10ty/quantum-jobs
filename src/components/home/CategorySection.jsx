import React from 'react';
import { useApp } from '../../context/AppContext';
import { mockCategories } from '../../data/mockCategories';
import { 
  Code2, 
  BrainCircuit, 
  Palette, 
  Megaphone, 
  BadgePercent, 
  Users, 
  Layers, 
  Cloud, 
  ArrowUpRight 
} from 'lucide-react';

const iconMap = {
  Code2,
  BrainCircuit,
  Palette,
  Megaphone,
  BadgePercent,
  Users,
  Layers,
  Cloud
};

export default function CategorySection() {
  const { navigateTo } = useApp();

  const handleCategorySelect = (categorySlug) => {
    navigateTo('jobs', { category: categorySlug });
  };

  return (
    <section className="py-20 bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal-800 mb-2">
              <span className="w-2 h-2 rounded-full bg-royal-800" />
              <span>Explore Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight">
              Browse by Job Category
            </h2>
            <p className="text-royal-800/70 text-sm sm:text-base mt-1 max-w-xl">
              Discover opportunities engineered for your specialization, from deep tech AI to executive strategy.
            </p>
          </div>

          <button
            onClick={() => navigateTo('jobs')}
            className="self-start md:self-auto text-sm font-bold text-royal-800 hover:text-royal-950 flex items-center gap-1.5 group cursor-pointer"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mockCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Code2;

            return (
              <div
                key={cat.id}
                onClick={() => handleCategorySelect(cat.slug)}
                className="group relative bg-cream-50 p-6 rounded-2xl border border-cream-300 hover:border-royal-800 hover:shadow-xl hover:shadow-royal-950/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-royal-50 group-hover:bg-royal-800 text-royal-800 group-hover:text-cream-50 flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cream-200/70 text-royal-900 group-hover:bg-royal-100 transition-colors">
                      {cat.count} jobs
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-royal-950 group-hover:text-royal-800 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-royal-800/70 mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-cream-200 flex flex-wrap gap-1.5">
                  {cat.featuredSkills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-cream-100 text-royal-900"
                    >
                      {skill}
                    </span>
                  ))}
                  {cat.featuredSkills.length > 3 && (
                    <span className="text-[10px] text-royal-700/60 font-medium self-center">
                      +{cat.featuredSkills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
