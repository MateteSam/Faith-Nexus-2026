import React from 'react';
import { RegisterButton } from '@/components/RegisterButton';
import { Building, Users, Trophy, Globe } from 'lucide-react';

const CorporatePartnershipPage: React.FC = () => {
  const benefits = [
    {
      icon: Building,
      title: 'Brand Visibility',
      description: 'High-impact visibility at a premier international Christian event'
    },
    {
      icon: Users,
      title: 'Network Access',
      description: 'Connect with faith-based leaders, entrepreneurs, and media professionals'
    },
    {
      icon: Trophy,
      title: 'Excellence Association',
      description: 'Be associated with world-class content creators and ethical values'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to 30+ countries and 300,000+ digital participants'
    }
  ];

  const partnershipLevels = [
    {
      level: 'Platinum Partner',
      investment: '$50,000+',
      benefits: [
        'Prime logo placement on all major event materials',
        'Speaking opportunity at main sessions',
        'Dedicated exhibition space',
        '10 complimentary VIP tickets',
        'Recognition as presenting sponsor',
        'Post-event content licensing rights'
      ],
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      level: 'Gold Partner',
      investment: '$25,000 - $49,999',
      benefits: [
        'Logo on select event banners and materials',
        'Exhibition booth space',
        '5 complimentary VIP tickets',
        'Recognition in opening ceremony',
        'Social media promotion',
        'Access to attendee networking events'
      ],
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    },
    {
      level: 'Silver Partner',
      investment: '$10,000 - $24,999',
      benefits: [
        'Logo on website and programs',
        'Shared exhibition space',
        '3 complimentary tickets',
        'Recognition in event materials',
        'Digital marketing inclusion'
      ],
      color: 'bg-gradient-to-r from-gray-400 to-gray-500'
    },
    {
      level: 'Bronze Partner',
      investment: '$5,000 - $9,999',
      benefits: [
        'Company listing on website',
        '2 complimentary tickets',
        'Recognition in programs',
        'Networking event access'
      ],
      color: 'bg-gradient-to-r from-orange-600 to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Corporate Partnership Opportunities
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Partner with Faith Nexus 2026 to connect your brand with a high-impact, values-driven audience
              of Christian content creators, media professionals, and faith-based leaders from around the world.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Partnership Levels */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Partnership Levels</h2>
            
            {partnershipLevels.map((level, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className={`${level.color} text-white p-6`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                      <p className="text-white/90">Investment: {level.investment}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Partnership Benefits:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <div className="bg-primary/10 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Partner With Us?</h3>
              <p className="text-muted-foreground mb-6">
                Join leading organizations in supporting the growth of Christian media and content creation.
              </p>
              <RegisterButton size="lg" text="Become a Corporate Partner" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CorporatePartnershipPage;