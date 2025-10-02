import { Users, Globe, Video, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export const AboutSectionClean = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/images/Faith Nexus Seven Pillars Icons.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  const features = [{
    icon: Users,
    title: 'Global Community',
    description: 'Connect with Christian content creators from around the world'
  }, {
    icon: Globe,
    title: 'Kingdom Impact',
    description: 'Amplify your voice to reach souls across the globe'
  }, {
    icon: Video,
    title: 'Content Excellence',
    description: 'Learn from industry leaders and master your craft'
  }, {
    icon: Award,
    title: 'Professional Growth',
    description: 'Elevate your skills and expand your ministry reach'
  }];
  return <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">About Faith Nexus</h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">Faith Nexus is a global initiative of the World Christian Content Creators Summit (WCCCS)—the world's largest gathering of Christian content creators.

It exists to inspire, equip, and mobilize a new generation of believers to use digital platforms, creative media, and cultural tools for bold, global
Kingdom impact.

From tech innovators to educators, podcasters to policymakers, Faith Nexus is the catalytic space where faith meets strategy, and creators become reformers.</p>

          

          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-semibold text-orange-900 px-2">
            Our mission: To raise and empower a global movement of Christian content creators who will shape media, culture, and society with excellence, innovation, and the message of Christ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {features.map(feature => <div key={feature.title} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">{feature.description}</p>
            </div>)}
        </div>

        {/* Seven Strategic Pillars section */}
        <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border text-center bg-gray-900">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-orange-400">Seven Strategic Pillars</h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            At Faith Nexus, we understand that content creation extends far beyond media production—it is a transformative force that shapes culture and drives influence across every sphere of society. To this end, Faith Nexus' annual gathering is anchored in seven strategic pillars. They include:
          </p>
          
          <div className="relative h-48 sm:h-64 md:h-96 mb-6 sm:mb-8 flex items-center justify-center">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
            )}
            <img
              src="/images/Faith Nexus Seven Pillars Icons.png"
              alt="Seven Strategic Pillars of Faith Nexus"
              className={`mx-auto w-full max-w-4xl h-auto object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="grid gap-3 sm:gap-4 max-w-4xl mx-auto text-left px-2">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="font-bold text-primary min-w-fit text-sm sm:text-base">Faith:</span>
              <span className="text-muted-foreground text-sm sm:text-base">Rooting all content in biblical truth with theological depth and integrity.</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="font-bold text-primary min-w-fit text-sm sm:text-base">Media:</span>
              <span className="text-muted-foreground text-sm sm:text-base">Leveraging TV, radio, podcasts, film, and digital platforms for Kingdom storytelling.</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="font-bold text-primary min-w-fit text-sm sm:text-base">Technology:</span>
              <span className="text-muted-foreground text-sm sm:text-base">Embracing emerging tools to reach audiences effectively and innovatively.</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="font-bold text-primary min-w-fit text-sm sm:text-base">Governance:</span>
              <span className="text-muted-foreground text-sm sm:text-base">Shaping conversations around leadership, ethics, and civic responsibility.</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="font-bold text-primary min-w-fit text-sm sm:text-base">Economy:</span>
              <span className="text-muted-foreground text-sm sm:text-base">Empowering faith-based entrepreneurship, financial literacy, and sustainable business.</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="font-bold text-primary min-w-fit text-sm sm:text-base">Education:</span>
              <span className="text-muted-foreground text-sm sm:text-base">Developing Christian curricula, resources, and training programs for impact.</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="font-bold text-primary min-w-fit text-sm sm:text-base">Arts & Culture:</span>
              <span className="text-muted-foreground text-sm sm:text-base">Inspiring creativity in music, literature, film, drama, and the visual arts.</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSectionClean;