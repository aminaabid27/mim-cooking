'use client';

export default function Header() {
  return (
    <header className="relative overflow-hidden animate-slide-in-down">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-block">
            <div className="glass-effect px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-amber-300 uppercase tracking-widest">
              🍽️ Authentic Homemade Cuisine
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 gradient-text animate-float">
            M&M Cooking
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-amber-200 mb-8 font-light tracking-wide">
            Home of Authentic Flavours
          </p>

          {/* Location */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="glass-effect px-6 py-3 rounded-xl text-sm md:text-base text-slate-200 font-medium">
              📍 Chaklala Scheme 3, Islamabad & Rawalpindi
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
            {/* Phone */}
            <a
              href="tel:+923375732375"
              className="glass-effect px-6 py-3 rounded-xl text-green-300 hover:text-green-200 font-bold transition-all duration-300 hover:scale-110 glow-effect group"
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-12 transition-transform">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +92 337 5732375
              </span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1CGyhigVBX/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="M&M Cooking on Facebook"
                className="glass-effect p-3 rounded-full text-blue-300 hover:text-blue-200 hover:scale-125 transition-all duration-300 glow-effect"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.61 3.49-3.61.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.71h2.52l-.4 2.9h-2.12V22C18.34 21.2 22 17.06 22 12.07z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/mnm_cooking1?igsh=MWt2ZGdsb2s2bGk5cA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="M&M Cooking on Instagram"
                className="glass-effect p-3 rounded-full text-pink-300 hover:text-pink-200 hover:scale-125 transition-all duration-300 glow-effect"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.846-10.354c0 .795.645 1.44 1.44 1.44s1.44-.645 1.44-1.44-.645-1.44-1.44-1.44-1.44.645-1.44 1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
