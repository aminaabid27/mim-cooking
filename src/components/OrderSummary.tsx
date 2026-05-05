'use client';

import { MenuItem } from '@/types';
import { getCategoryLabel, formatOrderText, copyToClipboard } from '@/utils/formatting';
import { useState } from 'react';

interface OrderSummaryProps {
  selectedItems: MenuItem[];
  onRemove: (itemId: string) => void;
  onClearAll: () => void;
}

export default function OrderSummary({
  selectedItems,
  onRemove,
  onClearAll,
}: OrderSummaryProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const handleCopy = async () => {
    const text = formatOrderText(selectedItems);
    const success = await copyToClipboard(text);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  if (selectedItems.length === 0) {
    return (
      <div className="premium-card animate-slide-in-up p-5 text-center sm:p-6">
        <div className="mb-4">
          <div className="mb-3 text-5xl sm:mb-4 sm:text-6xl">🛒</div>
          <p className="mb-2 text-lg font-bold text-slate-200 sm:text-xl">Your Cart is Empty</p>
          <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
            Select delicious items from the menu to get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-card animate-slide-in-up flex max-h-full flex-col overflow-hidden p-4 sm:p-6">
      <div className="-mx-4 -mt-4 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 p-4 glow-effect sm:-mx-6 sm:-mt-6 sm:p-6">
        <h3 className="flex items-center gap-3 text-xl font-black text-white sm:text-3xl">
          <span>🎉</span> Your Order
        </h3>
      </div>

      <div className="space-y-3 mb-6 overflow-y-auto pr-1 flex-1 min-h-0">
        {selectedItems.map((item, index) => (
          <div
            key={item.id}
            className="glass-effect rounded-xl p-3 sm:p-4 group hover:bg-white/20 smooth-transition"
          >
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-sm sm:text-xl font-bold text-amber-300 min-w-fit">
                    #{index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="break-words text-sm font-bold leading-snug text-slate-100 smooth-transition group-hover:text-amber-300 sm:text-lg">
                      {item.name}
                    </div>
                    <div className="mt-1 text-xs leading-snug text-slate-400">
                      {item.day && `📅 ${item.day} • `}
                      {getCategoryLabel(item.category)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="text-right">
                  <div className="whitespace-nowrap text-sm font-black sm:text-xl">
                    Rs. {item.price}
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="min-h-9 min-w-9 rounded-lg bg-red-500/30 p-2 font-bold text-red-300 smooth-transition hover:bg-red-500/50 hover:text-red-200"
                  title="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/20 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-base sm:text-lg font-bold text-slate-200">Subtotal:</span>
          <div className="text-right">
            <div className="text-2xl font-black sm:text-4xl">
              Rs. {total}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
              {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleCopy}
          className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-bold smooth-transition sm:text-lg ${
            copySuccess
              ? 'bg-green-600 text-white'
              : 'glass-effect text-green-300 hover:bg-green-600/40 hover:text-green-200'
          }`}
        >
          {copySuccess ? '✓ Copied to Clipboard!' : '📋 Copy Order'}
        </button>
        <button
          onClick={onClearAll}
          className="glass-effect min-h-12 w-full rounded-xl px-4 py-3 text-base font-bold text-slate-300 smooth-transition hover:bg-red-500/20 hover:text-red-300 sm:text-lg"
        >
          🗑️ Clear All
        </button>
      </div>
    </div>
  );
}
