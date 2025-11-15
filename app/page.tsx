'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden sticky top-0 z-50 bg-purple-100 dark:bg-gray-800 border-b border-purple-200 dark:border-gray-700 px-4 py-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          <span>Useful Links</span>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col gap-3 pb-2">
            <a
              href="https://www.trackaipac.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Track AIPAC
            </a>
            <a
              href="https://rumble.com/c/nickjfuentes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              American First
            </a>
            <a
              href="https://www.youtube.com/@RealCandaceO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Candace Owens
            </a>
            <a
              href="https://www.youtube.com/@TuckerCarlson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Tucker Carlson
            </a>
            <a
              href="https://www.tiktok.com/@jamestalarico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              James Talarico
            </a>
            <a
              href="https://www.tiktok.com/@zohran_k_mamdani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Zohran Mamdani
            </a>
            <a
              href="https://journaliststudio.google.com/pinpoint/search?collection=092314e384a58618"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Epstein Files
            </a>
          </nav>
        )}
      </div>

      <div className="flex">
        {/* Desktop Sidebar - Hidden on Mobile */}
        <aside className="hidden md:block w-64 min-h-screen p-6 bg-purple-100 dark:bg-gray-800 border-r border-purple-200 dark:border-gray-700 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
            Useful Links
          </h2>
          <nav className="flex flex-col gap-2">
            <a
              href="https://www.trackaipac.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Track AIPAC
            </a>
            <a
              href="https://rumble.com/c/nickjfuentes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              American First
            </a>
            <a
              href="https://www.youtube.com/@RealCandaceO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Candace Owens
            </a>
            <a
              href="https://www.youtube.com/@TuckerCarlson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Tucker Carlson
            </a>
            <a
              href="https://www.tiktok.com/@jamestalarico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              James Talarico
            </a>
            <a
              href="https://www.tiktok.com/@zohran_k_mamdani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Zohran Mamdani
            </a>
            <a
              href="https://journaliststudio.google.com/pinpoint/search?collection=092314e384a58618"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors"
            >
              Epstein Files
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center gap-8 p-4 md:p-8 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold text-purple-600 dark:text-purple-400 text-center">
          The Purple Revolution
        </h1>

        <div className="w-full aspect-video max-w-3xl">
          <iframe
            className="w-full h-full rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/T5GS5Snmfls"
            title="The Purple Revolution"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="w-full max-w-3xl mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 text-center mb-8">
            Latest from TikTok
          </h2>
          <div className="flex justify-center">
            <blockquote
              className="tiktok-embed max-w-[780px] min-w-[288px]"
              cite="https://www.tiktok.com/@friendlyhoneybadg5"
              data-unique-id="friendlyhoneybadg5"
              data-embed-type="creator"
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@friendlyhoneybadg5?refer=creator_embed"
                >
                  @friendlyhoneybadg5
                </a>
              </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
          </div>
        </div>

        <div className="w-full max-w-3xl mt-12">
          <div className="flex justify-center">
            <blockquote
              className="tiktok-embed max-w-[780px] min-w-[288px]"
              cite="https://www.tiktok.com/@hunteralexanderhowell"
              data-unique-id="hunteralexanderhowell"
              data-embed-type="creator"
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@hunteralexanderhowell?refer=creator_embed"
                >
                  @hunteralexanderhowell
                </a>
              </section>
            </blockquote>
          </div>
        </div>

      </main>
      </div>
    </div>
  );
}
