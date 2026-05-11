'use client';

import { CartItem, CustomerDetails } from '@/types';
import {
  getCategoryLabel,
  formatOrderText,
  copyToClipboard,
  getCartItemCount,
  getCartTotal,
  getWhatsAppOrderUrl,
} from '@/utils/formatting';
import { useState } from 'react';

interface OrderSummaryProps {
  cartItems: CartItem[];
  onIncrease: (itemId: string) => void;
  onDecrease: (itemId: string) => void;
  onRemove: (itemId: string) => void;
  onClearAll: () => void;
}

export default function OrderSummary({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClearAll,
}: OrderSummaryProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const itemCount = getCartItemCount(cartItems);
  const total = getCartTotal(cartItems);

  const handleCustomerDetailsChange = (
    field: keyof CustomerDetails,
    value: string
  ) => {
    setCustomerDetails((currentDetails) => ({
      ...currentDetails,
      [field]: value,
    }));
  };

  const handleCopy = async () => {
    setCheckoutError('');
    const text = formatOrderText(cartItems, customerDetails);
    const success = await copyToClipboard(text);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setCheckoutError('Your cart is empty. Add an item before checking out.');
      return;
    }

    setCheckoutError('');
    window.open(getWhatsAppOrderUrl(cartItems, customerDetails), '_blank', 'noopener,noreferrer');
  };

  if (cartItems.length === 0) {
    return (
      <div className="premium-card animate-slide-in-up p-5 text-center sm:p-6">
        <div className="mb-4">
          <div className="mb-3 text-5xl sm:mb-4 sm:text-6xl">🛒</div>
          <p className="mb-2 text-lg font-bold text-slate-200 sm:text-xl">Your Cart is Empty</p>
          <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
            Select delicious items from the menu to get started
          </p>
        </div>
        {checkoutError && (
          <p className="mb-4 rounded-xl border border-red-300/40 bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-200">
            {checkoutError}
          </p>
        )}
        <button
          type="button"
          onClick={handleCheckout}
          className="glass-effect min-h-12 w-full rounded-xl px-4 py-3 text-base font-bold text-green-300 smooth-transition hover:bg-green-600/40 hover:text-green-200 sm:text-lg"
        >
          Checkout on WhatsApp
        </button>
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
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="glass-effect rounded-xl p-3 sm:p-4 group hover:bg-white/20 smooth-transition"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
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
                      {item.menuName && !item.packageItems?.length && ` • ${item.menuName}`}
                    </div>
                  </div>
                </div>
                {item.packageItems?.length && (
                  <div className="mt-3 rounded-xl border border-amber-300/20 bg-amber-400/10 p-3">
                    <div className="mb-2 text-xs font-black uppercase tracking-wide text-amber-200">
                      Included meals
                    </div>
                    <div className="space-y-1.5">
                      {item.packageItems.map((packageItem) => (
                        <div
                          key={packageItem.id}
                          className="flex gap-2 text-xs leading-snug text-slate-300"
                        >
                          <span className="min-w-16 font-bold text-slate-100">
                            {packageItem.day}
                          </span>
                          <span className="flex-1">{packageItem.name}</span>
                          <span className="font-bold text-amber-200">
                            Rs. {packageItem.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="text-right">
                  <div className="whitespace-nowrap text-sm font-black sm:text-xl">
                    Rs. {item.price}
                  </div>
                  <div className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-400">
                    Subtotal Rs. {item.price * item.quantity}
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
            <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-950/30 px-3 py-2">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Quantity
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onDecrease(item.id)}
                  aria-label={`Decrease ${item.name} quantity`}
                  className="flex min-h-9 min-w-9 items-center justify-center rounded-lg bg-white/10 text-xl font-black text-slate-200 smooth-transition hover:bg-white/20"
                >
                  -
                </button>
                <span className="min-w-8 text-center text-base font-black text-slate-100">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => onIncrease(item.id)}
                  aria-label={`Increase ${item.name} quantity`}
                  className="flex min-h-9 min-w-9 items-center justify-center rounded-lg bg-amber-400/20 text-xl font-black text-amber-200 smooth-transition hover:bg-amber-400/30"
                >
                  +
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
              {itemCount} item{itemCount !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            value={customerDetails.name}
            onChange={(event) => handleCustomerDetailsChange('name', event.target.value)}
            placeholder="Name"
            aria-label="Customer name"
            className="min-h-11 rounded-xl border border-white/15 bg-slate-950/40 px-3 text-sm font-semibold text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-amber-300/60"
          />
          <input
            value={customerDetails.phone}
            onChange={(event) => handleCustomerDetailsChange('phone', event.target.value)}
            placeholder="Phone"
            aria-label="Customer phone"
            className="min-h-11 rounded-xl border border-white/15 bg-slate-950/40 px-3 text-sm font-semibold text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-amber-300/60"
          />
        </div>
        <input
          value={customerDetails.address}
          onChange={(event) => handleCustomerDetailsChange('address', event.target.value)}
          placeholder="Address"
          aria-label="Customer address"
          className="min-h-11 w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 text-sm font-semibold text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-amber-300/60"
        />
        <textarea
          value={customerDetails.notes}
          onChange={(event) => handleCustomerDetailsChange('notes', event.target.value)}
          placeholder="Notes"
          aria-label="Order notes"
          rows={2}
          className="min-h-20 w-full resize-none rounded-xl border border-white/15 bg-slate-950/40 px-3 py-3 text-sm font-semibold text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-amber-300/60"
        />
      </div>

      <div className="flex flex-col gap-3">
        {checkoutError && (
          <p className="rounded-xl border border-red-300/40 bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-200">
            {checkoutError}
          </p>
        )}
        <button
          type="button"
          onClick={handleCheckout}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-base font-bold text-white smooth-transition hover:bg-green-500 sm:text-lg"
        >
          Checkout on WhatsApp
        </button>
        <button
          type="button"
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
          type="button"
          onClick={onClearAll}
          className="glass-effect min-h-12 w-full rounded-xl px-4 py-3 text-base font-bold text-slate-300 smooth-transition hover:bg-red-500/20 hover:text-red-300 sm:text-lg"
        >
          🗑️ Clear All
        </button>
      </div>
    </div>
  );
}
