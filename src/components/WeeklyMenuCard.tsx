'use client';

import { MenuItem, WeeklyMenu } from '@/types';

interface WeeklyMenuCardProps {
  menu: WeeklyMenu;
  isBooked: boolean;
  selectedIds: Set<string>;
  onToggleItem: (item: MenuItem) => void;
  onBookMenu: (menu: WeeklyMenu) => void;
}

export default function WeeklyMenuCard({
  menu,
  isBooked,
  selectedIds,
  onToggleItem,
  onBookMenu,
}: WeeklyMenuCardProps) {
  const imagePath = `/${encodeURIComponent(menu.sourceImage)}`;
  const selectedMeals = menu.items.filter((item) => selectedIds.has(item.id)).length;

  return (
    <article className="premium-card overflow-hidden p-4 sm:p-5">
      <div className="-mx-4 -mt-4 mb-4 border-b border-white/10 bg-slate-950/35 px-4 py-4 sm:-mx-5 sm:-mt-5 sm:px-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-xl font-black leading-tight text-slate-100 sm:text-2xl">
              {menu.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{menu.description}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <a
              href={imagePath}
              download={menu.sourceImage}
              className="glass-effect inline-flex min-h-10 items-center rounded-xl px-3 py-2 text-xs font-black text-amber-200 transition-colors hover:bg-amber-400/15 hover:text-amber-100"
            >
              Download menu
            </a>
            {isBooked && (
              <span className="inline-flex min-h-10 items-center rounded-xl bg-green-500/20 px-3 py-2 text-xs font-black text-green-200">
                Booked
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {menu.items.map((item) => {
          const isSelected = selectedIds.has(item.id);

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggleItem(item)}
              className={`grid w-full grid-cols-[4.5rem_1fr] gap-3 rounded-xl border p-3 text-left transition-colors sm:grid-cols-[5rem_1fr_auto] sm:items-center ${
                isSelected
                  ? 'border-amber-300/70 bg-amber-400/15'
                  : 'border-white/10 bg-white/[0.06] hover:border-amber-300/40 hover:bg-white/10'
              }`}
            >
              <span className="text-xs font-black uppercase tracking-wide text-amber-200">
                {item.day}
              </span>
              <span className="min-w-0 text-sm font-bold leading-snug text-slate-100 sm:text-base">
                {item.name}
              </span>
              <span className="col-start-2 w-fit rounded-full bg-slate-950/35 px-3 py-1 text-sm font-black text-amber-200 sm:col-start-auto sm:justify-self-end">
                Rs. {item.price}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl border border-white/15 bg-slate-950/40 p-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-slate-400">
              {selectedMeals} of {menu.items.length} meals selected
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-300">Full menu total</p>
          </div>
          <div className="text-right text-2xl font-black text-amber-200 sm:text-3xl">
            Rs. {menu.total}
          </div>
        </div>
        <button
          type="button"
          onClick={() => onBookMenu(menu)}
          className={`mt-4 min-h-12 w-full rounded-xl px-4 py-3 text-base font-black transition-colors ${
            isBooked
              ? 'bg-green-600 text-white hover:bg-green-500'
              : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
          }`}
        >
          Book this weekly menu
        </button>
      </div>
    </article>
  );
}
