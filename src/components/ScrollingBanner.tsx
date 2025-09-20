import { ArrowUpRight } from "lucide-react";

export const ScrollingBanner = () => {
  return (
    <div className="bg-amber-900 text-amber-100 py-2 overflow-hidden">
      <div className="banner-scroll whitespace-nowrap">
        <span className="inline-flex items-center gap-2 text-sm font-medium mx-8">
          REGISTER NOW
          <ArrowUpRight className="w-3 h-3" />
          FAITH NEXUS
          <span className="mx-4">•</span>
          REGISTER NOW
          <ArrowUpRight className="w-3 h-3" />
          FAITH NEXUS
          <span className="mx-4">•</span>
          REGISTER NOW
          <ArrowUpRight className="w-3 h-3" />
          FAITH NEXUS
          <span className="mx-4">•</span>
          REGISTER NOW
          <ArrowUpRight className="w-3 h-3" />
          FAITH NEXUS
          <span className="mx-4">•</span>
          REGISTER NOW
          <ArrowUpRight className="w-3 h-3" />
          FAITH NEXUS
        </span>
      </div>
    </div>
  );
};