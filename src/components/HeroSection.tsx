import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import heroImage from "@/assets/hero-desert-cameras.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Bird Character */}
      <div className={`absolute right-0 md:right-10 top-1/4 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{
      animationDelay: "0.8s"
    }}>
        <img src="/images/bird-mascot.png" alt="Faith Nexus Mascot" className="w-32 md:w-48 lg:w-64 h-auto drop-shadow-2xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Floating Logo */}
        <div className="mb-8">
          <img src="/images/logo.png" alt="Faith Nexus Logo" className="h-32 md:h-40 lg:h-48 w-auto mx-auto filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </div>
        
        {/* Main Hero Text - Reordered as requested */}
        <div className="mb-12 fade-in-up">
          {/* KINGDOM VOICES (top) / GLOBAL REACH (bottom) - stacked */}
          <div className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-foreground drop-shadow-lg transform transition-all">
            <span className="block">KINGDOM VOICES</span>
            <span className="block">GLOBAL REACH</span>
          </div>
          
          {/* EMOTION IN EVERY FRAME - Now smaller */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 tracking-wide text-white/90">
            EMOTION IN EVERY FRAME
          </h2>
        </div>

        {/* Improved Countdown Section */}
        <div className="mb-12 fade-in-up" style={{
        animationDelay: "0.2s"
      }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">JOIN US IN</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h2>
          <CountdownTimer />
        </div>

        {/* Conference Details - Side by Side Layout */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-8 fade-in-up shadow-2xl" style={{
        animationDelay: "0.4s"
      }}>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Text Content - Expanded */}
            <div className="flex-1 text-center lg:text-left">
              <div className="text-primary text-xl md:text-2xl font-bold mb-4">
                FAITH NEXUS 2025
              </div>
              <div className="text-lg md:text-xl mb-2">NOV. 27-29, 2025</div>
              <div className="text-base md:text-lg text-gray-300 mb-6">
                MORELETA CAMPUS PRETORIA, SOUTH AFRICA
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg" onClick={() => navigate('/register')}>
                REGISTER NOW
              </Button>
            </div>

            {/* Video Player - Side Position */}
            <div className="flex-1 max-w-md">
              <div className="relative rounded-lg overflow-hidden bg-black/40 border border-white/10">
                <video 
                  controls 
                  loop 
                  autoPlay
                  muted
                  poster="/images/logo.png" 
                  preload="metadata" 
                  className="w-full h-48 md:h-56 object-cover cursor-pointer"
                  onClick={() => window.open('https://www.youtube.com/watch?v=J2Da93J8MNs', '_blank')}
                >
                  <source src="/videos/selimo-thabane-live.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Click overlay for YouTube redirect */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => window.open('https://www.youtube.com/watch?v=J2Da93J8MNs', '_blank')}
                >
                  <div className="bg-red-600 rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};