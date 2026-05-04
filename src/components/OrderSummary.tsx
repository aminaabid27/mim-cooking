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
      <div className="premium-card text-center animate-slide-in-up">
        <div className="mb-4">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-xl font-bold text-slate-200 mb-2">Your Cart is Empty</p>
          <p className="text-slate-400">Select delicious items from the menu to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-card overflow-hidden animate-slide-in-up flex flex-col max-h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 -mx-6 -mt-6 mb-4 p-5 sm:p-6 glow-effect">
        <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
          <span>🎉</span> Your Order
        </h3>
      </div>

      {/* Items List */}
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
                    <div className="font-bold text-sm sm:text-lg text-slate-100 truncate group-hover:text-amber-300 smooth-transition">
                      {item.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
                      {item.day && `📅 ${item.day} • `}
                      {getCategoryLabel(item.category)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="text-right">
                  <div className="text-sm sm:text-xl font-black gradient-text">
                    Rs. {item.price}
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1.5 sm:p-2 rounded-lg bg-red-500/30 hover:bg-red-500/50 text-red-300 hover:text-red-200 smooth-transition font-bold hover:scale-110"
                  title="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t border-white/20 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-base sm:text-lg font-bold text-slate-200">Subtotal:</span>
          <div className="text-right">
            <div className="text-2xl sm:text-4xl font-black gradient-text">
              Rs. {total}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
              {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={handleCopy}
          className={`w-full py-3 px-4 rounded-xl font-bold text-lg smooth-transition flex items-center justify-center gap-2 ${
            copySuccess
              ? 'bg-green-600 text-white scale-105'
              : 'glass-effect text-green-300 hover:bg-green-600/40 hover:text-green-200 scale-hover'
          }`}
        >
          {copySuccess ? '✓ Copied to Clipboard!' : '📋 Copy Order'}
        </button>
        <button
          onClick={onClearAll}
          className="w-full py-3 px-4 glass-effect rounded-xl font-bold text-lg text-slate-300 hover:text-red-300 hover:bg-red-500/20 smooth-transition scale-hover"
        >
          🗑️ Clear All
        </button>
      </div>
    </div>
  );
}
