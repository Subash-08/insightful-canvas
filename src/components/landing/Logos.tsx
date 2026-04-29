import { motion } from "framer-motion";
import { FadeIn } from "@/components/anim/AnimatedText";

const brands = ["GA4", "GTM", "META CAPI", "ADOBE LAUNCH", "TEALIUM", "SEGMENT", "MIXPANEL", "LOOKER"];

export const Logos = () => (
  <section className="relative py-16 px-6 bg-background">
    <FadeIn>
      <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-8">
        Working across the modern marketing stack
      </p>
    </FadeIn>
    <div className="mx-auto max-w-6xl overflow-hidden">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {[...brands, ...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="font-display font-bold text-2xl md:text-3xl tracking-tight text-foreground/40 hover:text-foreground transition-colors"
          >
            {b}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);
