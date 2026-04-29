import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import realtime from "@/assets/feature-realtime.jpg";
import privacy from "@/assets/feature-privacy.jpg";
import dashboard from "@/assets/dashboard.jpg";

const slides = [
  {
    img: realtime,
    eyebrow: "Unified View",
    title: "All your data. One clear view.",
    desc: "See what's working (and what's not). Bring every channel, tool, and touchpoint together into a single source of truth.",
  },
  {
    img: privacy,
    eyebrow: "Tracking Errors",
    title: "Errors you can't see. Data you can't trust.",
    desc: "Small tracking issues create big business impact — wasted spend, broken attribution, and decisions made on bad numbers.",
  },
  {
    img: dashboard,
    eyebrow: "Customer Journey",
    title: "Understand every step. Improve every touchpoint.",
    desc: "A complete customer journey with no blind spots. Connect awareness, consideration, and conversion in one timeline.",
  },
];

const Panel = ({ slide, index }: { slide: typeof slides[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.8]);
  const filter = useTransform(brightness, (v) => `brightness(${v})`);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -40 : 40, index % 2 === 0 ? 40 : -40]);
  const reverse = index % 2 === 1;

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center px-6 py-16">
      <div className={`mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
        <motion.div
          style={{ scale, opacity, filter }}
          className="rounded-3xl overflow-hidden border border-border shadow-frame [direction:ltr]"
        >
          <img src={slide.img} alt={slide.title} loading="lazy" width={1200} height={800} className="w-full h-auto block" />
        </motion.div>
        <motion.div style={{ x, opacity }} className="[direction:ltr]">
          <span className="inline-block text-xs uppercase tracking-widest text-gradient-brand font-semibold mb-4">
            {slide.eyebrow}
          </span>
          <h3 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] text-foreground mb-5">
            {slide.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">{slide.desc}</p>
        </motion.div>
      </div>
    </div>
  );
};

export const StickyShowcase = () => (
  <section className="relative bg-background py-10">
    {slides.map((s, i) => (
      <Panel key={i} slide={s} index={i} />
    ))}
  </section>
);
