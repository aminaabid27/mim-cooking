'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { WHATSAPP_NUMBER } from '@/config/business';

const eventMedia = [
  {
    id: 'event-stall-video',
    src: '/EVENT1-1.mp4',
    type: 'video',
    title: 'Live Food Stall',
    alt: 'M&M Cooking live food stall setup',
  },
  {
    id: 'event-table-one',
    src: '/EVENT1-2.jpeg',
    type: 'image',
    title: 'Buffet Presentation',
    alt: 'M&M Cooking buffet presentation for an event',
  },
  {
    id: 'event-table-two',
    src: '/EVENT1-3.jpeg',
    type: 'image',
    title: 'Event Spread',
    alt: 'M&M Cooking catered food spread',
  },
  {
    id: 'event-table-three',
    src: '/EVENT1-4.jpeg',
    type: 'image',
    title: 'Party Service',
    alt: 'M&M Cooking party catering service',
  },
  {
    id: 'event-table-four',
    src: '/EVENT1-5.jpeg',
    type: 'image',
    title: 'Fresh Catering',
    alt: 'M&M Cooking fresh catering setup',
  },
  {
    id: 'event-service-video',
    src: '/EVENT1-6.mp4',
    type: 'video',
    title: 'Event Service',
    alt: 'M&M Cooking event service video',
  },
] as const;

const eventServices = [
  {
    title: 'Food Stalls',
    description: 'Live-style counters for community events, school days, markets, and festive gatherings.',
  },
  {
    title: 'Birthday Parties',
    description: 'Comforting party favourites, kids-friendly picks, and generous trays for easy hosting.',
  },
  {
    title: 'Office Lunches',
    description: 'Reliable lunch spreads for team meals, meetings, trainings, and work celebrations.',
  },
  {
    title: 'Family Gatherings',
    description: 'Homemade menus for intimate dinners, weekend lunches, and special family moments.',
  },
  {
    title: 'Custom Catering',
    description: 'Flexible menus planned around your guests, timing, portions, and preferred flavours.',
  },
];

function EventMediaFrame({
  media,
  priority = false,
}: {
  media: (typeof eventMedia)[number];
  priority?: boolean;
}) {
  if (media.type === 'video') {
    return (
      <video
        src={media.src}
        aria-label={media.alt}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 56vw, 92vw"
      className="object-cover"
    />
  );
}

export default function EventsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const whatsappText =
    'Hello M&M Cooking, I would like to book catering for an event. Please share details.';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % eventMedia.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? eventMedia.length - 1 : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % eventMedia.length);
  };

  return (
    <div className="animate-slide-in-up space-y-8 sm:space-y-10">
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(54,43,34,0.82),rgba(16,43,43,0.78))] shadow-2xl shadow-black/30">
        <div className="grid min-h-[660px] lg:grid-cols-[0.95fr_1.35fr]">
          <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                M&M Cooking occasions
              </p>
              <h1 className="mt-4 text-4xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
                Events & Catering
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Elegant homemade catering for food stalls, family celebrations,
                office meals, and custom gatherings across Islamabad and Rawalpindi.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-base font-black text-white shadow-xl shadow-green-950/30 transition-colors hover:bg-green-500 sm:w-fit"
              >
                Book Event on WhatsApp
              </a>

              <div className="grid grid-cols-3 gap-3">
                {eventMedia.slice(0, 3).map((media, index) => (
                  <button
                    key={media.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${media.title}`}
                    className={`group relative aspect-square overflow-hidden rounded-lg border transition-colors ${
                      index === activeIndex
                        ? 'border-amber-300 bg-amber-300/10'
                        : 'border-white/15 bg-white/5 hover:border-amber-200/60'
                    }`}
                  >
                    <EventMediaFrame media={media} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden sm:min-h-[620px] lg:min-h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(251,191,36,0.24),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.1),rgba(15,23,42,0.78))]" />

            {eventMedia.map((media, index) => (
              <div
                key={media.id}
                className={`absolute inset-5 transition-all duration-700 ease-out sm:inset-8 ${
                  index === activeIndex
                    ? 'translate-y-0 opacity-100'
                    : index < activeIndex
                      ? '-translate-y-8 opacity-0'
                      : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-white/15 bg-slate-950/45 shadow-2xl shadow-black/40">
                  <EventMediaFrame media={media} priority={index === 1} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent p-5">
                    <h2 className="text-xl font-black text-white sm:text-3xl">
                      {media.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous event media"
              className="absolute left-3 top-1/2 z-10 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-amber-100 shadow-lg shadow-black/30 backdrop-blur transition-colors hover:border-amber-300/70 hover:bg-amber-400/20 sm:left-5"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next event media"
              className="absolute right-3 top-1/2 z-10 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-amber-100 shadow-lg shadow-black/30 backdrop-blur transition-colors hover:border-amber-300/70 hover:bg-amber-400/20 sm:right-5"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur">
              {eventMedia.map((media, index) => (
                <button
                  key={media.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show event media ${index + 1}`}
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

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {eventServices.map((service, index) => (
          <article
            key={service.title}
            className={`rounded-xl border border-white/10 bg-white/[0.07] p-5 shadow-xl shadow-black/15 backdrop-blur transition-colors hover:border-amber-300/50 hover:bg-white/[0.1] ${
              index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 text-sm font-black text-amber-200">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            <h2 className="text-lg font-black leading-tight text-white">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {service.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {eventMedia.map((media, index) => (
          <button
            key={media.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-slate-950/55 shadow-xl shadow-black/20"
          >
            <EventMediaFrame media={media} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-70" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-left">
              <h3 className="text-sm font-black text-white sm:text-base">
                {media.title}
              </h3>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
}
