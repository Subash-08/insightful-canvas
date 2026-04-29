import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    desc: "For personal projects and side hustles.",
    features: ["10K events / month", "1 website", "Real-time dashboard", "Email support"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$19",
    desc: "For founders building something serious.",
    features: ["1M events / month", "Unlimited sites", "Conversion goals", "Custom events", "Priority support"],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$79",
    desc: "For teams that need it all.",
    features: ["10M events / month", "Team collaboration", "Session replay", "API access", "Dedicated support"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export const Pricing = () => (
  <section id="pricing" className="relative py-32 px-6 bg-background">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-20">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest mb-6">
            Pricing
          </span>
        </FadeIn>
        <AnimatedText
          text="Fair pricing. No surprises."
          as="h2"
          className="font-display font-bold text-5xl md:text-7xl text-foreground"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
            <p className={`text-sm mt-2 ${p.highlighted ? "text-background/60" : "text-muted-foreground"}`}>{p.desc}</p>
            <div className="my-8 font-display font-bold text-6xl">
              {p.price}
              <span className={`text-base font-normal ${p.highlighted ? "text-background/60" : "text-muted-foreground"}`}>/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 ${p.highlighted ? "text-[hsl(var(--brand-orange))]" : "text-foreground"}`} />
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
