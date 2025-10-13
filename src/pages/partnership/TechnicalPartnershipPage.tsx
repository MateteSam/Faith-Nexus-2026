import React from 'react';
import { RegisterButton } from '@/components/RegisterButton';
import { Wrench, Camera, Radio, Printer, Zap, Smartphone, Eye, Users } from 'lucide-react';

const TechnicalPartnershipPage: React.FC = () => {
  const technicalSupport = [
    {
      type: 'Livestream / Video Production',
      icon: Camera,
      examples: 'Cameras, operators, live broadcasting services',
      benefits: [
        'Logo on livestream screen overlays',
        'Mention during plenary sessions', 
        'Recognition as "Official Livestream Partner"'
      ]
    },
    {
      type: 'Media Coverage',
      icon: Radio,
      examples: 'TV airtime, radio interviews, press coverage',
      benefits: [
        'Co-branding on all media releases',
        'Logo on website and press kits',
        'Recognition on the event stage'
      ]
    },
    {
      type: 'Printing & Design',
      icon: Printer,
      examples: 'Programs, banners, backdrops, delegate materials',
      benefits: [
        'Logo on printed materials',
        'Recognition as "Official Printing Partner"'
      ]
    },
    {
      type: 'Equipment Support',
      icon: Zap,
      examples: 'Sound, lighting, staging, LED screens',
      benefits: [
        'Logo on stage backdrop screen',
        'Recognition as "Official AV Partner"'
      ]
    },
    {
      type: 'Digital & App Support',
      icon: Smartphone,
      examples: 'Event app development, web tools',
      benefits: [
        'Logo on event app and website',
        'Recognition as "Official Digital Partner"'
      ]
    },
    {
      type: 'Merchandise & Branding',
      icon: Users,
      examples: 'Bags, lanyards, T-shirts',
      benefits: [
        'Logo on items provided to delegates',
        'Recognition on event website'
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: Eye,
      title: 'Brand Visibility',
      description: 'High-profile exposure at an international Christian event with global reach'
    },
    {
      icon: Wrench,
      title: 'Official Partnership',
      description: 'Recognition as an Official Technical Partner in all event materials'
    },
    {
      icon: Camera,
      title: 'Logo Placement',
      description: 'Strategic logo placement on banners, livestream screens, and official website'
    },
    {
      icon: Radio,
      title: 'Global Distribution',
      description: 'Post-event exposure via recorded content distributed worldwide'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with pastors, authors, media professionals, and faith-based organizations'
    }
  ];

  const partnershipProcess = [
    'Partner selects area of in-kind support (livestream, printing, media coverage, etc.)',
    'Sign a Technical Partnership MOU outlining deliverables and branding benefits',
    'Provide services/products as per the agreement',
    'Receive branding visibility during and after the event'
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-6">
              <Wrench className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Partnerships
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To reduce event costs and ensure excellence in delivery, Faith Nexus 2026 seeks 
              in-kind technical partnerships with media houses, production providers, and technology firms.
            </p>
          </div>

          {/* Types of In-Kind Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Types of In-Kind Support</h2>
            <div className="space-y-6">
              {technicalSupport.map((support, index) => {
                const Icon = support.icon;
                return (
                  <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="p-6 border-b border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 rounded-full p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{support.type}</h3>
                          <p className="text-muted-foreground">{support.examples}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground mb-4">Key Benefits to Partner:</h4>
                      <ul className="space-y-3">
                        {support.benefits.map((benefit, benefitIndex) => (
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
                );
              })}
            </div>
          </div>

          {/* Benefits of Becoming a Technical Partner */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Benefits of Becoming a Technical Partner</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {partnerBenefits.map((benefit, index) => {
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
            
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Additional Partnership Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">Brand Visibility at a high-profile international Christian event</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">Recognition as an Official Technical Partner in all event materials</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">Logo placement on banners, livestream screens, and the official website</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">Post-event exposure via recorded content distributed globally</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">Networking opportunities with pastors, authors, media professionals, and faith-based organizations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Process */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">Proposed Partnership Process</h3>
            <div className="space-y-6">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Partner With Us?</h3>
              <p className="text-muted-foreground mb-6">
                Join us in delivering a world-class Christian media summit through technical excellence.
              </p>
              <RegisterButton size="lg" text="Become a Technical Partner" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalPartnershipPage;