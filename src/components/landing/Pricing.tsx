import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";
import { services } from "@/data/services";

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
        {services.map((p, i) => {
          const highlighted = p.slug === "server-side-tracking";
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                highlighted
                  ? "bg-foreground text-background border-foreground shadow-frame"
                  : "bg-card border-border"
              }`}
            >
              {highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-full bg-gradient-to-r from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-pink))] text-white">
                  Most requested
                </span>
              )}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${highlighted ? "bg-background/15" : "bg-secondary"}`}>
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold leading-tight">{p.name}</h3>
              <p className={`text-sm mt-2 mb-6 ${highlighted ? "text-background/60" : "text-muted-foreground"}`}>{p.short}</p>
              <ul className={`space-y-2 mb-8 text-sm ${highlighted ? "text-background/80" : "text-muted-foreground"}`}>
                {p.deliverables.slice(0, 3).map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
              <Link
                to={`/services/${p.slug}`}
                className={`mt-auto w-full py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 ${
                  highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
