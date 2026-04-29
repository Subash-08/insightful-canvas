import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

const links = ["Home", "Features", "Pricing", "About", "Comparison"];

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 py-5"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full bg-background/60 backdrop-blur-xl border border-border/60 px-6 py-3 shadow-card-soft">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <BarChart3 className="h-5 w-5 text-foreground" />
          </motion.div>
          <span className="font-display font-semibold text-lg tracking-tight">Pulsio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l}
              href={`#${l.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center px-4 py-2 text-sm rounded-full border border-border bg-background/50 hover:bg-secondary transition-all hover:scale-[1.03]">
            Sign in
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-[1.03]">
            Get started
          </button>
        </div>
      </div>
    </motion.header>
  );
};
