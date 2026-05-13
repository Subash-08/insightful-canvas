import { SimplePage } from "./SimplePage";

const Contact = () => (
  <SimplePage
    eyebrow="Contact"
    title="Let's talk about your data"
    subtitle="Tell us a bit about your stack and the data problems you're trying to solve. We'll reply within one business day."
    body={
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-4 max-w-xl mx-auto"
      >
        <input className="px-5 py-3.5 rounded-full border border-border bg-card outline-none focus:ring-2 focus:ring-foreground/10" placeholder="Full name" />
        <input type="email" className="px-5 py-3.5 rounded-full border border-border bg-card outline-none focus:ring-2 focus:ring-foreground/10" placeholder="Work email" />
        <input className="px-5 py-3.5 rounded-full border border-border bg-card outline-none focus:ring-2 focus:ring-foreground/10" placeholder="Company" />
        <textarea rows={5} className="px-5 py-3.5 rounded-2xl border border-border bg-card outline-none focus:ring-2 focus:ring-foreground/10 resize-none" placeholder="What's broken in your tracking?" />
        <button className="px-7 py-3.5 rounded-full bg-foreground text-background font-medium hover:scale-[1.02] transition-transform">
          Request audit
        </button>
      </form>
    }
  />
);
export default Contact;
