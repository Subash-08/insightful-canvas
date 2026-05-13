import { SimplePage } from "./SimplePage";

const About = () => (
  <SimplePage
    eyebrow="About MarTechRise"
    title="A team obsessed with reliable marketing data"
    subtitle="We're senior analytics engineers, MarTech architects and certified Google, Adobe and Meta partners — focused on one thing: data your business can defend."
    body={
      <div className="prose max-w-none text-foreground/80 space-y-5 text-lg leading-relaxed">
        <p>MarTechRise was founded to fix a problem we kept seeing: brands spending millions on marketing while reporting decisions on broken pixels, duplicated conversions and silent tag failures.</p>
        <p>We work as an embedded analytics partner — designing the architecture, implementing the stack, validating every event and building the reporting your leadership team relies on.</p>
        <p>Privacy-first by default. Engineering-led by discipline. Outcome-focused by mandate.</p>
      </div>
    }
  />
);
export default About;
