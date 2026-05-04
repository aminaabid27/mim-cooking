'use client';

import { MenuItem } from '@/types';
import MenuItemComponent from './MenuItem';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  selectedIds: Set<string>;
  onToggle: (item: MenuItem) => void;
}

const sectionEmojis: Record<string, string> = {
  'Frozen Items': '🧊',
  'Italian Favourites': '🇮🇹',
  'Cooked Dishes': '🍲',
  'Lunch Menu': '🥗',
  'Dinner Menu': '🍽️',
};

export default function MenuSection({
  title,
  items,
  selectedIds,
  onToggle,
}: MenuSectionProps) {
  const emoji = sectionEmojis[title] || '🍳';
  const selectedCount = items.filter((item) => selectedIds.has(item.id)).length;

  return (
    <section className="mb-8 sm:mb-12 animate-slide-in-up">
      {/* Section Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <span className="text-3xl sm:text-4xl">{emoji}</span>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-4xl font-black gradient-text">{title}</h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2"></div>
          </div>
          {selectedCount > 0 && (
            <div className="glass-effect px-3 py-2 rounded-full mt-2 sm:mt-0">
              <span className="text-amber-300 font-bold text-xs sm:text-base">{selectedCount} selected</span>
            </div>
          )}
        </div>
      </div>

      {/* Items List (stacked for mobile) */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} style={{ animationDelay: `${index * 50}ms` }}>
            <MenuItemComponent
              item={item}
              isSelected={selectedIds.has(item.id)}
              onToggle={onToggle}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
