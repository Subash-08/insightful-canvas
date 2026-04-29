import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";

const services = [
  {
    name: "Analytics & Tracking",
    desc: "Set up accurate, scalable tracking across your website and apps.",
    features: ["Solution Design Document (SDD)", "GTM / Adobe Launch setup", "Web & Mobile SDK migration", "Third-party tags integration"],
    cta: "Learn more",
    highlighted: false,
  },
  {
    name: "Server-Side Tracking",
    desc: "Eliminate data loss and improve tracking accuracy with modern architecture.",
    features: ["Server-side GTM setup", "Meta Conversion API (CAPI)", "First-party data collection", "Privacy-safe tracking"],
    cta: "Most requested",
    highlighted: true,
  },
  {
    name: "CDP Implementation",
    desc: "Unify and activate your customer data across platforms.",
    features: ["Adobe RT-CDP & Tealium", "Audience segmentation", "Real-time data activation"],
    cta: "Learn more",
    highlighted: false,
  },
  {
    name: "Analytics Audit",
    desc: "Identify what's broken and where data is being lost.",
    features: ["Missing conversion tracking", "Broken or misfiring tags", "Detailed audit report"],
    cta: "Book audit",
    highlighted: false,
  },
  {
    name: "Data Validation",
    desc: "Fix tracking issues and ensure your data is clean and reliable.",
    features: ["Tracking & tag debugging", "Cross-platform validation", "Funnel validation"],
    cta: "Learn more",
    highlighted: false,
  },
  {
    name: "Reporting & Insights",
    desc: "Turn your data into clear, actionable business insights.",
    features: ["Campaign performance", "Custom dashboards (GA4/Looker)", "ROI & attribution analysis"],
    cta: "Learn more",
    highlighted: false,
  },
];

export const Pricing = () => (
  <section id="services" className="relative py-24 px-6 bg-background">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-14">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest mb-6">
            Services
          </span>
        </FadeIn>
        <AnimatedText
          text="Our Analytics & MarTech Solutions"
          as="h2"
          className="font-display font-bold text-4xl md:text-6xl text-foreground"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: (i % 3) * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-3xl border ${
              p.highlighted
                ? "bg-foreground text-background border-foreground shadow-frame"
                : "bg-card border-border"
            }`}
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-full bg-gradient-to-r from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-pink))] text-white">
                Most popular
              </span>
            )}
            <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
            <p className={`text-sm mt-2 mb-6 ${p.highlighted ? "text-background/60" : "text-muted-foreground"}`}>{p.desc}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlighted ? "text-[hsl(var(--brand-orange))]" : "text-foreground"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3 rounded-full font-medium transition-colors ${
                p.highlighted
                  ? "bg-background text-foreground hover:bg-background/90"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}
            >
              {p.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
