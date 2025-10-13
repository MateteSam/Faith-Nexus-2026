import React from 'react';

const PartnershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src="/images/partnership-south-africa.jpg"
            alt="Partnership meeting with South African business leaders"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="max-w-3xl px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Partner With Us
              </h1>
              <p className="text-lg text-white/90">
                Join us in empowering Christian voices across Africa and beyond through strategic partnerships that create lasting kingdom impact.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Why Become a Partner</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Faith Nexus is a premier global summit that unites Christian content creators, media professionals, pastors, authors, filmmakers, podcasters, educators, entrepreneurs, and digital evangelists from around the world. The summit serves as a strategic platform to equip and empower Christian voices to create transformative content that shapes culture, impacts the marketplace, and influences the next generation with the message of Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Scale & Impact */}
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Event Scale & Impact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Expected Attendance: 10,000+ in-person delegates from across Africa and the world.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Digital Reach: Over 300,000+ online participants and viewers via livestream and global media platforms.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Countries Represented: 30+ nations across Africa, Europe, the Americas, and Asia-Pacific.</p>
              </div>
            </div>
          </div>

          {/* Why Sponsor Faith Nexus 2026? */}
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Sponsor Faith Nexus 2026?</h3>
            <p className="text-muted-foreground mb-6">Partnering with Faith Nexus provides a unique opportunity to:</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Connect your brand with a high-impact, values-driven audience</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Gain visibility among faith-based media and corporate networks</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Be associated with a pioneering global Christian media summit</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Support the growth of ethical, positive, and impactful content creators</p>
              </div>
            </div>
          </div>

          {/* Audience Profile */}
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Audience Profile</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Christian entrepreneurs, leaders, influencers, and pastors.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Authors, filmmakers, podcasters, publishers, and creative agencies</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">Youth and young adults passionate about media, arts, and technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;