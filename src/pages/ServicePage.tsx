import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";
import { services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  if (!service) return <Navigate to="/" replace />;
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={ref} className="relative pt-36 pb-20 px-6 overflow-hidden bg-hero-gradient">
        <motion.div
          style={{ y: blobY, scale: blobScale }}
          className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full bg-[hsl(var(--brand-pink)/0.35)] blur-3xl"
        />
        <motion.div
          style={{ y: blobY }}
          className="absolute top-40 -left-20 w-[420px] h-[420px] rounded-full bg-[hsl(var(--brand-orange)/0.35)] blur-3xl"
        />
        <div className="absolute inset-0 bg-noise pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <FadeIn>
            <Link to="/services" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground mb-6">
              ← Services
            </Link>
          </FadeIn>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-16 h-16 rounded-2xl bg-background/70 backdrop-blur-sm border border-border items-center justify-center mb-6 shadow-card-soft"
          >
            <Icon className="w-7 h-7 text-foreground" />
          </motion.div>
          <FadeIn delay={0.45}>
            <p className="text-sm text-foreground/70 mb-3">
              <span className="text-gradient-brand font-semibold">MarTechRise</span> · {service.name}
            </p>
          </FadeIn>
          <AnimatedText
            text={service.hero}
            as="h1"
            mode="word"
            delay={0.6}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground"
          />
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-7 max-w-2xl mx-auto text-lg text-foreground/70"
          >
            {service.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/analytics-audit" className="px-7 py-3.5 rounded-full bg-foreground text-background font-medium shadow-card-soft hover:scale-[1.04] transition-transform inline-flex items-center gap-2">
              Book free audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/case-studies" className="px-7 py-3.5 rounded-full border border-border bg-background/60 backdrop-blur-sm hover:bg-secondary transition-colors">
              See case studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <FadeIn>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest mb-6">Outcomes</span>
              </FadeIn>
              <AnimatedText
                text="Built for the metrics that matter"
                as="h2"
                className="font-display font-bold text-4xl md:text-5xl text-foreground"
              />
            </div>
            <div className="space-y-4">
              {service.outcomes.map((o, i) => (
                <motion.div
                  key={o}
                  initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 p-5 rounded-2xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-foreground text-lg leading-snug pt-1.5">{o}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-background text-xs uppercase tracking-widest mb-6">Our process</span>
            </FadeIn>
            <AnimatedText text="A proven 4-step methodology" as="h2" className="font-display font-bold text-4xl md:text-5xl text-foreground" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="p-7 rounded-2xl bg-card border border-border relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-5xl font-display font-black text-foreground/5">0{i + 1}</span>
                <div className="font-display font-semibold text-xl text-foreground mb-2">{p.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest mb-6">What you get</span>
            </FadeIn>
            <AnimatedText text="Concrete deliverables, no fluff" as="h2" className="font-display font-bold text-4xl md:text-5xl text-foreground" />
            <FadeIn delay={0.3}>
              <p className="mt-6 text-muted-foreground text-lg max-w-md">
                Every engagement ships with documentation, governance and a handover your team can actually run with.
              </p>
            </FadeIn>
          </div>
          <ul className="space-y-3">
            {service.deliverables.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex items-center justify-between p-5 rounded-2xl bg-foreground text-background"
              >
                <span className="font-medium">{d}</span>
                <ArrowUpRight className="w-5 h-5 opacity-70" />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-24 px-6 bg-background">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest mb-6">Related services</span>
          </FadeIn>
          <AnimatedText text="Often paired with" as="h2" className="font-display font-bold text-4xl md:text-5xl text-foreground mb-10" />
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o, i) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <Link to={`/services/${o.slug}`} className="group block p-7 rounded-2xl border border-border bg-card h-full">
                  <o.icon className="w-7 h-7 text-foreground mb-4" />
                  <div className="font-display font-semibold text-lg mb-2">{o.name}</div>
                  <div className="text-sm text-muted-foreground">{o.short}</div>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm text-foreground group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl rounded-3xl bg-foreground text-background p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[hsl(var(--brand-orange)/0.4)] blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-[hsl(var(--brand-pink)/0.4)] blur-3xl" />
          <div className="relative">
            <AnimatedText text="Ready to fix the data?" as="h2" className="font-display font-bold text-3xl md:text-5xl mb-4" />
            <FadeIn delay={0.2}>
              <p className="max-w-xl mx-auto text-background/70 mb-8">
                Get a free, no-obligation analytics audit. We'll show you exactly where data is being lost and what to fix first.
              </p>
            </FadeIn>
            <Link to="/analytics-audit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background text-foreground font-medium hover:scale-[1.04] transition-transform">
              Book free audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
};

export default ServicePage;
