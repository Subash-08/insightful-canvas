import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Logos } from "@/components/landing/Logos";
import { Features } from "@/components/landing/Features";
import { StickyShowcase } from "@/components/landing/StickyShowcase";
import { Stats } from "@/components/landing/Stats";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <StickyShowcase />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
