import React from 'react';
import { RegisterButton } from '@/components/RegisterButton';
import { Bed, MapPin, Coffee, Car, CheckCircle, Mail, Calendar, Users } from 'lucide-react';

const AccommodationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Bed className="w-12 h-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Accommodation Services</h1>
              </div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Faith Nexus 2025 – Accommodation Services</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To provide delegates with a stress-free experience, Faith Nexus Hospitality coordinates all accommodation for local and international participants attending the summit at Moreleta Campus, Pretoria, South Africa (26–29 November 2025).
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Bed className="w-8 h-8 text-primary" />
                    Accommodation Options
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We have partnered with hotels, guest houses, and lodges near the summit venue to offer:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Discounted delegate rates (budget, standard, and premium options)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Group booking packages for churches and organizations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Flexible options for early arrivals or extended stays for tourism</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <p className="text-muted-foreground">Accommodation with breakfast and shuttle access included</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Car className="w-7 h-7 text-primary" />
                    Daily Shuttle Services
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    All official accommodation options include:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <p className="text-muted-foreground">Daily shuttle transfers to and from the summit venue</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <p className="text-muted-foreground">Airport transfers from O.R. Tambo International Airport or Lanseria Airport upon arrival and departure (if booked with Faith Nexus Hospitality)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">How to Book Your Accommodation</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Complete Registration</h4>
                        <p className="text-muted-foreground">Complete your summit registration online</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Receive Form</h4>
                        <p className="text-muted-foreground">You will receive a Hospitality Assistance Form to request hotel bookings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Get Options</h4>
                        <p className="text-muted-foreground">Our team will provide curated options and discounted rates</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/20 rounded-2xl p-8 border border-accent/30">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Calendar className="w-7 h-7 text-primary" />
                    Event Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Event Dates</p>
                        <p className="text-muted-foreground">26–29 November 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Venue</p>
                        <p className="text-muted-foreground">Moreleta Campus, Pretoria, South Africa</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Expected Delegates</p>
                        <p className="text-muted-foreground">10,000+ from 30+ nations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">For accommodation inquiries and bookings:</p>
                  <a href="mailto:fnhospitality@faithnexus.world" className="text-primary hover:underline font-medium">
                    fnhospitality@faithnexus.world
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/accommodation-pretoria-south-africa.jpg"
                alt="Quality accommodation in Pretoria, South Africa"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
                <div className="max-w-2xl px-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Comfortable Stay in Pretoria
                  </h3>
                  <p className="text-lg text-white/90">
                    Experience the warmth of South African hospitality with our carefully selected accommodation partners near the summit venue.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Book Your Stay?</h3>
                <p className="text-muted-foreground mb-6">Register for Faith Nexus 2025 and get access to discounted accommodation rates.</p>
                <RegisterButton size="lg" text="Register & Book" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccommodationPage;