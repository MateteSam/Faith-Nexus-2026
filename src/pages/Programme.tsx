import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RegisterButton } from '@/components/RegisterButton';
import { Download } from 'lucide-react';

// Capture the programme section and generate a multi-page PDF.
async function generateProgramPdf() {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf')
  ]);

  const el = document.getElementById('programme-content');
  if (!el) {
    console.warn('Programme content not found');
    return;
  }

  const canvas = await html2canvas(el as HTMLElement, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff'
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 36; // 36pt margin
  const usableWidth = pageWidth - margin * 2;
  const usableHeight = pageHeight - margin * 2;

  // compute scale to fit width
  const scale = usableWidth / canvas.width;
  const renderedHeight = canvas.height * scale;

  if (renderedHeight <= usableHeight) {
    // Single page
    pdf.addImage(imgData, 'PNG', margin, margin, usableWidth, renderedHeight);
  } else {
    // Multi-page: slice the source canvas vertically
    const srcPageHeight = Math.floor(usableHeight / scale); // source pixels per PDF page
    let srcY = 0;
    let pageIndex = 0;

    while (srcY < canvas.height) {
      const sliceHeight = Math.min(srcPageHeight, canvas.height - srcY);
      const tmp = document.createElement('canvas');
      tmp.width = canvas.width;
      tmp.height = sliceHeight;
      const tctx = tmp.getContext('2d');
      if (!tctx) break;
      tctx.drawImage(canvas, 0, srcY, canvas.width, sliceHeight, 0, 0, tmp.width, tmp.height);
      const sliceData = tmp.toDataURL('image/png');
      const sliceRenderedHeight = sliceHeight * scale;
      if (pageIndex > 0) pdf.addPage();
      pdf.addImage(sliceData, 'PNG', margin, margin, usableWidth, sliceRenderedHeight);
      srcY += sliceHeight;
      pageIndex += 1;
    }
  }

  pdf.save('programme.pdf');
}

