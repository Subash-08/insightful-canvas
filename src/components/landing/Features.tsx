import { motion } from "framer-motion";
import { Activity, Shield, Globe2, Zap, LineChart, Eye } from "lucide-react";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";

const features = [
  { icon: Activity, title: "Real-time visitors", desc: "See who's on your site, where they came from, and what they're reading — live." },
  { icon: Shield, title: "Privacy first", desc: "No cookies. No personal data. Fully GDPR, CCPA, and PECR compliant by default." },
  { icon: Globe2, title: "Geo insights", desc: "Beautiful country and region breakdowns powered by an offline IP database." },
  { icon: Zap, title: "Lightning fast", desc: "A 1KB tracking script that loads asynchronously and never blocks your page." },
  { icon: LineChart, title: "Conversion goals", desc: "Track signups, purchases, and custom events with a single line of code." },
  { icon: Eye, title: "Session replay", desc: "Watch anonymized journeys and uncover the friction your funnel hides." },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-32 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest text-foreground/70 mb-6">
              Features
            </span>
          </FadeIn>
          <AnimatedText
            text="Everything you need."
            as="h2"
            className="font-display font-bold text-5xl md:text-7xl text-foreground"
          />
          <AnimatedText
            text="Nothing you don't."
            as="h2"
            delay={0.3}
            className="font-display font-bold text-5xl md:text-7xl text-foreground/40 mt-1"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-7 rounded-2xl bg-card border border-border overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--brand-orange)/0.1)] via-transparent to-[hsl(var(--brand-pink)/0.1)]" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: "linear-gradient(135deg, hsl(var(--brand-orange)/0.4), transparent 50%, hsl(var(--brand-pink)/0.4))", padding: "1px", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
