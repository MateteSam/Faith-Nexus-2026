import { Users, Globe, Video, Award } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    { icon: Users, title: 'Global Community', description: 'Connect with Christian content creators from around the world' },
    { icon: Globe, title: 'Kingdom Impact', description: 'Amplify your voice to reach souls across the globe' },
    { icon: Video, title: 'Content Excellence', description: 'Learn from industry leaders and master your craft' },
    { icon: Award, title: 'Professional Growth', description: 'Elevate your skills and expand your ministry reach' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us – Faith Nexus</h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Faith Nexus is a global summit and movement dedicated to equipping and connecting Christian content creators to influence society for Christ through media, technology, education, governance, economy, and the arts.
          </p>

          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that faith-driven voices can shape culture and the future, Faith Nexus serves as a platform for training, collaboration, and strategic networking for pastors, authors, filmmakers, podcasters, broadcasters, educators, entrepreneurs, and creatives. It is an initiative of the World Christian Content Creators Summit (www.wcccs.world for more info).
          </p>

          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
            Our mission: To raise and empower a global movement of Christian content creators who will shape media, culture, and society with excellence, innovation, and the message of Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Replaced Seven Pillars section with image */}
        <div className="mt-8 bg-gray-900 rounded-2xl p-8 md:p-12 border border-border text-center">
          <img
            src="/images/Faith Nexus Seven Pillars Icons.png"
            alt="Faith Nexus Seven Pillars Icons"
            className="mx-auto mb-6 w-full max-w-3xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;