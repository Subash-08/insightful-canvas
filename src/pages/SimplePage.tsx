import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  body?: React.ReactNode;
  cta?: { label: string; to: string };
}

export const SimplePage = ({ eyebrow, title, subtitle, body, cta }: Props) => (
  <PageShell>
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-hero-gradient">
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--brand-pink)/0.3)] blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(var(--brand-orange)/0.3)] blur-3xl"
      />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 rounded-full bg-background/60 backdrop-blur border border-border text-xs uppercase tracking-widest mb-6">
            {eyebrow}
          </span>
        </FadeIn>
        <AnimatedText
          text={title}
          as="h1"
          mode="word"
          delay={0.3}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground"
        />
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-7 max-w-2xl mx-auto text-lg text-foreground/70"
        >
          {subtitle}
        </motion.p>
        {cta && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8"
          >
            <Link to={cta.to} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-medium shadow-card-soft hover:scale-[1.04] transition-transform">
              {cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
    {body && (
      <section className="py-20 px-6">
        <FadeIn>
          <div className="mx-auto max-w-4xl">{body}</div>
        </FadeIn>
      </section>
    )}
  </PageShell>
);

export default SimplePage;
