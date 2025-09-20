import React from 'react';

export const ProgramSection: React.FC = () => {
  return (
    <section id="programme" className="max-w-7xl mx-auto my-16 px-6">
      <div className="bg-gradient-to-r from-white/80 via-slate-50 to-white/95 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-10 md:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">DAY 1 – WEDNESDAY, NOVEMBER 27, 2025</h2>
            <p className="mt-3 text-lg text-slate-600 font-medium">Theme: <span className="font-semibold">Equip Voices with Tools – The Great Commission Meets the Algorithm</span></p>
            <p className="mt-2 text-slate-500">Focus: Providing delegates with tools, mindsets, and strategies to maximize Kingdom influence in the digital age.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Morning schedule timeline */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-slate-800">Morning Plenary Session – Voices with Tools: Reimagining Mission in a Digital Age</h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">08:00 - 09:00</div>
                    <div>
                      <div className="font-semibold">Arrival &amp; Worship</div>
                      <div className="text-sm text-slate-500">Faith Nexus Intro Video</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">09:00 - 09:15</div>
                    <div>
                      <div className="font-semibold">Welcome &amp; Devotional</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">09:15 - 09:45</div>
                    <div>
                      <div className="font-semibold">Keynote #1</div>
                      <div className="text-sm text-slate-500">The Mission Has Not Changed, But the Tools Have</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">09:45 - 10:30</div>
                    <div>
                      <div className="font-semibold">Panel #1</div>
                      <div className="text-sm text-slate-500">Digital Discipleship, Platforms &amp; Power</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">10:30 - 11:00</div>
                    <div>
                      <div className="font-semibold">Coffee Break</div>
                      <div className="text-sm text-slate-500">FaithFuel Stations</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">11:00 - 11:45</div>
                    <div>
                      <div className="font-semibold">Panel #2</div>
                      <div className="text-sm text-slate-500">Faith &amp; Algorithms – Building and Being Heard in a Noisy World</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">11:45 - 12:15</div>
                    <div>
                      <div className="font-semibold">Keynote #2</div>
                      <div className="text-sm text-slate-500">A Post-Pulpit Generation – Who Is Preaching to the Scroll?</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-slate-500 w-20">12:15 - 12:30</div>
                    <div>
                      <div className="font-semibold">Call to Action &amp; Workshop Orientation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Pillar Labs overview */}
            <aside className="lg:col-span-1">
              <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-6 shadow-md sticky top-24">
                <h4 className="text-lg font-semibold text-slate-800">Afternoon Pillar Labs</h4>
                <p className="mt-2 text-sm text-slate-500">2:00 PM – 5:30 PM</p>

                <div className="mt-4 space-y-3">
                  <p className="text-sm text-slate-600">Each delegate joins one of four practical tracks, each with Masterclass + Panel + Media Enablement Lab + Toolkit.</p>

                  <div className="grid gap-3 mt-3">
                    <div className="flex items-start gap-3">
                      <div className="text-xl">1️⃣</div>
                      <div>
                        <div className="font-semibold">Media &amp; Technology Lab</div>
                        <div className="text-sm text-slate-500">Kingdom Content in the Age of Algorithms</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-xl">2️⃣</div>
                      <div>
                        <div className="font-semibold">Business &amp; Governance Lab</div>
                        <div className="text-sm text-slate-500">Building Kingdom Enterprises in Complex Economies</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-xl">3️⃣</div>
                      <div>
                        <div className="font-semibold">Faith &amp; Education Lab</div>
                        <div className="text-sm text-slate-500">Curriculum, Calling &amp; Cultural Relevance</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-xl">4️⃣</div>
                      <div>
                        <div className="font-semibold">Arts &amp; Culture Lab</div>
                        <div className="text-sm text-slate-500">Theatre of Influence: Reclaiming the Artistic Space</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
