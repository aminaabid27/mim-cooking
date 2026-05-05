'use client';

import { MenuItem } from '@/types';

interface MenuItemProps {
  item: MenuItem;
  isSelected: boolean;
  onToggle: (item: MenuItem) => void;
}

export default function MenuItemComponent({
  item,
  isSelected,
  onToggle,
}: MenuItemProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={() => onToggle(item)}
      className={`group w-full cursor-pointer text-left premium-card px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:px-4 sm:py-4 ${
        isSelected 
          ? 'border-amber-300/70 bg-gradient-to-r from-amber-500/30 to-orange-500/20 shadow-amber-500/20' 
          : 'hover:bg-white/15'
      } animate-slide-in-up transition-all duration-300`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-x-4">
        <div
          aria-hidden="true"
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 sm:mt-0 ${
            isSelected
              ? 'border-amber-300 bg-amber-400 text-slate-950'
              : 'border-amber-300/60 bg-white/5 text-transparent'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </div>

        <div className="min-w-0">
          <div className="break-words text-base font-bold leading-snug text-slate-100 smooth-transition group-hover:text-amber-300 sm:text-lg">
            {item.name}
          </div>
          {item.day && (
            <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-300/75">
              📅 {item.day}
            </div>
          )}
        </div>

        <div className={`col-start-2 justify-self-start rounded-full bg-slate-950/35 px-3 py-1.5 text-left sm:col-start-auto sm:justify-self-end sm:bg-transparent sm:px-0 sm:py-0 sm:text-right ${isSelected ? 'text-amber-300' : 'text-amber-200'}`}>
          <div className="whitespace-nowrap text-lg font-black sm:text-2xl">
            Rs. {item.price}
          </div>
        </div>
      </div>
    </button>
  );
}
