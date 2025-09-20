import { Users, Globe, Video, Award } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with Christian content creators from around the world',
    },
    {
      icon: Globe,
      title: 'Kingdom Impact',
      description: 'Amplify your voice to reach souls across the globe',
    },
    {
      icon: Video,
      title: 'Content Excellence',
      description: 'Learn from industry leaders and master your craft',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Elevate your skills and expand your ministry reach',
    },
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
            <div
              key={feature.title}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Seven Pillars Framework</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">At Faith Nexus, we recognize that content creation is not just about media—it is about shaping every sphere of influence in society. Our work is guided by seven strategic pillars, which serve as the foundation for all our initiatives:</p>

          <div className="grid gap-4 max-w-3xl mx-auto text-left mb-8">
            <div><strong>Faith</strong> – Rooting all content in biblical truth with theological depth and integrity.</div>
            <div><strong>Media</strong> – Leveraging TV, radio, podcasts, film, and digital platforms for Kingdom storytelling.</div>
            <div><strong>Technology</strong> – Embracing emerging tools to reach audiences effectively and innovatively.</div>
            <div><strong>Governance</strong> – Shaping conversations around leadership, ethics, and civic responsibility.</div>
            <div><strong>Economy</strong> – Empowering faith-based entrepreneurship, financial literacy, and sustainable business.</div>
            <div><strong>Education</strong> – Developing Christian curricula, resources, and training programs for impact.</div>
            <div><strong>Arts &amp; Culture</strong> – Inspiring creativity in music, literature, film, drama, and the visual arts.</div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100M+</div>
              <div className="text-muted-foreground">Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
