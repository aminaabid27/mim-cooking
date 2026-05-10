'use client';

import { MenuItem } from '@/types';
import MenuItemComponent from './MenuItem';

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItem[];
  selectedIds: Set<string>;
  onToggle: (item: MenuItem) => void;
  onDownloadClick: () => void;
}

const sectionEmojis: Record<string, string> = {
  'Frozen Items': '🧊',
  'Italian Favourites': '🇮🇹',
  'Cooked Dishes': '🍲',
  'Lunch Menu': '🥗',
  'Dinner Menu': '🍽️',
};

export default function MenuSection({
  id,
  title,
  items,
  selectedIds,
  onToggle,
  onDownloadClick,
}: MenuSectionProps) {
  const emoji = sectionEmojis[title] || '🍳';
  const selectedCount = items.filter((item) => selectedIds.has(item.id)).length;

  return (
    <section id={id} className="scroll-mt-24 animate-slide-in-up sm:scroll-mt-28">
      <div className="mb-4 sm:mb-5">
        <div className="flex flex-wrap items-start gap-3 sm:items-center">
          <span className="shrink-0 text-3xl leading-none sm:text-4xl" aria-hidden="true">
            {emoji}
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-black leading-tight sm:text-4xl">{title}</h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 sm:w-24"></div>
          </div>
          {selectedCount > 0 && (
            <div className="glass-effect shrink-0 rounded-full px-3 py-2">
              <span className="text-xs font-bold text-amber-300 sm:text-base">
                {selectedCount} selected
              </span>
            </div>
          )}
          <button
            type="button"
            onClick={onDownloadClick}
            className="glass-effect min-h-10 shrink-0 rounded-xl px-3 py-2 text-xs font-bold text-amber-200 transition-colors hover:bg-amber-400/15 hover:text-amber-100 sm:text-sm"
          >
            Download menu
          </button>
        </div>
      </div>

      <div className="space-y-2.5">
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
