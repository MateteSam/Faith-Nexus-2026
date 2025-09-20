import { Users, Globe, Video, Award } from 'lucide-react';
export const AboutSectionClean = () => {
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
  return <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Faith Nexus</h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Faith Nexus is a global initiative of the World Christian Content Creators Summit (WCCCS)—the world’s largest gathering of Christian content creators.

It exists to inspire, equip, and mobilize a new generation of believers to use digital platforms, creative media, and cultural tools for bold, global
Kingdom impact.

From tech innovators to educators, podcasters to policymakers, Faith Nexus is the catalytic space where faith meets strategy, and creators become reformers.</p>

          

          <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed font-semibold text-orange-900">
            Our mission: To raise and empower a global movement of Christian content creators who will shape media, culture, and society with excellence, innovation, and the message of Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map(feature => <div key={feature.title} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>)}
        </div>

        {/* Replaced Seven Pillars section with image */}
        <div className="mt-8 bg-gray-900 rounded-2xl p-8 md:p-12 border border-border text-center">
          <img src="/images/Faith Nexus Seven Pillars Icons.png" alt="Faith Nexus Seven Pillars Icons" className="mx-auto mb-6 w-full max-w-3xl h-auto object-contain" />
        </div>
      </div>
    </section>;
};
export default AboutSectionClean;