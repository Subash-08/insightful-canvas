import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";
import { LineChart, MessageSquare, Sparkles } from "lucide-react";

const cards = [
  {
    title: "Connect your data sources",
    desc: "Plug in GA4, Ads, CRM and your warehouse. We unify every signal into a clean, reliable foundation.",
    icon: LineChart,
    accent: "from-[hsl(var(--brand-orange)/0.25)] to-[hsl(var(--brand-pink)/0.25)]",
  },
  {
    title: "Ask the real questions",
    desc: "Where is spend leaking? Which channel actually drives revenue? Get answers, not more dashboards.",
    icon: MessageSquare,
    accent: "from-[hsl(var(--brand-pink)/0.25)] to-[hsl(var(--brand-violet)/0.25)]",
  },
  {
    title: "Get results, instantly",
    desc: "Validated attribution, executive dashboards and clear next actions — refreshed automatically.",
    icon: Sparkles,
    accent: "from-[hsl(var(--brand-violet)/0.25)] to-[hsl(var(--brand-orange)/0.25)]",
  },
];

const Card = ({
  i,
  total,
  progress,
  card,
}: {
  i: number;
  total: number;
  progress: MotionValue<number>;
  card: (typeof cards)[number];
}) => {
  // Each card has its own active window in the scroll progress
  const start = i / total;
  const end = (i + 1) / total;
  const stackOffset = (total - 1 - i) * 24; // resting stack offset on the right

  // x: starts stacked on the right (+offset), animates to its column center on the left
  const x = useTransform(progress, [start, end], [stackOffset + 80, 0]);
  const rotate = useTransform(progress, [start, end], [6 - i * 2, 0]);
  const scale = useTransform(progress, [start, end], [0.9, 1]);
  const opacity = useTransform(progress, [Math.max(0, start - 0.05), start, end], [0.3, 1, 1]);

  return (
    <motion.div
      style={{ x, rotate, scale, opacity, zIndex: i + 1 }}
      className="absolute inset-0 origin-center"
    >
      <div className={`h-full w-full rounded-3xl border border-border bg-card shadow-frame overflow-hidden flex flex-col`}>
        <div className={`h-1/2 bg-gradient-to-br ${card.accent} flex items-center justify-center relative`}>
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="relative w-20 h-20 rounded-2xl bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground shadow-card-soft">
            <card.icon className="w-9 h-9" />
          </div>
        </div>
        <div className="p-7 flex-1 flex flex-col justify-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">{card.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProgressBar = ({ i, total, progress }: { i: number; total: number; progress: MotionValue<number> }) => {
  const scaleX = useTransform(progress, [i / total, (i + 1) / total], [0, 1]);
  return (
    <motion.div className="h-1.5 rounded-full bg-foreground/15 flex-1 max-w-[64px] overflow-hidden">
      <motion.div className="h-full bg-foreground origin-left" style={{ scaleX }} />
    </motion.div>
  );
};

export const ScrollStackCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth & sticky — section is tall so each card has scroll room
  return (
    <section ref={ref} className="relative bg-background" style={{ height: `${cards.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-10 px-6 items-center">
          {/* LEFT: text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest text-foreground/70 mb-6">
                How it works
              </span>
            </FadeIn>
            <AnimatedText
              text="Add data,"
              as="h2"
              className="font-display font-bold text-4xl md:text-6xl text-foreground"
            />
            <AnimatedText
              text="ask questions"
              as="h2"
              delay={0.2}
              className="font-display font-bold text-4xl md:text-6xl text-foreground/40"
            />
            <FadeIn delay={0.4}>
              <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
                Tell us what your business needs to know. We turn fragmented marketing data into reliable answers — automatically.
              </p>
            </FadeIn>
            <FadeIn delay={0.55}>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                {cards.map((_, i) => (
                  <ProgressBar key={i} i={i} total={cards.length} progress={scrollYProgress} />
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: stacked cards */}
          <div className="order-1 lg:order-2 relative h-[480px] md:h-[560px] w-full max-w-[460px] justify-self-center lg:justify-self-end">
            {cards.map((c, i) => (
              <Card key={i} i={i} total={cards.length} progress={scrollYProgress} card={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
