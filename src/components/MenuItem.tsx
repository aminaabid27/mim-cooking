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
      className={`group cursor-pointer premium-card ${
        isSelected 
          ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/20 border-amber-400/50 scale-105' 
          : 'hover:bg-white/15'
      } animate-slide-in-up`}
      onClick={() => onToggle(item)}
    >
      <div className="flex items-center gap-4">
        {/* Checkbox */}
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => {
              e.stopPropagation();
              onToggle(item);
            }}
            className="w-6 h-6 cursor-pointer accent-amber-400 rounded border-2 border-amber-400/50"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="font-bold text-lg text-slate-100 group-hover:text-amber-300 smooth-transition">
            {item.name}
          </div>
          {item.day && (
            <div className="text-xs text-amber-300/70 font-semibold uppercase tracking-wider mt-1">
              📅 {item.day}
            </div>
          )}
        </div>

        {/* Price */}
        <div className={`flex-shrink-0 text-right ${isSelected ? 'text-amber-300' : 'text-amber-200'}`}>
          <div className="text-2xl font-black gradient-text">
            Rs. {item.price}
          </div>
        </div>
      </div>
    </div>
  );
}
