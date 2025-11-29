import { Button } from "@/components/ui/button";
// Countdown removed per revamp — replaced by Covenant Conversations teaser
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
    // Preload the hero image
    const img = new Image();
    img.src = "/images/background2.png";
    img.onload = () => setImageLoaded(true);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with lazy loading (unchanged) */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${imageLoaded ? "/images/background2.png" : ""})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 w-full site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left column */}
          <div className="md:col-span-7 lg:col-span-6 text-left">
            <img src="/images/logo.png" alt="Faith Nexus Logo" className="h-20 sm:h-28 mb-4 filter drop-shadow-lg" loading="lazy" />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-xl mb-2">KINGDOM VOICES — GLOBAL REACH</h1>

            <div className="text-sm text-blue-100 font-semibold uppercase tracking-wide mb-3">Theme 2026: Covenant Conversations — Bridging Jewish & Christian Roots</div>

            <p className="text-lg sm:text-xl text-white/95 mb-6">Emotion in every frame — where creators honour shared history, celebrate culture, and ignite cross‑faith collaboration through compelling storytelling.</p>

            <div className="inline-flex items-start gap-4 bg-gradient-to-r from-blue-900 to-blue-600 rounded-xl p-1 shadow-lg mb-6">
              <div className="bg-white/90 rounded-lg p-6 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="11" fill="#0b63cc" fillOpacity="0.12" />
                    <path d="M12 7.2L13.2 9.6L15.8 9.6L13.9 11.2L14.9 13.6L12 12L9.1 13.6L10.1 11.2L8.2 9.6L10.8 9.6L12 7.2Z" fill="#0b63cc"/>
                  </svg>
                  <div className="text-xs uppercase tracking-wider text-blue-800 font-semibold">Covenant Conversations</div>
                </div>
                <div className="text-lg font-bold text-blue-900 mb-2">Bridging Jewish & Christian Faiths <span className="text-sm text-gray-600 ml-2">(שיחות הברית)</span></div>
                <p className="text-sm text-gray-700 mb-4">Explore shared roots and celebrate cultural exchange through dialogue, arts, education and creative collaboration.</p>
                <div className="flex gap-3">
                  <Button onClick={() => { window.location.hash = 'covenant'; }} className="px-4 py-2" aria-label="Learn more about Covenant Conversations">Learn More</Button>
                  <Button variant="outline" onClick={() => navigate('/register')} className="px-4 py-2" aria-label="Register for Faith Nexus 2026">Register</Button>
                </div>
              </div>
            </div>

            <div className="mt-2 bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl max-w-md">
              <div className="text-sm text-primary font-semibold">FAITH NEXUS 2026</div>
              <div className="text-base text-white font-bold">MAR 18–21, 2026</div>
              <div className="text-sm text-gray-300">Moreleta Campus, Pretoria, South Africa</div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/30">
                <div className="w-full" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/J2Da93J8MNs?autoplay=1&loop=1&playlist=J2Da93J8MNs&controls=0&modestbranding=1&rel=0"
                    title="Faith Nexus Register Now Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="hidden md:block absolute -right-6 -bottom-6 w-36">
                <img src="/images/bird-mascot.png" alt="Faith Nexus Mascot" className="w-36 h-auto drop-shadow-2xl" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};