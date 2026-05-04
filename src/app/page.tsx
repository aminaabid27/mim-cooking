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

  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
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

            {/* Order Summary - Sticky Sidebar for Desktop, Modal for Mobile */}
            <div className={`
              fixed inset-0 z-50 lg:relative lg:inset-auto lg:z-auto lg:block lg:col-span-1
              ${isCartOpen ? 'block' : 'hidden'}
            `}>
              {/* Overlay for mobile */}
              <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
                onClick={() => setIsCartOpen(false)}
              ></div>
              
              <div className={`
                fixed bottom-0 left-0 right-0 bg-slate-900 lg:bg-transparent p-4 lg:p-0 
                rounded-t-3xl lg:rounded-none lg:sticky lg:top-4 max-h-[90vh] lg:max-h-none overflow-y-auto
                transition-transform duration-300 ease-in-out lg:transform-none
                ${isCartOpen ? 'translate-y-0' : 'translate-y-full'}
              `}>
                <div className="flex justify-between items-center mb-4 lg:hidden">
                  <h2 className="text-xl font-bold text-white">Your Order</h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 text-slate-400 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
                
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

      {/* Floating Cart Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button
          onClick={toggleCart}
          className="relative bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-2xl shadow-amber-500/50 flex items-center justify-center transition-all active:scale-95 glow-effect"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {selectedItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-900">
              {selectedItems.length}
            </span>
          )}
        </button>
      </div>
    </main>
  );
}
