import { SimplePage } from "./SimplePage";

interface Props { kind: "blog" | "guides" | "checklists" | "index" | "privacy" | "terms"; }

const meta: Record<Props["kind"], { eyebrow: string; title: string; subtitle: string }> = {
  index: { eyebrow: "Resources", title: "Playbooks for trustworthy marketing data", subtitle: "Tactical posts, deep guides and audit-ready checklists from our practice." },
  blog: { eyebrow: "Blog", title: "Field notes from real implementations", subtitle: "Tactical posts on tracking, attribution and MarTech architecture." },
  guides: { eyebrow: "Guides", title: "Deep implementation playbooks", subtitle: "Long-form guides for GA4, server-side GTM, Meta CAPI and more." },
  checklists: { eyebrow: "Checklists", title: "Audit-ready quality checklists", subtitle: "Print-ready QA checklists used in every MarTechRise engagement." },
  privacy: { eyebrow: "Privacy", title: "Privacy policy", subtitle: "How we handle your data — clearly, briefly, and honestly." },
  terms: { eyebrow: "Terms", title: "Terms of service", subtitle: "The rules of the road for working with MarTechRise." },
};

const Resource = ({ kind }: Props) => {
  const m = meta[kind];
  return <SimplePage eyebrow={m.eyebrow} title={m.title} subtitle={m.subtitle} />;
};
export default Resource;
