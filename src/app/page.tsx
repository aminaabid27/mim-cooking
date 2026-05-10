'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import MenuSection from '@/components/MenuSection';
import OrderSummary from '@/components/OrderSummary';
import { CartItem, MenuItem } from '@/types';
import { getCartItemCount } from '@/utils/formatting';
import {
  lunchMenu,
  dinnerMenu,
  frozenItems,
  cookedDishes,
  italianFavourites,
} from '@/data/menu';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuSections = useMemo(
    () => [
      { id: 'frozen-items', title: 'Frozen Items', items: frozenItems },
      { id: 'italian-favourites', title: 'Italian Favourites', items: italianFavourites },
      { id: 'cooked-dishes', title: 'Cooked Dishes', items: cookedDishes },
      { id: 'lunch-menu', title: 'Lunch Menu', items: lunchMenu },
      { id: 'dinner-menu', title: 'Dinner Menu', items: dinnerMenu },
    ],
    []
  );

  const itemCount = getCartItemCount(cartItems);

  const selectedItemIds = useMemo(
    () => new Set(cartItems.map((item) => item.id)),
    [cartItems]
  );

  const handleToggle = (item: MenuItem) => {
    setCartItems((currentItems) => {
      if (currentItems.some((cartItem) => cartItem.id === item.id)) {
        return currentItems.filter((cartItem) => cartItem.id !== item.id);
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const handleIncrease = (itemId: string) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (itemId: string) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (itemId: string) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const handleClearAll = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden pb-24 lg:pb-0">
      <div className="relative z-10">
        <Header />

        <div className="mx-auto max-w-7xl px-3 pb-10 sm:px-4 sm:pb-16 lg:px-6 lg:pb-20">
          <nav
            aria-label="Menu categories"
            className="sticky top-0 z-30 -mx-3 mb-6 border-y border-white/10 bg-slate-950/85 px-3 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border lg:top-4"
          >
            <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {menuSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="shrink-0 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 transition-colors hover:border-amber-300/60 hover:bg-amber-400/15 hover:text-amber-200"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-7 lg:col-span-2 lg:space-y-8">
              {menuSections.map((section) => (
                <MenuSection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  items={section.items}
                  selectedIds={selectedItemIds}
                  onToggle={handleToggle}
                />
              ))}
            </div>

            <div className={`
              fixed inset-0 z-50 lg:relative lg:inset-auto lg:z-auto lg:col-span-1 lg:block
              ${isCartOpen ? 'block' : 'hidden'}
            `}>
              <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
                onClick={() => setIsCartOpen(false)}
              ></div>
              
              <div className={`
                fixed bottom-0 left-0 right-0 max-h-[88dvh] overflow-y-auto rounded-t-3xl
                bg-slate-950 p-4 shadow-2xl shadow-black/50 transition-transform duration-300 ease-in-out
                lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:transform-none
                ${isCartOpen ? 'translate-y-0' : 'translate-y-full'}
              `}>
                <div className="flex justify-between items-center mb-4 lg:hidden">
                  <h2 className="text-xl font-bold text-white">Your Order</h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    aria-label="Close order summary"
                    className="min-h-11 min-w-11 rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
                
                <OrderSummary
                  cartItems={cartItems}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onRemove={handleRemove}
                  onClearAll={handleClearAll}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6 lg:hidden">
        <button
          onClick={toggleCart}
          aria-label={`Open order summary with ${itemCount} item${itemCount === 1 ? '' : 's'}`}
          className="relative flex min-h-16 min-w-16 items-center justify-center rounded-full bg-amber-500 p-4 text-white shadow-2xl shadow-amber-500/40 transition-colors hover:bg-amber-600 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-900">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </main>
  );
}
