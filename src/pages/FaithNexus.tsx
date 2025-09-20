import AboutSection from '@/components/AboutSectionClean';
import RegistrationForm from '@/components/RegistrationForm';
import { ScrollingBanner } from '@/components/ScrollingBanner';
import { RegisterButton } from '@/components/RegisterButton';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FaithNexus = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollingBanner />
      <main className="py-12">
        <AboutSection />

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
