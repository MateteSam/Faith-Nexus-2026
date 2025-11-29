import React from "react";
import SubscribeModal from "@/components/SubscribeModal";

export const MagazineSection = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
        <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">NEXUS MAGAZINE</div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">New Issues Coming Soon</h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">We're revamping the magazine with a fresh, improved design and richer content. Stay tuned — better issues and special features will appear here soon.</p>
        <div className="inline-flex items-center gap-3">
          <SubscribeModal />
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;