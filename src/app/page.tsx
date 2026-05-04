'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import MenuSection from '@/components/MenuSection';
import OrderSummary from '@/components/OrderSummary';
import { MenuItem } from '@/types';
import {
  lunchMenu,
  dinnerMenu,
  frozenItems,
  cookedDishes,
  italianFavourites,
} from '@/data/menu';

export default function Home() {
  const [selectedItemIds, setSelectedItemIds] = useState<Set<string>>(new Set());

  const allMenuItems = useMemo(
    () => [
      ...frozenItems,
      ...italianFavourites,
      ...cookedDishes,
      ...lunchMenu,
      ...dinnerMenu,
    ],
    []
  );

  const selectedItems = useMemo(
    () =>
      Array.from(selectedItemIds)
        .map((id) => allMenuItems.find((item) => item.id === id))
        .filter((item): item is MenuItem => item !== undefined),
    [selectedItemIds, allMenuItems]
  );

  const handleToggle = (item: MenuItem) => {
    const newSelected = new Set(selectedItemIds);
    if (newSelected.has(item.id)) {
      newSelected.delete(item.id);
    } else {
      newSelected.add(item.id);
    }
    setSelectedItemIds(newSelected);
  };

  const handleRemove = (itemId: string) => {
    const newSelected = new Set(selectedItemIds);
    newSelected.delete(itemId);
    setSelectedItemIds(newSelected);
  };

  const handleClearAll = () => {
    setSelectedItemIds(new Set());
  };

  return (
    <main className="min-h-screen relative">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-5 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-5 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Menu Sections - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <MenuSection
                title="Frozen Items"
                items={frozenItems}
                selectedIds={selectedItemIds}
                onToggle={handleToggle}
              />

              <MenuSection
                title="Italian Favourites"
                items={italianFavourites}
                selectedIds={selectedItemIds}
                onToggle={handleToggle}
              />

              <MenuSection
                title="Cooked Dishes"
                items={cookedDishes}
                selectedIds={selectedItemIds}
                onToggle={handleToggle}
              />

              <MenuSection
                title="Lunch Menu"
                items={lunchMenu}
                selectedIds={selectedItemIds}
                onToggle={handleToggle}
              />

              <MenuSection
                title="Dinner Menu"
                items={dinnerMenu}
                selectedIds={selectedItemIds}
                onToggle={handleToggle}
              />
            </div>

            {/* Order Summary - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <OrderSummary
                  selectedItems={selectedItems}
                  onRemove={handleRemove}
                  onClearAll={handleClearAll}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
