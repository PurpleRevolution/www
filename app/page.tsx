export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Left Sidebar */}
      <aside className="w-64 p-6 bg-purple-100 dark:bg-gray-800 border-r border-purple-200 dark:border-gray-700">
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
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center gap-8 p-8 max-w-5xl mx-auto w-full">
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
  );
}
