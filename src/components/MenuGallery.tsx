import Image from 'next/image';

const menuImages = [
  {
    title: 'Weekly Lunch Menu 1',
    fileName: 'WEEKLY LUNCH MENU 1.png',
  },
  {
    title: 'Weekly Lunch Menu 2',
    fileName: 'WEEKLY LUNCH MENU 2.png',
  },
  {
    title: 'Weekly Lunch Menu 3',
    fileName: 'WEEKLY LUNCH MENU 3.png',
  },
  {
    title: 'Weekly Lunch + Dinner Menu',
    fileName: 'WEEKLY LUNCH + DINNER MENU 1.png',
  },
  {
    title: 'M&M Cooking Menu',
    fileName: 'M&M COOKING MENU.png',
  },
];

export default function MenuGallery() {
  return (
    <section id="menu-gallery" className="mb-8 scroll-mt-24 animate-slide-in-up sm:mb-10">
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-black leading-tight sm:text-4xl">Menu Gallery</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 sm:w-24"></div>
        </div>
        <a
          href="#frozen-items"
          className="glass-effect inline-flex min-h-11 w-fit items-center rounded-xl px-4 py-2 text-sm font-bold text-amber-200 transition-colors hover:bg-amber-400/15 hover:text-amber-100"
        >
          Order from menu
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {menuImages.map((menuImage) => {
          const imagePath = `/${encodeURIComponent(menuImage.fileName)}`;

          return (
            <article
              key={menuImage.fileName}
              className="premium-card flex flex-col overflow-hidden p-3 sm:p-4"
            >
              <h3 className="mb-3 min-h-10 text-base font-black leading-tight text-slate-100 sm:text-lg">
                {menuImage.title}
              </h3>

              <a
                href={imagePath}
                download={menuImage.fileName}
                aria-label={`Download ${menuImage.title}`}
                className="group block overflow-hidden rounded-xl border border-white/15 bg-slate-950/45"
              >
                <Image
                  src={imagePath}
                  alt={menuImage.title}
                  width={3375}
                  height={4219}
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className="aspect-[3375/4219] h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>

              <a
                href={imagePath}
                download={menuImage.fileName}
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-black text-slate-950 transition-colors hover:bg-amber-400"
              >
                Download
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
