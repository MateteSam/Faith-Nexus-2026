import { Button } from "@/components/ui/button";
import { Download, BookOpen, Eye } from "lucide-react";
import { MagazineReader } from "./MagazineReader";
import { useState, useEffect } from "react";

export const MagazineSection = () => {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/magazine/page_1.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);
  const handleDownloadMagazine = () => {
    const link = document.createElement('a');
    link.href = '/NEXUS_MAGAZINE.pdf';
    link.download = 'NEXUS_Magazine_May_June_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-primary text-sm font-bold tracking-wider uppercase mb-4">
            NEXUS MAGAZINE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            NEXUS MAGAZINE
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            MAY-JUNE EDITION
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">Faith Nexus 2025 is scheduled to take place in South Africa from November 27-30, 2025. Flip through all the updates.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Magazine Preview */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl p-6 border border-border">
              <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                )}
                <img
                  src="/magazine/page_1.jpg"
                  alt="NEXUS Magazine Cover"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Latest Edition
                </h4>
                <p className="text-muted-foreground">
                  Discover the latest updates, interviews, and insights from the Christian content creation community.
                </p>
              </div>
            </div>
          </div>

          {/* Magazine Details */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">
                What's Inside
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Conference updates and speaker announcements
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Exclusive interviews with industry leaders
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Technical insights and creative tips
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Community highlights and success stories
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" onClick={() => setIsReaderOpen(true)} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Eye className="w-5 h-5 mr-2" />
                Read Magazine
              </Button>
              <Button size="lg" variant="outline" onClick={handleDownloadMagazine} className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Magazine Reader Modal */}
      <MagazineReader isOpen={isReaderOpen} onClose={() => setIsReaderOpen(false)} />
    </section>;
};