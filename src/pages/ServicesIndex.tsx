import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";
import { services } from "@/data/services";

const ServicesIndex = () => (
  <PageShell>
    <section className="relative pt-36 pb-16 px-6 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="relative mx-auto max-w-5xl text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 rounded-full bg-background/60 backdrop-blur border border-border text-xs uppercase tracking-widest mb-6">
            Services
          </span>
        </FadeIn>
        <AnimatedText
          text="Analytics & MarTech, done right"
          as="h1"
          mode="word"
          delay={0.3}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70"
        >
          Six engagements covering the full lifecycle of trustworthy marketing data.
        </motion.p>
      </div>
    </section>

    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <Link to={`/services/${s.slug}`} className="group block p-8 rounded-3xl border border-border bg-card h-full relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--brand-orange)/0.08)] to-[hsl(var(--brand-pink)/0.08)]" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-3 text-foreground">{s.name}</h3>
                <p className="text-muted-foreground mb-6">{s.short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
                  Explore service <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </PageShell>
);

export default ServicesIndex;
