import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dashboard from "@/assets/dashboard.jpg";
import { AnimatedText } from "@/components/anim/AnimatedText";
import { ShieldCheck, BadgeCheck } from "lucide-react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imgBrightness = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const imgFilter = useTransform(imgBrightness, (v) => `brightness(${v})`);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative min-h-[170vh]">
      {/* Sticky background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--brand-pink)/0.4)] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(var(--brand-orange)/0.4)] blur-3xl"
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative h-full flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base mb-6"
          >
            <span className="text-gradient-brand font-semibold">MarTechRise</span>
            <span className="text-foreground/80"> — Empowering Businesses</span>
          </motion.p>

          <AnimatedText
            text="Fix Broken Tracking &"
            as="h1"
            mode="word"
            delay={0.7}
            stagger={0.08}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground"
          />
          <AnimatedText
            text="Unlock Accurate Data"
            as="h1"
            mode="word"
            delay={1.1}
            stagger={0.08}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground mt-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70"
          >
            We help brands eliminate data loss, fix tracking issues, and improve attribution
            so you can scale your marketing campaigns with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-col items-center gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-full bg-foreground text-background font-medium shadow-card-soft"
            >
              Book Free Analytics Audit
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/70"
            >
              <span className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-foreground" />
                <b className="text-foreground">100% Validated</b> Data Pipeline
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-foreground" />
                <b className="text-foreground">Compliance Ready</b> GDPR / CCPA
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Dashboard image — placed below the fold so it doesn't overlap text */}
      <div className="relative -mt-[18vh] z-10 px-6 pb-10">
        <motion.div
          style={{ scale: imgScale, y: imgY, filter: imgFilter }}
          className="mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-frame border border-[hsl(var(--brand-orange)/0.3)] bg-card"
        >
          <img
            src={dashboard}
            alt="MarTechRise analytics dashboard preview"
            width={1920}
            height={1080}
            className="w-full h-auto block"
          />
        </motion.div>
      </div>
    </section>
  );
};
