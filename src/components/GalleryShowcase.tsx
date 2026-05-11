'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const galleryImages = Array.from({ length: 17 }, (_, index) => {
  const orderNumber = index + 1;

  return {
    id: `order-${orderNumber}`,
    src: `/ORDER${orderNumber}.png`,
    title: `Signature Order ${orderNumber.toString().padStart(2, '0')}`,
    alt: `M&M Cooking signature order ${orderNumber}`,
  };
});

export default function GalleryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  const featuredImages = useMemo(
    () => [
      galleryImages[(activeIndex + galleryImages.length - 1) % galleryImages.length],
      activeImage,
      galleryImages[(activeIndex + 1) % galleryImages.length],
    ],
    [activeImage, activeIndex]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % galleryImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % galleryImages.length);
  };

  return (
    <div className="animate-slide-in-up">
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(67,56,36,0.65),rgba(15,23,42,0.96))] shadow-2xl shadow-black/30">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">
                Fresh from the M&M kitchen
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
                Gallery
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                A polished look at recent homemade orders, party trays, comfort dishes,
                and family-style favourites.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {featuredImages.map((image, index) => (
                <button
                  key={`${image.id}-${index}`}
                  type="button"
                  onClick={() =>
                    setActiveIndex(galleryImages.findIndex((galleryImage) => galleryImage.id === image.id))
                  }
                  aria-label={`Show ${image.title}`}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-lg border transition-colors ${
                    image.id === activeImage.id
                      ? 'border-amber-300 bg-amber-300/10'
                      : 'border-white/15 bg-white/5 hover:border-amber-200/60'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 9vw, 28vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">
            <Image
              key={`backdrop-${activeImage.id}`}
              src={activeImage.src}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="scale-110 object-cover opacity-20 blur-xl transition-opacity duration-700"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.22),transparent_36%),linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.82))]" />

            <div className="absolute inset-0 flex items-center justify-center px-5 py-8 sm:px-12">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-x-5 top-8 bottom-8 transition-all duration-700 ease-out sm:inset-x-12 ${
                    index === activeIndex
                      ? 'translate-x-0 opacity-100'
                      : index < activeIndex
                        ? '-translate-x-10 opacity-0'
                        : 'translate-x-10 opacity-0'
                  }`}
                >
                  <div className="relative h-full overflow-hidden rounded-xl border border-white/15 bg-slate-950/45 shadow-2xl shadow-black/40">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 56vw, 92vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous gallery image"
              className="absolute left-3 top-1/2 z-10 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-amber-100 shadow-lg shadow-black/30 backdrop-blur transition-colors hover:border-amber-300/70 hover:bg-amber-400/20 sm:left-5"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next gallery image"
              className="absolute right-3 top-1/2 z-10 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-amber-100 shadow-lg shadow-black/30 backdrop-blur transition-colors hover:border-amber-300/70 hover:bg-amber-400/20 sm:right-5"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show gallery image ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-amber-300'
                      : 'w-2.5 bg-white/35 hover:bg-amber-200/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
