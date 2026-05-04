'use client';

import { MenuItem } from '@/types';
import MenuItemComponent from './MenuItem';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  selectedIds: Set<string>;
  onToggle: (item: MenuItem) => void;
}

export default function MenuSection({
  title,
  items,
  selectedIds,
  onToggle,
}: MenuSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4 pb-3 border-b-2 border-amber-600">
        {title}
      </h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {items.map((item) => (
          <MenuItemComponent
            key={item.id}
            item={item}
            isSelected={selectedIds.has(item.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
}
