import { SimplePage } from "./SimplePage";
import { motion } from "framer-motion";

const studies = [
  { client: "DTC Beauty Brand", result: "+38% recovered conversions", desc: "Server-side GTM + Meta CAPI rollout restored attribution after iOS 17." },
  { client: "B2B SaaS, Series C", result: "1 source of truth", desc: "Replaced 6 conflicting dashboards with a single GA4 + Looker model." },
  { client: "Travel Marketplace", result: "−42% wasted ad spend", desc: "Fixed broken funnel events that were over-reporting Google Ads ROAS." },
];

const CaseStudies = () => (
  <SimplePage
    eyebrow="Case studies"
    title="Real fixes. Real numbers."
    subtitle="A selection of recent engagements where reliable data unlocked measurable business impact."
    body={
      <div className="grid md:grid-cols-3 gap-5">
        {studies.map((s, i) => (
          <motion.div
            key={s.client}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="p-7 rounded-2xl bg-foreground text-background"
          >
            <div className="text-xs uppercase tracking-widest text-background/60 mb-2">{s.client}</div>
            <div className="font-display text-2xl font-bold mb-3 text-gradient-brand">{s.result}</div>
            <p className="text-background/80 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    }
  />
);
export default CaseStudies;
