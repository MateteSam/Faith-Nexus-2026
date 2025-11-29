import React from "react";

const CovenantSection: React.FC = () => {
  return (
    <section id="covenant" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="text-sm text-primary font-semibold uppercase tracking-wider">COVENANT CONVERSATIONS</div>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold">A Strategic Faith Nexus Project on Jewish-Christian Understanding, Heritage & Cultural Exchange</h2>
          <p className="mt-4 text-lg text-white/80 mx-auto max-w-3xl">A signature, long-term initiative of the Faith Nexus Movement dedicated to restoring, honouring and engaging the Jewish foundations of the Christian faith through dialogue, arts, education and intercultural collaboration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Overview & Mission</h3>
            <p className="text-white/80">Covenant Conversations reconnects Christians to the Hebraic roots of their faith while welcoming Jewish voices, artists and educators. Our mission is to build bridges of understanding and honour between Jewish and Christian communities through dialogue, education, cultural celebration and spiritual alignment.</p>

            <h3 className="text-xl font-bold">Key Components</h3>
            <ul className="list-inside list-disc text-white/80 space-y-2">
              <li><strong>Annual Plenary:</strong> A mainstage feature at the Faith Nexus Summit with Torah readings, teachings, interfaith dialogue and artistic expression.</li>
              <li><strong>Podcast:</strong> Weekly or bi-weekly episodes exploring Jewish roots, Hebrew idioms, feasts and covenantal teaching.</li>
              <li><strong>Arts & Culture Showcase:</strong> Music, film, exhibitions and live performances that enrich delegate experience.</li>
              <li><strong>Educational Hub:</strong> Transcripts, study guides, short explainers and event replays for discipleship and training.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Impact & Partnerships</h3>
            <p className="text-white/80">We partner with Jewish communities, messianic scholars, educators and cultural organisations to ensure global representation and lasting impact. Our goals include rebuilding bridges, offering covenantal clarity, celebrating Jewish contribution, combating antisemitism through education, and catalysing cross-cultural collaboration.</p>

            <h3 className="text-xl font-bold">2026 Theme</h3>
            <p className="text-white/80">Roots & Revelation: Rediscovering the Jewish Foundations of the Christian Faith</p>

            <div className="pt-2">
              <a href="/podcast" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 py-3 rounded-md shadow">Visit Podcast & Resources</a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/70">Overseen by the Faith Nexus Covenant Conversations Task Team in collaboration with rabbinic leadership and cultural liaisons.</div>
      </div>
    </section>
  );
};

export default CovenantSection;
