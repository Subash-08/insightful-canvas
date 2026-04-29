import { motion } from "framer-motion";
import { AnimatedText } from "@/components/anim/AnimatedText";

const items = [
  { quote: "MarTechRise found 12 broken events in our funnel within a week. Our attribution finally makes sense — and our ROAS jumped 38%.", name: "Sarah Chen", role: "Head of Growth, Lumen" },
  { quote: "Server-side GTM and CAPI implementation was flawless. iOS conversions came back to life overnight.", name: "Marco Vidal", role: "Performance Lead, Northwind" },
  { quote: "We went from arguing about which dashboard was right to one source of truth. Best MarTech investment we've made.", name: "Priya Anand", role: "Director of Marketing, Halo" },
  { quote: "Their audit report was the clearest I've ever seen. Every issue prioritized, every fix scoped. Just execute.", name: "Jonas Becker", role: "CMO, Verda" },
];

export const Testimonials = () => (
  <section className="relative py-24 px-6 bg-secondary overflow-hidden">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-14">
        <AnimatedText
          text="Trusted by data-driven teams."
          as="h2"
          className="font-display font-bold text-4xl md:text-6xl text-foreground"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: (i % 2) * 0.15 + Math.floor(i / 2) * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <blockquote className="font-serif-display text-2xl md:text-3xl leading-snug text-foreground mb-6">
              "{t.quote}"
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-pink))]" />
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
