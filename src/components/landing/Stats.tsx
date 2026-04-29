import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedText } from "@/components/anim/AnimatedText";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString() + suffix);
  useEffect(() => {
    if (inView) animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
  }, [inView, count, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
  { value: 250, suffix: "+", label: "Brands served" },
  { value: 100, suffix: "%", label: "Data validated" },
  { value: 40, suffix: "%", label: "Avg. attribution lift" },
  { value: 24, suffix: "/7", label: "Tracking monitoring" },
];

export const Stats = () => (
  <section className="relative py-24 px-6 bg-foreground text-background overflow-hidden">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[hsl(var(--brand-orange)/0.15)] blur-3xl"
    />
    <div className="relative mx-auto max-w-6xl">
      <AnimatedText
        text="Numbers that matter."
        as="h2"
        className="font-display font-bold text-4xl md:text-6xl text-background mb-16 text-center"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="font-display font-bold text-5xl md:text-7xl text-gradient-brand mb-3">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm uppercase tracking-widest text-background/60">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
