import React from 'react';
import { RegisterButton } from '@/components/RegisterButton';
import { FileText, Mail, Users, Globe } from 'lucide-react';

const VisaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FileText className="w-12 h-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Travel VISA</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Faith Nexus 2025 is a global gathering of Christian content creators, leaders, innovators, and influencers from 30+ nations.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To ensure a seamless experience for our delegates, Faith Nexus Hospitality has been set up as the dedicated travel and accommodation service for all participants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-6">Visa Applications</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  All registered international delegates for Faith Nexus 2025 will receive comprehensive visa support through our Faith Nexus Hospitality Team.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our team will:</h3>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Provide official invitation letters to support visa applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Coordinate directly with South African embassies and consulates worldwide to facilitate smooth processing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Offer personalized guidance on required documents, fees, and timelines</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">Application Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <p className="text-muted-foreground">Register for Faith Nexus 2025 summit</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <p className="text-muted-foreground">Receive and complete the Visa Support Form</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <p className="text-muted-foreground">Our team assists you until your visa is issued</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Contact for Visa Support</h4>
                  </div>
                  <p className="text-muted-foreground">For visa-related inquiries:</p>
                  <a href="mailto:fnhospitality@faithnexus.com" className="text-primary hover:underline font-medium">
                    fnhospitality@faithnexus.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative rounded-2xl overflow-hidden mb-16">
              <img
                src="/images/visa-support-south-africa.jpg"
                alt="Professional South African visa support team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
                <div className="max-w-2xl px-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Professional Visa Support
                  </h3>
                  <p className="text-lg text-white/90">
                    Our experienced team provides comprehensive visa assistance to ensure your journey to South Africa is smooth and hassle-free.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Apply for Your Visa?</h3>
                <p className="text-muted-foreground mb-6">Register now and get personalized visa support for Faith Nexus 2025.</p>
                <RegisterButton size="lg" text="Start Registration" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisaPage;