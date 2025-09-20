import React from 'react';
import { RegisterButton } from '@/components/RegisterButton';
import { Church, Users, Heart, Award, Star, Trophy } from 'lucide-react';

const ChurchPartnershipPage: React.FC = () => {
  const partnershipLevels = [
    {
      level: 'Platinum Church Partner',
      requirement: '50+ delegates registered',
      discount: '25%',
      benefits: [
        'Bulk registration discount (25%)',
        'Church logo on event website',
        'Special mention at plenary',
        '5 complimentary VIP tickets'
      ],
      icon: Trophy,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      level: 'Gold Church Partner',
      requirement: '25–49 delegates registered',
      discount: '20%',
      benefits: [
        'Bulk registration discount (20%)',
        'Logo on select event banners',
        '3 complimentary VIP tickets'
      ],
      icon: Award,
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    },
    {
      level: 'Silver Church Partner',
      requirement: '10–24 delegates registered',
      discount: '15%',
      benefits: [
        'Bulk registration discount (15%)',
        '1 complimentary VIP ticket',
        'Church name listed as a partner'
      ],
      icon: Star,
      color: 'bg-gradient-to-r from-gray-400 to-gray-500'
    }
  ];

  const additionalBenefits = [
    'Access to Faith Nexus Connectors – a youth mobilizer program for churches',
    'Opportunities for co-branded media promos (church social media + event promos)',
    'Recognition in post-event reports and social media highlights'
  ];

  const partnershipProcess = [
    'Review Partnership Benefits & Decide Level',
    'Sign a Partnership MOU confirming church commitment',
    'Nominate Faith Nexus Connectors (youth mobilizers)',
    'Promote the Event via Church Channels (pulpit announcements, social media, banners)',
    'Facilitate Group Registrations using the church discount code'
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-6">
              <Church className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Church Partnership
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The Church is central to the success of Faith Nexus 2025. We seek to partner with churches 
              and denominations to mobilise believers and empower ministry teams for Kingdom content creation.
            </p>
          </div>

          {/* Church Partnership Goals */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Partnership Goals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mobilise Believers</h3>
                  <p className="text-muted-foreground text-sm">
                    Encourage attendance and equip believers as Kingdom content creators
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Empower Teams</h3>
                  <p className="text-muted-foreground text-sm">
                    Strengthen church media teams, authors, worship leaders, and creatives
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Church className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Strengthen Collaboration</h3>
                  <p className="text-muted-foreground text-sm">
                    Build bridges between ministries and Christian media platforms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Levels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Partnership Levels</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-lg border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-foreground">Partnership Level</th>
                    <th className="text-left p-6 font-semibold text-foreground">Mobilization Commitment</th>
                    <th className="text-left p-6 font-semibold text-foreground">Benefits to the Church</th>
                  </tr>
                </thead>
                <tbody>
                  {partnershipLevels.map((level, index) => {
                    const Icon = level.icon;
                    return (
                      <tr key={index} className="border-b border-border last:border-b-0">
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${level.color.replace('bg-gradient-to-r', 'bg-opacity-20')}`}>
                              <Icon className="h-5 w-5 text-foreground" />
                            </div>
                            <span className="font-medium text-foreground">{level.level}</span>
                          </div>
                        </td>
                        <td className="p-6 text-muted-foreground">{level.requirement}</td>
                        <td className="p-6">
                          <ul className="space-y-2">
                            {level.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-2">
                                <div className="bg-primary/10 rounded-full p-1 mt-1">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                </div>
                                <span className="text-muted-foreground text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6">Additional Benefits for All Partners</h3>
            <div className="space-y-4">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Faith Nexus Connectors Program */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">Faith Nexus Connectors (Youth Mobilizer Program)</h3>
            <p className="text-muted-foreground mb-6">
              The Faith Nexus Connectors Program is designed to raise young leaders in partner churches who will:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">1. Promote</h4>
                <p className="text-muted-foreground text-sm">Promote the event within their church and networks</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">2. Mobilize</h4>
                <p className="text-muted-foreground text-sm">Mobilize media, worship, and creative teams to attend</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">3. Serve</h4>
                <p className="text-muted-foreground text-sm">Serve as liaisons during and after the event for ongoing training</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Partner churches can nominate up to 3 Connectors to be trained online on event promotion and mobilization strategies.
            </p>
          </div>

          {/* Partnership Process */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">Partnership Process</h3>
            <div className="space-y-4">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Partner With Us?</h3>
              <p className="text-muted-foreground mb-6">
                Join us in mobilizing and equipping believers for Kingdom content creation.
              </p>
              <RegisterButton size="lg" text="Become a Church Partner" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChurchPartnershipPage;