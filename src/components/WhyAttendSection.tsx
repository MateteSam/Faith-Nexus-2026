import { Users, Video, Palette, GraduationCap, Briefcase, Lightbulb, Church, Globe, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from './ui/button';

const attendeeCategories = [
  {
    icon: Church,
    title: "Church Leaders",
    subtitle: "Fivefold Ministers",
    image: "/images/Church_Leaders2.png",
    description: "Equip your congregation with cutting-edge digital ministry tools and strategies to reach more souls effectively.",
    benefits: ["Advanced digital ministry strategies", "Congregation engagement tools", "Multi-platform outreach methods"]
  },
  {
    icon: Video,
    title: "Content Creators",
    subtitle: "Filmmakers & Podcasters",
    image: "/images/Content_Creators.png", 
    description: "Master Kingdom storytelling and build authentic digital communities that impact nations.",
    benefits: ["Professional content creation", "Audience growth strategies", "Monetization techniques"]
  },
  {
    icon: Lightbulb,
    title: "Tech Innovators",
    subtitle: "Entrepreneurs",
    image: "/images/Tech_Innovators.png",
    description: "Leverage technology to advance Kingdom purposes and transform culture through innovation.",
    benefits: ["Kingdom-centered technology", "Startup funding strategies", "Tech for social impact"]
  },
  {
    icon: Briefcase,
    title: "Kingdom Professionals",
    subtitle: "Policy Makers",
    image: "/images/Kingdom_Professionals.png",
    description: "Influence spheres of society with faith-driven leadership principles and Kingdom mindset.",
    benefits: ["Leadership development", "Policy influence strategies", "Kingdom marketplace principles"]
  },
  {
    icon: Palette,
    title: "Creative Artists",
    subtitle: "Digital Ministers",
    image: "/images/Creative_Artists.png",
    description: "Express God's creativity through powerful media and artistic expression that touches hearts.",
    benefits: ["Artistic excellence training", "Creative expression techniques", "Media production skills"]
  },
  {
    icon: Globe,
    title: "Global Storytellers",
    subtitle: "Cultural Influencers",
    image: "/images/Global_Storytellers.png",
    description: "Reach nations with compelling narratives that transform worldviews and impact cultures.",
    benefits: ["Cross-cultural storytelling", "Global audience engagement", "Cultural transformation strategies"]
  },
  {
    icon: Users,
    title: "Media Teams",
    subtitle: "Technical Directors",
    image: "/images/Media_Teams.png",
    description: "Enhance church production quality and digital engagement strategies for maximum impact.",
    benefits: ["Production excellence", "Technical innovation", "Team leadership skills"]
  }
];

export const WhyAttendSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90"></div>
        
        {/* Dynamic floating elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-500/15 to-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-amber-400/12 to-amber-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-amber-300/8 to-amber-400/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Particle system */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-amber-500/20 text-amber-300 text-sm font-semibold rounded-full border border-amber-500/30 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Join the Movement
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Who Should
            <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Attend?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect with 10,000+ Christian innovators, creators, and leaders transforming culture through faith-driven media and technology.
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20" style={{ perspective: '1000px' }}>
          {attendeeCategories.map((category, index) => (
            <div 
              key={index} 
              className="flip-card-container group cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                height: '400px'
              }}
            >
              <div className="flip-card relative w-full h-full transition-transform duration-700 transform-gpu group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Front Face */}
                <div className="flip-card-front absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="relative w-full h-full">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <div className="mb-4">
                        <div className="w-12 h-12 mx-auto bg-amber-500/90 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-amber-200 text-sm font-medium uppercase tracking-wider">
                        {category.subtitle}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-amber-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div 
                  className="flip-card-back absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-md border border-amber-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-400/5"></div>
                    
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                            <category.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 text-center">
                          {category.title}
                        </h3>
                        
                        <p className="text-slate-300 text-sm leading-relaxed mb-4 text-center">
                          {category.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {category.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-300">
                              <UserCheck className="w-3 h-3 text-amber-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button 
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                          onClick={() => {
                            // Scroll to registration section or open registration modal
                            const registrationSection = document.getElementById('registration');
                            if (registrationSection) {
                              registrationSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What to Expect Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What to <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Expect</span>
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Transform your ministry and creative impact through world-class training, networking, and Kingdom innovation.
          </p>
        </div>
        
        {/* Key Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Users,
              title: "Global Network",
              description: "Connect with 10,000+ Christian innovators from across Africa and beyond",
              gradient: "from-blue-500 to-blue-600"
            },
            {
              icon: Lightbulb,
              title: "Cutting-Edge Training", 
              description: "10+ dynamic sessions and 7 specialized content creation labs",
              gradient: "from-purple-500 to-purple-600"
            },
            {
              icon: Video,
              title: "Media Excellence",
              description: "Learn from world-class Christian media and storytelling experts",
              gradient: "from-green-500 to-green-600"
            },
            {
              icon: Briefcase,
              title: "Next100 Awards",
              description: "Celebrate 100 outstanding faith-driven culture transformers", 
              gradient: "from-orange-500 to-orange-600"
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-400/30"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-20">
          <div className="inline-block p-8 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Culture?
            </h3>
            <p className="text-slate-300 mb-6 max-w-md mx-auto">
              Join thousands of Christian innovators who are making an eternal impact through media and technology.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
            >
              Join Faith Nexus 2026
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Registration Protocol Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-amber-500/20 text-amber-300 text-sm font-semibold rounded-full border border-amber-500/30 backdrop-blur-sm shadow-lg">
                <UserCheck className="w-4 h-4 inline mr-2" />
                Registration Process
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                REGISTRATION PROTOCOL
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-4">
              Join other Christian creators, marketplace voices, Kingdom innovators from across the world @Faith Nexus 2026
            </p>
            <p className="text-lg text-amber-300 font-medium">
              Secure your spot for free today and confirm your participation before March 1st, 2026
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-full"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-16">
              {/* Step 1: Free Registration */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-3">Step 1: Free Registration</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Reserve your seat at Faith Nexus Summit completely free. No payment required at this stage.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-800 z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1 pl-8">
                  <div className="flex items-center space-x-3">
                    <UserCheck className="w-6 h-6 text-amber-400" />
                    <span className="text-amber-300 font-medium">Register Now</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Early Access */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8">
                  <div className="flex items-center justify-end space-x-3">
                    <span className="text-amber-300 font-medium">Exclusive Updates</span>
                    <Lightbulb className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-800 z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1 pl-8 text-left">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-3">Step 2: Early Programme Access</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Get priority access to programme updates, speaker announcements, and exclusive pre-summit activities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Final Confirmation */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-3">Step 3: Final Confirmation</h4>
                    <p className="text-slate-300 leading-relaxed mb-3">
                      Confirm your participation by March 1st, 2026. Payment required to secure your final spot.
                    </p>
                    <div className="text-amber-300 text-sm font-medium">
                      Deadline: March 1st, 2026
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-800 z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1 pl-8">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-6 h-6 text-amber-400" />
                    <span className="text-amber-300 font-medium">Confirm Attendance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Your Free Registration Includes */}
          <div className="mt-20 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-2xl border border-amber-500/20 backdrop-blur-sm p-8">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">
              What Your Free Registration Includes:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: UserCheck, text: "Reserved seat at Faith Nexus Summit" },
                { icon: Lightbulb, text: "Access to early programme updates" },
                { icon: Sparkles, text: "Priority invitation to select pre-summit activities" },
                { icon: Video, text: "Chance to win exclusive Faith Nexus Merchandise" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-amber-300 font-semibold text-lg">
                Final confirmation (by payment) is due by March 1st 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};