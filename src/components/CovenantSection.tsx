import React from 'react';
import useInView from '../hooks/use-inview';

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

          {/* Right column - polished lower panel: mission, quick facts, engagement CTA */}
          <div className="lg:col-span-6">
            <div className="space-y-5">
              {/* mission card */}
              <MissionCard />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-md bg-sky-600 flex items-center justify-center border border-sky-600 text-white">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.657-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2"></path></svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-sky-900">Mission</h3>
                    <p className="mt-2 text-slate-700 text-sm leading-relaxed">Foster honour, learning and cultural exchange that reconnects Christian audiences with the Jewish roots of the faith through dialogue, arts and shared practice.</p>
                    <p className="mt-3 inline-block bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1 rounded">Core aim: Build bridges of understanding and mutual respect.</p>
                  </div>
                </div>
              </div>

              <QuickFactsCard />

              <GetInvolvedCard />
            </div>
          </div>

// small subcomponents to keep top-level clean and enable animations
function MissionCard() {
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: '0px 0px -10% 0px' });
  return (
    <div ref={ref} className={`p-6 bg-white rounded-2xl border border-sky-100 shadow-lg transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} hover:-translate-y-1 hover:shadow-2xl`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="w-12 h-12 rounded-md bg-sky-800 flex items-center justify-center border border-sky-800 text-white">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.657-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2"></path></svg>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-sky-900">Mission</h3>
          <p className="mt-2 text-slate-700 text-sm leading-relaxed">Foster honour, learning and cultural exchange that reconnects Christian audiences with the Jewish roots of the faith through dialogue, arts and shared practice.</p>
          <p className="mt-3 inline-block bg-sky-100 text-sky-800 text-xs font-medium px-3 py-1 rounded">Core aim: Build bridges of understanding and mutual respect.</p>
        </div>
      </div>
    </div>
  );
}

function QuickFactsCard() {
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: '0px 0px -10% 0px' });
  const itemClass = 'flex items-start gap-3 bg-white p-3 rounded-lg border border-sky-50 shadow-sm hover:shadow-md transition';
  return (
    <div ref={ref} className={`p-6 bg-sky-100 rounded-2xl border border-sky-100 shadow-md transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h3 className="text-lg font-semibold text-sky-900">Quick Facts</h3>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm">
        <div className={itemClass}>
          <div className="w-9 h-9 rounded-full bg-sky-800 flex items-center justify-center text-white font-bold">1</div>
          <div>
            <div className="font-semibold text-sky-800">Dialogue Focus</div>
            <div className="text-xs">Panel sessions, Q&amp;A and small-group seminars.</div>
          </div>
        </div>

        <div className={itemClass}>
          <div className="w-9 h-9 rounded-full bg-sky-800 flex items-center justify-center text-white font-bold">2</div>
          <div>
            <div className="font-semibold text-sky-800">Arts & Culture</div>
            <div className="text-xs">Concerts, exhibits and storytelling to deepen appreciation.</div>
          </div>
        </div>

        <div className={itemClass}>
          <div className="w-9 h-9 rounded-full bg-sky-800 flex items-center justify-center text-white font-bold">3</div>
          <div>
            <div className="font-semibold text-sky-800">Education</div>
            <div className="text-xs">Workshops, study guides and podcast resources.</div>
          </div>
        </div>

        <div className={itemClass}>
          <div className="w-9 h-9 rounded-full bg-sky-800 flex items-center justify-center text-white font-bold">4</div>
          <div>
            <div className="font-semibold text-sky-800">Partnerships</div>
            <div className="text-xs">Collaborations with rabbis, scholars and cultural partners.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetInvolvedCard() {
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: '0px 0px -10% 0px' });
  return (
    <div ref={ref} className={`p-6 bg-white rounded-2xl border border-sky-100 shadow-lg transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} hover:-translate-y-1 hover:shadow-2xl`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-sky-800">Get Involved</h3>
          <p className="mt-2 text-slate-700 text-sm">Join a session, submit questions for panelists, or apply to present a workshop. We welcome churches, educators and cultural leaders.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href="/register" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-orange-300">Register</a>
            <a href="/contact" className="inline-flex items-center gap-2 border border-sky-100 text-sky-800 bg-white/90 px-4 py-2 rounded hover:bg-white">Contact Team</a>
          </div>
        </div>
        <div className="hidden sm:block text-right">
          <div className="text-xs text-slate-500">Next major event:</div>
          <div className="mt-1 font-bold text-sky-800">Covenant Conversations 2026</div>
          <div className="text-xs text-slate-500">Theme: Roots &amp; Revelation</div>
        </div>
      </div>
    </div>
  );
}
        </div>

        <div className="mt-12 text-center text-sm text-white/60">Overseen by the Faith Nexus Covenant Conversations Task Team in collaboration with rabbinic leadership and cultural liaisons.</div>
      </div>
    </section>
  );
};

export default CovenantSection;