const Programme: React.FC = () => {
  const [data, setData] = useState<any | null>(null);
  const [day, setDay] = useState<number>(1);

  useEffect(() => {
    let cancelled = false;
    // clear previous data while loading new day
    setData(null);
    (async () => {
      try {
        const file = `/data/programme-day${day}.json`;
        const res = await fetch(file);
        if (!res.ok) throw new Error('Failed to load programme JSON: ' + file);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        console.warn('Could not load programme JSON, falling back to static content', err);
        if (!cancelled) setData(null);
      }
    })();
    return () => { cancelled = true; };
  }, [day]);

  const programme = data ?? {
    day: 'DAY 1',
    date: 'WEDNESDAY, NOVEMBER 27, 2025',
    theme: 'Equip Voices with Tools – The Great Commission Meets the Algorithm',
    focus: 'Providing delegates with tools, mindsets, and strategies to maximize Kingdom influence in the digital age.',
    morning: [
      { time: '08:00 – 09:00', title: 'Arrival & Worship', subtitle: 'Faith Nexus Intro Video' },
      { time: '09:00 – 09:15', title: 'Welcome & Devotional' },
      { time: '09:15 – 09:45', title: 'Keynote #1', subtitle: 'The Mission Has Not Changed, But the Tools Have' },
      { time: '09:45 – 10:30', title: 'Panel #1', subtitle: 'Digital Discipleship, Platforms & Power' },
      { time: '10:30 – 11:00', title: 'Coffee Break', subtitle: 'FaithFuel Stations' },
      { time: '11:00 – 11:45', title: 'Panel #2', subtitle: 'Faith & Algorithms – Building and Being Heard in a Noisy World' },
      { time: '11:45 – 12:15', title: 'Keynote #2', subtitle: 'A Post-Pulpit Generation – Who Is Preaching to the Scroll?' },
      { time: '12:15 – 12:30', title: 'Call to Action & Workshop Orientation' }
    ],
    afternoon: {
      time: '14:00 – 17:30',
      description: 'Each delegate joins one of four practical tracks, each with Masterclass + Panel + Media Enablement Lab + Toolkit.',
      tracks: [
        { emoji: '1️⃣', title: 'Media & Technology Lab', subtitle: 'Kingdom Content in the Age of Algorithms' },
        { emoji: '2️⃣', title: 'Business & Governance Lab', subtitle: 'Building Kingdom Enterprises in Complex Economies' },
        { emoji: '3️⃣', title: 'Faith & Education Lab', subtitle: 'Curriculum, Calling & Cultural Relevance' },
        { emoji: '4️⃣', title: 'Arts & Culture Lab', subtitle: 'Theatre of Influence: Reclaiming the Artistic Space' }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12 programme-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-full md:w-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-center md:text-left">Programme — {programme.day}</h1>
            <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left mt-1">{programme.date} · {programme.theme}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 w-full md:w-auto">
            <RegisterButton size="sm" text="Reserve Spot" className="w-full sm:w-auto" />
            <Button size="sm" variant="ghost" onClick={() => window.print()} className="px-3 py-2 w-full sm:w-auto">
              Print
            </Button>
            <Button size="sm" onClick={async () => { await generateProgramPdf(); }} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />Download PDF
            </Button>
          </div>
        </div>

        {/* Day Selection Buttons */}
        <div className="flex justify-center md:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
          <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${day === 1 ? 'bg-amber-500 text-white shadow-md' : 'bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-100'}`} onClick={() => setDay(1)}>Day 1</button>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${day === 2 ? 'bg-amber-500 text-white shadow-md' : 'bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-100'}`} onClick={() => setDay(2)}>Day 2</button>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${day === 3 ? 'bg-amber-500 text-white shadow-md' : 'bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-100'}`} onClick={() => setDay(3)}>Day 3</button>
        </div>

        <section id="programme-content" className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 print:rounded-none print:shadow-none">
          <header className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">{programme.day} – {programme.date}</h2>
            <p className="mt-1 sm:mt-2 text-slate-600 text-sm sm:text-base">Theme: <strong>{programme.theme}</strong></p>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">{programme.focus}</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              {programme.finalPlenary ? (
                <>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Final Plenary & Closing Ceremony</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">{programme.focus}</p>

                  <div role="list" className="space-y-4 sm:space-y-6">
                    {programme.finalPlenary.items.map((item: any) => (
                      <div key={item.time} role="listitem" className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-none">
                          <time className="inline-flex items-center justify-center bg-amber-50 text-amber-700 font-semibold px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm shadow-sm">{item.time}</time>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-800 text-sm sm:text-base">{item.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Morning Plenary Session</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">{programme.focus}</p>

                  <div role="list" className="space-y-4 sm:space-y-6">
                    {programme.morning && programme.morning.map((item: any) => (
                      <div key={item.time} role="listitem" className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-none">
                          <time className="inline-flex items-center justify-center bg-amber-50 text-amber-700 font-semibold px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm shadow-sm">{item.time}</time>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-800 text-sm sm:text-base">{item.title}</div>
                          {item.subtitle && <div className="text-xs sm:text-sm text-slate-500">{item.subtitle}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-gradient-to-b from-slate-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow sticky top-20 sm:top-24 print:sticky print:top-0">
                  {programme.afternoon ? (
                    <>
                      <h4 className="text-base sm:text-lg font-semibold">Afternoon Pillar Labs</h4>
                      <p className="text-xs sm:text-sm text-slate-500">{programme.afternoon.time}</p>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">{programme.afternoon.description}</p>

                      <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                        {programme.afternoon.tracks.map((t: any) => (
                          <div key={t.title} className="flex items-start gap-2 sm:gap-3">
                            <div className="text-xl sm:text-2xl">{t.emoji}</div>
                            <div>
                              <div className="font-semibold text-sm sm:text-base">{t.title}</div>
                              <div className="text-xs sm:text-sm text-slate-500">{t.subtitle}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-xs sm:text-sm text-slate-500">No Afternoon Pillar Labs for this day.</div>
                  )}

                  {/* No duplicated finalPlenary in sidebar to avoid redundancy for Day 3 */}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Programme;
