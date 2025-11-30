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

          {/* Right column - detailed program panel */}
          <div className="lg:col-span-6">
            <div className="p-8 bg-gradient-to-tr from-white/6 to-white/3 rounded-2xl border border-white/6 shadow-2xl max-h-[680px] overflow-auto">
              <section className="mb-6">
                <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wide">Overview</h3>
                <h4 className="mt-2 text-lg font-bold text-white">Covenant Conversations is a signature long-term initiative of the Faith Nexus Movement</h4>
                <p className="mt-3 text-white/90 text-sm leading-relaxed">Dedicated to restoring, honouring, and engaging the Jewish foundations of the Christian faith. Envisioned as a multi-dimensional project, Covenant Conversations includes:</p>
                <ul className="mt-3 list-inside list-disc text-white/90 space-y-2 text-sm">
                  <li>An annual plenary session hosted during the Faith Nexus Global Summit</li>
                  <li>A year-round podcast series featuring theological teaching and dialogue</li>
                  <li>Jewish arts and cultural performances as part of the summit’s creative expression</li>
                  <li>Educational content and discipleship materials</li>
                  <li>Intercultural collaboration that promotes honour, healing, and shared vision</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wide">Project Mission</h3>
                <p className="mt-2 text-white/95 text-sm leading-relaxed font-medium">To build bridges of understanding and honour between Jewish and Christian communities through intentional platforms of dialogue, education, cultural celebration, and spiritual alignment.</p>
              </section>

              <section className="mb-6">
                <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wide">Strategic Pillars</h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-black/40 rounded-lg">
                    <div className="text-sm font-semibold text-white">Faith & Spiritual Life</div>
                    <div className="text-xs text-white/90">Core theological and covenantal dialogue</div>
                  </div>
                  <div className="p-3 bg-black/40 rounded-lg">
                    <div className="text-sm font-semibold text-white">Education & Discipleship</div>
                    <div className="text-xs text-white/90">Teaching sessions, podcast episodes, study resources</div>
                  </div>
                  <div className="p-3 bg-black/40 rounded-lg">
                    <div className="text-sm font-semibold text-white">Arts & Culture</div>
                    <div className="text-xs text-white/90">Music, storytelling, visual arts, film, and live performances</div>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wide">Project Components</h3>
                <ol className="mt-3 list-decimal list-inside text-white/90 space-y-3 text-sm">
                  <li>
                    <strong className="text-white">Covenant Conversations Plenary</strong>
                    <div className="text-white/85">An annual mainstage feature within the Faith Nexus Summit, fully facilitated by Jewish leaders, offering Torah readings and sacred teachings, interfaith dialogue on covenant, Scripture, and identity, artistic expression, cultural blessing and prophetic gestures, and Christian audience engagement and Q&amp;A.</div>
                  </li>
                  <li>
                    <strong className="text-white">Covenant Conversations Podcast</strong>
                    <div className="text-white/85">A professionally produced weekly or bi-weekly podcast, hosted by a Christian moderator and featuring recurring insights from the lead Rabbi and other Jewish scholars, artists, or educators. Focus: Jewish roots of Christian faith, feasts, covenants, and Jewish perspectives.</div>
                  </li>
                  <li>
                    <strong className="text-white">Jewish Arts &amp; Culture Showcase</strong>
                    <div className="text-white/85">Evening concerts, exhibitions, film screenings and workshops that enrich the delegate experience and increase cultural empathy.</div>
                  </li>
                  <li>
                    <strong className="text-white">Educational Resource Hub (Post-Summit)</strong>
                    <div className="text-white/85">Transcripts, study guides, short explainers, a digital library of teachings and recommended readings, and event replays for discipleship and training.</div>
                  </li>
                  <li>
                    <strong className="text-white">Strategic Partnerships &amp; Jewish Engagement</strong>
                    <div className="text-white/85">Working with Jewish communities, messianic scholars, filmmakers, educators, cultural centres, and interfaith organisations to ensure representation and lasting impact.</div>
                  </li>
                </ol>
              </section>

              <section className="mb-6">
                <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wide">Impact Goals</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  <li className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs">Rebuild bridges between Christians and the Jewish world</li>
                  <li className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs">Offer biblically rooted clarity and covenantal teaching</li>
                  <li className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs">Celebrate Jewish artistic and prophetic contribution</li>
                  <li className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs">Combat antisemitism through education and honour</li>
                  <li className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs">Catalyse content, collaboration, and creativity between communities</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wide">Coordination &amp; Delivery</h3>
                <p className="mt-2 text-white/90 text-sm leading-relaxed">The initiative will be overseen by a dedicated Faith Nexus Covenant Conversations Task Team, in collaboration with rabbinic leadership, cultural liaisons, and the Faith Nexus Programme Office.</p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wide">Communication Channels &amp; Long-Term Vision</h3>
                <p className="mt-2 text-white/90 text-sm leading-relaxed">Microsite, dedicated podcast channel, newsletters, partner briefings — with the long-term vision of evolving Covenant Conversations into a continental and global movement where Jewish and Christian communities co-create and co-steward.</p>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/60">Overseen by the Faith Nexus Covenant Conversations Task Team in collaboration with rabbinic leadership and cultural liaisons.</div>
      </div>
    </section>
  );
};

export default CovenantSection;
