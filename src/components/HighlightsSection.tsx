import { useState, useEffect } from "react";
import { Users, BookOpen, Award } from "lucide-react";

const highlights = [
  {
    id: 1,
    icon: Users,
    title: "10k+ Global Delegates",
  description: "Faith Nexus 2026 will gather over 10,000 Christian content creators, leaders, and innovators from across Africa and the world—both in-person and online. It is a global Kingdom convergence of voices shaping culture and influencing nations for Christ.",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    icon: BookOpen,
    title: "10+ Plenaries & Pillar Labs",
    description: "Across 3 impactful days, delegates will engage in dynamic plenary sessions and 7 Pillar Content Labs, equipping them with practical skills, media tools, and Kingdom strategies to expand their digital and societal influence.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    icon: Award,
    title: "Next100",
    description: "A prestigious awards night celebrating 100 outstanding faith-driven innovators, leaders, and content creators who are transforming culture through media, technology, business, and Kingdom leadership.",
    gradient: "from-orange-500 to-red-600"
  }
];

export const HighlightsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url('/images/highlights-pattern.svg')", backgroundRepeat: 'repeat' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Faith Nexus Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/70 mx-auto rounded-full"></div>
        </div>

        {/* Rotating Cards Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-80">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + highlights.length) % highlights.length;
              const isNext = index === (currentIndex + 1) % highlights.length;
              
              return (
                <div
                  key={highlight.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    isActive 
                      ? 'opacity-100 scale-100 z-20' 
                      : isPrev 
                        ? 'opacity-30 scale-95 -translate-x-8 z-10' 
                        : isNext
                          ? 'opacity-30 scale-95 translate-x-8 z-10'
                          : 'opacity-0 scale-90 z-0'
                  }`}
                >
                  <div className={`h-full bg-gradient-to-br ${highlight.gradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/10`}>
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <div className="mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        <Icon size={48} className="text-white" />
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                        {highlight.title}
                      </h3>
                      
                      <p className="text-lg md:text-xl leading-relaxed opacity-95 max-w-3xl">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-120' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements for Visual Appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
    </section>
  );
};

export default HighlightsSection;