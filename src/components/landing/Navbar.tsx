import { motion, AnimatePresence } from "framer-motion";
import { Activity, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { navServices } from "@/data/services";

const resources = [
  { name: "Blog", to: "/resources/blog", desc: "Tactical posts on tracking & attribution." },
  { name: "Guides", to: "/resources/guides", desc: "Deep, expert implementation playbooks." },
  { name: "Checklists", to: "/resources/checklists", desc: "Audit-ready quality checklists." },
];

const links: { name: string; to?: string; dropdown?: "services" | "resources" }[] = [
  { name: "Services", dropdown: "services" },
  { name: "Case Studies", to: "/case-studies" },
  { name: "Analytics Audit", to: "/analytics-audit" },
  { name: "Resources", dropdown: "resources" },
  { name: "About", to: "/about" },
];

export const Navbar = () => {
  const [open, setOpen] = useState<null | "services" | "resources">(null);
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 py-5"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full bg-background/70 backdrop-blur-xl border border-border/60 px-6 py-3 shadow-card-soft">
          <Link to="/" className="flex items-center gap-2">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
              <Activity className="h-5 w-5 text-foreground" />
            </motion.div>
            <span className="font-display font-semibold text-lg tracking-tight">MarTechRise</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                onMouseEnter={() => setOpen(l.dropdown ?? null)}
              >
                {l.dropdown ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-foreground/80 hover:text-foreground rounded-full hover:bg-secondary transition-colors">
                    {l.name}
                    <motion.span animate={{ rotate: open === l.dropdown ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.span>
                  </button>
                ) : (
                  <Link to={l.to!} className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground rounded-full hover:bg-secondary transition-colors inline-block">
                    {l.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/analytics-audit")}
              className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-[1.03]"
            >
              Book Free Audit
            </button>
          </div>
        </div>

        {/* Dropdown panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key={open}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setOpen(open)}
              className="absolute left-1/2 -translate-x-1/2 mt-3 w-[min(95vw,980px)] rounded-3xl bg-background/90 backdrop-blur-2xl border border-border/60 shadow-card-soft p-5"
            >
              {open === "services" ? (
                <div className="grid md:grid-cols-2 gap-2">
                  {navServices.map((s, i) => (
                    <motion.div
                      key={s.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        to={`/services/${s.slug}`}
                        onClick={() => setOpen(null)}
                        className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary transition-colors"
                      >
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(var(--brand-orange)/0.18)] to-[hsl(var(--brand-pink)/0.18)] flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                          <s.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-display font-semibold text-foreground">{s.name}</div>
                          <div className="text-sm text-muted-foreground">{s.short}</div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-2">
                  {resources.map((r, i) => (
                    <motion.div key={r.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link
                        to={r.to}
                        onClick={() => setOpen(null)}
                        className="block p-4 rounded-2xl hover:bg-secondary transition-colors"
                      >
                        <div className="font-display font-semibold text-foreground">{r.name}</div>
                        <div className="text-sm text-muted-foreground">{r.desc}</div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
