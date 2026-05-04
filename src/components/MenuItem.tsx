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
      className="flex items-center gap-3 p-3 border-b border-amber-100 hover:bg-amber-50 transition-colors"
      onClick={() => onToggle(item)}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => {
          e.stopPropagation();
          onToggle(item);
        }}
        className="w-5 h-5 cursor-pointer accent-amber-600"
      />
      <div className="flex-1">
        <div className="font-medium text-gray-800">{item.name}</div>
        {item.day && (
          <div className="text-xs text-amber-700 font-semibold">{item.day}</div>
        )}
      </div>
      <div className="font-bold text-amber-800 text-lg whitespace-nowrap">
        Rs. {item.price}
      </div>
    </div>
  );
}
