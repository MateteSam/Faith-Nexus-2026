import React from 'react';
import { RegisterButton } from '@/components/RegisterButton';
import { Plane, Shield, Clock, Users, MapPin, Mail, CheckCircle } from 'lucide-react';

const FlightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Plane className="w-12 h-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Faith Nexus Hospitality</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To make travel stress-free for all delegates, Faith Nexus Hospitality is the official travel support service for Faith Nexus 2026. Our team handles flight reservations, bookings, and airport transfers for all registered delegates attending the summit.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Plane className="w-8 h-8 text-primary" />
                    Flight Reservations & Bookings
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Faith Nexus Hospitality will assist you with:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Flight booking support for both international and domestic delegates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Exclusive discounted rates with partner airlines for registered delegates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Flexible travel options to accommodate early arrivals or extended stays for tourism</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Itinerary confirmations and ticketing assistance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <MapPin className="w-7 h-7 text-primary" />
                    Airport Services
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We provide seamless airport-to-hotel and hotel-to-venue transfers, including:
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-muted-foreground">• Meet-and-greet services at O.R. Tambo International Airport (Johannesburg) and Lanseria Airport (Johannesburg)</p>
                    <p className="text-muted-foreground">• Pre-arranged shuttle services for individuals and groups</p>
                    <p className="text-muted-foreground">• Daily summit shuttles from official accommodation venues to Moreleta Campus in Pretoria</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Shield className="w-7 h-7 text-primary" />
                    Benefits of Booking Through Us
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-muted-foreground">No extra service fees for registered delegates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-muted-foreground">Access to trusted airlines and transport providers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-muted-foreground">Hassle-free coordination with your travel and accommodation plans</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-muted-foreground">Peace of mind—our team manages all logistics</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/20 rounded-2xl p-8 border border-accent/30">
                  <h3 className="text-2xl font-bold text-foreground mb-6">How to Book Your Flights and Airport Services</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                      <p className="text-muted-foreground">Complete your summit registration online</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                      <p className="text-muted-foreground">You will receive a Hospitality Assistance Form to request flight and shuttle bookings</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                      <p className="text-muted-foreground">Our team will contact you with travel options, costs, and confirmations</p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">Contact</h4>
                    </div>
                    <p className="text-muted-foreground">Email:</p>
                    <a href="mailto:fnhospitality@faithnexus.world" className="text-primary hover:underline font-medium">
                      fnhospitality@faithnexus.world
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/airport-services-south-africa.jpg"
                alt="Professional airport services in South Africa"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
                <div className="max-w-2xl px-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Seamless Airport Experience
                  </h3>
                  <p className="text-lg text-white/90">
                    From touchdown to takeoff, our comprehensive airport services ensure your travel experience in South Africa is smooth and memorable.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Book Your Flights?</h3>
                <p className="text-muted-foreground mb-6">Register for Faith Nexus 2026 and get access to exclusive flight booking services.</p>
                <RegisterButton size="lg" text="Register & Book" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FlightsPage;