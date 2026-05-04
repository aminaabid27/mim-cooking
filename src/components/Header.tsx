'use client';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-amber-50 to-white py-8 mb-8 border-b-4 border-amber-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-600 mb-2" style={{ fontStyle: 'italic' }}>
            M&M Cooking
          </h1>
          <p className="text-lg text-amber-900 mb-4 font-semibold">Home of Authentic Flavours</p>

          <div className="flex flex-col items-center gap-2">
            <div className="text-sm md:text-base text-gray-700 font-medium">
              <p>Chaklala Scheme 3, Islamabad & Rawalpindi</p>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="tel:+923375732375"
                className="text-green-700 hover:text-green-900 font-semibold transition-colors"
              >
                +92 337 5732375
              </a>

              <span className="h-6 w-px bg-amber-200" aria-hidden />

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1CGyhigVBX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="M&M Cooking on Facebook"
                  className="text-amber-700 hover:text-amber-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.61 3.49-3.61.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.71h2.52l-.4 2.9h-2.12V22C18.34 21.2 22 17.06 22 12.07z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/mnm_cooking1?igsh=MWt2ZGdsb2s2bGk5cA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="M&M Cooking on Instagram"
                  className="text-amber-700 hover:text-amber-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 7.92a3.12 3.12 0 110-6.24 3.12 3.12 0 010 6.24z"/>
                    <path d="M17.9 6.1a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z"/>
                    <path d="M21 12c0-2.1-.05-2.8-.15-3.79-.1-.96-.46-1.6-.98-2.12-.52-.52-1.16-.88-2.12-.98C16.8 5 16.1 5 14 5H10c-2.1 0-2.8.05-3.79.15-.96.1-1.6.46-2.12.98-.52.52-.88 1.16-.98 2.12C2 9.2 2 9.9 2 12s.05 2.8.15 3.79c.1.96.46 1.6.98 2.12.52.52 1.16.88 2.12.98.99.1 1.69.15 3.79.15h4c2.1 0 2.8-.05 3.79-.15.96-.1 1.6-.46 2.12-.98.52-.52.88-1.16.98-2.12C22 14.8 22 14.1 22 12s-.05-2.8-.15-3.79zM20 16.5c-.07.63-.33 1.03-.57 1.27-.24.24-.64.5-1.27.57-.89.11-1.16.13-3.16.13H10c-2 0-2.27-.02-3.16-.13-.63-.07-1.03-.33-1.27-.57-.24-.24-.5-.64-.57-1.27-.11-.89-.13-1.16-.13-3.16V10c0-2 .02-2.27.13-3.16.07-.63.33-1.03.57-1.27.24-.24.64-.5 1.27-.57.89-.11 1.16-.13 3.16-.13h4c2 0 2.27.02 3.16.13.63.07 1.03.33 1.27.57.24.24.5.64.57 1.27.11.89.13 1.16.13 3.16v3.5c0 2-.02 2.27-.13 3.16z"/>
                  </svg>
                </a>

                <a
                  href="https://wa.me/923375732375"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message maryamzahid16 on WhatsApp"
                  className="text-green-700 hover:text-green-900 flex items-center gap-2 font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M20.52 3.48A11.85 11.85 0 0012 .25 11.86 11.86 0 003.48 3.48 11.82 11.82 0 00.25 12c0 2.03.53 4 .96 4.99L.5 23l5.99-1.7c.97.42 2.12.65 3.51.65 6.17 0 11.2-5.03 11.2-11.2 0-3-.93-5.38-2.68-7.76zM12 20.5c-1.18 0-2.28-.32-3.25-.87l-.23-.13-3.6 1.02 1.03-3.5-.15-.25A8.59 8.59 0 013.5 12c0-4.73 3.85-8.58 8.58-8.58 2.29 0 4.44.9 6.06 2.53A8.53 8.53 0 0120.58 12c0 4.73-3.85 8.58-8.58 8.58z"/>
                    <path d="M17.2 14.1c-.28-.14-1.66-.82-1.92-.92-.26-.1-.44-.14-.63.14s-.72.92-.88 1.11c-.16.19-.33.21-.61.07a7.1 7.1 0 01-2.1-1.3c-.78-.78-.65-1.31.17-1.89.53-.36 1.06-.75 1.49-1.16.16-.15.24-.25.31-.41.07-.16.04-.3-.03-.42-.08-.13-.63-1.53-.86-2.1-.22-.55-.45-.49-.62-.5l-.53-.01c-.18 0-.46.06-.7.32-.24.26-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.7.13.18 1.83 2.94 4.45 3.9 1.1.4 1.57.32 2.15.26.35-.04 1.08-.44 1.23-.86.15-.42.15-.77.11-.86-.04-.09-.17-.14-.35-.24z"/>
                  </svg>
                  <span className="hidden sm:inline">Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
