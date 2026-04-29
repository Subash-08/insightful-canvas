import { motion } from "framer-motion";
import { AnimatedText } from "@/components/anim/AnimatedText";

const items = [
  { quote: "We replaced Google Analytics on day one. Pulsio is faster, cleaner, and our visitors don't get a cookie banner anymore.", name: "Sarah Chen", role: "Founder, Lumen" },
  { quote: "The real-time dashboard is addictive. I check it more than Twitter now — and I learn more from it.", name: "Marco Vidal", role: "Indie hacker" },
  { quote: "Setup took 60 seconds. The script is so small it disappears into our budget. Beautiful product.", name: "Priya Anand", role: "Eng Lead, Northwind" },
  { quote: "Finally analytics that look like they belong in 2026. Our marketing team actually opens the dashboard.", name: "Jonas Becker", role: "CMO, Halo" },
];

export const Testimonials = () => (
  <section className="relative py-32 px-6 bg-secondary overflow-hidden">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <AnimatedText
          text="Loved by builders."
          as="h2"
          className="font-display font-bold text-5xl md:text-7xl text-foreground"
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
