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
    <div
      className={`group cursor-pointer premium-card px-3 py-3 sm:px-4 sm:py-4 ${
        isSelected 
          ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/20 border-amber-400/50 scale-[1.02] sm:scale-105 shadow-amber-500/20' 
          : 'hover:bg-white/15'
      } animate-slide-in-up transition-all duration-300`}
      onClick={() => onToggle(item)}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Checkbox - Always visible on side */}
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            checked={isSelected}
            readOnly
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer accent-amber-400 rounded border-2 border-amber-400/50"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm sm:text-lg text-slate-100 group-hover:text-amber-300 smooth-transition truncate">
            {item.name}
          </div>
          {item.day && (
            <div className="text-[10px] sm:text-xs text-amber-300/70 font-semibold uppercase tracking-wider mt-0.5">
              📅 {item.day}
            </div>
          )}
        </div>

        {/* Price */}
        <div className={`flex-shrink-0 text-right ${isSelected ? 'text-amber-300' : 'text-amber-200'}`}>
          <div className="text-base sm:text-2xl font-black gradient-text">
            Rs. {item.price}
          </div>
        </div>
      </div>
    </div>
  );
}
