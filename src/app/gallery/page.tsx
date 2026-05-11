import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryShowcase from '@/components/GalleryShowcase';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Gallery | M&M Cooking',
  description:
    'Browse M&M Cooking order photos, homemade food trays, and premium menu highlights from Islamabad and Rawalpindi.',
};

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-10 sm:pb-16 lg:pb-20">
      <div className="relative z-10">
        <Header />

        <div className="mx-auto max-w-7xl px-3 pb-10 sm:px-4 lg:px-6">
          <div className="sticky top-0 z-30 -mx-3 mb-6 border-y border-white/10 bg-slate-950/90 px-3 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border lg:top-4">
            <div className="grid grid-cols-4 gap-2">
              <Link
                href="/"
                className="glass-effect inline-flex min-h-12 items-center justify-center rounded-xl px-1 py-3 text-[0.68rem] font-black text-slate-100 transition-colors hover:bg-amber-400/15 hover:text-amber-200 sm:px-4 sm:text-lg"
              >
                ORDER
              </Link>
              <Link
                href="/?tab=download"
                className="glass-effect inline-flex min-h-12 items-center justify-center rounded-xl px-1 py-3 text-[0.68rem] font-black text-slate-100 transition-colors hover:bg-amber-400/15 hover:text-amber-200 sm:px-4 sm:text-lg"
              >
                DOWNLOAD
              </Link>
              <Link
                href="/gallery"
                aria-current="page"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-1 py-3 text-[0.68rem] font-black text-slate-950 shadow-lg shadow-amber-500/25 transition-colors hover:bg-amber-400 sm:px-4 sm:text-lg"
              >
                GALLERY
              </Link>
              <Link
                href="/events"
                className="glass-effect inline-flex min-h-12 items-center justify-center rounded-xl px-1 py-3 text-[0.68rem] font-black text-slate-100 transition-colors hover:bg-amber-400/15 hover:text-amber-200 sm:px-4 sm:text-lg"
              >
                EVENTS
              </Link>
            </div>
          </div>

          <GalleryShowcase />
        </div>
      </div>
    </main>
  );
}
