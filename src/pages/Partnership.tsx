import React from 'react';
import PartnershipSection from '@/components/PartnershipSection';
import { RegisterButton } from '@/components/RegisterButton';

const PartnershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <PartnershipSection />
        <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Join as a Partner?</h3>
            <p className="text-muted-foreground mb-6">Secure your partnership and help us transform culture through Kingdom media.</p>
            <RegisterButton size="lg" text="Become a Partner" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnershipPage;