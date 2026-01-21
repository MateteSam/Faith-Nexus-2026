"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/landing/Navbar";
import { PartnerTrack, AboutVirtualLaunch, TheVision, WhoShouldJoin, WhatYouWillExperience, EventDetails, MajorMoments, ImpactMetrics, WhoShouldAttend, RegistrationSection, Footer } from "@/components/landing/Sections";

const CameraScroll = dynamic(() => import("@/components/CameraScroll"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <CameraScroll />
      <div className="relative z-40 bg-black">
        <PartnerTrack />
        <AboutVirtualLaunch />
        <TheVision />
        <WhoShouldJoin />
        <WhatYouWillExperience />
        <EventDetails />
        <MajorMoments />
        <ImpactMetrics />
        <WhoShouldAttend />
        <RegistrationSection />
        <Footer />
      </div>
    </main>
  );
}
