import AboutSection from '@/components/AboutSectionClean';
import RegistrationForm from '@/components/RegistrationForm';
import { ScrollingBanner } from '@/components/ScrollingBanner';
import { RegisterButton } from '@/components/RegisterButton';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Target, Users, Award, Heart } from 'lucide-react';

const FaithNexus = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollingBanner />
      <main className="py-12">
        <AboutSection />

        {/* Enhanced About Section */}
        <section className="max-w-6xl mx-auto px-4 mt-16 mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About Faith Nexus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Faith Nexus is a global summit and movement dedicated to equipping and connecting Christian content creators to influence society for Christ through media, technology, education, governance, economy, and the arts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Founded on the belief that faith-driven voices can shape culture and the future, Faith Nexus serves as a platform for training, collaboration, and strategic networking for pastors, authors, filmmakers, podcasters, broadcasters, educators, entrepreneurs, and creatives. It is a <span className="font-semibold text-primary">WCCCS (World Christian Content Creators Summit)</span> initiative.
            </p>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To raise and empower a global movement of Christian content creators who will shape media, culture, and society with excellence, innovation, and the message of Christ.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To equip and connect Kingdom-minded content creators and media professionals through training, mentorship, collaboration, and networking—creating platforms for faith-based voices to have a global impact.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Values</h3>
              <div className="text-left space-y-3">
                <div>
                  <span className="font-semibold text-primary">Excellence:</span>
                  <span className="text-muted-foreground text-sm ml-2">World-class content creation and event delivery.</span>
                </div>
                <div>
                  <span className="font-semibold text-primary">Collaboration:</span>
                  <span className="text-muted-foreground text-sm ml-2">Partnerships that amplify Christian creators worldwide.</span>
                </div>
                <div>
                  <span className="font-semibold text-primary">Innovation:</span>
                  <span className="text-muted-foreground text-sm ml-2">Creativity and new media for today's generation.</span>
                </div>
                <div>
                  <span className="font-semibold text-primary">Integrity:</span>
                  <span className="text-muted-foreground text-sm ml-2">Ethical standards and transparency in all initiatives.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="who">
              <AccordionTrigger className="text-lg">Who should attend</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">Faith Nexus is for anyone passionate about using faith-driven creativity, media, technology, governance, education, entrepreneurship, and the arts to transform culture and expand the Kingdom of God.</p>

                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Pastors, Church Leaders &amp; Ministry Teams</strong> – Seeking to strengthen church communications and digital ministry.</li>
                  <li><strong>Authors, Writers &amp; Publishers</strong> – Developing and distributing impactful faith-based books, devotionals, and curricula.</li>
                  <li><strong>Filmmakers, Podcasters &amp; Content Producers</strong> – Creators in film, TV, radio, podcasting, or YouTube.</li>
                  <li><strong>Digital Evangelists, Bloggers &amp; Social Media Influencers</strong> – Using digital platforms to share the Gospel globally.</li>
                  <li><strong>Worship Leaders, Musicians &amp; Creative Arts Ministers</strong> – Engaging culture through music, drama, dance, and creative ministry.</li>
                  <li><strong>Media Professionals &amp; Broadcasters</strong> – From Christian TV, radio, and production companies seeking collaboration.</li>
                  <li><strong>Youth &amp; Young Adults</strong> – The next generation of Kingdom innovators, storytellers, and digital creators.</li>
                  <li><strong>Entrepreneurs, Business Leaders &amp; Kingdom Investors</strong> – Supporting faith-based ventures and media initiatives.</li>
                  <li><strong>Educators, Trainers &amp; Curriculum Developers</strong> – Creating Christian learning resources and education solutions.</li>
                  <li><strong>Policy Advocates, Governance Leaders &amp; Civic Influencers</strong> – Shaping public narratives and ethical leadership.</li>
                  <li><strong>Technology Innovators &amp; Digital Solution Providers</strong> – Developers and startups building tools for media and ministry.</li>
                  <li><strong>Arts &amp; Culture Champions</strong> – Creatives in music, literature, film, and visual arts influencing culture for Christ.</li>
                  <li><strong>Mission Organizations, NGOs &amp; Para-church Ministries</strong> – Leveraging media and technology for outreach and social transformation.</li>
                  <li><strong>Corporate Partners &amp; Industry Experts</strong> – Businesses and organizations seeking meaningful partnerships in Kingdom impact.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 bg-white/5 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Why Attend?</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gain world-class training and mentorship from leading Christian media and content creation experts.</li>
              <li>Network with global Kingdom influencers, pastors, entrepreneurs, and creatives.</li>
              <li>Access hands-on workshops, exhibitions, and exclusive roundtable discussions.</li>
              <li>Become part of a movement shaping the future of faith-based media and culture.</li>
            </ul>
            <div className="mt-6 text-center">
              <RegisterButton size="lg" />
            </div>
          </div>
        </section>
        <RegistrationForm />
      </main>
    </div>
  );
};

export default FaithNexus;
