import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Virtual Delegate",
      price: "$50",
      features: [
        "Live streaming of all plenary sessions (3 days)",
        "Access to 1 Pillar Lab of choice (live)",
        "Access to replays of remaining labs post-summit",
        "Digital participation certificate",
        "30-day access to the Faith Nexus Media Vault",
        "Downloadable digital delegate pack",
        "Access to online engagement forums",
        "Perfect for international or remote attendees"
      ]
    },
    {
      title: "In-Person Delegate",
      price: "$100",
      features: [
        "Full entry to all 3 days of in-person plenaries and worship sessions",
        "Access to 1 in-person Pillar Lab of your choice",
        "Entry to the exhibition and partner showcase",
        "Printed and digital Nexus Magazine",
        "Delegate Welcome Pack (badge, lanyard, event guide)",
        "Access to breakout networking lounges",
        "Participation in Nexx100 Awards Night (observer seat)",
        "Printed Certificate of Attendance",
        "Access to Pillar Lab recordings after the summit",
        "30-day access to post-summit Media Vault",
        "Ideal for those seeking hands-on workshops, networking, and in-person inspiration"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/images/background.png')` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
            Choose Your Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of faith-driven creators and leaders from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-amber-100"
            >
              <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-amber-100">
                  {plan.title === "Virtual Delegate" ? "Complete virtual access" : "Full in-person experience"}
                </p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-amber-900 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className="w-full bg-amber-900 hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('registration-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
