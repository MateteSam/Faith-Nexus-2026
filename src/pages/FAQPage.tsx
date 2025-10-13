import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: "What is Faith Nexus?",
    answer: "Faith Nexus is a transformative event designed to equip voices with tools, mindsets, and strategies to maximize Kingdom influence in the digital age. It brings together church leaders, content creators, creative artists, global storytellers, kingdom professionals, media teams, and tech innovators."
  },
  {
    question: "When and where is Faith Nexus taking place?",
  answer: "Faith Nexus is scheduled for March 18-21, 2026. The venue details will be announced soon. Please check our homepage for the latest updates."
  },
  {
    question: "Who should attend Faith Nexus?",
    answer: "Faith Nexus is for anyone passionate about leveraging digital platforms for Kingdom impact. This includes church leaders, content creators, creative artists, global storytellers, kingdom professionals, media teams, and tech innovators."
  },
  {
    question: "How can I register for Faith Nexus?",
    answer: "You can register for Faith Nexus by visiting our registration page. Early bird discounts may be available, so register soon!",
    link: { to: "/register", text: "Register here" }
  },
  {
    question: "Are there partnership opportunities available?",
    answer: "Yes, we offer various partnership opportunities for corporations, churches, and technical organizations. Visit our Partnership page for more information.",
    link: { to: "/partnership", text: "Explore Partnerships" }
  },
  {
    question: "What kind of content can I expect at Faith Nexus?",
    answer: "The programme includes keynote speeches, panel discussions, masterclasses, and media enablement labs across four tracks: Media & Technology, Business & Governance, Faith & Education, and Arts & Culture. You can view the full programme on our Programme page.",
    link: { to: "/programme", text: "View Programme" }
  },
  {
    question: "Is accommodation and travel support available?",
    answer: "We provide information and support for visa applications, flights, and accommodation. Please refer to our Hospitality section for details.",
    link: { to: "/hospitality/visa", text: "Learn More" }
  },
  {
    question: "How can I contact the Faith Nexus team?",
    answer: "For any inquiries, please reach out to us through the contact form on our website or email us directly at info@faithnexus.org."
  }
];

const FAQPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-slate-900 mb-8">Frequently Asked Questions</h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about Faith Nexus, registration, partnerships, and more.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                  {faq.link && (
                    <div className="mt-2">
                      <Link to={faq.link.to}>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          {faq.link.text}
                        </Button>
                      </Link>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Still have questions? Don't hesitate to reach out!</p>
          {/* Note: A Contact page/component would be ideal here. For now, we'll link to Register as a placeholder. */}
          <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
            <Link to="/register">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;