export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 max-w-4xl w-full">
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
      </main>
    </div>
  );
}
