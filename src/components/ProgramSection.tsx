import React, { useEffect, useState } from 'react';

type Programme = {
  day: string;
  date?: string;
  theme?: string;
  focus?: string;
  morning?: Array<{ time: string; title: string; subtitle?: string }>;
  afternoon?: { time?: string; description?: string; tracks?: Array<{ emoji?: string; title: string; subtitle?: string }> };
  evening?: string;
  finalPlenary?: { items: Array<{ time: string; title: string; subtitle?: string }> };
};

const days = ['programme-day1.json', 'programme-day2.json', 'programme-day3.json'];

export const ProgramSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState<Programme | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(`/data/${days[active]}`)
      .then((r) => r.json())
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch(() => setData(null))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [active]);

  return (
    <section id="programme" className="max-w-7xl mx-auto my-16 px-6">
      <div className="bg-gradient-to-r from-white/80 via-slate-50 to-white/95 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Programme</h2>
            <p className="mt-3 text-lg text-slate-600">A high-level schedule of plenaries, pillar labs and commissioning sessions.</p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex gap-3 justify-center mb-6">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 rounded-md font-semibold ${active === i ? 'bg-blue-800 text-white shadow' : 'bg-white/60 text-slate-700 border border-white/10'}`}>
                  Day {i + 1}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  {loading ? (
                    <div className="text-center py-12">Loading schedule…</div>
                  ) : data ? (
                    <>
                      <h3 className="text-xl font-semibold text-slate-800">{data.day} — {data.date}</h3>
                      {data.theme && <p className="mt-2 text-slate-600 font-medium">Theme: <span className="font-semibold">{data.theme}</span></p>}
                      {data.focus && <p className="mt-2 text-slate-500">{data.focus}</p>}

                      <div className="mt-6 space-y-4">
                        {(data.morning || []).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="text-sm font-mono text-slate-500 w-28">{item.time}</div>
                            <div>
                              <div className="font-semibold">{item.title}</div>
                              {item.subtitle && <div className="text-sm text-slate-500">{item.subtitle}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">Schedule not available.</div>
                  )}
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-6 shadow-md sticky top-24">
                  {loading ? (
                    <div className="text-center py-6">Loading…</div>
                  ) : data ? (
                    <>
                      {data.afternoon && (
                        <>
                          <h4 className="text-lg font-semibold text-slate-800">Afternoon Pillar Labs</h4>
                          {data.afternoon.time && <p className="mt-2 text-sm text-slate-500">{data.afternoon.time}</p>}
                          <div className="mt-4 text-sm text-slate-600">{data.afternoon.description}</div>

                          <div className="grid gap-3 mt-3">
                            {(data.afternoon.tracks || []).map((t, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="text-xl">{t.emoji || '•'}</div>
                                <div>
                                  <div className="font-semibold">{t.title}</div>
                                  {t.subtitle && <div className="text-sm text-slate-500">{t.subtitle}</div>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {data.evening && <p className="mt-4 text-sm text-slate-600">{data.evening}</p>}

                      {data.finalPlenary && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold">Final Plenary</h5>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-6">No additional info.</div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
