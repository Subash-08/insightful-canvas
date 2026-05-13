import { ReactNode, useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";

export const PageShell = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
