import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import realtime from "@/assets/feature-realtime.jpg";
import privacy from "@/assets/feature-privacy.jpg";

const slides = [
  {
    img: realtime,
    eyebrow: "Real-time",
    title: "Watch your traffic breathe.",
    desc: "Pulsio streams visitor events the moment they happen. No 24-hour delay, no sampling — just truth, frame by frame.",
  },
  {
    img: privacy,
    eyebrow: "Private by design",
    title: "Built without cookies.",
    desc: "We never identify your visitors. No banners, no consent popups — just clean, beautiful analytics that respect everyone.",
  },
];

const Panel = ({ slide, index }: { slide: typeof slides[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.1, 0.7]);
  const filter = useTransform(brightness, (v) => `brightness(${v})`);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, index % 2 === 0 ? 50 : -50]);
  const reverse = index % 2 === 1;

  return (
    <div ref={ref} className="min-h-screen flex items-center px-6 py-24">
      <div className={`mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
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
          <h3 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-foreground mb-6">
            {slide.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">{slide.desc}</p>
        </motion.div>
      </div>
    </div>
  );
};

export const StickyShowcase = () => (
  <section className="relative bg-background">
    {slides.map((s, i) => (
      <Panel key={i} slide={s} index={i} />
    ))}
  </section>
);
