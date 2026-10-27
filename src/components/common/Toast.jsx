import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useApp();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = Info;
        let bg = 'bg-royal-900 text-cream-50 border-royal-700';

        if (toast.type === 'success') {
          Icon = CheckCircle2;
          bg = 'bg-royal-950 text-cream-50 border-royal-600 shadow-xl shadow-royal-950/20';
        } else if (toast.type === 'warning' || toast.type === 'error') {
          Icon = AlertCircle;
          bg = 'bg-amber-950 text-cream-50 border-amber-800';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-lg transition-all duration-300 animate-in slide-in-from-bottom-2 ${bg}`}
          >
            <div className="flex items-center gap-2.5 text-sm font-medium">
              <Icon className="w-5 h-5 shrink-0 text-royal-300" />
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded-lg hover:bg-white/10 text-cream-200/70 hover:text-white transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
