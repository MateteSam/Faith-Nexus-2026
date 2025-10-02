import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
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
    img.src = "/images/background.png";
    img.onload = () => setImageLoaded(true);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with lazy loading */}
      <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} style={{
      backgroundImage: `url(${imageLoaded ? "/images/background.png" : ""})`
    }}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Bird Character - Hidden on small mobile for better performance */}
      <div className={`hidden sm:block absolute right-0 md:right-10 top-1/4 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{
      animationDelay: "0.8s"
    }}>
        <img
          src="/images/bird-mascot.png"
          alt="Faith Nexus Mascot"
          className="w-24 sm:w-32 md:w-48 lg:w-64 h-auto drop-shadow-2xl"
          loading="lazy"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Floating Logo */}
        <div className="mb-6 sm:mb-8 relative h-24 sm:h-32 md:h-40 lg:h-48">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg mx-auto w-24 sm:w-32 md:w-40 lg:w-48"></div>
          )}
          <img
            src="/images/logo.png"
            alt="Faith Nexus Logo"
            className={`h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        </div>
        
        {/* Main Hero Text - Optimized for mobile */}
        <div className="mb-8 sm:mb-12 fade-in-up">
          {/* KINGDOM VOICES (top) / GLOBAL REACH (bottom) - stacked */}
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-wider mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-foreground drop-shadow-lg transform transition-all">
            <span className="block leading-tight">KINGDOM VOICES</span>
            <span className="block leading-tight">GLOBAL REACH</span>
          </div>
          
          {/* EMOTION IN EVERY FRAME - Smaller on mobile */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium mb-6 sm:mb-8 tracking-wide text-white/90">
            EMOTION IN EVERY FRAME
          </h2>
        </div>

        {/* Improved Countdown Section */}
        <div className="mb-8 sm:mb-12 fade-in-up" style={{
        animationDelay: "0.2s"
      }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 relative inline-block">
            <span className="relative z-10">JOIN US IN</span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-primary rounded-full"></span>
          </h2>
          <CountdownTimer />
        </div>

        {/* Conference Details - Mobile Optimized Layout */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20 mb-6 sm:mb-8 fade-in-up shadow-2xl" style={{
        animationDelay: "0.4s"
      }}>
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Text Content */}
            <div className="text-center">
              <div className="text-primary text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                FAITH NEXUS 2025
              </div>
              <div className="text-base sm:text-lg md:text-xl mb-2">NOV. 27-29, 2025</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
                MORELETA CAMPUS PRETORIA, SOUTH AFRICA
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto" onClick={() => navigate('/register')}>
                REGISTER NOW
              </Button>
            </div>

            {/* Video Player - Mobile Optimized */}
            <div className="w-full max-w-md mx-auto">
              <div className="relative rounded-lg overflow-hidden bg-black/40 border border-white/10">
                <div
                  className="w-full h-36 sm:h-48 md:h-56 bg-black/60 flex items-center justify-center cursor-pointer group"
                  onClick={() => window.open('https://www.youtube.com/watch?v=J2Da93J8MNs', '_blank')}
                >
                  <img
                    src="/images/logo.png"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-3 sm:p-4 shadow-lg transform transition-transform group-hover:scale-110">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-white text-xs bg-black/60 px-2 py-1 rounded">
                    Click to watch on YouTube
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};