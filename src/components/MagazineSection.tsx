import React from "react";
import SubscribeModal from "@/components/SubscribeModal";

export const MagazineSection = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-56 h-72 rounded-md shadow-lg bg-white/80 overflow-hidden border border-white/10">
              <picture>
                <source type="image/avif" srcSet="/optimized/magazine_page_1-1200.avif 1200w, /optimized/magazine_page_1-800.avif 800w, /optimized/magazine_page_1-480.avif 480w" sizes="(max-width: 640px) 180px, 224px" />
                <source type="image/webp" srcSet="/optimized/magazine_page_1-1200.webp 1200w, /optimized/magazine_page_1-800.webp 800w, /optimized/magazine_page_1-480.webp 480w" sizes="(max-width: 640px) 180px, 224px" />
                <img src="/magazine/page_1.jpg" alt="Nexus Magazine cover preview" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </picture>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">NEXUS MAGAZINE</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">New Issues Coming Soon</h2>
            <p className="text-base text-muted-foreground max-w-2xl mb-6">We're revamping the magazine with a fresh, improved design and richer content — features, interviews, and special sections celebrating the themes of Faith Nexus. Subscribe to receive issue notifications and exclusive previews.</p>

            <div className="flex items-center gap-4">
              <SubscribeModal
                triggerText="Notify me about the Magazine"
                title="Magazine Updates"
                description="Subscribe for issue announcements, previews and exclusive articles."
                triggerVariant="default"
                triggerClassName="px-5 py-3 text-sm sm:text-base"
              />
              <a href="/magazine" className="text-sm text-white/80 hover:underline">See archive</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;