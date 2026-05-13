import { SimplePage } from "./SimplePage";

const items = [
  { title: "Missing conversion tracking", desc: "Identify under-reported revenue and broken purchase events." },
  { title: "Broken or misfiring tags", desc: "Catch duplicate, double-firing or never-firing tags across the stack." },
  { title: "Cross-platform mismatches", desc: "Reconcile GA4, Ads Manager, CRM and warehouse numbers." },
  { title: "Detailed audit report", desc: "A prioritized fix list with effort estimates and business impact." },
];

const AnalyticsAudit = () => (
  <SimplePage
    eyebrow="Free analytics audit"
    title="See exactly where your data is leaking"
    subtitle="In 30 minutes, we'll show you the broken tracking, duplicated conversions and missing events that are quietly distorting your reporting."
    cta={{ label: "Book free audit", to: "/contact" }}
    body={
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div key={it.title} className="p-7 rounded-2xl border border-border bg-card">
            <h3 className="font-display font-semibold text-xl mb-2">{it.title}</h3>
            <p className="text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    }
  />
);
export default AnalyticsAudit;
