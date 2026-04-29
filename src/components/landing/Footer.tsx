import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";

const groups = [
  { title: "Company", links: ["Home", "About", "Services", "Solutions", "Contact"] },
  { title: "Solutions", links: ["Analytics Audit", "Server-Side Tracking", "CDP Implementation", "Data Validation", "Reporting"] },
  { title: "Resources", links: ["Case Studies", "Blog", "Changelog", "Privacy", "Terms"] },
];

const socials = [Linkedin, Instagram, Facebook, Twitter, Youtube];

export const Footer = () => (
  <footer className="relative bg-foreground text-background overflow-hidden">
    <div className="px-6 lg:px-12 pt-20 pb-10">
      {/* Top: newsletter + nav */}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14">
        <FadeIn>
          <div>
            <h3 className="font-display font-semibold text-3xl md:text-4xl mb-6">
              Stay updated with MarTechRise
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center max-w-md rounded-full bg-background/10 border border-background/20 backdrop-blur-sm pl-6 pr-1.5 py-1.5"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 py-2 text-sm placeholder:text-background/50 text-background outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.08, rotate: 45 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </form>
            <div className="mt-6 flex gap-2">
              {socials.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-10 h-10 rounded-full bg-background/10 border border-background/15 flex items-center justify-center text-background/80 hover:text-background hover:bg-background/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {groups.map((g, gi) => (
            <FadeIn key={g.title} delay={gi * 0.1}>
              <h4 className="text-background/60 text-sm mb-4">{g.title}</h4>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-background hover:text-background/70 transition-colors"
                    >
                      {l}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Giant brand wordmark */}
      <div className="mx-auto max-w-7xl mt-20 mb-8 overflow-hidden">
        <AnimatedText
          text="MARTECHRISE"
          as="h2"
          mode="letter"
          stagger={0.04}
          className="font-display font-black text-[12vw] leading-[0.9] tracking-tighter text-background block text-center"
        />
      </div>

      <div className="mx-auto max-w-7xl pt-6 border-t border-background/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/60">
        <span>Copyright © MarTechRise | Empowering Businesses with Reliable Data.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <span className="text-background/30">|</span>
          <a href="#" className="hover:text-background transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);
