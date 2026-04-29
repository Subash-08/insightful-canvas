import { motion } from "framer-motion";
import { AnimatedText } from "@/components/anim/AnimatedText";

export const CTA = () => (
  <section className="relative py-24 px-6 bg-background">
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-5xl rounded-[2.5rem] bg-hero-gradient p-16 md:p-24 text-center overflow-hidden border border-border"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--brand-orange)/0.4)] blur-3xl"
      />
      <div className="relative">
        <AnimatedText
          text="Ready to trust your data?"
          as="h2"
          className="font-display font-bold text-4xl md:text-6xl text-foreground"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 text-lg text-foreground/80 max-w-xl mx-auto"
        >
          Get a free analytics audit and discover exactly where your data is leaking — and how to fix it.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 px-8 py-4 rounded-full bg-foreground text-background font-medium shadow-card-soft"
        >
          Book Free Analytics Audit
        </motion.button>
      </div>
    </motion.div>
  </section>
);
