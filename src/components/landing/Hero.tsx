import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dashboard from "@/assets/dashboard.jpg";
import { AnimatedText } from "@/components/anim/AnimatedText";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imgBrightness = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const imgFilter = useTransform(imgBrightness, (v) => `brightness(${v})`);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative min-h-[180vh]">
      {/* Sticky background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        {/* floating blobs */}
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
          className="relative h-full flex flex-col items-center justify-center px-6 pt-24 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base mb-6"
          >
            <span className="text-gradient-brand font-semibold">200K+</span>
            <span className="text-foreground/80"> Sites Tracked Daily with Pulsio</span>
          </motion.p>

          <AnimatedText
            text="Web Analytics Made"
            as="h1"
            mode="word"
            delay={0.8}
            stagger={0.09}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground"
          />
          <AnimatedText
            text="Simple and Private."
            as="h1"
            mode="word"
            delay={1.2}
            stagger={0.09}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground mt-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="mt-7 max-w-xl text-base md:text-lg text-foreground/70"
          >
            Cookie-free, lightweight, and beautiful. Real-time insights that respect your visitors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-full bg-foreground text-background font-medium shadow-card-soft"
            >
              Start tracking — it's free
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-foreground/70"
            >
              <span className="text-base">★★★★★</span>
              <span><b className="text-foreground">4.9</b> rating · trusted by 300k+ developers</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating dashboard image overlapping next section */}
      <div className="relative -mt-[55vh] z-10 px-6">
        <motion.div
          style={{ scale: imgScale, y: imgY, filter: imgFilter }}
          className="mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-frame border border-[hsl(var(--brand-orange)/0.3)] bg-card"
        >
          <img
            src={dashboard}
            alt="Pulsio analytics dashboard preview"
            width={1920}
            height={1080}
            className="w-full h-auto block"
          />
        </motion.div>
      </div>
    </section>
  );
};
