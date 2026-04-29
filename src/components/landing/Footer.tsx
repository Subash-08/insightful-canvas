import { BarChart3 } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-16 px-6">
    <div className="mx-auto max-w-6xl grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="h-5 w-5" />
          <span className="font-display font-semibold text-lg">Pulsio</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">
          Privacy-friendly web analytics that don't get in the way. Built with care for the modern web.
        </p>
      </div>
      {[
        { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
        { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
      ].map((g) => (
        <div key={g.title}>
          <h4 className="font-semibold text-sm mb-4">{g.title}</h4>
          <ul className="space-y-2">
            {g.links.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mx-auto max-w-6xl mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
      <span>© 2026 Pulsio Analytics. All rights reserved.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Cookies (we don't use any)</a>
      </div>
    </div>
  </footer>
);
