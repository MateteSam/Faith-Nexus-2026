import React from 'react';

const CovenantSection: React.FC = () => {
  return (
    <section id="covenant" className="relative py-20 bg-gradient-to-b from-neutral-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-800 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left column - hero text */}
          <div className="lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-700/10 border border-orange-700/20 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.5 8L21 9.2L16 13.6L17.2 20L12 16.8L6.8 20L8 13.6L3 9.2L9.5 8L12 2Z" fill="#F97316"/></svg>
              </div>
              <div className="text-sm text-orange-300 font-semibold uppercase tracking-wider">Covenant Conversations</div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-400 leading-tight">A Strategic Faith Nexus Project on Jewish-Christian Understanding, Heritage & Cultural Exchange</h2>

            <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed">A signature initiative of the Faith Nexus Movement dedicated to restoring, honouring and engaging the Jewish foundations of the Christian faith through dialogue, arts, education and intercultural collaboration.</p>

            <p className="mt-4 text-sm text-orange-200 font-medium">(שיחות הברית) — Conversations of the Covenant</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/podcast" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-md shadow-lg">Explore Podcast</a>
              <a href="/register" className="inline-flex items-center gap-3 border border-white/10 text-white/95 px-4 py-3 rounded-md hover:bg-white/5">Register</a>
            </div>
          </div>

          {/* Right column - feature cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-tr from-white/6 to-white/3 rounded-2xl border border-white/6 shadow-xl">
                <h3 className="text-lg font-bold text-white">Overview & Mission</h3>
                <p className="mt-2 text-white/90 text-sm leading-relaxed">We reconnect Christians to Hebraic roots while welcoming Jewish voices, artists and educators — building bridges through dialogue, education, cultural celebration and spiritual alignment.</p>
              </div>

              <div className="p-6 bg-gradient-to-tr from-white/6 to-white/3 rounded-2xl border border-white/6 shadow-xl">
                <h3 className="text-lg font-bold text-white">Key Components</h3>
                <ul className="mt-2 text-white/90 text-sm space-y-2 list-disc list-inside">
                  <li><strong>Annual Plenary</strong> — Mainstage teachings, interfaith dialogue & arts.</li>
                  <li><strong>Podcast</strong> — Episodes exploring roots, language and culture.</li>
                  <li><strong>Showcase</strong> — Music, film and exhibitions amplifying stories.</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-tr from-white/6 to-white/3 rounded-2xl border border-white/6 shadow-xl">
                <h3 className="text-lg font-bold text-white">Impact & Partnerships</h3>
                <p className="mt-2 text-white/90 text-sm leading-relaxed">We partner with Jewish communities, scholars and cultural organisations to ensure global representation and lasting impact.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl shadow-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">2026 Theme</h3>
                  <p className="mt-2 text-white/90 text-sm font-semibold">Roots & Revelation: Rediscovering the Jewish Foundations of the Christian Faith</p>
                </div>
                <div className="mt-4">
                  <a href="/podcast" className="inline-block bg-white text-blue-800 font-bold px-4 py-2 rounded-md">Visit Podcast</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/60">Overseen by the Faith Nexus Covenant Conversations Task Team in collaboration with rabbinic leadership and cultural liaisons.</div>
      </div>
    </section>
  );
};

export default CovenantSection;
