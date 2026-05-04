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
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500 text-lg">No items selected yet</p>
        <p className="text-gray-400 text-sm mt-2">
          Select items from the menu above to get started
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-700 text-white p-4">
        <h3 className="text-xl font-bold">Order Summary</h3>
      </div>

      <div className="p-4">
        <div className="space-y-3 mb-6">
          {selectedItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-amber-50 rounded border border-amber-200"
            >
              <div className="flex-1">
                <div className="font-medium text-gray-800">
                  {index + 1}. {item.name}
                </div>
                <div className="text-xs text-green-700 font-semibold">
                  {item.day && `${item.day} `}
                  {getCategoryLabel(item.category)}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-bold text-amber-800 text-lg whitespace-nowrap">
                  Rs. {item.price}
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-amber-200 pt-4 mb-6">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total:</span>
            <span className="text-green-700 text-2xl">Rs. {total}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCopy}
            className={`flex-1 py-2 px-4 rounded font-semibold transition-colors ${
              copySuccess
                ? 'bg-green-600 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {copySuccess ? '✓ Copied!' : 'Copy Order Text'}
          </button>
          <button
            onClick={onClearAll}
            className="flex-1 py-2 px-4 bg-gray-500 text-white rounded font-semibold hover:bg-gray-600 transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
