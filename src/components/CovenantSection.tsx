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

          {/* Right column - refreshed blue/white cards (improved, non-repetitive) */}
          <div className="lg:col-span-6">
            <div className="space-y-5">
              <div className="p-6 bg-white rounded-2xl border border-sky-100 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-md bg-sky-50 flex items-center justify-center border border-sky-100">
                      <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"></path></svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sky-800">Overview</h3>
                    <p className="mt-2 text-slate-700 text-sm leading-relaxed">A signature initiative dedicated to restoring, honouring and engaging the Jewish foundations of the Christian faith. Below are the mission, pillars and components that structure the programme.</p>
                    <p className="mt-3 inline-block bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1 rounded">Mission: Build bridges of understanding and honour through dialogue, education and cultural collaboration.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100 shadow-md">
                <h3 className="text-lg font-semibold text-sky-800">Strategic Pillars</h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm font-semibold text-sky-700">Faith &amp; Spiritual Life</div>
                    <div className="text-xs text-slate-600">Core theological and covenantal dialogue.</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm font-semibold text-sky-700">Education &amp; Discipleship</div>
                    <div className="text-xs text-slate-600">Teaching sessions, podcast episodes, study resources.</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm font-semibold text-sky-700">Arts &amp; Culture</div>
                    <div className="text-xs text-slate-600">Music, storytelling, visual arts, film, and live performances.</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm font-semibold text-sky-700">Partnerships</div>
                    <div className="text-xs text-slate-600">Collaboration with Jewish leaders, scholars and cultural organisations.</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-sky-100 shadow-lg">
                <h3 className="text-lg font-semibold text-sky-800">Highlighted Components</h3>
                <ol className="mt-3 list-decimal list-inside text-slate-700 text-sm space-y-2">
                  <li><strong>Covenant Conversations Plenary</strong> — Annual mainstage with Torah readings, interfaith dialogue and artistic expression.</li>
                  <li><strong>Covenant Conversations Podcast</strong> — A professional series exploring roots, feasts and covenantal teaching.</li>
                  <li><strong>Jewish Arts &amp; Culture Showcase</strong> — Concerts, exhibitions and screenings to enrich delegate experience.</li>
                </ol>
              </div>

              <div className="p-6 bg-gradient-to-r from-sky-700 to-sky-600 text-white rounded-2xl shadow-2xl flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">2026 Theme</h3>
                  <p className="mt-1 text-sm font-semibold">Roots &amp; Revelation: Rediscovering the Jewish Foundations of the Christian Faith</p>
                </div>
                <div>
                  <a href="/podcast" className="inline-block bg-white text-sky-800 font-bold px-4 py-2 rounded-md">Visit Podcast</a>
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
