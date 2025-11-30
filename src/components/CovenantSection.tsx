import React from "react";

const CovenantSection: React.FC = () => {
  return (
    <section id="covenant" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-800/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.5 8L21 9.2L16 13.6L17.2 20L12 16.8L6.8 20L8 13.6L3 9.2L9.5 8L12 2Z" fill="#0b63cc"/></svg>
            </div>
            <div className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Covenant Conversations</div>
          </div>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">A Strategic Faith Nexus Project on Jewish-Christian Understanding, Heritage & Cultural Exchange</h2>
          <div className="mt-4 text-lg text-white/95 mx-auto max-w-3xl">
            <p className="leading-relaxed">A signature, long-term initiative of the Faith Nexus Movement dedicated to restoring, honouring and engaging the Jewish foundations of the Christian faith through dialogue, arts, education and intercultural collaboration.</p>
            <p className="mt-2 text-sm text-blue-100">(שיחות הברית) — Conversations of the Covenant</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            <div className="bg-black/50 p-6 rounded-lg border border-white/10 shadow-sm">
              <h3 className="text-xl font-bold text-white">Overview & Mission</h3>
              <p className="text-white/95 mt-2 leading-relaxed">Covenant Conversations reconnects Christians to the Hebraic roots of their faith while welcoming Jewish voices, artists and educators. Our mission is to build bridges of understanding and honour between Jewish and Christian communities through dialogue, education, cultural celebration and spiritual alignment.</p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-white/10 shadow-sm">
              <h3 className="text-xl font-bold text-white">Key Components</h3>
              <ul className="list-inside list-disc text-white/95 space-y-2 mt-3">
                <li><strong>Annual Plenary:</strong> A mainstage feature at the Faith Nexus Summit with Torah readings, teachings, interfaith dialogue and artistic expression.</li>
                <li><strong>Podcast:</strong> Weekly or bi-weekly episodes exploring Jewish roots, Hebrew idioms, feasts and covenantal teaching.</li>
                <li><strong>Arts & Culture Showcase:</strong> Music, film, exhibitions and live performances that enrich delegate experience.</li>
                <li><strong>Educational Hub:</strong> Transcripts, study guides, short explainers and event replays for discipleship and training.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/50 p-6 rounded-lg border border-white/10 shadow-sm">
              <h3 className="text-xl font-bold text-white">Impact & Partnerships</h3>
              <p className="text-white/95 mt-2 leading-relaxed">We partner with Jewish communities, messianic scholars, educators and cultural organisations to ensure global representation and lasting impact. Our goals include rebuilding bridges, offering covenantal clarity, celebrating Jewish contribution, combating antisemitism through education, and catalysing cross-cultural collaboration.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white">2026 Theme</h3>
              <p className="text-white/90 mt-2 font-semibold">Roots & Revelation: Rediscovering the Jewish Foundations of the Christian Faith</p>
              <div className="mt-4">
                <a href="/podcast" className="inline-block bg-white text-blue-800 font-bold px-5 py-3 rounded-md shadow">Visit Podcast & Resources</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/70">Overseen by the Faith Nexus Covenant Conversations Task Team in collaboration with rabbinic leadership and cultural liaisons.</div>
      </div>
    </section>
  );
};

export default CovenantSection;
