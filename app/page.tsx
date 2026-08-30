import { CtaLink } from "@/components/cta-link";
import { Header } from "@/components/header";
import { Icon, LogoMark } from "@/components/icons";
import { WorkflowCards } from "@/components/workflow-cards";
import { WorkflowVisual } from "@/components/workflow-visual";
import { contactUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Off My Plate",
  url: "https://offmyplate.io",
  email: "hello@offmyplate.io",
  description:
    "Custom AI workflow automation that connects existing business tools, data, and processes.",
  areaServed: "Worldwide",
  serviceType: "AI workflow automation",
};

const steps = [
  ["Show us the workflow", "Walk us through the repetitive process that slows your team down."],
  ["We design the automation", "We map the logic, safeguards, and systems needed to make it work."],
  ["We build and integrate it", "We connect it to the tools and data your team already uses."],
  ["Your team gets the time back", "The work gets handled reliably, while your people focus elsewhere."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="kicker"><span /> Custom AI workflow automation</p>
              <h1 id="hero-title">We automate repetitive work <em>with AI.</em></h1>
              <p className="hero-lede">
                Off My Plate builds custom AI workflows that connect your existing tools, data, and processes—so your team spends less time on manual work.
              </p>
              <div className="hero-actions">
                <CtaLink className="button button-primary" href={contactUrl} location="hero">
                  Tell us what you want to automate
                </CtaLink>
                <a className="text-link" href="#automate">See what&apos;s possible <Icon name="arrow" /></a>
              </div>
              <p className="micro-proof"><Icon name="check" /> Built around your workflow. Integrated with your tools.</p>
            </div>
            <div className="hero-visual"><WorkflowVisual /></div>
          </div>
          <div className="outcome-strip container" aria-label="Benefits">
            <span>Less copy-paste</span><i />
            <span>Faster response times</span><i />
            <span>Fewer handoff gaps</span><i />
            <span>More time for real work</span>
          </div>
        </section>

        <section className="section section-soft" id="automate" aria-labelledby="automate-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-label">WHAT CAN WE AUTOMATE?</p><h2 id="automate-title">The work between your tools.</h2></div>
              <p>From a single frustrating task to a process spanning several systems, we build around the way your business actually works.</p>
            </div>
            <WorkflowCards />
          </div>
        </section>

        <section className="section process-section" id="process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading centered">
              <div><p className="section-label">HOW IT WORKS</p><h2 id="process-title">From manual to handled.</h2></div>
              <p>No transformation theatre. Just a clear path from the work that is slowing you down to an automation your team can rely on.</p>
            </div>
            <ol className="steps">
              {steps.map(([title, text], index) => (
                <li key={title}>
                  <div className="step-marker"><span>{index + 1}</span></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section why-section" aria-labelledby="why-title">
          <div className="container why-grid">
            <div className="why-copy">
              <p className="section-label">WHY OFF MY PLATE</p>
              <h2 id="why-title">AI that actually does the work.</h2>
              <p>Not another chatbot or AI experiment. We integrate AI into the tools and processes your business already uses.</p>
            </div>
            <div className="principles">
              <article><span><Icon name="check" /></span><div><h3>Built for the real process</h3><p>We start with how work moves through your business—not with a prepackaged tool.</p></div></article>
              <article><span><Icon name="check" /></span><div><h3>Connected, not isolated</h3><p>Your automation works across the systems your team already depends on.</p></div></article>
              <article><span><Icon name="check" /></span><div><h3>Focused on the outcome</h3><p>Success means less manual work, fewer errors, and time back for your team.</p></div></article>
            </div>
          </div>
        </section>

        <section className="final-section" id="contact" aria-labelledby="contact-title">
          <div className="container final-panel">
            <div className="final-copy">
              <p className="section-label">START A CONVERSATION</p>
              <h2 id="contact-title">What&apos;s still being done manually in your business?</h2>
              <p>Tell us what keeps landing on your team&apos;s plate. We&apos;ll help you work out what can be automated.</p>
            </div>
            <div className="final-action">
              <CtaLink className="button button-primary" href={contactUrl} location="final_cta">
                Let&apos;s automate it
              </CtaLink>
              <span>Opens your email app · No sales pitch</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-wrap">
          <a className="brand" href="#top" aria-label="Back to top"><LogoMark /><span>Off My Plate</span></a>
          <p>Custom AI workflows for work that shouldn&apos;t be manual.</p>
          <a href="mailto:hello@offmyplate.io">hello@offmyplate.io</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Off My Plate</span><span>AI workflow automation</span></div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
